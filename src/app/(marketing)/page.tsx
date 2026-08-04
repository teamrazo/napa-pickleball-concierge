import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, MapPin, PhoneCall } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { ConciergeForm } from "@/components/site/concierge-form";
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

const outcomeItems = [
  {
    icon: CalendarCheck,
    headline: "Zero planning stress",
    body: "One inquiry covers wine tours, dining, transport, and activities.",
  },
  {
    icon: MapPin,
    headline: "Insider access",
    body: "The caves, tasting rooms, and tables most visitors never reach.",
  },
  {
    icon: PhoneCall,
    headline: "One call covers everything",
    body: "24-hour response guarantee. Jeff handles every moving piece.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Napa Concierge",
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

      {/* HERO */}
      <section className="py-8 md:py-12">
        <div className="hero-panel soft-ring overflow-hidden text-primary-foreground min-h-[92vh]">
          <div className="grid gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-14">
            <div className="fade-up space-y-7">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs tracking-[0.3em] uppercase">
                Napa Valley Lifestyle Concierge
              </span>
              <div className="space-y-5">
                <h1 className="font-display max-w-3xl text-5xl font-semibold text-balance md:text-7xl">
                  The insider's way to do Napa without doing all the planning.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-primary-foreground/80 md:text-xl">
                  Jeff curates the tables, tastings, transfers, and experiences that turn a Napa trip into something effortless.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="gold" className="btn-shimmer">
                  <Link href="/book">Book a Concierge Call</Link>
                </Button>
                <Button asChild size="lg" variant="soft">
                  <Link href="/services">Explore All Services</Link>
                </Button>
              </div>
            </div>
            <div className="fade-up rounded-[1.75rem] bg-[#faf7f2] p-4 text-foreground">
              <ConciergeForm service="general-inquiry" />
            </div>
          </div>
          <TrustBar className="border-t border-white/10 px-6 py-5 text-primary-foreground md:px-14" />
        </div>
      </section>

      {/* OUTCOMES STRIP */}
      <section className="section-shell py-10 md:py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {outcomeItems.map((item) => (
            <div
              key={item.headline}
              className="rounded-2xl border border-primary/10 bg-white/80 px-6 py-6 flex items-start gap-4"
            >
              <div className="rounded-xl bg-primary/10 p-3 shrink-0">
                <item.icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{item.headline}</h3>
                <p className="text-sm text-muted-foreground leading-6">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY SECTION — image + outcome-led copy */}
      <section className="section-shell py-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-5">
            <span className="text-sm tracking-[0.28em] text-primary uppercase">Why it works</span>
            <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
              You get the Napa you imagined — not the one you had to piece together.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              One local expert handles every piece: the right hotel, the table you couldn't get, the balloon at sunrise, the private wine cave. You arrive and it's already done.
            </p>
            <p className="text-lg leading-8 text-muted-foreground">
              Jeff Forcier has spent years building the relationships that get guests where they want to be — from SFO to a French Laundry table to a Carneros pickleball court, all in one seamless trip.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden h-48 col-span-2">
              <Image
                src="/images/napa-valley.jpg"
                alt="Napa Valley vineyards"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-36">
              <Image
                src="/images/wine.jpg"
                alt="Napa wine tasting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-36">
              <Image
                src="/images/balloon.jpg"
                alt="Hot air balloon over Napa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-shell py-12 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="text-sm tracking-[0.28em] text-primary uppercase">Services</span>
            <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
              Eleven ways to make Napa smoother, richer, and far more memorable.
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

      {/* TESTIMONIALS */}
      <section className="section-shell py-12 md:py-20">
        <div className="rounded-[2rem] border border-primary/10 bg-white/85 p-8 md:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="text-sm tracking-[0.28em] text-primary uppercase">Guest Outcomes</span>
              <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
                Real guests. Real results.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              When you hand off the logistics, you get to be fully present for the experience.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceTestimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-primary/10 bg-[#fffdf9]">
                <CardContent className="space-y-4 p-6">
                  <p className="text-lg leading-8 text-foreground">"{testimonial.quote}"</p>
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

      {/* FINAL CTA */}
      <section className="section-shell pb-16 pt-4 md:pb-24">
        <div className="hero-panel overflow-hidden rounded-[2rem] px-6 py-12 text-primary-foreground md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
                Start with the trip you want. Jeff handles the details from there.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-primary-foreground/80">
                One inquiry is enough to begin building the right Napa experience.
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
