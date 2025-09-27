import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { monasteries } from '@/lib/data';

const MapView = dynamic(() => import('@/components/map-view'), {
  ssr: false,
  loading: () => <Skeleton className="h-full w-full" />,
});

export default function MapPage() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
        <div className="container mx-auto py-8 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                Interactive Monastery Map
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Click on a pin to discover more about each sacred location.
            </p>
        </div>
        <div className="flex-grow p-4">
             <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-border/60 shadow-lg">
                <MapView apiKey={apiKey} monasteries={monasteries} />
             </div>
        </div>
    </div>
  );
}
