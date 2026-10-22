import type { Metadata } from 'next';
import { getService } from '@/lib/services';
import { ServicePage, generateServiceMetadata } from '@/components/ServicePage';

export const metadata: Metadata = generateServiceMetadata('construction-partnership');

export default function Page() {
  const service = getService('construction-partnership')!;
  return <ServicePage service={service} />;
}
