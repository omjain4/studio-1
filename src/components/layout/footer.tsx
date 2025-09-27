import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Github, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <Link href="/" className="flex items-center gap-2 mb-2">
                <Logo className="h-8 w-8 text-primary" />
                <span className="font-headline font-bold text-xl">Sikkim Monasteries</span>
             </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Digitizing and showcasing Sikkim’s monasteries for tourism, cultural preservation, and community participation.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
             <div className="flex space-x-4 mb-4">
               <Link href="#" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></Link>
               <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
               <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
             </div>
             <p className="text-sm text-muted-foreground">
               &copy; {new Date().getFullYear()} Sikkim Monasteries Guide. All Rights Reserved.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
