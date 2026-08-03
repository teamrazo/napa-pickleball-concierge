'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const MESSAGES = [
  {
    desktop: "🍷 Napa's insider. One call plans everything. → Book a Concierge Call",
    mobile: "🍷 One call plans your Napa trip →",
    href: '/book',
  },
  {
    desktop: '🎾 Pickleball at Carneros Inn — instruction + spa + dining in one. → Reserve Your Spot',
    mobile: '🎾 Pickleball + spa + dining →',
    href: '/book',
  },
  {
    desktop: '✈️ Airport pickup, hotels, restaurants — one local contact handles it all. → Start Planning',
    mobile: '✈️ One local contact, full trip →',
    href: '/book',
  },
];

export function HelloBar() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % MESSAGES.length);
        setFading(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const msg = MESSAGES[index];

  return (
    <div
      className="sticky top-0 z-60 w-full flex items-center justify-between gap-2 px-4 py-2 text-sm text-white"
      style={{ backgroundColor: '#6b2737', zIndex: 60 }}
    >
      <div className="flex-1 text-center">
        <Link
          href={msg.href}
          className={`transition-opacity duration-300 hover:underline ${fading ? 'opacity-0' : 'opacity-100'}`}
        >
          <span className="hidden sm:inline">{msg.desktop}</span>
          <span className="sm:hidden">{msg.mobile}</span>
        </Link>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        className="shrink-0 rounded p-0.5 hover:bg-white/20 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
