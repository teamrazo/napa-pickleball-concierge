import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="section-shell flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center"
    >
      <span className="rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm tracking-[0.2em] text-primary uppercase">
        Page Not Found
      </span>
      <h1 className="font-display max-w-2xl text-4xl font-semibold text-balance text-foreground md:text-6xl">
        Napa still has the itinerary. This page just missed the pickup.
      </h1>
      <p className="max-w-xl text-lg leading-8 text-muted-foreground">
        Head back to the concierge desk, browse the service menu, or book a call and let our concierge team point
        you in the right direction.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/book">Book a Concierge Call</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/services">Browse Services</Link>
        </Button>
      </div>
    </main>
  );
}
