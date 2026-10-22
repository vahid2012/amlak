import type { Metadata } from 'next';
import { hotels } from '@/lib/hotels';
import { getService } from '@/lib/services';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import { images } from '@/lib/images';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { HotelCard } from '@/components/HotelCard';
import { Phone } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  title: 'رزرو هتل در ارومیه | هتل‌های آنا، دیاکو، جهانگردی | املاک ۳۶۵',
  description:
    'رزرو هتل‌های ارومیه با بهترین قیمت. معرفی و رزرو هتل آنا، دیاکو، جهانگردی، مروارید و تورال با مشاوره املاک ۳۶۵.',
  path: '/hotel-booking/',
  image: (images.services as Record<string, string>)['hotel-booking'],
});

export default function HotelBookingHubPage() {
  const service = getService('hotel-booking');

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service?.title || 'رزرو هتل در ارومیه',
    description: service?.metaDescription || '',
    provider: { '@type': 'RealEstateAgent', name: site.name, url: site.domain },
    areaServed: { '@type': 'City', name: 'ارومیه' },
    url: `${site.domain}/hotel-booking/`,
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: hotels.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: h.name,
      url: `${site.domain}/hotel-booking/${h.slug}/`,
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'خانه', item: site.domain },
      { '@type': 'ListItem', position: 2, name: 'رزرو هتل', item: `${site.domain}/hotel-booking/` },
    ],
  };

  return (
    <div className="container-page py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: 'رزرو هتل' }]} />

      <article className="max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-4">رزرو هتل در ارومیه</h1>
        <p className="text-lg text-muted-foreground mb-6 leading-8">{service?.excerpt}</p>

        {service && (
          <div className="prose-fa mb-8" dangerouslySetInnerHTML={{ __html: service.body }} />
        )}
      </article>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {hotels.map((h) => (
          <HotelCard key={h.slug} hotel={h} />
        ))}
      </div>

      <div className="rounded-lg bg-primary text-primary-foreground p-8 text-center">
        <p className="mb-4 text-lg">برای مشاوره رزرو هتل تماس بگیرید</p>
        <a
          href={`tel:${site.phoneTel}`}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90"
        >
          <Phone className="h-5 w-5" />
          {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
