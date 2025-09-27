import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images.json';

export default function AboutPage() {
  const aboutImage = placeholderImages.find(p => p.id === 'about-us');

  return (
    <div className="bg-background">
      <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-accent tracking-wide uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-headline font-bold text-primary sm:text-5xl sm:tracking-tight lg:text-6xl">
            Preserving Sikkim's Soul
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-muted-foreground">
            Our mission is to build a bridge between the ancient wisdom of Sikkim's monasteries and the modern world, fostering tourism, cultural preservation, and community.
          </p>
        </div>

        <div className="mt-12 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="relative">
            <div className="prose prose-lg text-foreground mx-auto lg:max-w-none text-justify">
              <p>
                The Sikkim Monasteries Guide is a passionate endeavor to digitally archive and showcase the profound spiritual and cultural heritage of Sikkim's monastic traditions. Nestled in the Himalayas, these monasteries are not just architectural marvels but are living centers of wisdom, art, and history that have been passed down through generations.
              </p>
              <p>
                In an era of rapid change, we believe it is crucial to preserve this invaluable heritage. Our platform leverages technology to create an immersive and educational experience for everyone – from curious travelers and devout pilgrims to academic researchers and the local community.
              </p>
              <p>
                Through virtual tours, digital archives, and an interactive cultural calendar, we aim to make the stories and teachings of these sacred places accessible to a global audience. We are dedicated to working closely with monastic bodies and local communities to ensure our work is respectful, accurate, and beneficial to the preservation of Sikkim's unique identity.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0" aria-hidden="true">
            {aboutImage && (
              <div className="relative mx-auto rounded-lg shadow-xl overflow-hidden aspect-w-4 aspect-h-3">
                 <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={1200}
                    height={800}
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                 />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
