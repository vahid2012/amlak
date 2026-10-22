import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/_next/', '/api/'] }],
    sitemap: 'https://www.amlak365.ir/sitemap.xml',
    host: 'https://www.amlak365.ir',
  };
}
