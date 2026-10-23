import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.amlak365.ir/urmia-realestate';

  // ۱. صفحات ثابت (همون ۷ صفحه اصلی)
  const staticRoutes = [
    '', 
    '/buy-hotel/',
    '/sell/',
    '/rent/',
    '/contact/',
    '/districts/',
    '/blog/',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // ۲. صفحات محله‌ها (همون لیستی که توی [slug] ساختیم)
  // اینها همون ۵ محله‌ای هستند که تو کد گذاشتیم
  const neighborhoods = ['molavi', 'golshahr', 'bakery', 'khayyam', 'amin'];
  const neighborhoodRoutes = neighborhoods.map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // ۳. صفحات آگهی‌ها (اگر دیتابیس داری)
  // اگر آگهی‌هات توی دیتابیس (مثل Supabase یا MongoDB) هست، باید اینجا اونها رو Fetch کنی.
  // من یک مثال ساده می‌زنم (فرض کن این لیست از دیتابیس میاد):
  /*
  const properties = await getPropertiesFromDatabase();
  const propertyRoutes = properties.map((property) => ({
    url: `${baseUrl}/property/${property.slug}/`,
    lastModified: property.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  */

  // حالا همه رو با هم برمی‌گردونیم
  return [
    ...staticRoutes,
    ...neighborhoodRoutes,
    // ...propertyRoutes, // این خط رو وقتی دیتابیس رو وصل کردی از کامنت دربیار
  ];
}
