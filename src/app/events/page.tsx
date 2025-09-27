import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { events } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Calendar, MapPin, Ticket } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          Cultural Events & Festivals
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Immerse yourself in the vibrant traditions and sacred rituals of Sikkim.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => {
          const image = placeholderImages.find(p => p.id === event.imagePlaceholderId);
          return (
            <Card key={event.id} className="group overflow-hidden flex flex-col border-border/60 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg">
                <CardHeader className="p-0">
                    <div className="relative h-52 w-full">
                        {image && (
                            <Image
                            src={image.imageUrl}
                            alt={event.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                            />
                        )}
                    </div>
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                    <CardTitle className="font-headline text-2xl text-primary mb-2">{event.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            <Link href={`/monasteries/${event.monasteryId}`} className="hover:underline">{event.monasteryName}</Link>
                        </div>
                    </div>
                    <p className="text-base text-muted-foreground flex-grow mb-6">{event.description}</p>
                    {event.bookingLink && (
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                            <Link href={event.bookingLink}>
                                <Ticket className="mr-2 h-4 w-4" /> RSVP / Book Now
                            </Link>
                        </Button>
                    )}
                </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
