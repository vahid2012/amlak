import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { site } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'تماس با املاک ۳۶۵ ارومیه',
  description:
    'برای مشاوره خرید، فروش و اجاره ملک در ارومیه با املاک ۳۶۵ تماس بگیرید. تلفن و واتساپ در دسترس.',
  path: '/contact/',
});

export default function ContactPage() {
  const agentJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: site.name,
    telephone: site.phoneTel,
    url: `${site.domain}/contact/`,
    areaServed: 'ارومیه',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'ارومیه',
      addressCountry: 'IR',
    },
  };

  return (
    <div className="container-page py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentJsonLd) }}
      />
      <Breadcrumbs items={[{ label: 'خانه', href: '/' }, { label: 'تماس' }]} />
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-primary mb-6">تماس با املاک ۳۶۵</h1>
        <p className="text-muted-foreground mb-8 leading-8">
          برای مشاوره رایگان درباره خرید، فروش، اجاره و سرمایه‌گذاری ملک در ارومیه با ما در تماس باشید. کارشناسان ما آماده پاسخ‌گویی به سوالات شما هستند.
        </p>

        <div className="space-y-4">
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-sm transition-all hover:border-accent hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">تلفن تماس</div>
              <div className="text-lg font-bold text-foreground">{site.phoneDisplay}</div>
            </div>
          </a>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-sm transition-all hover:border-accent hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">واتساپ</div>
              <div className="text-lg font-bold text-foreground">{site.phoneDisplay}</div>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">آدرس</div>
              <div className="text-lg font-bold text-foreground">{site.address}</div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-accent/10 border border-accent/20 p-6">
          <p className="text-sm text-foreground leading-7">
            ساعت کاری: شنبه تا پنجشنبه، ۹ صبح تا ۸ شب. در روزهای تعطیل نیز از طریق واتساپ قابل دسترسی هستیم.
          </p>
        </div>
      </div>
    </div>
  );
}
