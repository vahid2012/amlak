import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.amlak365.ir';

  // لیست صفحات اصلی شما (نام فایل‌های داخل پوشه app)
  const routes = [
    '', // صفحه اصلی املاک ارومیه
    '/buy-hotel/',
    '/sell/',
    '/rent/',
    '/contact/',
    '/districts/',
    '/blog/',
    // اگر صفحه دیگه‌ای داری، اسمش رو با اسلش اینجا اضافه کن
  ];

  return routes.map((route) => ({
    url: `${baseUrl}/urmia-realestate${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
