'use client';

import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/cn';
import { NAV_ITEMS, SECTION_IDS } from '@/lib/site';

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <nav
      aria-label="페이지 섹션"
      className={cn(
        'hidden px-2 py-1.5 items-center gap-2 rounded-full bg-black/8 backdrop-blur-lg md:flex dark:bg-white/8',
        className,
      )}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              'rounded-full px-3 py-1.5 text-base whitespace-nowrap transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
              isActive ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-gray-600 dark:text-gray-400',
            )}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
