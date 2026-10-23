import type { Metadata } from 'next'

// این تابع باعث می‌شود عنوان صفحه در گوگل برای هر محله و معامله متفاوت باشد
export async function generateMetadata({ params }: { params: { neighborhood: string, transaction: string } }): Promise<Metadata> {
  // پارامترها را از URL می‌خوانیم
  const neighborhood = params.neighborhood;
  const transaction = params.transaction;

  const transactionFa = transaction === 'buy' ? 'خرید' : 'اجاره';
  
  return {
    title: `${transactionFa} ملک در ${neighborhood} ارومیه | املاک ۳۶۵`,
    description: `لیست آگهی‌های ${transactionFa} ملک و آپارتمان در محله ${neighborhood} شهر ارومیه.`,
  }
}

export default function NeighborhoodPage({ params }: { params: { neighborhood: string, transaction: string } }) {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* اینجا می‌توانید از دیتابیس آگهی‌های مربوط به این محله را بگیرید */}
      <h1 className="text-3xl font-bold mb-6">
        {params.transaction === 'buy' ? 'خرید' : 'اجاره'} ملک در {params.neighborhood}
      </h1>
      <p>در حال بارگذاری آگهی‌ها...</p>
    </main>
  )
}
