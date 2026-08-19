"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { href: "/services/airport-pickup",          name: "Airport Pickup",                    hook: "Arrive relaxed. Our team is there when you land." },
  { href: "/services/car-services",            name: "Car Services",                      hook: "Designated driver or luxury chauffeured vehicle." },
  { href: "/services/hotel-reservations",      name: "Hotel Reservations",                hook: "The right room changes everything." },
  { href: "/services/restaurant-bookings",     name: "Restaurant Bookings",               hook: "Napa's best tables, reserved for you." },
  { href: "/services/wine-tours",              name: "Winery & Wine Cave Experiences",    hook: "Iconic estates and hidden-gem family vineyards." },
  { href: "/services/private-cave-experiences",name: "Private Cave Experiences",          hook: "Exclusive access to Napa's most intimate caves." },
  { href: "/services/wine-train",              name: "Napa Valley Wine Train",            hook: "The most iconic ride in wine country." },
  { href: "/services/airbnb-vrbo-services",    name: "Airbnb & VRBO In-House Services",   hook: "Pre-stocked, provisioned, ready before you arrive." },
  { href: "/services/boat-rides",              name: "Napa River Electric Boat Cruises",  hook: "Wine & charcuterie on the river — hidden gem." },
  { href: "/services/bicycle-rides",           name: "Biking Across Wine Country",        hook: "Carneros, Yountville, Calistoga — guided or not." },
  { href: "/services/balloon-rides",           name: "Balloon Rides",                     hook: "Napa from 3,000 feet. Unforgettable." },
  { href: "/services/pickleball-carneros",     name: "Private Pickleball",                hook: "Private court booking and coaching coordination." },
  { href: "/services/hiking-trails",           name: "Hiking Trails",                     hook: "Napa's best trails, curated for you." },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="border-b border-primary/10 bg-[#faf7f2]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-display text-xl font-semibold text-primary shrink-0">
            Napa Concierge
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm tracking-[0.15em]">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>

            {/* Services mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega menu panel */}
              <div
                role="menu"
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[900px] bg-[#faf7f2] border border-primary/10 rounded-2xl shadow-2xl transition-all duration-200 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
              >
                <div className="p-6 grid grid-cols-[1fr_220px] gap-4">
                  {/* Services grid */}
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        role="menuitem"
                        className="group/item flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-primary/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground group-hover/item:text-primary transition-colors">
                          {svc.name}
                        </span>
                        <span className="text-[11px] text-muted-foreground leading-snug">{svc.hook}</span>
                      </Link>
                    ))}
                  </div>

                  {/* CTA column */}
                  <div className="border-l border-primary/10 pl-5 flex flex-col justify-center gap-4">
                    <div>
                      <p className="font-display text-base font-semibold text-primary leading-snug">
                        Ready to plan your Wine Country experience?
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        One call. Everything handled.
                      </p>
                    </div>
                    <Button asChild size="sm" className="w-full" onClick={() => setServicesOpen(false)}>
                      <Link href="/book">Book a Concierge Call</Link>
                    </Button>
                    <Link
                      href="/services"
                      className="text-xs text-center text-primary hover:underline"
                      onClick={() => setServicesOpen(false)}
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/book" className="text-foreground hover:text-primary transition-colors">Book a Call</Link>
          </nav>

          {/* Desktop CTA */}
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/book">Book Now</Link>
          </Button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary/10 bg-[#faf7f2] px-4 py-4 space-y-1">
          <Link href="/" className="block px-3 py-2 text-sm uppercase tracking-wider text-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>Home</Link>
          <div className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Services</div>
          {services.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="block px-6 py-2 text-sm text-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {svc.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-primary/10">
            <Link href="/book" className="block px-3 py-2 text-sm uppercase tracking-wider text-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>Book a Call</Link>
          </div>
          <div className="pt-2">
            <Button asChild className="w-full">
              <Link href="/book" onClick={() => setMobileOpen(false)}>Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
