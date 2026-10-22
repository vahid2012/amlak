import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-posts';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BlogCard } from '@/components/BlogCard';

export const metadata: Metadata = buildMetadata({
  title: 'وبلاگ املاک ۳۶۵ — راهنمای املاک ارومیه | املاک ۳۶۵',
  description:
    'مقالات تخصصی املاک ارومیه: راهنمای خرید، فروش و اجاره، تحلیل قیمت، سرمایه‌گذاری در هتل و ویلا.',
  path: '/blog/',
});

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="container-page py-12">
      <Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: 'وبلاگ' }]} />

      <header className="max-w-3xl mb-10">
        <h1 className="text-3xl font-bold text-primary mb-4">وبلاگ املاک ۳۶۵</h1>
        <p className="text-muted-foreground leading-8">
          مقالات تخصصی املاک ارومیه برای خریداران، فروشندگان و مستأجران. راهنمای خرید
          آپارتمان، تحلیل قیمت مسکن، سرمایه‌گذاری در هتل و ویلا، و راهنمای محله‌های
          ارومیه.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
