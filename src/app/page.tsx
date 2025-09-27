import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Archive, Camera, CalendarDays, ArrowRight } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images.json';

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === 'hero-monastery');

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
             />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white drop-shadow-lg">
            Rediscover the Spirit of Sikkim’s Monasteries
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/90 drop-shadow-md">
            Journey through a digital sanctuary showcasing the rich heritage, vibrant culture, and serene landscapes of Sikkim's sacred monastic tradition.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
              <Link href="/monasteries">Explore Monasteries</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg py-6 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
              <Link href="/events">View Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">A Gateway to Sacred Heritage</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the soul of Sikkim from anywhere in the world with our curated digital features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Camera className="h-10 w-10 text-accent" />}
              title="Virtual Tours"
              description="Immerse yourself in the breathtaking beauty of Sikkim's monasteries with our 360° virtual tours. Walk the sacred grounds from your own home."
              link="/monasteries"
            />
            <FeatureCard
              icon={<Archive className="h-10 w-10 text-accent" />}
              title="Digital Archives"
              description="Explore a rich collection of historical documents, ancient texts, and rare photographs, preserving the monastic legacy for future generations."
              link="/monasteries"
            />
            <FeatureCard
              icon={<CalendarDays className="h-10 w-10 text-accent" />}
              title="Cultural Calendar"
              description="Stay updated on vibrant festivals, sacred rituals, and community events. Plan your visit to coincide with these unique cultural experiences."
              link="/events"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
  return (
    <Card className="bg-card/80 border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden text-center group">
      <CardHeader className="items-center pt-8">
        <div className="p-4 bg-accent/10 rounded-full mb-4">
            {icon}
        </div>
        <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <CardDescription className="text-base text-muted-foreground">{description}</CardDescription>
        <Button asChild variant="link" className="mt-4 text-accent group-hover:underline">
          <Link href={link}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
