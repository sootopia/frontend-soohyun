import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

const baseClassName =
  'inline-flex size-10 items-center justify-center rounded-full text-gray-800 transition-colors hover:bg-gray-100 active:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white dark:active:bg-gray-900';

type IconButtonProps = {
  href?: string;
  className?: string;
  children: ReactNode;
  pressed?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'>;

export function IconButton({ href, className, children, pressed = false, ...rest }: IconButtonProps) {
  const classes = cn(baseClassName, pressed && 'bg-gray-200 dark:bg-gray-900 dark:text-white', className);

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');

    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
