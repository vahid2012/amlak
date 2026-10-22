import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '@/lib/blog-posts';
import { images } from '@/lib/images';

export function BlogCard({ post }: { post: BlogPost }) {
  const img = (images.blog as Record<string, string>)[post.slug] || images.districtDefault;
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-accent"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={img}
          alt={post.title}
          width={800}
          height={450}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readingTime}
          </span>
        </div>
        <h3 className="font-bold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{post.excerpt}</p>
        <span className="mt-3 text-sm font-medium text-accent">ادامه مطلب</span>
      </div>
    </Link>
  );
}
