import { ProjectList } from '@/components/sections/ProjectList';
import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

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

          <ProjectList />
        </Container>
      </section>
    </div>
  );
}
