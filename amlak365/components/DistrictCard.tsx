import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import type { District } from '@/lib/districts';

export function DistrictCard({ district }: { district: District }) {
  return (
    <Link
      href={`/districts/${district.slug}/`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-accent"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={district.image}
          alt={`نمای آپارتمان‌ها و ساختمان‌های ${district.name} ارومیه — املاک ۳۶۵`}
          width={800}
          height={450}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
          <MapPin className="h-3.5 w-3.5" />
          {district.fullName}
        </div>
        <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2">
          {district.h1}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{district.intro}</p>
        <span className="mt-3 text-sm font-medium text-accent">مشاهده جزئیات</span>
      </div>
    </Link>
  );
}
