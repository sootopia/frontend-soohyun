import { ArrowUpRight, Plus } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PROJECTS } from '@/lib/site';

export function Projects() {
  return (
    <div className="px-1 md:px-2">
      <section id="projects" className="py-16 md:py-20">
        <Container>
          <Reveal>
            <SectionTitle
              title="프로젝트"
              description="직접 고민하고 설계하며, 코드로 구현한 다양한 프로젝트를 소개합니다."
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.06}>
                <article className="group">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                    <div className="aspect-4/3" />
                    <span className="absolute right-4 bottom-5 inline-flex size-9 items-center justify-center rounded-full bg-white text-black shadow-lg z-5">
                      <Plus className="size-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold tracking-tight text-gray-950 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {project.description}
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
