import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Phone, MapPin, Star } from 'lucide-react';
import type { Metadata } from 'next';
import { hotels, getHotel } from '@/lib/hotels';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import { images } from '@/lib/images';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const dynamicParams = false;

export function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const h = getHotel(params.slug);
  if (!h) return {};
  return buildMetadata({
    title: h.metaTitle,
    description: h.metaDescription,
    path: `/hotel-booking/${h.slug}/`,
    image: (images.hotels as Record<string, string>)[h.slug],
  });
}

export default function HotelPage({ params }: { params: { slug: string } }) {
  const hotel = getHotel(params.slug);
  if (!hotel) notFound();

  const img = (images.hotels as Record<string, string>)[hotel.slug];

  const hotelJsonLd = hotel.stars
    ? {
        '@context': 'https://schema.org',
        '@type': 'Hotel',
        name: hotel.name,
        address: hotel.address,
        starRating: { '@type': 'Rating', ratingValue: String(hotel.stars) },
        url: `${site.domain}/hotel-booking/${hotel.slug}/`,
      }
    : null;

  return (
    <div className="container-page py-12">
      {hotelJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
      )}
      <Breadcrumbs
        items={[
          { label: 'خانه', href: '/' },
          { label: 'رزرو هتل', href: '/hotel-booking/' },
          { label: hotel.shortName },
        ]}
      />
      <article className="max-w-3xl">
        <div className="flex items-center gap-2 mb-3">
          <h1 className="text-3xl font-bold text-primary">{hotel.name}</h1>
          {hotel.stars && (
            <div className="flex items-center gap-0.5">
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-muted-foreground mb-6">
          <MapPin className="h-4 w-4" />
          {hotel.address}
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
          <Image
            src={img}
            alt={`${hotel.name} ارومیه — رزرو و معرفی امکانات`}
            width={800}
            height={450}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          تصویر نمایشی است. برای مشاهده عکس‌های واقعی هتل، با ما تماس بگیرید.
        </p>

        <div className="prose-fa" dangerouslySetInnerHTML={{ __html: `<p>${hotel.description}</p>` }} />

        {/* Amenities */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-primary mb-4">امکانات</h2>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.map((a, i) => (
              <span
                key={i}
                className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1.5 text-sm text-foreground"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {!hotel.stars && (
          <div className="mt-6 rounded-lg bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">
              برای اطلاع از ستاره و امکانات دقیق، با ما تماس بگیرید.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-lg bg-primary text-primary-foreground p-8 text-center">
          <p className="mb-4 text-lg">برای رزرو {hotel.shortName} تماس بگیرید</p>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90"
          >
            <Phone className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
        </div>

        <div className="mt-6">
          <Link href="/hotel-booking/" className="text-accent hover:underline">
            ← بازگشت به همه هتل‌ها
          </Link>
        </div>
      </article>
    </div>
  );
}
