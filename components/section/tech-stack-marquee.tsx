"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import type { TechItem } from "@/lib/types";

interface TechStackMarqueeProps {
  items?: TechItem[];
}

export function TechStackMarquee({ items = [] }: TechStackMarqueeProps) {
  if (!items || items.length === 0) return null;

  // Duplicate items to ensure seamless continuous loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-border/80 bg-surface/60 py-7 backdrop-blur-xs">
      <Container className="px-6 md:px-16 mb-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            <TechnicalLabel className="text-accent text-[11px] font-semibold tracking-widest">
              TECHNOLOGY STACK & INFRASTRUCTURE
            </TechnicalLabel>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            ENGINEERED FOR SPEED, SCALE & FULL OWNERSHIP
          </span>
        </div>
      </Container>

      {/* Marquee Wrapper with left and right gradient masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-3.5 hover:[animation-play-state:paused] py-1">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.id}-${idx}`}
              className="group relative flex items-center gap-3 rounded-lg border border-border/70 bg-surface-elevated/80 px-4 py-2.5 transition-all duration-300 hover:border-accent/60 hover:bg-surface-elevated hover:shadow-[0_4px_20px_rgba(196,114,68,0.12)]"
            >
              {/* Status indicator dot */}
              <div className="flex size-7 items-center justify-center rounded-md border border-border/60 bg-background/80 font-mono text-[11px] font-bold text-accent group-hover:border-accent/50 group-hover:text-foreground transition-colors">
                {tech.name.slice(0, 2).toUpperCase()}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {tech.name}
                  </span>
                  <span className="rounded-full bg-border/60 px-1.5 py-0.2 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                    {tech.category}
                  </span>
                </div>
                {tech.highlight && (
                  <span className="font-mono text-[10px] text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                    {tech.highlight}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
