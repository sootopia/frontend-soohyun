'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { ProjectModal } from '@/components/sections/ProjectModal';
import { PROJECTS, type Project } from '@/lib/site';

export function ProjectList() {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <article className="group">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100">
                {project.image && <Image src={project.image} alt={project.title} fill className="object-cover" />}
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="absolute inset-0 z-5 flex cursor-pointer items-center justify-center gap-1 bg-black/20 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:bg-black/40"
                >
                  <span className="text-lg font-bold text-white">자세히 보기</span>
                  <ArrowUpRight className="size-5 text-white" />
                </button>
              </div>
              <h4 className="mt-4 text-lg font-semibold tracking-tight text-gray-950">{project.title}</h4>
              <p className="mt-2 text-base leading-relaxed text-gray-500">{project.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selected} onClose={closeModal} />
    </>
  );
}
