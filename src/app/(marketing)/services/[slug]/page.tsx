import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { ConciergeForm } from "@/components/site/concierge-form";
import { ServiceCard } from "@/components/site/service-card";
import { TrustBar } from "@/components/site/trust-bar";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug, services, siteUrl } from "@/lib/site-data";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
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
  if (!service) notFound();

  const relatedServices = service.related
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    areaServed: ["Napa Valley", "Sonoma County"],
    provider: {
      "@type": "LocalBusiness",
      name: "Napa Concierge",
      email: "jeff@nvproperties.net",
      url: siteUrl,
    },
  };

  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />

      {/* HERO — full viewport with real photo background */}
      <section className="relative min-h-[100dvh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/72 via-black/55 to-black/62" />
          {/* Gold accent radial */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.5), transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: content */}
            <div className="space-y-6 text-white">
              <Badge className="rounded-full border border-white/20 bg-white/10 text-white text-xs uppercase tracking-widest">
                {service.eyebrow}
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                {service.heroTitle}
              </h1>
              <p className="text-lg text-white/82 leading-relaxed max-w-xl">
                {service.subheadline}
              </p>

              {/* Intro paragraph */}
              <p className="text-base text-white/70 leading-relaxed max-w-xl">
                {service.intro}
              </p>

              {/* What you get */}
              <div className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur px-5 py-5 space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-1">What you get</p>
                <ul className="space-y-2.5">
                  {service.whatYouGet.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                      <CheckCircle2 className="size-4 text-[#C9A84C] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <blockquote className="border-l-2 border-[#C9A84C] pl-4">
                <p className="text-sm text-white/68 italic leading-relaxed">&ldquo;{service.testimonial.quote}&rdquo;</p>
                <footer className="mt-2 text-xs text-white/45">
                  &mdash; {service.testimonial.name}, {service.testimonial.context}
                </footer>
              </blockquote>
            </div>

            {/* Right: form */}
            <div className="rounded-2xl border border-white/15 bg-black/32 backdrop-blur p-6 lg:p-8">
              <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-1">No-obligation inquiry</p>
              <h2 className="font-display text-xl font-semibold text-white mb-4">
                Ask our team about {service.name.toLowerCase()}
              </h2>
              <ConciergeForm service={service.slug} />
            </div>
          </div>
        </div>

        <TrustBar
          className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-black/22 px-6 py-4 text-white"
          items={["Napa & Sonoma Wine Country", "Locally Curated", "Book in 24 Hours"]}
        />
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-shell py-16">
          <h2 className="font-display text-3xl font-semibold mb-8">You might also love</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((svc) => (
              <ServiceCard key={svc.slug} service={svc} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
