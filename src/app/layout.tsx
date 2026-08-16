import type { Metadata } from 'next';
import { Asta_Sans } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Providers } from '@/components/layout/Providers';
import { SITE } from '@/lib/site';
import './globals.css';

const astaSans = Asta_Sans({
  subsets: ['latin'],
  variable: '--font-asta-sans',
  display: 'swap',
  weight: 'variable',
  fallback: ['Apple SD Gothic Neo', 'Malgun Gothic', 'sans-serif'],
});

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.role}`,
  description: `안녕하세요. ${SITE.role} ${SITE.nameKo}입니다. 사용자 경험을 중심으로 웹 인터페이스를 설계하고 구현합니다.`,
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko" className={`${astaSans.variable} h-full`} suppressHydrationWarning>
      <body className="font-sans">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
