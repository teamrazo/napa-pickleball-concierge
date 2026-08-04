'use client';
import { useRef, useCallback } from 'react';

export function ParallaxHero({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 24;
    const y = ((e.clientY - top) / height - 0.5) * 12;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  }, []);

  return (
    <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="w-full">
      <div ref={ref} style={{ transition: 'transform 0.2s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
        {children}
      </div>
    </div>
  );
}
