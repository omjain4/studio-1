'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogIn } from 'lucide-react';
import { Logo } from '@/components/icons';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/monasteries', label: 'Monasteries' },
  { href: '/events', label: 'Events' },
  { href: '/map', label: 'Map' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={closeSheet}>
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline font-bold text-xl hidden sm:inline-block">
            Sikkim Monasteries
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === href ? 'text-primary font-bold' : 'text-muted-foreground'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden md:flex">
             <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
             <Link href="/register">Register</Link>
          </Button>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-8">
                  <Link href="/" className="flex items-center gap-2" onClick={closeSheet}>
                     <Logo className="h-8 w-8 text-primary" />
                     <span className="font-headline font-bold text-xl">Sikkim Monasteries</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4 text-lg font-medium">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeSheet}
                      className={cn(
                        'transition-colors hover:text-primary',
                        pathname === href ? 'text-primary font-bold' : 'text-muted-foreground'
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2">
                   <Button asChild variant="outline" size="lg" onClick={closeSheet}>
                        <Link href="/login">
                            <LogIn className="mr-2 h-5 w-5" />
                            Login
                        </Link>
                    </Button>
                    <Button asChild size="lg" onClick={closeSheet} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="/register">Register</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
