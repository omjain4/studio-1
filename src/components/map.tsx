'use client';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { monasteries } from '@/lib/data';

const MapView = dynamic(() => import('@/components/map-view'), {
  ssr: false,
  loading: () => <Skeleton className="h-full w-full" />,
});

type MapProps = {
  apiKey: string;
  monasteries: typeof monasteries;
};

export default function Map({ apiKey, monasteries }: MapProps) {
  return <MapView apiKey={apiKey} monasteries={monasteries} />;
}
