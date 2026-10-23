import type { Metadata } from 'next'

// ۱. این تابع به Next.js می‌گوید موقع بیلد، دقیقاً همین لینک‌هایی که در صفحه اصلی گذاشتیم را بسازد
export function generateStaticParams() {
  return [
    { neighborhood: 'golshahr', transaction: 'buy' },
    { neighborhood: 'molavi', transaction: 'buy' },
    { neighborhood: 'golshahr', transaction: 'rent' },
    { neighborhood: 'molavi', transaction: 'rent' },
  ]
}

// ۲. تولید عنوان و توضیحات سئو برای هر صفحه
export async function generateMetadata({ params }: { params: { neighborhood: string, transaction: string } }): Promise<Metadata> {
  const neighborhood = params.neighborhood;
  const transaction = params.transaction;
  const transactionFa = transaction === 'buy' ? 'خرید' : 'اجاره';
  
  return {
    title: `${transactionFa} ملک در ${neighborhood} ارومیه | املاک ۳۶۵`,
    description: `لیست آگهی‌های ${transactionFa} ملک و آپارتمان در محله ${neighborhood} شهر ارومیه.`,
  }
}

// ۳. نمایش صفحه
export default function NeighborhoodPage({ params }: { params: { neighborhood: string, transaction: string } }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {params.transaction === 'buy' ? 'خرید' : 'اجاره'} ملک در محله {params.neighborhood}
      </h1>
      <p className="text-gray-600">به زودی آگهی‌های این بخش اضافه می‌شوند...</p>
    </main>
  )
}
