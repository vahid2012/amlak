import Link from 'next/link';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { site, footerDistrictSlugs } from '@/lib/site';
import { services } from '@/lib/services';
import { blogPosts } from '@/lib/blog-posts';
import { districts } from '@/lib/districts';

export function Footer() {
  const footerDistricts = footerDistrictSlugs
    .map((slug) => districts.find((d) => d.slug === slug))
    .filter(Boolean) as { slug: string; name: string }[];
  const latestBlogs = blogPosts.slice(0, 4);

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-accent">خدمات</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Districts */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-accent">مناطق پرتقاضا</h3>
            <ul className="space-y-2">
              {footerDistricts.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/districts/${d.slug}/`}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-accent">وبلاگ</h3>
            <ul className="space-y-2">
              {latestBlogs.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}/`}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-accent">تماس</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  واتساپ
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 shrink-0" />
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            © ۱۴۰۵ املاک ۳۶۵ — تمامی حقوق محفوظ است
          </p>
          <Link
            href="/sitemap.xml"
            className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
          >
            نقشه سایت
          </Link>
        </div>
      </div>
    </footer>
  );
}
