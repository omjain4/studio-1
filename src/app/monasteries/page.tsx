import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { monasteries } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { MapPin, ArrowRight } from 'lucide-react';

export default function MonasteriesPage() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          Monasteries of Sikkim
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore the sacred monasteries that are the heart and soul of Sikkim's spiritual landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {monasteries.map(monastery => {
          const image = placeholderImages.find(p => p.id === monastery.imagePlaceholderId);
          return (
            <Card key={monastery.id} className="group overflow-hidden flex flex-col border-border/60 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full">
                  {image && (
                     <Image
                        src={image.imageUrl}
                        alt={monastery.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                     />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                 <div className="p-6">
                    <CardTitle className="font-headline text-2xl text-primary">{monastery.name}</CardTitle>
                 </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6 pt-0">
                <CardDescription className="text-base text-muted-foreground flex-grow">
                  {monastery.description}
                </CardDescription>
                <div className="mt-4 flex justify-between items-center">
                   <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                        <Link href={`/monasteries/${monastery.id}`}>
                            Explore <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Link href="/map" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        View on Map
                    </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
