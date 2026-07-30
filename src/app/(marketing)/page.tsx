import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { LeadForm } from "@/components/site/lead-form";
import { ServiceCard } from "@/components/site/service-card";
import { TrustBar } from "@/components/site/trust-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/metadata";
import { serviceTestimonials, services, siteUrl } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Napa Valley Concierge",
  description:
    "Plan a better Napa trip with one local concierge for wine tours, reservations, airport pickup, pickleball, and unforgettable valley experiences.",
  path: "/",
});

export default function HomePage() {
  const storyStats = [
    "11 concierge categories",
    "24-hour response guarantee",
    "One local contact from arrival to departure",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Napa Pickleball Concierge",
    email: "jeff@nvproperties.net",
    url: siteUrl,
    description:
      "Luxury-adjacent Napa Valley concierge planning for visitors seeking curated wine country experiences.",
    areaServed: "Napa Valley",
    serviceArea: {
      "@type": "Place",
      name: "Napa Valley",
    },
  };

  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />
      <section className="section-shell py-8 md:py-12">
        <div className="hero-panel soft-ring overflow-hidden rounded-[2rem] text-primary-foreground">
          <div className="grid gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-14">
            <div className="fade-up space-y-7">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs tracking-[0.3em] uppercase">
                Napa Valley Lifestyle Concierge
              </span>
              <div className="space-y-5">
                <h1 className="font-display max-w-3xl text-5xl font-semibold text-balance md:text-7xl">
                  The insider’s way to do Napa without doing all the planning.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-primary-foreground/80 md:text-xl">
                  Jeff curates the tables, tastings, transfers, trails, and signature experiences that
                  turn a Napa trip into something effortless.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="gold">
                  <Link href="/book">Book a Concierge Call</Link>
                </Button>
                <Button asChild size="lg" variant="soft">
                  <Link href="/services">Explore All Services</Link>
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {storyStats.map((stat) => (
                  <div
                    key={stat}
                    className="rounded-2xl border border-white/[0.12] bg-white/[0.08] px-4 py-4 text-sm"
                  >
                    {stat}
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up rounded-[1.75rem] bg-[#faf7f2] p-4 text-foreground">
              <LeadForm
                eyebrow="Start with one quick note"
                title="Tell us what kind of Napa weekend you want."
                description="No obligation. Jeff replies within 24 hours with the right next move."
                sourcePage="/"
                minHeight={420}
              />
            </div>
          </div>
          <TrustBar className="border-t border-white/10 px-6 py-5 text-primary-foreground md:px-14" />
        </div>
      </section>

      <section className="section-shell py-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5">
            <span className="text-sm tracking-[0.28em] text-primary uppercase">Brand Story</span>
            <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
              Napa feels better when one local expert handles the moving pieces.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Napa Pickleball Concierge was built for visitors who want the valley’s best without
              spending hours comparing hotels, reservation apps, transportation, and activity vendors.
            </p>
            <p className="text-lg leading-8 text-muted-foreground">
              Pickleball is still a signature experience, but the offer is bigger now: one trusted
              local contact for the full Napa itinerary.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <Card key={service.slug} className="border-primary/10 bg-white/80">
                <CardContent className="space-y-3 p-6">
                  <div className="h-2 w-14 rounded-full bg-accent" />
                  <h3 className="font-display text-2xl">{service.name}</h3>
                  <p className="text-muted-foreground">{service.hook}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="text-sm tracking-[0.28em] text-primary uppercase">Services</span>
            <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
              Eleven ways to make a Napa stay smoother, richer, and far more memorable.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/services">See the full concierge menu</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="section-shell py-12 md:py-20">
        <div className="rounded-[2rem] border border-primary/10 bg-white/85 p-8 md:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-sm tracking-[0.28em] text-primary uppercase">Trust</span>
              <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
                Guests get the valley’s rhythm without managing the valley’s logistics.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Proof, local context, and a real 24-hour response promise help turn interest into inquiries.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceTestimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-primary/10 bg-[#fffdf9]">
                <CardContent className="space-y-4 p-6">
                  <p className="text-lg leading-8 text-foreground">“{testimonial.quote}”</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.context}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 pt-4 md:pb-24">
        <div className="hero-panel overflow-hidden rounded-[2rem] px-6 py-12 text-primary-foreground md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <span className="text-sm tracking-[0.28em] uppercase text-primary-foreground/70">
                Final CTA
              </span>
              <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
                Start with the trip you want. Jeff handles the details from there.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-primary-foreground/80">
                Whether you already know the must-haves or need a clean slate, one inquiry is enough
                to begin building the right Napa experience.
              </p>
            </div>
            <Button asChild size="lg" variant="gold">
              <Link href="/book">Start Planning Your Napa Experience</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
