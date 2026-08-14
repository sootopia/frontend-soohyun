import { Container } from '@/components/ui/Container';
import { GithubLink } from '@/components/layout/GithubLink';
import { Logo } from '@/components/layout/Logo';
import { Navbar } from '@/components/layout/Navbar';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-1030 bg-transparent">
      <div className="px-1 md:px-2">
        <Container className="relative flex h-14 items-center justify-between md:h-15">
          <Logo />
          <Navbar className="absolute left-1/2 -translate-x-1/2" />
          <div className="flex items-center gap-2">
            <GithubLink />
            <ThemeToggle />
          </div>
        </Container>
      </div>
    </header>
  );
}
