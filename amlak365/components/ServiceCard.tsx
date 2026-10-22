import Link from 'next/link';
import Image from 'next/image';
import type { ServiceMeta } from '@/lib/services';
import { images } from '@/lib/images';

export function ServiceCard({ service }: { service: ServiceMeta }) {
  const img = (images.services as Record<string, string>)[service.slug] || images.districtDefault;
  return (
    <Link
      href={`/${service.slug}/`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-accent"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={img}
          alt={`${service.title} ارومیه`}
          width={800}
          height={450}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2">
          {service.h1}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{service.excerpt}</p>
        <span className="mt-3 text-sm font-medium text-accent">اطلاعات بیشتر</span>
      </div>
    </Link>
  );
}
