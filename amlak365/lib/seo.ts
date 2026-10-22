import type { Metadata } from 'next';
import { site } from './site';

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = `${site.domain}${path}`;
  const ogImage = image || `${site.domain}/images/og-default.jpg`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      locale: 'fa_IR',
      siteName: site.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data);
}
