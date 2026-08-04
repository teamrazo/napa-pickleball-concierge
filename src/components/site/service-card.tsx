import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="card-lift overflow-hidden border-primary/10 bg-white/85">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-white/90 font-medium">
          {service.eyebrow}
        </span>
      </div>
      <CardContent className="space-y-5 p-6">
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-semibold text-balance">{service.name}</h3>
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
