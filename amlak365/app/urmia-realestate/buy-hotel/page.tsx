import type { Metadata } from 'next';
import { getService } from '@/lib/services';
import { ServicePage, generateServiceMetadata } from '@/components/ServicePage';

export const metadata: Metadata = generateServiceMetadata('buy-hotel');

export default function Page() {
  const service = getService('buy-hotel');
  
  // 🌟 این خط جدید مشکل تایپ‌اسکریپت رو حل می‌کنه
  if (!service) {
    return <div className="p-10 text-center">صفحه مورد نظر یافت نشد.</div>;
  }

  return <ServicePage service={service} />;
}
