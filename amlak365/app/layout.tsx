import './globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import { site } from '@/lib/site';
import { images } from '@/lib/images';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'املاک ۳۶۵ — خرید، فروش و اجاره ملک در ارومیه',
    template: '%s | املاک ۳۶۵',
  },
  description: site.description,
  alternates: { canonical: `${site.domain}/` },
  openGraph: {
    title: 'املاک ۳۶۵ — خرید، فروش و اجاره ملک در ارومیه',
    description: site.description,
    url: `${site.domain}/`,
    type: 'website',
    locale: 'fa_IR',
    siteName: site.name,
    images: [{ url: images.ogDefault, width: 1200, height: 630, alt: 'املاک ۳۶۵ ارومیه' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [images.ogDefault],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.domain,
    telephone: site.phoneTel,
    areaServed: 'ارومیه',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'ارومیه',
      addressCountry: 'IR',
    },
  };
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    telephone: site.phoneTel,
    url: site.domain,
    areaServed: 'ارومیه',
    priceRange: 'تماس بگیرید',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'ارومیه',
      addressCountry: 'IR',
    },
  };

  return (
    <html lang="fa" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={vazirmatn.variable} style={{ fontFamily: 'var(--font-vazirmatn), sans-serif' }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
