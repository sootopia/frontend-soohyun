import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { STRENGTHS } from '@/lib/site';
import Image from 'next/image';

export function Strengths() {
  return (
    <div className="px-1 md:px-2">
      <section id="strengths" className="py-16 md:py-20 rounded-xl bg-gray-50 dark:bg-white/5">
        <Container>
          <Reveal>
            <SectionTitle
              title="핵심역량"
              description="더 나은 결과를 위해 고민하고, 기술과 소통을 바탕으로 문제를 해결하는 저의 강점을 소개합니다."
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-3">
            {STRENGTHS.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article>
                  <div className="relative aspect-video rounded-2xl bg-gray-100 overflow-hidden">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        quality={100}
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <h4 className="mt-4 md:mt-5 text-lg font-semibold tracking-tight text-gray-950 dark:text-gray-200">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-base break-keep md:break-all leading-relaxed text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
