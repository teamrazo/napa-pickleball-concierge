import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { ConciergeForm } from "@/components/site/concierge-form";
import { TrustBar } from "@/components/site/trust-bar";

export const metadata = buildMetadata({
  title: "Book a Concierge Call",
  description: "Tell us what you need and our team will handle the rest. One call. Your entire Napa and Sonoma Wine Country experience planned.",
  path: "/book",
});

const guarantees = [
  "Response within 24 hours",
  "Locally curated, personally arranged",
  "Napa & Sonoma Wine Country coverage",
  "No booking fees",
];

export default function BookPage() {
  return (
    <main id="main-content">
      <section className="relative min-h-[100dvh] flex items-center">
        {/* Full-bleed vineyard background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-vineyard.jpg"
            alt="Napa Valley vineyard rows at golden hour"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/80" />
          {/* Gold accent radial */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background:
                "radial-gradient(circle at 75% 20%, rgba(201,168,76,0.5), transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: value proposition */}
            <div className="text-white space-y-6">
              <p className="text-xs uppercase tracking-widest text-[#C9A84C]">Napa &amp; Sonoma Wine Country Concierge</p>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
                Your Wine Country,<br />Handled.
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Tell our team what you have in mind — car services, a private cave tasting, dinner reservations, an Airbnb stocked on arrival, or all of the above. We&apos;ll take it from there.
              </p>
              <ul className="space-y-3 text-sm text-white/75">
                {guarantees.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#C9A84C] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: inquiry form */}
            <div className="rounded-2xl border border-white/15 bg-black/35 backdrop-blur p-6 lg:p-8">
              <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-1">Get in touch</p>
              <h2 className="font-display text-xl font-semibold text-white mb-5">Plan my Wine Country experience</h2>
              <ConciergeForm service="general-inquiry" />
            </div>
          </div>
        </div>

        <TrustBar
          className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-black/25 px-6 py-4 text-white"
          items={["Napa Valley Certified", "Locally Curated", "Book in 24 Hours"]}
        />
      </section>
    </main>
  );
}
