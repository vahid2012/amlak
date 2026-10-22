import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Building2, Hotel, Factory, TrendingUp, ArrowLeft } from 'lucide-react';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { districts } from '@/lib/districts';
import { blogPosts } from '@/lib/blog-posts';
import { images } from '@/lib/images';
import { DistrictCard } from '@/components/DistrictCard';
import { ServiceCard } from '@/components/ServiceCard';
import { BlogCard } from '@/components/BlogCard';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'املاک ۳۶۵ — خرید، فروش و اجاره ملک در ارومیه',
  description:
    'املاک ۳۶۵ ارومیه: خرید، فروش و اجاره آپارتمان، ویلا، هتل و کارخانه. رزرو هتل و سالن اجتماعات. مشاوره تخصصی ملک در ارومیه.',
  path: '/',
  image: images.ogDefault,
});

export default function Home() {
  const featuredDistricts = districts.filter((d) => d.tier === 'A').slice(0, 8);
  const latestBlogs = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={images.hero}
            alt="خرید و فروش ملک در ارومیه — املاک ۳۶۵"
            width={1600}
            height={900}
            priority
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="container-page relative py-20 sm:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              خرید، فروش و اجاره ملک در ارومیه
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-8">
              املاک ۳۶۵ با سال‌ها تجربه در بازار ملک ارومیه، شما را در خرید، فروش، اجاره و سرمایه‌گذاری ملک همراهی می‌کند. از آپارتمان و ویلا تا هتل و کارخانه.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-bold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
              <Link
                href="/contact/"
                className="flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-base font-medium transition-colors hover:bg-white/10"
              >
                مشاوره رایگان
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">خدمات املاک ۳۶۵</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            از خرید و فروش ملک مسکونی تا سرمایه‌گذاری در هتل، کارخانه و رزرو اقامتگاه — همه در یکجا.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* Districts */}
      <section className="bg-muted/30 py-16">
        <div className="container-page">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">مناطق پرتقاضای ارومیه</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              با محله‌های اصلی ارومیه آشنا شوید و بهترین موقعیت برای خرید یا اجاره را انتخاب کنید.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDistricts.map((d) => (
              <DistrictCard key={d.slug} district={d} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/districts/"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
            >
              مشاهده همه ۳۱ منطقه
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="container-page py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">آخرین مقالات</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            راهنماهای تخصصی خرید، فروش و سرمایه‌گذاری ملک در ارومیه.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogs.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">برای مشاوره رایگان تماس بگیرید</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            کارشناسان املاک ۳۶۵ آماده پاسخ‌گویی به سوالات شما درباره خرید، فروش و اجاره ملک در ارومیه هستند.
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3.5 text-lg font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
