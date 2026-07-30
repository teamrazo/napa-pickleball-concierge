import Link from "next/link";
import { ConciergeForm } from "@/components/site/concierge-form";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book a Call" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-primary/10 bg-[#2c2c2c] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 py-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="space-y-5">
          <Link href="/" className="font-display text-3xl font-semibold text-[#C9A84C]">
            Napa Concierge
          </Link>
          <p className="max-w-lg text-base leading-7 text-white/70">
            Your Napa Valley, Handled. Local coordination for wine country stays, signature outings, and easier travel logistics.
          </p>
          <div className="space-y-2 text-sm text-white/60">
            <p>
              Contact:{" "}
              <a className="text-[#C9A84C] underline-offset-4 hover:underline" href="mailto:jeff@nvproperties.net">
                jeff@nvproperties.net
              </a>
            </p>
            <p>Response within 24 hours</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-white/60">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#C9A84C]">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Napa Concierge. All rights reserved.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-1">Quick inquiry</p>
          <h3 className="font-display text-lg font-semibold text-white mb-4">Start planning your Napa experience</h3>
          <ConciergeForm service="general-inquiry" compact />
        </div>
      </div>
    </footer>
  );
}
