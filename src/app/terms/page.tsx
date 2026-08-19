import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms of service for Napa Concierge covering inquiry handling, service coordination, and third-party experience providers.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main id="main-content" className="section-shell py-12 md:py-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-primary/10 bg-white/85 p-8 md:p-12">
        <div className="mb-8 space-y-4">
          <span className="text-sm tracking-[0.28em] text-primary uppercase">Terms of Service</span>
          <h1 className="font-display text-4xl font-semibold text-balance md:text-5xl">
            Concierge recommendations are curated for you, with final availability subject to each provider.
          </h1>
        </div>
        <div className="prose-copy space-y-6">
          <p>
            Napa Concierge provides planning support, local recommendations, and booking coordination
            for Napa Valley experiences. Submitting an inquiry does not guarantee a reservation until availability
            is confirmed and any required third-party booking steps are completed.
          </p>
          <p>
            Concierge services may involve outside providers such as transportation companies, wineries,
            restaurants, hotels, and activity partners. Pricing, availability, cancellation policies, and
            service delivery remain subject to each provider’s terms.
          </p>
          <p>
            Napa Concierge aims to respond to new inquiries within 24 hours. Response timing may
            vary on holidays, peak travel weekends, or when a request requires confirmation from multiple vendors.
          </p>
          <p>
            For questions about these terms or a current inquiry, contact{" "}
            <a className="text-primary underline-offset-4 hover:underline" href="mailto:info@napasonomawinecountryconcierge.com">
              info@napasonomawinecountryconcierge.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
