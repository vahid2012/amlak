import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="مسیر" className="mb-6">
      <ol className="flex items-center gap-1 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {item.href ? (
              <Link href={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <ChevronLeft className="h-3 w-3 text-muted-foreground" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
