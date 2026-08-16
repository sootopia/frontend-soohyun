import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <div className="px-1 md:px-2">
      <section id="top" className="py-32 md:py-46.5">
        <Container className="text-center">
          <Reveal>
            <h1 className="text-4xl leading-snug font-bold text-gray-400 md:text-5xl">
              안녕하세요. <br />
              {SITE.role} <br />
              <span className="text-black dark:text-white">{SITE.nameKo}입니다.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 md:mt-9 text-base md:text-lg text-gray-800 dark:text-gray-400 break-keep">
              사용자 경험을 고민하고, 더 나은 인터페이스를 코드로 구현합니다. <br />
              깔끔하고 직관적인 웹 경험을 만드는 것을 좋아합니다.
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
