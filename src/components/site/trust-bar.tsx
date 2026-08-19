import { cn } from "@/lib/utils";

type TrustBarProps = {
  className?: string;
  items?: string[];
};

const defaultItems = ["Napa & Sonoma Wine Country", "Locally Curated", "24-Hour Response"];

export function TrustBar({ className, items = defaultItems }: TrustBarProps) {
  return (
    <div className={cn("flex flex-wrap gap-3 text-sm uppercase tracking-[0.18em]", className)}>
      {items.map((item, index) => (
        <span key={item} className="flex items-center gap-3">
          <span>{item}</span>
          {index < items.length - 1 ? <span className="text-accent opacity-70">|</span> : null}
        </span>
      ))}
    </div>
  );
}
