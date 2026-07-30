import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/site/json-ld";
import { LeadForm } from "@/components/site/lead-form";
import { ServiceCard } from "@/components/site/service-card";
import { TrustBar } from "@/components/site/trust-bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug, services, siteUrl } from "@/lib/site-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: service.name,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    imagePath: `/services/${service.slug}/opengraph-image`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.related
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    areaServed: "Napa Valley",
    provider: {
      "@type": "LocalBusiness",
      name: "Napa Pickleball Concierge",
      email: "jeff@nvproperties.net",
      url: siteUrl,
    },
  };

  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />
      <section className="section-shell py-8 md:py-12">
        <div className="overflow-hidden rounded-[2rem] bg-[#2c2c2c] text-primary-foreground soft-ring">
          <div
            className="grid gap-8 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            style={{
              backgroundImage:
                "radial-gradient(circle at top left, rgba(201,168,76,0.22), transparent 28%), linear-gradient(140deg, rgba(107,39,55,0.97), rgba(44,44,44,0.96))",
            }}
          >
            <div className="space-y-6">
              <Badge variant="secondary" className="rounded-full border border-white/15 bg-white/10 text-primary-foreground">
                {service.eyebrow}
              </Badge>
              <div className="space-y-4">
                <h1 className="font-display max-w-3xl text-5xl font-semibold text-balance md:text-6xl">
                  {service.heroTitle}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-primary-foreground/80">
                  {service.subheadline}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/[0.12] bg-white/[0.08] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-primary-foreground/70">Why guests inquire</p>
                <p className="mt-3 text-lg leading-8 text-primary-foreground/85">{service.intro}</p>
              </div>
            </div>
            <div className="rounded-[1.75rem] bg-[#faf7f2] p-4 text-foreground">
              <LeadForm
                eyebrow="No-obligation inquiry"
                title={`Ask about ${service.name.toLowerCase()}`}
                description="Share your dates, guest count, and what matters most. Jeff replies within 24 hours."
                sourcePage={`/services/${service.slug}`}
                minHeight={430}
              />
            </div>
          </div>
          <TrustBar
            className="border-t border-white/10 px-6 py-5 text-primary-foreground md:px-10"
            items={["Napa Valley Certified", "Locally Curated", "Book in 24 Hours"]}
          />
        </div>
      </section>

      <section className="section-shell py-10 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-primary/10 bg-white/85">
            <CardContent className="p-8">
              <div className="mb-5 space-y-3">
                <span className="text-sm tracking-[0.28em] text-primary uppercase">What&apos;s Included</span>
                <h2 className="font-display text-3xl font-semibold md:text-4xl">
                  A cleaner way to get the right details handled.
                </h2>
              </div>
              <ul className="space-y-4 text-base leading-7 text-muted-foreground">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-primary/10 bg-white/85">
            <CardContent className="p-8">
              <div className="mb-5 space-y-3">
                <span className="text-sm tracking-[0.28em] text-primary uppercase">How It Works</span>
                <h2 className="font-display text-3xl font-semibold md:text-4xl">Inquire. We Plan. You Enjoy.</h2>
              </div>
              <div className="grid gap-4">
                {[
                  {
                    step: "01",
                    title: "Inquire",
                    description: "Share your dates, priorities, and any must-have experiences.",
                  },
                  {
                    step: "02",
                    title: "We Plan",
                    description: "Jeff curates the best-fit options and replies within 24 hours.",
                  },
                  {
                    step: "03",
                    title: "You Enjoy",
                    description: "Arrive knowing the details are already aligned for your group.",
                  },
                ].map((item) => (
                  <div key={item.step} className="rounded-[1.5rem] border border-primary/10 bg-[#fffdf9] p-5">
                    <div className="text-sm tracking-[0.24em] text-primary uppercase">{item.step}</div>
                    <h3 className="mt-2 text-2xl font-display">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-shell py-4 md:py-8">
        <Card className="border-primary/10 bg-[#fffdf9]">
          <CardContent className="grid gap-6 p-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div className="space-y-3">
              <span className="text-sm tracking-[0.28em] text-primary uppercase">Guest Perspective</span>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">Testimonial placeholder</h2>
            </div>
            <blockquote className="text-xl leading-9 text-foreground">
              “Jeff made Napa feel effortless. The reservations fit us perfectly, the timing was smooth,
              and we spent our weekend enjoying the valley instead of coordinating it.”
              <footer className="mt-4 text-base text-muted-foreground">Future guest quote</footer>
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="mb-8 space-y-4">
          <span className="text-sm tracking-[0.28em] text-primary uppercase">Related Services</span>
          <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
            Round out the trip with a few smart additions.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedServices.map((relatedService) => (
            <ServiceCard key={relatedService.slug} service={relatedService} />
          ))}
        </div>
      </section>

      <section className="section-shell pb-16 pt-2 md:pb-24">
        <div className="hero-panel rounded-[2rem] px-6 py-12 text-primary-foreground md:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <span className="text-sm tracking-[0.28em] uppercase text-primary-foreground/70">
                Final CTA
              </span>
              <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
                Start planning your Napa experience with one easy inquiry.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-primary-foreground/80">
                Share the basics, ask the questions, and let Jeff map out the right next step for your group.
              </p>
            </div>
            <Button asChild size="lg" variant="gold">
              <Link href="/book">Go to the Concierge Call Page</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
