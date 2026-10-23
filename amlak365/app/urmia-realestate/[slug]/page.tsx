import type { Metadata } from 'next'

// 🌟 این لیست مرکزی شماست. هر خیابان یا محله‌ای که می‌خواهید، فقط یک خط به اینجا اضافه کنید.
// (همیشه از حروف انگلیسی و خط تیره برای اسلاگ استفاده کنید تا سئو بهتر باشد)
const ALL_PAGES = [
  { slug: 'buy-golshahr', title: 'خرید ملک در گلشهر', description: 'لیست آگهی‌های خرید ملک در گلشهر ارومیه' },
  { slug: 'rent-golshahr', title: 'اجاره ملک در گلشهر', description: 'لیست آگهی‌های اجاره ملک در گلشهر ارومیه' },
  { slug: 'buy-molavi', title: 'خرید ملک در مولوی', description: 'لیست آگهی‌های خرید ملک در مولوی ارومیه' },
  { slug: 'rent-molavi', title: 'اجاره ملک در مولوی', description: 'لیست آگهی‌های اجاره ملک در مولوی ارومیه' },
  { slug: 'buy-bakery', title: 'خرید ملک در باکری', description: 'لیست آگهی‌های خرید ملک در خیابان باکری ارومیه' },
  // 👇 خیابان‌های دیگر را همین‌جا اضافه کنید (مثلاً ۱۰۰ مورد)
]

// ۱. این تابع به صورت خودکار تمام صفحات بالا را موقع بیلد (Build) می‌سازد
export async function generateStaticParams() {
  return ALL_PAGES.map((page) => ({
    slug: page.slug,
  }))
}

// ۲. تولید عنوان و توضیحات سئو برای هر خیابان به صورت خودکار
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pageData = ALL_PAGES.find((p) => p.slug === params.slug)
  
  return {
    title: pageData ? `${pageData.title} | املاک ۳۶۵` : 'صفحه یافت نشد',
    description: pageData ? pageData.description : '',
    alternates: {
      canonical: `https://amlak365.ir/urmia-realestate/${params.slug}/`,
    },
  }
}

// ۳. نمایش صفحه به کاربر
export default function PropertyPage({ params }: { params: { slug: string } }) {
  const pageData = ALL_PAGES.find((p) => p.slug === params.slug)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {pageData ? pageData.title : params.slug}
      </h1>
      <p className="text-gray-600">آگهی‌های این بخش به زودی اضافه می‌شوند...</p>
      {/* اینجا می‌توانید کدهای مربوط به نمایش لیست آگهی‌ها را قرار دهید */}
    </main>
  )
}
