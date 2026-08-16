'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { GithubLink } from '@/components/layout/GithubLink';
import { Logo } from '@/components/layout/Logo';
import { MobileNav } from '@/components/layout/MobileNav';
import { Navbar } from '@/components/layout/Navbar';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { cn } from '@/lib/cn';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-1030 bg-transparent transition-colors duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]',
        menuOpen && 'bg-white',
      )}
    >
      <div className="px-1 md:px-2">
        <Container className="relative flex h-14 items-center justify-between md:h-15">
          <Logo />
          <Navbar className="absolute left-1/2 -translate-x-1/2" />
          <div className="flex items-center gap-2">
            <GithubLink />
            <ThemeToggle />
            <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
          </div>
        </Container>
      </div>
    </header>
  );
}
