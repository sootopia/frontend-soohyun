import { SITE } from '@/lib/site';
import { cn } from '@/lib/cn';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <a href="#top" className={cn('text-lg md:text-xl font-extrabold text-black dark:text-white', className)}>
      {SITE.name}
    </a>
  );
}
