import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

const variants = {
  dark: 'bg-gray-950 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-300',
  gray: 'bg-gray-200 text-gray-950 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900',
} as const;

const baseClassName =
  'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950';

type Variant = keyof typeof variants;

type ButtonProps = {
  variant?: Variant;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'>;

export function Button({ variant = 'dark', className, children, href, ...rest }: ButtonProps) {
  const classes = cn(baseClassName, variants[variant], className);

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
