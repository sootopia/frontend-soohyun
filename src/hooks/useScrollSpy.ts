'use client';

import { useEffect, useState } from 'react';

export function useScrollSpy(ids: readonly string[], offset = 140) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = '';

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, offset]);

  return activeId;
}
