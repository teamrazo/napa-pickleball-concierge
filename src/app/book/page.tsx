import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { ConciergeForm } from "@/components/site/concierge-form";
import { TrustBar } from "@/components/site/trust-bar";

export const metadata = buildMetadata({
  title: "Book a Concierge Call",
  description: "Tell us what you need and we'll handle the rest. One call. Your entire Napa Valley experience planned.",
  path: "/book",
});

export default function BookPage() {
  return (
    <main id="main-content">
      <section className="relative min-h-[100dvh] flex items-center">
        {/* Full-bleed vineyard background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-vineyard.jpg"
            alt="Napa Valley vineyard at golden hour"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/65" />
          {/* Gold accent radial */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 75% 20%, rgba(201,168,76,0.5), transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <p className="text-xs uppercase tracking-widest text-[#C9A84C]">Napa Concierge</p>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
                Your Napa Valley,<br />Handled.
              </h1>
              <p className="text-lg text-white/75 leading-relaxed">
                Tell us what you have in mind — airport pickup, dinner reservations, a wine tour, or all of the above. We&apos;ll take it from there.
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                {[
                  "Response within 24 hours",
                  "Locally curated, personally arranged",
                  "10 curated services across Napa Valley",
                  "No booking fees",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur p-6 lg:p-8">
              <p className="text-xs uppercase tracking-widest text-[#C9A84C] mb-1">Get in touch</p>
              <h2 className="font-display text-xl font-semibold text-white mb-4">Plan my Napa experience</h2>
              <ConciergeForm service="general-inquiry" />
            </div>
          </div>
        </div>

        <TrustBar
          className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-black/20 px-6 py-4 text-white"
          items={["Napa Valley Certified", "Locally Curated", "Book in 24 Hours"]}
        />
      </section>
    </main>
  );
}
