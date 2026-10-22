import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowLeft } from 'lucide-react';
import type { ServiceMeta } from '@/lib/services';
import { services, getService } from '@/lib/services';
import { site } from '@/lib/site';
import { images } from '@/lib/images';
import { getBlogPost } from '@/lib/blog-posts';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceCard } from '@/components/ServiceCard';

const ymylDisclaimerText =
  '«اطلاعات این صفحه جنبه راهنما دارد و جایگزین مشاوره حقوقی تخصصی نیست. برای معاملات تخصصی، حتماً با وکیل دادگستری و مشاور مالیاتی مشورت کنید.»';

export function ServicePage({ service }: { service: ServiceMeta }) {
  const img = (images.services as Record<string, string>)[service.slug] || images.districtDefault;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'RealEstateAgent',
      name: site.name,
      url: site.domain,
    },
    areaServed: { '@type': 'City', name: 'ارومیه' },
    url: `${site.domain}/${service.slug}/`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'خانه', item: site.domain },
      { '@type': 'ListItem', position: 2, name: service.title, item: `${site.domain}/${service.slug}/` },
    ],
  };

  const related = (service.relatedServices || [])
    .map((s) => getService(s))
    .filter(Boolean) as ServiceMeta[];

  const blogPost = service.relatedBlog ? getBlogPost(service.relatedBlog) : undefined;

  return (
    <div className="container-page py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: service.title }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-4">{service.h1}</h1>
        <p className="text-lg text-muted-foreground mb-6 leading-8">{service.excerpt}</p>

        <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
          <Image
            src={img}
            alt={`${service.title} — املاک ۳۶۵ ارومیه`}
            width={800}
            height={450}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose-fa" dangerouslySetInnerHTML={{ __html: service.body }} />

        {service.ymyl && (
          <div className="mt-6 rounded-lg bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">{ymylDisclaimerText}</p>
          </div>
        )}

        {/* Related services */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-primary mb-6">خدمات مرتبط</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        )}

        {/* Related blog */}
        {blogPost && (
          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-bold text-primary mb-2">مقاله مرتبط</h2>
            <Link
              href={`/blog/${blogPost.slug}/`}
              className="flex items-center gap-2 text-accent hover:underline"
            >
              {blogPost.title}
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-lg bg-primary text-primary-foreground p-8 text-center">
          <p className="mb-4 text-lg">برای مشاوره {service.title} تماس بگیرید</p>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90"
          >
            <Phone className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
        </div>

        <div className="mt-6">
          <Link href="/contact/" className="text-accent hover:underline">
            ← تماس و مشاوره
          </Link>
        </div>
      </article>
    </div>
  );
}

export function generateServiceMetadata(slug: string) {
  const service = getService(slug);
  if (!service) return {};
  return buildMetadataForService(service);
}

function buildMetadataForService(service: ServiceMeta) {
  const url = `${site.domain}/${service.slug}/`;
  const ogImage = (images.services as Record<string, string>)[service.slug] || `${site.domain}/images/og-default.jpg`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: 'website' as const,
      locale: 'fa_IR',
      siteName: site.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: service.metaTitle }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export type { ServiceMeta };
