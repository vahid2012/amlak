// لیست صفحاتی که می‌خواهید از قبل ساخته شوند (برای سرعت بالا)
const ALL_PAGES = [
  'molavi',
  'golshahr',
  'bakery',
  'shahrak-issar',
  'amin',
  'khayyam',
];

// 🌟 این خط جادویی به Next.js می‌گوید: 
// اگر صفحه‌ای در لیست بالا نبود، آن را 404 نکن! بلکه همان لحظه بساز.
export const dynamicParams = true;

// این تابع به Next.js می‌گوید این صفحات را موقع بیلد بساز
export function generateStaticParams() {
  return ALL_PAGES.map((slug) => ({
    slug: slug,
  }));
}

// تابع صفحه (سازگار با Next.js 15)
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const pageName = resolvedParams.slug;

  // در اینجا اگر دیتابیس دارید، دیتای صفحه را بگیرید
  // const data = await fetch(`.../${pageName}`);

  return (
    <div style={{ padding: '40px', direction: 'rtl', minHeight: '80vh', color: 'black' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        املاک {pageName}
      </h1>
      <p>لیست آگهی‌های این منطقه به زودی در این صفحه قرار می‌گیرد.</p>
    </div>
  );
}
