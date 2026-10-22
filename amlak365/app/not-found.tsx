import Link from 'next/link';
import { Home, Phone } from 'lucide-react';
import { site } from '@/lib/site';

export default function NotFound() {
  return (
    <div className="container-page py-20 text-center">
      <h1 className="text-6xl font-extrabold text-primary mb-4">۴۰۴</h1>
      <p className="text-xl text-muted-foreground mb-8">
        صفحه مورد نظر یافت نشد. ممکن است آدرس تغییر کرده باشد.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Home className="h-4 w-4" />
          بازگشت به خانه
        </Link>
        <a
          href={`tel:${site.phoneTel}`}
          className="flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
        >
          <Phone className="h-4 w-4" />
          {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
