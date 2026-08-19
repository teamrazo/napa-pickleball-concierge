import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plane, Building2, UtensilsCrossed, Train, Bike, Wind, Waves, Wine, Activity, Mountain, Car, Home, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/site-data";

const serviceIcons: Record<string, React.ElementType> = {
  "airport-pickup":           Plane,
  "car-services":             Car,
  "hotel-reservations":       Building2,
  "restaurant-bookings":      UtensilsCrossed,
  "wine-tours":               Wine,
  "private-cave-experiences": MapPin,
  "wine-train":               Train,
  "airbnb-vrbo-services":     Home,
  "boat-rides":               Waves,
  "bicycle-rides":            Bike,
  "balloon-rides":            Wind,
  "pickleball-carneros":      Activity,
  "hiking-trails":            Mountain,
};

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const Icon = serviceIcons[service.slug] ?? Wine;
  return (
    <div className={cn("glass-card rounded-2xl overflow-hidden flex flex-col card-lift", className)}>
      <div className="relative h-44 w-full overflow-hidden shrink-0">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/35 to-transparent" />
        <span className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-white/90 font-medium">
          {service.eyebrow}
        </span>
      </div>
      <div className="flex flex-col flex-1 space-y-4 p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-primary/10 p-2.5 shrink-0">
            <Icon className="size-5 text-primary" />
          </div>
          <div className="space-y-1.5 min-w-0">
            <h3 className="font-display text-xl font-semibold text-balance">{service.name}</h3>
            <p className="text-sm leading-6 text-muted-foreground">{service.hook}</p>
          </div>
        </div>
        <Button asChild variant="outline" className="w-full justify-between mt-auto btn-bounce">
          <Link href={`/services/${service.slug}`}>
            Learn More
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
