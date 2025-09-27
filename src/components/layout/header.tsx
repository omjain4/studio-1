'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogIn, User, LogOut } from 'lucide-react';
import { Logo } from '@/components/icons';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
  const { user, logout } = useAuth();

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
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
        </div>

        <div className="flex items-center gap-2">
           {user ? (
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{user.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.fullName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user.role === 'admin' && (
                  <DropdownMenuItem asChild>
                     <Link href="/admin">
                        <User className="mr-2 h-4 w-4" />
                        <span>Admin Dashboard</span>
                      </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
           ) : (
            <>
              <Button asChild variant="ghost" className="hidden md:flex">
                 <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
                 <Link href="/register">Register</Link>
              </Button>
            </>
           )}

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
