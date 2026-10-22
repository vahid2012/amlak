import type { Metadata } from 'next';
import { getService } from '@/lib/services';
import { ServicePage, generateServiceMetadata } from '@/components/ServicePage';

export const metadata: Metadata = generateServiceMetadata('sell');

export default function Page() {
  const service = getService('sell')!;
  return <ServicePage service={service} />;
}
