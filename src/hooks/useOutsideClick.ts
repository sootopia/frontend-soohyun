'use client';

import { type RefObject, useEffect, useRef } from 'react';

export function useOutsideClick(ref: RefObject<HTMLElement | null>, handler: () => void, enabled = true) {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    if (!enabled) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        handlerRef.current();
      }
    };

    document.addEventListener('mousedown', onPointerDown);

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [ref, enabled]);
}
