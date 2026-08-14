import { TechIcon } from '@/components/icons/TechIcons';
import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { cn } from '@/lib/cn';
import { EXPERIENCES } from '@/lib/site';

export function Experience() {
  return (
    <div className="px-1 md:px-2">
      <section id="experience" className="pt-16 md:pt-20">
        <Container>
          <Reveal>
            <SectionTitle title="경력" description="다양한 환경에서 서비스를 만들고 운영하며 쌓아온 경험입니다." />
          </Reveal>

          <div className="flex flex-col max-w-7xl mx-auto border-t border-gray-200">
            {EXPERIENCES.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.08}>
                <article className="flex py-6 border-b border-gray-200 items-start">
                  <div className="flex items-center gap-1.5 w-30 shrink-0">
                    <span className={cn('size-2 rounded-full', item.current ? 'bg-blue-500' : 'bg-gray-300')}></span>
                    <span className="text-base text-gray-700">{item.period}</span>
                  </div>

                  <div className="w-65 shrink-0 ml-25">
                    <h4 className="text-lg text-gray-900 font-semibold">{item.company}</h4>
                    <p className="text-base text-gray-600 mt-1">{item.role}</p>
                    <ul className="flex flex-wrap mt-5 gap-1">
                      {item.stack.map((tech) => (
                        <li key={tech}>
                          <TechIcon name={tech} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1 ml-auto pl-25">
                    <ul className="text-base leading-relaxed text-gray-600">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-[0.55em] size-1 shrink-0 rounded-full bg-gray-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
