import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { LeadForm } from "@/components/site/lead-form";
import { TrustBar } from "@/components/site/trust-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Book a Concierge Call",
  description:
    "Book a concierge planning call for a tailored Napa Valley itinerary covering reservations, wine country experiences, and local logistics.",
  path: "/book",
  imagePath: "/book/opengraph-image",
});

export default function BookPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Book a Concierge Call",
    description: "Primary lead capture page for Napa Pickleball Concierge.",
  };

  return (
    <main id="main-content" className="section-shell py-8 md:py-12">
      <JsonLd data={jsonLd} />
      <div className="mb-6">
        <Link href="/" className="font-display text-2xl font-semibold tracking-[0.02em] text-primary">
          Napa Pickleball Concierge
        </Link>
      </div>
      <section className="hero-panel overflow-hidden rounded-[2rem] text-primary-foreground soft-ring">
        <div className="grid gap-8 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em]">
              Book a Concierge Call
            </span>
            <div className="space-y-4">
              <h1 className="font-display text-5xl font-semibold text-balance md:text-6xl">
                Start with one inquiry and let Jeff shape the right Napa itinerary.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-primary-foreground/80">
                Share your dates, group details, and what kind of weekend you want. This page exists
                for one thing only: turning your Napa ideas into a plan.
              </p>
            </div>
            <TrustBar className="rounded-[1.5rem] border border-white/[0.12] bg-white/[0.08] p-5 text-primary-foreground" />
            <Card className="border-white/[0.12] bg-white/[0.08] text-primary-foreground">
              <CardContent className="space-y-4 p-6">
                <h2 className="font-display text-3xl">What happens next</h2>
                <ul className="space-y-3 text-primary-foreground/82">
                  <li>1. Jeff reviews your request and any must-have experiences.</li>
                  <li>2. You get a reply within 24 hours with the best-fit next step.</li>
                  <li>3. Together you finalize the itinerary details that matter most.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="rounded-[1.75rem] bg-[#faf7f2] p-4 text-foreground">
            <LeadForm
              eyebrow="Primary conversion page"
              title="Book your concierge planning conversation"
              description="Use the placeholder GHL form below. Real service-specific form IDs can be connected after launch."
              sourcePage="/book"
              minHeight={620}
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <Card className="border-primary/10 bg-white/85">
          <CardContent className="grid gap-6 p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-3">
              <span className="text-sm tracking-[0.28em] text-primary uppercase">Risk Reversal</span>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">No obligation. No pressure.</h2>
            </div>
            <p className="text-lg leading-8 text-muted-foreground">
              This is simply the easiest way to get expert local direction. If it’s a fit, Jeff helps
              you move forward. If it isn’t, you still leave with clarity.
            </p>
          </CardContent>
        </Card>
      </section>

      <div className="pb-10">
        <Button asChild variant="outline">
          <Link href="/services">Browse all concierge services</Link>
        </Button>
      </div>
    </main>
  );
}
