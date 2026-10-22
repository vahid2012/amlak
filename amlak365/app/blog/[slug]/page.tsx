import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Phone, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { blogPosts, getBlogPost } from '@/lib/blog-posts';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import { images } from '@/lib/images';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getBlogPost(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: p.metaTitle,
    description: p.metaDescription,
    path: `/blog/${p.slug}/`,
    image: (images.blog as Record<string, string>)[p.slug],
    type: 'article',
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const img = (images.blog as Record<string, string>)[post.slug];

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name },
    url: `${site.domain}/blog/${post.slug}/`,
  };

  const faqJsonLd = post.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <div className="container-page py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Breadcrumbs
        items={[
          { label: 'خانه', href: '/' },
          { label: 'وبلاگ', href: '/blog/' },
          { label: post.title },
        ]}
      />
      <article className="max-w-3xl">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-primary mb-4">{post.title}</h1>
        <p className="text-lg text-muted-foreground mb-6 leading-8">{post.excerpt}</p>

        <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
          <Image
            src={img}
            alt={post.title}
            width={800}
            height={450}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose-fa" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* FAQ */}
        {post.faq && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-primary mb-6">سوالات متداول</h2>
            <div className="space-y-4">
              {post.faq.map((f, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-bold text-foreground mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-7">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-lg bg-primary text-primary-foreground p-8 text-center">
          <p className="mb-4 text-lg">برای مشاوره با املاک ۳۶۵ تماس بگیرید</p>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90"
          >
            <Phone className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
        </div>

        <div className="mt-6">
          <Link href="/blog/" className="text-accent hover:underline">
            ← بازگشت به وبلاگ
          </Link>
        </div>
      </article>
    </div>
  );
}
