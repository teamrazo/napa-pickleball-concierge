import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book a Call" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-[#faf7f2]/90 backdrop-blur">
      <div className="section-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="font-display text-2xl font-semibold leading-tight text-primary md:text-3xl">
          Napa Pickleball Concierge
        </Link>
        <nav className="hidden items-center gap-7 text-sm uppercase tracking-[0.18em] text-foreground md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <Link href="/book">Book Now</Link>
        </Button>
      </div>
      <div className="section-shell flex gap-4 overflow-auto pb-4 text-sm uppercase tracking-[0.16em] md:hidden">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap text-foreground hover:text-primary">
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
