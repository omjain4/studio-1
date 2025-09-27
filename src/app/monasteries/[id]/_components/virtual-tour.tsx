'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { placeholderImages as allPlaceholderImages } from '@/lib/placeholder-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type VirtualTourProps = {
  streetViewLink?: string;
  monasteryName: string;
  imageIds: string[];
};

export default function VirtualTour({ streetViewLink, monasteryName, imageIds }: VirtualTourProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Skeleton className="w-full aspect-video rounded-lg" />;
  }

  if (!streetViewLink) {
    const images = imageIds
      .map(id => allPlaceholderImages.find(p => p.id === id))
      .filter((img): img is ImagePlaceholder => !!img);

    if (images.length === 0) {
      return (
        <Alert variant="default" className="border-accent">
          <AlertTriangle className="h-4 w-4 text-accent" />
          <AlertTitle>Not Yet Available</AlertTitle>
          <AlertDescription>
            A virtual tour or photo gallery for this monastery is not yet available.
          </AlertDescription>
        </Alert>
      );
    }
    
    return (
      <Carousel className="w-full">
        <CarouselContent>
          {images.map(image => (
            <CarouselItem key={image.id}>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    )
  }

  return (
    <div className="relative w-full overflow-hidden aspect-video rounded-lg border">
      {isLoading && <Skeleton className="absolute inset-0 w-full h-full" />}
      <iframe
        src={streetViewLink}
        className={`absolute top-0 left-0 w-full h-full border-0 transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`360 View of ${monasteryName}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      ></iframe>
       {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <p className="text-muted-foreground">Loading Virtual Tour...</p>
        </div>
      )}
    </div>
  );
}
