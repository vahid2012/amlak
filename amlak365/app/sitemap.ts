import { MetadataRoute } from 'next';
import { districts } from '@/lib/districts';
import { hotels } from '@/lib/hotels';
import { blogPosts } from '@/lib/blog-posts';

// برای خروجی استاتیک در ورسل حیاتی است
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.amlak365.ir';
  const now = new Date().toISOString();

  // ۱. صفحات استاتیک اصلی (سرویس‌ها و منوها)
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${base}/buy/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/sell/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/rent/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/buy-hotel/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/buy-factory/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/exchange/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/construction-partnership/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/villa-garden/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/property-management/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/hotel-booking/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/meeting-hall/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/celebration-venue/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/urmia/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 }, // صفحه اصلی شهر ارومیه
    { url: `${base}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  // ۲. صفحات محله‌ها (Root District Pages)
  // آدرس پیشنهادی: amlak365.ir/urmia/golshahr/
  const districtPages: MetadataRoute.Sitemap = districts.map((d) => ({
    url: `${base}/urmia/${d.slug}/`, // تغییر از /districts/ به /urmia/ برای سئوی بهتر
    lastModified: now,
    changeFrequency: d.tier === 'A' ? 'weekly' : 'monthly',
    priority: d.tier === 'A' ? 0.9 : 0.8,
  }));

  // ۳. صفحات ترکیبی سیلو (محله + نوع معامله)
  // آدرس پیشنهادی: amlak365.ir/urmia/golshahr/buy/
  // این بخش به گوگل می‌گوید دقیقا کدام خدمات در کدام محله ارائه می‌شود
  const transactionTypes = ['buy', 'sell', 'rent']; 
  const siloPages: MetadataRoute.Sitemap = [];

  districts.forEach((d) => {
    transactionTypes.forEach((t) => {
      siloPages.push({
        url: `${base}/urmia/${d.slug}/${t}/`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8, // اولویت بالا برای کلمات کلیدی محلی
      });
    });
  });

  // ۴. صفحات هتل‌ها
  const hotelPages: MetadataRoute.Sitemap = hotels.map((h) => ({
    url: `${base}/hotel-booking/${h.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // ۵. مقالات بلاگ
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // ادغام همه بخش‌ها
  return [
    ...staticPages, 
    ...districtPages, 
    ...siloPages, // اضافه شدن صفحات ترکیبی
    ...hotelPages, 
    ...blogPages
  ];
}
