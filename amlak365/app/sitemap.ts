import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // آدرس پایه سایت شما (با پیشوند جدید)
  const baseUrl = 'https://www.amlak365.ir/urmia-realestate';

  // ۱. تمام صفحات ثابت سایت (بر اساس پوشه‌هایی که در گیت‌هاب دیدم)
  const staticRoutes = [
    '', // صفحه اصلی املاک
    '/buy-hotel/',
    '/sell/',
    '/rent/',
    '/contact/',
    '/districts/',
    '/blog/',
    '/villa-garden/',
    '/meeting-hall/',
    '/hotel-booking/',
    '/exchange/',
    '/property-management/',
    '/construction-partnership/',
    '/about/',
    // هر پوشه جدیدی که در app ساختی، اسمش رو اینجا با اسلش اضافه کن
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // ۲. صفحات محله‌ها و خیابان‌ها (لیست فعلی شما)
  // اگر این لیست را جای دیگری در پروژه دارید، می‌توانید آن را Import کنید
  const neighborhoods = ['molavi', 'golshahr', 'bakery', 'khayyam', 'amin'];
  const neighborhoodRoutes = neighborhoods.map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // ۳. ⚠️ صفحات آگهی‌ها (دیتابیس)
  // برای اینکه آگهی‌های شما هم ایندکس شوند، باید آن‌ها را از دیتابیس یا API بگیرید.
  // کد زیر یک مثال است. باید آن را با تابع دیتابیس خودتان جایگزین کنید:
  /*
  let propertyRoutes = [];
  try {
    // مثال: دریافت لیست آگهی‌ها از API یا دیتابیس
    const res = await fetch('https://api.yourdomain.com/properties');
    const properties = await res.json();
    
    propertyRoutes = properties.map((prop: any) => ({
      url: `${baseUrl}/property/${prop.slug}/`, // آدرس صفحه هر آگهی
      lastModified: new Date(prop.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('خطا در دریافت آگهی‌ها برای سایت‌مپ:', error);
  }
  */

  // در نهایت همه را با هم برمی‌گردانیم
  return [
    ...staticRoutes,
    ...neighborhoodRoutes,
    // ...propertyRoutes, // این خط را وقتی کد دیتابیس را باز کردید، از کامنت درآورید
  ];
}
