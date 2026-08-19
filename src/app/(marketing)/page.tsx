import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, MapPin, Users, Wine, Map, Navigation, Waves, Bike, Mountain, Train, Home, Star } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { ConciergeForm } from "@/components/site/concierge-form";
import { ServiceCard } from "@/components/site/service-card";
import { TrustBar } from "@/components/site/trust-bar";
import { MorphingBg } from "@/components/site/morphing-bg";
import { ParallaxHero } from "@/components/site/parallax-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/metadata";
import { serviceTestimonials, services, siteUrl } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Napa & Sonoma Wine Country Concierge",
  description:
    "Plan a better Napa and Sonoma trip with our local concierge team — wine cave experiences, restaurant reservations, car services, river cruises, pickleball, and more.",
  path: "/",
});

const outcomeItems = [
  {
    icon: CalendarCheck,
    headline: "Zero planning stress",
    body: "One inquiry covers wine experiences, dining, car services, and activities across Napa and Sonoma.",
  },
  {
    icon: MapPin,
    headline: "Insider access",
    body: "Private caves, family-run estates, and tables most visitors never reach — curated by locals who know.",
  },
  {
    icon: Users,
    headline: "One team covers everything",
    body: "24-hour response guarantee. Our concierge team handles every moving piece from arrival to departure.",
  },
];

const serviceHighlights = [
  {
    icon: Wine,
    label: "Winery & Cave Experiences",
    desc: "Iconic estates, hidden-gem family vineyards, and exclusive private caves.",
    href: "/services/wine-tours",
  },
  {
    icon: Navigation,
    label: "Car Services",
    desc: "Designated driver in your vehicle or luxury chauffeured car for up to 4 guests.",
    href: "/services/car-services",
  },
  {
    icon: Waves,
    label: "Napa River Boat Cruises",
    desc: "Electric boat cruises with wine and charcuterie from Carneros and Cuttings Wharf.",
    href: "/services/boat-rides",
  },
  {
    icon: Bike,
    label: "Biking Across Wine Country",
    desc: "Guided and unguided routes through Carneros, Yountville, Calistoga, and Napa.",
    href: "/services/bicycle-rides",
  },
  {
    icon: Home,
    label: "Airbnb & VRBO Services",
    desc: "Pre-arrival pantry stocking, kitchen setup, catering, and delivery coordination.",
    href: "/services/airbnb-vrbo-services",
  },
  {
    icon: Train,
    label: "Napa Valley Wine Train",
    desc: "36 miles of scenic rail with gourmet dining — reservations and upgrades handled.",
    href: "/services/wine-train",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Napa Concierge",
    email: "info@napasonomawinecountryconcierge.com",
    url: siteUrl,
    description:
      "Wine country concierge planning for Napa Valley and Sonoma visitors seeking curated experiences.",
    areaServed: ["Napa Valley", "Sonoma County"],
    serviceArea: {
      "@type": "Place",
      name: "Napa Valley and Sonoma Wine Country",
    },
  };

  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section className="py-8 md:py-12">
        <div className="hero-panel soft-ring overflow-hidden text-primary-foreground min-h-[92vh] relative">
          <MorphingBg />
          <div className="grid gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-14">
            <ParallaxHero>
              <div className="fade-up space-y-7">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs tracking-[0.3em] uppercase">
                  Napa &amp; Sonoma Wine Country Concierge
                </span>
                <div className="space-y-5">
                  <h1 className="kinetic-text font-display max-w-3xl text-5xl font-semibold text-balance md:text-7xl">
                    The insider&apos;s way to experience Wine Country without doing all the planning.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-primary-foreground/80 md:text-xl">
                    Our concierge team curates the tastings, private caves, car services, river cruises, and dining that turn a Napa or Sonoma trip into something effortless.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="gold" className="btn-shimmer btn-bounce">
                    <Link href="/book">Book a Concierge Call</Link>
                  </Button>
                  <Button asChild size="lg" variant="soft">
                    <Link href="/services">Explore All Services</Link>
                  </Button>
                </div>
              </div>
            </ParallaxHero>
            <div className="fade-up rounded-[1.75rem] bg-[#faf7f2]/95 border border-white/30 shadow-2xl shadow-black/20 p-4 text-foreground backdrop-blur-sm">
              <ConciergeForm service="general-inquiry" dark />
            </div>
          </div>
          <TrustBar className="border-t border-white/10 px-6 py-5 text-primary-foreground md:px-14" />
        </div>
      </section>

      {/* OUTCOMES STRIP */}
      <section className="section-shell py-10 md:py-14 scroll-morph">
        <div className="grid gap-6 sm:grid-cols-3">
          {outcomeItems.map((item) => (
            <div
              key={item.headline}
              className="glass-card rounded-2xl px-6 py-6 flex items-start gap-4"
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

      {/* STORY SECTION */}
      <section className="section-shell py-12 md:py-20 scroll-morph">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-5">
            <span className="text-sm tracking-[0.28em] text-primary uppercase">Why it works</span>
            <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
              You get the Wine Country experience you imagined — not the one you had to piece together.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              One local concierge team handles every piece: the right hotel, the table you couldn&apos;t get, the balloon at sunrise, the private wine cave, the designated driver, the pre-stocked Airbnb. You arrive and it&apos;s already done.
            </p>
            <p className="text-lg leading-8 text-muted-foreground">
              Our team has spent years building the relationships that get guests where they want to be — from SFO to a French Laundry table to a private cave tasting, all in one seamless trip across Napa and Sonoma.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden h-52 col-span-2">
              <Image
                src="/images/napa-valley.jpg"
                alt="Napa Valley vineyards at golden hour"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-40">
              <Image
                src="/images/wine.jpg"
                alt="Napa wine tasting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-40">
              <Image
                src="/images/balloon.jpg"
                alt="Hot air balloon over Napa Valley"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS GRID */}
      <section className="section-shell py-12 md:py-16 scroll-morph">
        <div className="mb-10 space-y-4 max-w-2xl">
          <span className="text-sm tracking-[0.28em] text-primary uppercase">What We Arrange</span>
          <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
            Wine Country, fully handled — from the first glass to the last mile.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceHighlights.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="glass-card rounded-2xl p-6 flex gap-4 items-start card-lift group"
            >
              <div className="rounded-xl bg-primary/10 p-3 shrink-0">
                <item.icon className="size-5 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-display font-semibold text-base group-hover:text-primary transition-colors">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-6">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES BENTO GRID */}
      <section className="section-shell py-12 md:py-20 scroll-morph">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="text-sm tracking-[0.28em] text-primary uppercase">Full Service Menu</span>
            <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
              Thirteen ways to make Wine Country smoother, richer, and far more memorable.
            </h2>
          </div>
          <Button asChild variant="outline" className="btn-bounce shrink-0">
            <Link href="/services">See the full concierge menu</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            >
              <ServiceCard service={service} className="h-full" />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — horizontal scroll */}
      <section className="section-shell py-12 md:py-20 scroll-morph">
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
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0">
          {serviceTestimonials.map((testimonial) => (
            <Card key={testimonial.name} className="glass-card border-0 shrink-0 w-[85vw] sm:w-[60vw] lg:w-auto snap-start">
              <CardContent className="space-y-4 p-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg leading-8 text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.context}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-shell pb-16 pt-4 md:pb-24 scroll-morph">
        <div className="hero-panel overflow-hidden rounded-[2rem] px-6 py-12 text-primary-foreground md:px-10 relative">
          <MorphingBg />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
                Start with the trip you want. Our team handles the details from there.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-primary-foreground/80">
                One inquiry is enough to begin building your perfect Napa or Sonoma experience.
              </p>
            </div>
            <Button asChild size="lg" variant="gold" className="btn-bounce shrink-0">
              <Link href="/book">Start Planning Your Wine Country Experience</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
