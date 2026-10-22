import type { Metadata } from 'next';
import { districts } from '@/lib/districts';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DistrictCard } from '@/components/DistrictCard';

export const metadata: Metadata = buildMetadata({
  title: 'مناطق ارومیه — محله‌های شهری و حومه | املاک ۳۶۵',
  description:
    'فهرست ۳۱ منطقه ارومیه با اطلاعات خرید، فروش و اجاره ملک در هر محله. املاک ۳۶۵ معتبرترین مرجع املاک ارومیه.',
  path: '/districts/',
});

export default function DistrictsIndexPage() {
  const tierA = districts.filter((d) => d.tier === 'A');
  const tierB = districts.filter((d) => d.tier === 'B');

  return (
    <div className="container-page py-12">
      <Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: 'مناطق ارومیه' }]} />

      <header className="max-w-3xl mb-10">
        <h1 className="text-3xl font-bold text-primary mb-4">مناطق ارومیه</h1>
        <p className="text-muted-foreground leading-8">
          ارومیه شهر بزرگی با محله‌های متنوع است. در این صفحه ۳۱ منطقه مهم ارومیه را معرفی
          کرده‌ایم تا خریدار، فروشنده و مستأجر بتواند با ویژگی هر محله آشنا شود و بهترین
          تصمیم را بگیرد. روی هر منطقه کلیک کنید تا اطلاعات کامل قیمت، موقعیت و امکانات
          آن را ببینید.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-primary mb-6">مناطق اصلی</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tierA.map((d) => (
            <DistrictCard key={d.slug} district={d} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-primary mb-6">سایر مناطق</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tierB.map((d) => (
            <DistrictCard key={d.slug} district={d} />
          ))}
        </div>
      </section>
    </div>
  );
}
