import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Phone, MapPin, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { districts, getDistrict } from '@/lib/districts';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DistrictCard } from '@/components/DistrictCard';

export const dynamicParams = false;

export function generateStaticParams() {
  return districts.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = getDistrict(params.slug);
  if (!d) return {};
  return buildMetadata({
    title: d.metaTitle,
    description: d.metaDescription,
    path: `/districts/${d.slug}/`,
    image: d.image,
  });
}

export default function DistrictPage({ params }: { params: { slug: string } }) {
  const district = getDistrict(params.slug);
  if (!district) notFound();

  const nearby = district.nearbySlugs
    .map((s) => getDistrict(s))
    .filter(Boolean) as typeof districts;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'خانه', item: site.domain },
      { '@type': 'ListItem', position: 2, name: 'مناطق', item: `${site.domain}/districts/` },
      { '@type': 'ListItem', position: 3, name: district.name, item: `${site.domain}/districts/${district.slug}/` },
    ],
  };

  return (
    <div className="container-page py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: 'خانه', href: '/' },
          { label: 'مناطق', href: '/districts/' },
          { label: district.name },
        ]}
      />
      <article>
        <h1 className="text-3xl font-bold text-primary mb-3">{district.h1}</h1>
        <p className="text-muted-foreground mb-6 leading-8">{district.intro}</p>

        <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
          <Image
            src={district.image}
            alt={`نمای آپارتمان‌ها و ساختمان‌های ${district.name} ارومیه — املاک ۳۶۵`}
            width={800}
            height={450}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose-fa max-w-3xl" dangerouslySetInnerHTML={{ __html: district.body }} />

        {/* Highlights */}
        <div className="mt-8 flex flex-wrap gap-2">
          {district.highlights.map((h, i) => (
            <span
              key={i}
              className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-sm text-foreground"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Internal links */}
        <div className="mt-10 rounded-lg bg-muted/30 p-6">
          <h2 className="text-lg font-bold text-primary mb-4">خدمات مرتبط</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/buy/" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">خرید ملک</Link>
            <Link href="/sell/" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">فروش ملک</Link>
            <Link href="/rent/" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">اجاره ملک</Link>
            <Link href="/contact/" className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted">مشاوره</Link>
          </div>
        </div>

        {/* Nearby districts */}
        {nearby.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-primary mb-6">مناطق نزدیک</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nearby.map((d) => (
                <DistrictCard key={d.slug} district={d} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 rounded-lg bg-primary text-primary-foreground p-8 text-center">
          <p className="mb-4 text-lg">برای مشاوره خرید یا اجاره در {district.name} تماس بگیرید</p>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90"
          >
            <Phone className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
        </div>
      </article>
    </div>
  );
}
