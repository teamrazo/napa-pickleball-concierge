import Link from "next/link";
import { LeadForm } from "@/components/site/lead-form";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book a Call" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-primary/10 bg-[#f7f0e6]">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-5">
          <Link href="/" className="font-display text-3xl font-semibold text-primary">
            Napa Pickleball Concierge
          </Link>
          <p className="max-w-lg text-lg leading-8 text-muted-foreground">
            Your Napa Valley, Handled. Local coordination for wine country stays, signature outings, and easier travel logistics.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              Contact:{" "}
              <a className="text-primary underline-offset-4 hover:underline" href="mailto:jeff@nvproperties.net">
                jeff@nvproperties.net
              </a>
            </p>
            <p>Response promise: within 24 hours</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-foreground">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Napa Pickleball Concierge. All rights reserved.
          </p>
        </div>
        <LeadForm
          eyebrow="Need help picking the right service?"
          title="Send a quick note to Jeff"
          description="Use the same hosted GHL placeholder form here in the footer for easy follow-up."
          sourcePage="/footer"
          minHeight={360}
        />
      </div>
    </footer>
  );
}
