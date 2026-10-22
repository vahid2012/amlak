import type { Metadata } from 'next';
import { getService } from '@/lib/services';
import { ServicePage, generateServiceMetadata } from '@/components/ServicePage';

export const metadata: Metadata = generateServiceMetadata('celebration-venue');

export default function Page() {
  const service = getService('celebration-venue')!;
  return <ServicePage service={service} />;
}
