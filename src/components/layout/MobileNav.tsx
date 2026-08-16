'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect } from 'react';
import { IconButton } from '@/components/ui/IconButton';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/cn';
import { NAV_ITEMS, SECTION_IDS } from '@/lib/site';

const ease = [0.22, 1, 0.36, 1] as const;

const dimVariants = {
  closed: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: { duration: 0.4, ease },
  },
  open: {
    opacity: 1,
    backdropFilter: 'blur(8px)',
    transition: { duration: 0.45, ease },
  },
};

const panelVariants = {
  closed: {
    clipPath: 'inset(0 0 100% 0)',
    transition: {
      duration: 0.4,
      ease,
      when: 'afterChildren',
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  open: {
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.45,
      ease,
      when: 'beforeChildren',
      delayChildren: 0.18,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    y: -18,
    transition: { duration: 0.22, ease },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

type MobileNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const activeId = useScrollSpy(SECTION_IDS);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const onChange = () => {
      if (mediaQuery.matches) {
        onOpenChange(false);
      }
    };

    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, [onOpenChange]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <div className="md:hidden">
      <IconButton
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={open}
        aria-controls="mobile-nav"
        pressed={open}
        onClick={() => onOpenChange(!open)}
      >
        {open ? <X className="size-5" strokeWidth={1.8} /> : <Menu className="size-5" strokeWidth={1.8} />}
      </IconButton>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-x-0 top-14 bottom-0 z-1020" initial="closed" animate="open" exit="closed">
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-black/40"
              variants={shouldReduceMotion ? undefined : dimVariants}
              onClick={() => onOpenChange(false)}
            />
            <motion.div
              id="mobile-nav"
              className="absolute inset-0 bg-white dark:bg-black"
              variants={shouldReduceMotion ? undefined : panelVariants}
            >
              <nav aria-label="모바일 페이지 섹션" className="flex flex-col gap-2 px-6 py-10">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeId === item.id;

                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      variants={shouldReduceMotion ? undefined : itemVariants}
                      onClick={() => onOpenChange(false)}
                      className={cn(
                        'rounded-xl px-3 py-2 text-xl tracking-tight transition-colors',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                        isActive
                          ? 'text-black font-bold dark:text-white'
                          : 'text-gray-400 font-semibold dark:text-gray-500',
                      )}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
