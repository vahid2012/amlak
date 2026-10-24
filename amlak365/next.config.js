/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // این خط مشکل اسلش گوگل را حل می‌کند
  async redirects() {
    return [
      // اگر مسیری تغییر کرده، اینجا ریدایرکت 308 بذار
      {
        source: '/urmia-realestate/:slug',
        destination: '/urmia-realestate/:slug/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
