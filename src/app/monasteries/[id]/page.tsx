import Image from 'next/image';
import { notFound } from 'next/navigation';
import { monasteries } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Ticket, Route, GalleryHorizontal, Landmark, BookOpen, Calendar, Camera } from 'lucide-react';

export async function generateStaticParams() {
  return monasteries.map(monastery => ({
    id: monastery.id,
  }));
}

export default function MonasteryDetailPage({ params }: { params: { id: string } }) {
  const monastery = monasteries.find(m => m.id === params.id);

  if (!monastery) {
    notFound();
  }

  const heroImage = placeholderImages.find(p => p.id === monastery.imagePlaceholderId);

  return (
    <div>
      <section className="relative h-80 md:h-96">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={monastery.name}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="container max-w-7xl mx-auto p-6 md:p-12 text-white">
            <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">{monastery.name}</h1>
            <p className="mt-2 text-lg md:text-xl max-w-3xl drop-shadow-md">{monastery.description}</p>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto py-12 px-4">
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto mb-8">
            <TabsTrigger value="history"><Landmark className="w-4 h-4 mr-2" />History</TabsTrigger>
            <TabsTrigger value="tour"><Camera className="w-4 h-4 mr-2" />360° View</TabsTrigger>
            <TabsTrigger value="gallery"><GalleryHorizontal className="w-4 h-4 mr-2" />Gallery</TabsTrigger>
            <TabsTrigger value="events"><Calendar className="w-4 h-4 mr-2" />Events</TabsTrigger>
            <TabsTrigger value="visit"><BookOpen className="w-4 h-4 mr-2" />Visit</TabsTrigger>
          </TabsList>
          
          <TabsContent value="history">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">History & Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed">{monastery.history}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tour">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">360° Virtual Tour</CardTitle>
              </CardHeader>
              <CardContent>
                {monastery.streetViewLink ? (
                  <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      src={monastery.streetViewLink}
                      className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`360 View of ${monastery.name}`}
                    ></iframe>
                  </div>
                ) : (
                  <p className="text-muted-foreground">A 360° virtual tour for this monastery is not yet available.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Photo & Media Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {monastery.images.map(imageId => {
                        const image = placeholderImages.find(p => p.id === imageId);
                        return image ? (
                            <div key={image.id} className="relative aspect-square rounded-lg overflow-hidden group">
                                <Image 
                                    src={image.imageUrl} 
                                    alt={image.description} 
                                    fill 
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    data-ai-hint={image.imageHint}
                                />
                            </div>
                        ) : null;
                    })}
                 </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
             <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Events at {monastery.name}</CardTitle>
              </CardHeader>
              <CardContent>
                 <p className="text-muted-foreground">No upcoming events listed for this monastery. Please check the main <a href="/events" className="text-accent underline">Events</a> page.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="visit">
             <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Visiting Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-accent"/>
                    <div>
                        <h4 className="font-semibold">Timings</h4>
                        <p className="text-muted-foreground">{monastery.visitingInfo.timings}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <Ticket className="w-6 h-6 text-accent"/>
                    <div>
                        <h4 className="font-semibold">Entry Fee</h4>
                        <p className="text-muted-foreground">{monastery.visitingInfo.entryFee}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <Route className="w-6 h-6 text-accent"/>
                    <div>
                        <h4 className="font-semibold">How to Reach</h4>
                        <p className="text-muted-foreground">{monastery.visitingInfo.routes}</p>
                    </div>
                 </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
