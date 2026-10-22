import type { Metadata } from 'next';
import { getService } from '@/lib/services';
import { ServicePage, generateServiceMetadata } from '@/components/ServicePage';

export const metadata: Metadata = generateServiceMetadata('property-management');

export default function Page() {
  const service = getService('property-management')!;
  return <ServicePage service={service} />;
}
