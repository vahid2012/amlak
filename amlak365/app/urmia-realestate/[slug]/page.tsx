import Link from 'next/link'

// 🌟 لیست تمام خیابان‌ها و محله‌های شما اینجاست. 
// فقط کافیه اسم انگلیسی خیابان رو با خط تیره اینجا بنویسید. بقیه کارها خودکاره!
const ALL_STREETS = [
  'golshahr',
  'molavi',
  'khayyam',
  'bakery',
  'shahrak-issar',
  'amin',
  // 👇 هر خیابان جدیدی خواستید، فقط اسمش رو اینجا اضافه کنید
];

// این تابع به Next.js میگه برای تمام لیست بالا، صفحه بساز
export function generateStaticParams() {
  return ALL_STREETS.map((slug) => ({
    slug: slug,
  }));
}

// نمایش صفحه هر خیابان
export default function StreetPage({ params }: { params: { slug: string } }) {
  return (
    <main className="container mx-auto px-4 py-12 min-h-[50vh]">
      <div className="mb-6">
        <Link href="/urmia-realestate/" className="text-blue-600 hover:underline">← بازگشت به املاک ارومیه</Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">
        املاک خیابان {params.slug}
      </h1>
      <p className="text-gray-600 text-lg">
        لیست آگهی‌های خرید، فروش و اجاره در این خیابان به زودی اینجا قرار می‌گیرد...
      </p>
    </main>
  )
}
