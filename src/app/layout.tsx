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

const title = `${SITE.name} | ${SITE.role}`;
const description = `안녕하세요. ${SITE.role} ${SITE.nameKo}입니다. 사용자 경험을 고민하고, 더 나은 인터페이스를 코드로 구현합니다. 깔끔하고 직관적인 웹 경험을 만드는 것을 좋아합니다.`;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
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
