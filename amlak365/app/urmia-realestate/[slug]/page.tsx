// 🌟 این لیست جادویی شماست. 
// هر اسمی که اینجا بنویسید، سایت به صورت خودکار صفحه آن را می‌سازد!
const ALL_PAGES = [
  'molavi',
  'golshahr',
  'bakery',
  'shahrak-issar',
  'amin',
  'khayyam',
  // 👇 اسم خیابان‌های دیگر را اینجا اضافه کنید
];

// این به Next.js می‌گوید تمام این صفحات را موقع بیلد بساز
export function generateStaticParams() {
  return ALL_PAGES.map((slug) => ({
    slug: slug,
  }));
}

// این تابع صفحه را نشان می‌دهد (کد اصلاح شده برای Next.js 15)
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const pageName = resolvedParams.slug;

  return (
    <div style={{ padding: '40px', direction: 'rtl', minHeight: '80vh', color: 'black' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        املاک {pageName}
      </h1>
      <p>لیست آگهی‌های این منطقه به زودی در این صفحه قرار می‌گیرد.</p>
    </div>
  );
}
