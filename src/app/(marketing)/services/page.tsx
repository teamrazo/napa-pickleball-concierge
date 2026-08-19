import Link from "next/link";
import { ServiceCard } from "@/components/site/service-card";
import { TrustBar } from "@/components/site/trust-bar";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "All Services",
  description:
    "Browse the full Napa and Sonoma Wine Country concierge menu — wine cave experiences, car services, river cruises, Airbnb provisioning, pickleball, and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="section-shell py-8 md:py-12">
        <div className="hero-panel overflow-hidden rounded-[2rem] px-6 py-12 text-primary-foreground md:px-10 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-5">
              <span className="text-sm tracking-[0.28em] uppercase text-primary-foreground/70">
                Concierge Menu
              </span>
              <h1 className="font-display max-w-3xl text-5xl font-semibold text-balance md:text-6xl">
                Every service our concierge team can arrange before you ever arrive in Wine Country.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-primary-foreground/80">
                Start with the experience that matters most, or let our team coordinate the entire weekend
                — from airport arrival to the last reservation across Napa and Sonoma.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-primary-foreground/70">Quick Path</p>
              <p className="mt-3 text-lg leading-8 text-primary-foreground/85">
                Not sure where to begin? Book one concierge call and get a tailored recommendation within 24 hours.
              </p>
              <Button asChild variant="gold" className="mt-5 w-full">
                <Link href="/book">Book a Concierge Call</Link>
              </Button>
            </div>
          </div>
          <TrustBar className="mt-10 border-t border-white/10 pt-5 text-primary-foreground" />
        </div>
      </section>

      <section className="section-shell pb-16 pt-8 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
