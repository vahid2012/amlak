import type { Metadata } from 'next';
import { getService } from '@/lib/services';
import { ServicePage, generateServiceMetadata } from '@/components/ServicePage';

export const metadata: Metadata = generateServiceMetadata('meeting-hall');

export default function Page() {
  const service = getService('meeting-hall')!;
  return <ServicePage service={service} />;
}
