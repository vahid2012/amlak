import { MetadataRoute } from 'next';
import { districts } from '@/lib/districts';
import { hotels } from '@/lib/hotels';
import { blogPosts } from '@/lib/blog-posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.amlak365.ir';
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/buy/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/sell/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/rent/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/buy-hotel/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/buy-factory/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/exchange/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/construction-partnership/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/villa-garden/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/property-management/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/hotel-booking/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/meeting-hall/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/celebration-venue/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/districts/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const districtPages: MetadataRoute.Sitemap = districts.map((d) => ({
    url: `${base}/districts/${d.slug}/`,
    lastModified: now,
    changeFrequency: d.tier === 'A' ? 'weekly' : 'monthly',
    priority: d.tier === 'A' ? 0.8 : 0.7,
  }));

  const hotelPages: MetadataRoute.Sitemap = hotels.map((h) => ({
    url: `${base}/hotel-booking/${h.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...districtPages, ...hotelPages, ...blogPages];
}
