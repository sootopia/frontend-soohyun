import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SITE } from '@/lib/site';

export function Contact() {
  return (
    <div className="px-1 md:px-2">
      <section id="contact" className="py-28 md:py-48">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold text-black md:text-6xl leading-tight dark:text-white">
              궁금한 점이 있으시다면 <br />
              <span className="text-gray-400">언제든 연락 주세요.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex justify-center gap-2">
              <Button href={SITE.githubUrl} variant="dark">
                Github 바로가기
              </Button>
              <Button href={`mailto:${SITE.email}`} variant="gray">
                이메일 보내기
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
