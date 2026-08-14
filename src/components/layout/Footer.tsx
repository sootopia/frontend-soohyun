'use client';

import { ArrowUp } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SITE } from '@/lib/site';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200">
      <Container className="flex justify-between gap-6 py-10 md:py-12">
        <div className="text-[13px] leading-relaxed text-gray-500">
          <p>
            {SITE.role} {SITE.nameKo} <br />
            Github{' '}
            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black hover:underline"
            >
              {SITE.githubHandle}
            </a>
            <br />
            E-mail{' '}
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-black hover:underline">
              {SITE.email}
            </a>
          </p>
          <p className="mt-4">© 2026 {SITE.name}. All rights reserved.</p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="상단으로 바로가기"
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <ArrowUp className="size-6" strokeWidth={1.5} />
        </button>
      </Container>
    </footer>
  );
}
