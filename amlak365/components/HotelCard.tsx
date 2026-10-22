import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import type { Hotel } from '@/lib/hotels';
import { images } from '@/lib/images';

export function HotelCard({ hotel }: { hotel: Hotel }) {
  const img = (images.hotels as Record<string, string>)[hotel.slug] || images.districtDefault;
  return (
    <Link
      href={`/hotel-booking/${hotel.slug}/`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-accent"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={img}
          alt={`${hotel.name} ارومیه — رزرو و معرفی امکانات`}
          width={800}
          height={450}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {hotel.stars && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-bold text-primary-foreground">
            {hotel.stars}
            <Star className="h-3 w-3 fill-accent text-accent" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2">
          {hotel.name}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
          <MapPin className="h-3.5 w-3.5" />
          {hotel.address}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{hotel.shortName}</p>
        <span className="mt-3 text-sm font-medium text-accent">مشاهده و رزرو</span>
      </div>
    </Link>
  );
}
