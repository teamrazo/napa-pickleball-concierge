import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type LeadFormProps = {
  eyebrow: string;
  title: string;
  description: string;
  sourcePage: string;
  minHeight?: number;
};

export function LeadForm({
  eyebrow,
  title,
  description,
  sourcePage,
  minHeight = 420,
}: LeadFormProps) {
  return (
    <Card className="border-primary/10 bg-[#fffdf9]">
      <CardHeader className="space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
        <CardTitle className="font-display text-3xl leading-tight text-foreground">{title}</CardTitle>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className="overflow-hidden rounded-[1.25rem] border border-primary/10 bg-background"
          style={{ minHeight }}
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/napa-pickleball-lead"
            style={{ width: "100%", height: "100%", border: "none" }}
            scrolling="no"
            title={`Napa Pickleball Concierge lead form for ${sourcePage}`}
            loading="lazy"
          />
        </div>
        <div className="rounded-[1rem] border border-primary/10 bg-secondary/60 px-4 py-3 text-sm text-muted-foreground">
          Hosted GHL form placeholder connected for <strong>{sourcePage}</strong>. Service-specific IDs and
          hidden attribution fields can be swapped in post-build.
        </div>
      </CardContent>
    </Card>
  );
}
