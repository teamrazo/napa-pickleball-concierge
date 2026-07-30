import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Napa Concierge, including contact form handling, hosted GHL forms, and analytics consent expectations.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main-content" className="section-shell py-12 md:py-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-primary/10 bg-white/85 p-8 md:p-12">
        <div className="mb-8 space-y-4">
          <span className="text-sm tracking-[0.28em] text-primary uppercase">Privacy Policy</span>
          <h1 className="font-display text-4xl font-semibold text-balance md:text-5xl">
            Your inquiry information is used to help plan your Napa experience.
          </h1>
        </div>
        <div className="prose-copy space-y-6">
          <p>
            Napa Concierge collects the information you submit through hosted forms so Jeff
            can respond to your inquiry, coordinate requested services, and follow up about your Napa Valley plans.
          </p>
          <p>
            Form submissions are routed through GoHighLevel-hosted embeds and may include your name,
            email, phone number, travel timing, and planning notes. That information is used only for
            concierge communication, itinerary coordination, and service follow-up.
          </p>
          <p>
            If analytics or tag management tools are activated after launch, they should remain gated by
            cookie consent. This starter site includes a consent banner and assumes tracking scripts will
            be connected later through Google Tag Manager.
          </p>
          <p>
            To request an update or deletion of your submitted information, email{" "}
            <a className="text-primary underline-offset-4 hover:underline" href="mailto:jeff@nvproperties.net">
              jeff@nvproperties.net
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
