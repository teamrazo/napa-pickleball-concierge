'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Wine, Compass, Car } from 'lucide-react';

const MESSAGES = [
  {
    desktop: "Napa & Sonoma Wine Country — one concierge team handles everything.",
    desktopCta: "Book a Concierge Call",
    mobile: "Wine Country concierge — one call plans it all",
    icon: Compass,
    href: '/book',
  },
  {
    desktop: 'Private caves, iconic estates, hidden-gem family vineyards — all arranged for you.',
    desktopCta: "Explore Wine Experiences",
    mobile: 'Private caves & hidden-gem wineries',
    icon: Wine,
    href: '/services/wine-tours',
  },
  {
    desktop: 'Designated driver or luxury car service — we move your group through wine country worry-free.',
    desktopCta: "Learn About Car Services",
    mobile: 'Designated driver & luxury car service',
    icon: Car,
    href: '/services/car-services',
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const msg = MESSAGES[index];
  const Icon = msg.icon;

  return (
    <div
      className="w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-white"
      style={{ backgroundColor: '#6b2737' }}
    >
      <div className="flex-1 text-center">
        <Link
          href={msg.href}
          className={`transition-opacity duration-300 hover:underline inline-flex items-center gap-1.5 ${fading ? 'opacity-0' : 'opacity-100'}`}
        >
          <Icon className="inline size-4 shrink-0" />
          <span className="hidden sm:inline">{msg.desktop} <span className="underline underline-offset-2 ml-1">→ {msg.desktopCta}</span></span>
          <span className="sm:hidden">{msg.mobile} →</span>
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
