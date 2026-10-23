import Link from 'next/link'

export default function UrmiaPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-[50vh]">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">املاک شهر ارومیه</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-lg shadow-sm bg-white">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">محله‌ها و خیابان‌های محبوب</h2>
          <ul className="space-y-3 text-lg">
            <li><Link href="/urmia-realestate/golshahr/" className="text-blue-600 hover:underline">املاک گلشهر</Link></li>
            <li><Link href="/urmia-realestate/molavi/" className="text-blue-600 hover:underline">املاک مولوی</Link></li>
            <li><Link href="/urmia-realestate/khayyam/" className="text-blue-600 hover:underline">املاک خیابان خیام</Link></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
