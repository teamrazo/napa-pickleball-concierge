import Link from "next/link";
import { ConciergeForm } from "@/components/site/concierge-form";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book a Call" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

const serviceLinks = [
  { href: "/services/wine-tours", label: "Winery & Wine Cave Experiences" },
  { href: "/services/car-services", label: "Car Services" },
  { href: "/services/boat-rides", label: "Napa River Boat Cruises" },
  { href: "/services/bicycle-rides", label: "Biking Across Wine Country" },
  { href: "/services/airbnb-vrbo-services", label: "Airbnb & VRBO Services" },
  { href: "/services/wine-train", label: "Napa Valley Wine Train" },
  { href: "/services/balloon-rides", label: "Balloon Rides" },
  { href: "/services/pickleball-carneros", label: "Private Pickleball" },
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-primary/10 bg-[#2c2c2c] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:items-start">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="font-display text-3xl font-semibold text-[#C9A84C]">
              Napa Concierge
            </Link>
            <p className="max-w-xs text-base leading-7 text-white/65">
              Your Napa &amp; Sonoma Wine Country, handled. Our concierge team coordinates wine cave access, car services, dining, river cruises, property provisioning, and more.
            </p>
            <div className="space-y-1.5 text-sm text-white/55">
              <p>
                Contact:{" "}
                <a className="text-[#C9A84C] underline-offset-4 hover:underline" href="mailto:jeff@nvproperties.net">
                  jeff@nvproperties.net
                </a>
              </p>
              <p>Response within 24 hours</p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm text-white/55">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-[#C9A84C] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-sm text-white/35">
              &copy; {new Date().getFullYear()} Napa Concierge. All rights reserved.
            </p>
          </div>

          {/* Services list */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#C9A84C]">Our Services</p>
            <nav className="space-y-2">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-white/55 hover:text-[#C9A84C] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick inquiry form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-1">Quick inquiry</p>
            <ConciergeForm service="general-inquiry" compact />
          </div>
        </div>
      </div>
    </footer>
  );
}
