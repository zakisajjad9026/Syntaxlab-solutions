import type { PricingPlan } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardBadge } from "@/components/ui/card";
import { IconCheck } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function PricingCard({
  tierTag,
  name,
  subtitle,
  recommendedTag,
  features,
  cta,
  featured,
}: PricingPlan) {
  return (
    <Card
      as="article"
      variant={featured ? "featured" : "interactive"}
      padding="lg"
      className={cn(
        "flex flex-col justify-between h-full transition-all duration-300 hover:border-accent/60",
        featured && "border-accent bg-surface-elevated/95 shadow-[0_12px_40px_rgba(196,114,68,0.18)]"
      )}
    >
      <div>
        {/* Top Tag & Badge */}
        <div className="flex items-center justify-between border-b border-border/60 pb-3 font-mono text-[10.5px]">
          <span className={cn("font-semibold uppercase tracking-wider", featured ? "text-accent" : "text-muted-foreground")}>
            {tierTag}
          </span>
          {recommendedTag ? (
            <CardBadge>{recommendedTag.replace(/^\/\/\s*/, "")}</CardBadge>
          ) : (
            <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-mono">FIXED SCOPE</span>
          )}
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-normal text-foreground md:text-2xl">{name}</h3>
        <p className="type-body-sm mt-2 text-muted-foreground">{subtitle}</p>

        {/* Section divider */}
        <div className="my-5 border-t border-border/60 pt-4 font-mono text-[9.5px] uppercase tracking-[0.14em] text-accent font-semibold flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-accent inline-block" />
          <span>INCLUDED CAPABILITIES</span>
        </div>

        <ul className="type-body-sm space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent mt-0.5">
                <IconCheck className="size-2.5" />
              </span>
              <span className="font-medium text-foreground/90">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-4 border-t border-border/40">
        <Button className="w-full" label={cta.label} variant={featured ? "primary" : "secondary"} href={cta.href} />
      </div>
    </Card>
  );
}

