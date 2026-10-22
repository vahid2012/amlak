import type { Metadata } from 'next';
import { getService } from '@/lib/services';
import { ServicePage, generateServiceMetadata } from '@/components/ServicePage';

export const metadata: Metadata = generateServiceMetadata('buy-factory');

export default function Page() {
  const service = getService('buy-factory')!;
  return <ServicePage service={service} />;
}
