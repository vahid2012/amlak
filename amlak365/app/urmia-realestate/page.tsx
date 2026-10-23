import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'املاک ارومیه | خرید، فروش و اجاره - املاک ۳۶۵',
  description: 'مرجع تخصصی آگهی‌های خرید، فروش، اجاره و رهن مسکن در شهر ارومیه.',
}

export default function UrmiaRealEstatePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">املاک شهر ارومیه</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-3">خرید ملک</h2>
          <ul className="space-y-2 text-blue-600">
            {/* دقت کنید به اسلش (/) در انتهای لینک‌ها */}
            <li><Link href="/urmia-realestate/buy-golshahr/">خرید ملک در گلشهر</Link></li>
            <li><Link href="/urmia-realestate/buy-molavi/">خرید ملک در مولوی</Link></li>
          </ul>
        </div>

        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-3">اجاره ملک</h2>
          <ul className="space-y-2 text-blue-600">
            <li><Link href="/urmia-realestate/rent-golshahr/">اجاره ملک در گلشهر</Link></li>
            <li><Link href="/urmia-realestate/rent-molavi/">اجاره ملک در مولوی</Link></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
