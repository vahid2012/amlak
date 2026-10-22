import type { Metadata } from 'next';
import { getService } from '@/lib/services';
import { ServicePage, generateServiceMetadata } from '@/components/ServicePage';

export const metadata: Metadata = generateServiceMetadata('buy-hotel');

export default function Page() {
  const service = getService('buy-hotel')!;
  return <ServicePage service={service} />;
}
