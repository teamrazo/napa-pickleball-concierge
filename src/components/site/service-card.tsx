import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/lib/site-data";

const serviceIcons: Record<string, string> = {
  "airport-pickup": "✈️",
  "hotel-reservations": "🏨",
  "restaurant-bookings": "🍽️",
  "train-rides": "🚂",
  "bicycle-rides": "🚴",
  "balloon-rides": "🎈",
  "boat-rides": "⛵",
  "wine-tours": "🍷",
  "pickleball-carneros": "🎾",
  "hiking-trails": "🥾",
  "wine-train": "🚂",
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="card-lift overflow-hidden border-primary/10 bg-white/85">
      <div
        className="h-32 w-full rounded-xl mb-4 flex items-center justify-center text-6xl"
        style={{ backgroundColor: 'rgba(107, 39, 55, 0.15)' }}
      >
        {serviceIcons[service.slug]}
      </div>
      <CardContent className="space-y-5 p-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-primary">{service.eyebrow}</p>
          <h3 className="font-display text-3xl font-semibold text-balance">{service.name}</h3>
          <p className="text-base leading-7 text-muted-foreground">{service.hook}</p>
        </div>
        <Button asChild variant="outline" className="w-full justify-between">
          <Link href={`/services/${service.slug}`}>
            Learn More
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
