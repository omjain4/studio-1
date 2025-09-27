'use client';

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import type { Monastery } from '@/lib/types';
import { Button } from './ui/button';
import Link from 'next/link';

type MapViewProps = {
  apiKey: string;
  monasteries: Monastery[];
};

export default function MapView({ apiKey, monasteries }: MapViewProps) {
  const [selectedMonastery, setSelectedMonastery] = useState<Monastery | null>(null);

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-full bg-muted/50 rounded-lg border-2 border-dashed border-destructive/50 p-12 text-center text-destructive">
        <p className="text-lg font-semibold">
          Google Maps API Key is missing. Please add your key to proceed.
        </p>
      </div>
    );
  }

  const position = { lat: 27.5330, lng: 88.5122 }; // Centered on Sikkim

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: '100%', width: '100%' }}>
        <Map
          defaultCenter={position}
          defaultZoom={9}
          mapId="sikkim_monasteries_map"
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          {monasteries.map(monastery => (
            <AdvancedMarker
              key={monastery.id}
              position={monastery.coordinates}
              onClick={() => setSelectedMonastery(monastery)}
            >
               <Pin background={'hsl(var(--primary))'} borderColor={'hsl(var(--primary-foreground))'} glyphColor={'hsl(var(--primary-foreground))'} />
            </AdvancedMarker>
          ))}

          {selectedMonastery && (
            <InfoWindow
              position={selectedMonastery.coordinates}
              onCloseClick={() => setSelectedMonastery(null)}
            >
              <div className="p-2 font-body max-w-xs">
                <h3 className="font-headline text-lg font-bold text-primary">{selectedMonastery.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">{selectedMonastery.description}</p>
                <Button asChild size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={`/monasteries/${selectedMonastery.id}`}>
                    Explore More
                  </Link>
                </Button>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
