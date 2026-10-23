import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'املاک ارومیه | خرید، فروش و اجاره ملک در ارومیه - املاک ۳۶۵',
  description: 'مرجع تخصصی آگهی‌های خرید، فروش، اجاره و رهن مسکن، آپارتمان، زمین و ویلا در شهر ارومیه.',
  alternates: {
    canonical: 'https://amlak365.ir/urmia',
  },
}

export default function UrmiaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">املاک شهر ارومیه</h1>
      <p className="mb-8 text-gray-600">
        به صفحه اختصاصی املاک ارومیه خوش آمدید. برای مشاهده آگهی‌ها، محله یا نوع ملک مورد نظر خود را انتخاب کنید.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* بخش خرید */}
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">خرید ملک در ارومیه</h2>
          <ul className="space-y-2 text-blue-600">
            <li><Link href="/urmia/golshahr/buy">خرید ملک در گلشهر</Link></li>
            <li><Link href="/urmia/molavi/buy">خرید ملک در مولوی</Link></li>
          </ul>
        </div>

        {/* بخش اجاره */}
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">اجاره ملک در ارومیه</h2>
          <ul className="space-y-2 text-blue-600">
            <li><Link href="/urmia/golshahr/rent">اجاره ملک در گلشهر</Link></li>
            <li><Link href="/urmia/molavi/rent">اجاره ملک در مولوی</Link></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
