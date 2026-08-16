'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useId, useRef, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { IconButton } from '@/components/ui/IconButton';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import type { Project } from '@/lib/site';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const shouldReduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  useOutsideClick(panelRef, onClose, Boolean(project));

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-1100 flex items-center justify-center px-4 py-8"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.45, ease }}
        >
          <motion.div
            className="absolute inset-0 bg-black/40 dark:bg-white/10"
            initial={shouldReduceMotion ? false : { opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.45, ease }}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-full w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 md:p-8 dark:bg-gray-950"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.45, ease }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3
                  id={titleId}
                  className="text-xl font-semibold text-black md:text-2xl leading-tight dark:text-gray-200"
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-[15px] md:text-base text-gray-500">{project.period}</p>
              </div>
              <IconButton aria-label="닫기" onClick={onClose} className="shrink-0">
                <X className="size-5" strokeWidth={1.8} />
              </IconButton>
            </div>

            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">{project.description}</p>

            <ul className="mt-6 space-y-1.5 p-4 md:p-6 rounded-lg bg-gray-100 dark:bg-white/8">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400"
                >
                  <span className="mt-[0.7em] size-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-600" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
