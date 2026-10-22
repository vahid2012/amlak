import type { Metadata } from 'next';
import { getService } from '@/lib/services';
import { ServicePage, generateServiceMetadata } from '@/components/ServicePage';

export const metadata: Metadata = generateServiceMetadata('villa-garden');

export default function Page() {
  const service = getService('villa-garden')!;
  return <ServicePage service={service} />;
}
