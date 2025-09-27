'use client';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { monasteries } from '@/lib/data';

const MapView = dynamic(() => import('@/components/map-view'), {
  ssr: false,
  loading: () => <Skeleton className="h-full w-full" />,
});

export default function Map() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  return <MapView apiKey={apiKey} monasteries={monasteries} />;
}
