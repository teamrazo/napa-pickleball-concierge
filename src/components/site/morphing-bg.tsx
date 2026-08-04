'use client';
import { useEffect, useRef } from 'react';

export function MorphingBg({ className = '' }: { className?: string }) {
  const ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const paths = [
      'M60,20 C80,0 100,10 100,40 C100,70 80,90 60,80 C40,70 20,60 20,40 C20,20 40,40 60,20Z',
      'M50,10 C75,5 95,25 90,55 C85,85 65,95 45,85 C25,75 10,55 15,30 C20,5 25,15 50,10Z',
      'M65,15 C90,10 100,30 95,60 C90,90 70,100 45,90 C20,80 5,60 10,35 C15,10 40,20 65,15Z',
      'M55,5 C85,0 105,20 100,50 C95,80 75,100 50,95 C25,90 5,70 5,45 C5,20 25,10 55,5Z',
    ];
    let i = 0;
    const el = ref.current;
    if (!el) return;
    el.setAttribute('d', paths[0]);
    const id = setInterval(() => {
      i = (i + 1) % paths.length;
      el.setAttribute('d', paths[i]);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute -right-20 -top-10 h-[700px] w-[700px] opacity-[0.07]"
      >
        <path
          ref={ref}
          fill="currentColor"
          className="text-accent transition-[d] duration-[3500ms] ease-in-out"
          style={{ transition: 'd 3500ms ease-in-out' }}
        />
      </svg>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute -left-32 bottom-10 h-[400px] w-[400px] opacity-[0.04]"
      >
        <circle cx="50" cy="50" r="50" fill="currentColor" className="text-white" />
      </svg>
    </div>
  );
}
