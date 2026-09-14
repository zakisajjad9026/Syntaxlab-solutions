"use client";

import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Card, CardBadge } from "@/components/ui/card";
import { SectionReveal } from "@/components/animation/motion-primitives";
import type { TestimonialItem } from "@/lib/types";

interface TestimonialsSectionProps {
  testimonials?: TestimonialItem[];
}

export function TestimonialsSection({ testimonials = [] }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="bg-background py-14 md:py-18" id="testimonials">
      <Container className="px-6 md:px-16">
        <SectionReveal>
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-3 border-b border-border pb-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                <TechnicalLabel className="text-accent">CLIENT VALIDATION & OUTCOMES</TechnicalLabel>
              </div>
              <h2 className="type-section-title-compact mt-3 text-foreground">
                Engineered for Tangible Impact
              </h2>
              <p className="type-body mt-2 max-w-xl text-muted-foreground">
                Real feedback and verified business results from founders, operators, and engineering teams we partner with.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="size-4 fill-current text-accent" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <TechnicalLabel className="text-muted-foreground">5.0 CLIENT RATING</TechnicalLabel>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch auto-rows-fr">
            {testimonials.map((item) => (
              <Card
                key={item.id}
                variant="interactive"
                padding="lg"
                className="flex flex-col justify-between h-full group transition-all duration-300 hover:border-accent/60 hover:shadow-[0_8px_32px_rgba(196,114,68,0.12)]"
              >
                <div>
                  {/* Card Top Row: Metric & Stars */}
                  <div className="flex items-center justify-between border-b border-border/70 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-success bg-success/10 px-2.5 py-1 rounded border border-success/30">
                        {item.metric}
                      </span>
                      <span className="font-mono text-[10.5px] text-muted-foreground tracking-tight">
                        {item.metricLabel}
                      </span>
                    </div>
                    <CardBadge>{item.projectRef}</CardBadge>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="type-body mt-5 text-foreground leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Client Profile Footer */}
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3.5">
                  <div className="flex size-10 items-center justify-center rounded-full border border-accent/40 bg-accent/15 font-mono text-xs font-bold text-accent shadow-xs group-hover:border-accent transition-colors">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-foreground tracking-tight">
                      {item.client}
                    </h4>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {item.role} • <span className="text-foreground/80">{item.company}</span>
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust Banner Callout */}
          <div className="mt-8 rounded-xl border border-border/80 bg-surface-elevated/70 p-4.5 sm:p-5 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg border border-accent/40 bg-accent/15 text-accent font-mono text-xs font-bold">
                ✓
              </span>
              <div>
                <p className="font-sans text-xs font-semibold text-foreground">
                  Full Codebase Ownership & Zero Platform Vendor Lock-in
                </p>
                <p className="font-mono text-[10.5px] text-muted-foreground">
                  Every line of production code, database schema, and deployment pipeline belongs 100% to your company.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-accent shrink-0">
              <span className="size-2 rounded-full bg-accent animate-ping" />
              <span>DIRECT SENIOR ENG ACCESS</span>
            </div>
          </div>
        </SectionReveal>
      </Container>
      <Container className="px-6 md:px-16 mt-14 md:mt-18">
        <Divider />
      </Container>
    </section>
  );
}
