import { notFound } from "next/navigation";
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

const gradients: Record<string, string> = {
  "airport-pickup":      "from-slate-800 to-slate-600",
  "hotel-reservations":  "from-amber-900 to-amber-700",
  "restaurant-bookings": "from-rose-900 to-rose-700",
  "train-rides":         "from-stone-800 to-stone-600",
  "bicycle-rides":       "from-green-900 to-green-700",
  "balloon-rides":       "from-sky-800 to-sky-600",
  "boat-rides":          "from-blue-900 to-blue-700",
  "wine-tours":          "from-purple-900 to-purple-700",
  "pickleball-carneros": "from-[#6B2737] to-[#2C2C2C]",
  "hiking-trails":       "from-emerald-900 to-emerald-700",
  "wine-train":          "from-red-900 to-red-700",
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const gradient = gradients[service.slug] ?? "from-[#6B2737] to-[#2C2C2C]";

  const relatedServices = service.related
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    areaServed: "Napa Valley",
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

      {/* HERO — full viewport, form above fold */}
      <section
        className={`relative min-h-[100dvh] flex items-center bg-gradient-to-br ${gradient}`}
        style={{
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(201,168,76,0.18), transparent 40%), var(--tw-gradient-stops)`,
        }}
      >
        {/* Gold accent shape */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-20"
          style={{
            background: "conic-gradient(from 135deg at 100% 0%, #C9A84C, transparent 40%)",
          }}
        />
        {/* Dot pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

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
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                {service.subheadline}
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Why guests inquire</p>
                <p className="text-base text-white/80 leading-relaxed">{service.intro}</p>
              </div>
            </div>

            {/* Right: form — always visible without scrolling */}
            <div className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur p-6 lg:p-8">
              <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-1">No-obligation inquiry</p>
              <h2 className="font-display text-xl font-semibold text-white mb-4">
                Ask about {service.name.toLowerCase()}
              </h2>
              <ConciergeForm service={service.slug} />
            </div>
          </div>
        </div>

        <TrustBar
          className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-black/20 px-6 py-4 text-white"
          items={["Napa Valley Certified", "Locally Curated", "Book in 24 Hours"]}
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
