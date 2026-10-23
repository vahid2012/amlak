// 🌟 اینجا لیست خیابان‌ها و محله‌های شماست. هر چقدر بخواهید می‌توانید به این لیست اضافه کنید.
// فقط دقت کنید که نام داخل لینک (قدم دوم) با نام اینجا یکی باشد.
export function generateStaticParams() {
  return [
    { slug: 'golshahr' },
    { slug: 'molavi' },
    { slug: 'bakery' },
    { slug: 'shahrak-issar' },
    { slug: 'amin' },
  ]
}

export default function NeighborhoodPage({ params }: { params: { slug: string } }) {
  return (
    <main style={{ padding: '20px' }}>
      <h1>صفحه املاک محله: {params.slug}</h1>
      <p>آگهی‌های این محله به زودی قرار می‌گیرند...</p>
    </main>
  )
}
