import type { Metadata } from 'next';
import { getService } from '@/lib/services';
import { ServicePage, generateServiceMetadata } from '@/components/ServicePage';

export const metadata: Metadata = generateServiceMetadata('rent');

export default function Page() {
  const service = getService('rent')!;
  return <ServicePage service={service} />;
}
