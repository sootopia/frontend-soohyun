'use client';

import { Check, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import { IconButton } from '@/components/ui/IconButton';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/lib/cn';

const THEMES = [
  { value: 'light', label: '라이트 모드', Icon: Sun },
  { value: 'dark', label: '다크 모드', Icon: Moon },
  { value: 'system', label: '시스템 설정', Icon: Monitor },
] as const;

type ThemeValue = (typeof THEMES)[number]['value'];

const emptySubscribe = () => () => undefined;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const current: ThemeValue = THEMES.some((item) => item.value === theme) ? (theme as ThemeValue) : 'system';
  const CurrentIcon = THEMES.find((item) => item.value === current)?.Icon ?? Monitor;

  useOutsideClick(rootRef, () => setOpen(false), open);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <IconButton
        onClick={() => setOpen((prev) => !prev)}
        aria-label="화면 모드 선택"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        pressed={open}
      >
        {mounted ? <CurrentIcon className="size-5" strokeWidth={1.8} /> : <span className="size-5" />}
      </IconButton>

      {open && (
        <div
          id={listboxId}
          role="listbox"
          aria-label="화면 모드"
          className="absolute top-full right-0 z-50 mt-2 min-w-42 space-y-1 rounded-xl border border-gray-200 bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-gray-900"
        >
          {THEMES.map(({ value, label, Icon }) => {
            const selected = current === value;

            return (
              <button
                key={value}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  setTheme(value);
                  setOpen(false);
                }}
                className={cn(
                  'flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors',
                  selected
                    ? 'bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                )}
              >
                <Icon className="size-4 shrink-0" strokeWidth={1.8} />
                <span className="flex-1">{label}</span>
                {selected && <Check className="size-4 shrink-0 text-blue-500" strokeWidth={2} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
