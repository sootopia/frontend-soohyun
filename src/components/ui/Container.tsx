import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ContainerProps = {
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav';
  className?: string;
  children: ReactNode;
};

export function Container({ as: Component = 'div', className, children }: ContainerProps) {
  return <Component className={cn('mx-auto w-full max-w-360 px-5', className)}>{children}</Component>;
}
