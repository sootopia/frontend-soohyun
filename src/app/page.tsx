import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Strengths } from '@/components/sections/Strengths';

export default function Home() {
  return (
    <main>
      <Hero />
      <Strengths />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
