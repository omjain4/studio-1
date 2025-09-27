'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const MapView = dynamic(() => import('@/components/map-view'), {
  ssr: false,
  loading: () => <Skeleton className="h-full w-full" />,
});

export default function Map() {
  // NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is now read on the client, so it needs to be exposed as NEXT_PUBLIC_
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  return <MapView apiKey={apiKey} />;
}
