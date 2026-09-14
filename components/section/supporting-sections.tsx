import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { PricingCard } from "@/components/ui/pricing-card";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Card, TestimonialCard } from "@/components/ui/card";
import { IconCheck, IconPerformance, IconSearch, IconPencil, IconCode, IconRocket } from "@/components/ui/icons";
import { SectionReveal, StaggerGroup } from "@/components/animation/motion-primitives";
import type { BenchmarkConfig, PricingPlan, ProcessStep as ProcessStepData } from "@/lib/types";

export function BusinessesSection({ benchmark }: { benchmark: BenchmarkConfig }) {
  return (
    <section className="bg-background" id="about">
      <Container className="px-6 py-14 md:py-16 md:px-16">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column — 5 cols */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <TechnicalLabel className="text-accent">{benchmark.eyebrow}</TechnicalLabel>
                <h2 className="type-section-title-compact mt-3 text-foreground">
                  {benchmark.title}
                </h2>
                <p className="type-body mt-3.5 text-muted-foreground">
                  {benchmark.description}
                </p>
              </div>

              <div className="mt-8 space-y-3.5 border-t border-border pt-6">
                {benchmark.advantages.map((adv) => (
                  <Card
                    key={adv.number}
                    variant="interactive"
                    padding="sm"
                    className="p-4 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-semibold text-accent">{adv.number}</span>
                      <h3 className="type-card-title text-foreground transition-colors duration-200 group-hover:text-accent">
                        {adv.title}
                      </h3>
                    </div>
                    <p className="type-body-sm mt-1.5 text-muted-foreground">{adv.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column — Engineering Specification Comparison Table + Client Proof (7 cols) */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <Card variant="default" padding="md" className="backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border pb-3.5 font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <IconPerformance className="size-4 text-accent" />
                    <TechnicalLabel className="text-foreground">{benchmark.tableHeader}</TechnicalLabel>
                  </div>
                  <TechnicalLabel className="text-muted-foreground">{benchmark.auditTag}</TechnicalLabel>
                </div>

                {/* Table Column Labels */}
                <div className="grid grid-cols-12 border-b border-border/60 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  <div className="col-span-5">METRIC / FEATURE</div>
                  <div className="col-span-3">OFF-THE-SHELF / WP</div>
                  <div className="col-span-4 text-right">SYNTAXLAB SOLUTIONS</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-border/60 font-mono text-xs">
                  {benchmark.rows.map((row, idx) => (
                    <div className="grid grid-cols-12 items-center py-3 transition-colors duration-150 hover:bg-white/[0.02] px-1 rounded-sm" key={idx}>
                      <div className="col-span-5 text-muted-foreground">{row.metric}</div>
                      <div className="col-span-3 text-red-400/90 text-[11px]">{row.offTheShelf}</div>
                      <div
                        className={
                          row.variant === "success"
                            ? "col-span-4 text-right font-semibold text-success flex items-center justify-end gap-1.5"
                            : row.variant === "danger"
                            ? "col-span-4 text-right font-semibold text-success flex items-center justify-end gap-1.5"
                            : "col-span-4 text-right font-semibold text-foreground"
                        }
                      >
                        <span>{row.bespoke}</span>
                        {row.variant === "success" ? <IconCheck className="size-3 text-success inline" /> : null}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Conversion Delta */}
                <div className="mt-5 flex items-center justify-between border-t border-border pt-3.5 font-mono text-xs">
                  <span className="text-muted-foreground uppercase text-[11px]">PERFORMANCE ADVANTAGE:</span>
                  <span className="font-bold text-accent">{benchmark.conversionDelta}</span>
                </div>
              </Card>

              {/* Engineering Guarantee SLA Badge */}
              <div className="mt-6 rounded-xl border border-accent/40 bg-accent/5 p-4.5 font-mono text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 backdrop-blur-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-success inline-block" />
                    <span className="font-semibold text-accent tracking-wider uppercase text-[11px]">99.9% UPTIME & SPEED SLA</span>
                  </div>
                  <p className="text-muted-foreground text-[11px] mt-1 font-sans">
                    Every production platform is guaranteed to achieve sub-second load speeds and strict security hardening.
                  </p>
                </div>
                <span className="shrink-0 rounded-md bg-success/15 px-3 py-1 font-mono text-[11px] font-bold text-success border border-success/30">
                  GUARANTEED
                </span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </section>
  );
}

export function ProcessSection({ steps }: { steps: ProcessStepData[] }) {
  const stepIcons = [IconSearch, IconPencil, IconCode, IconRocket];

  return (
    <section className="bg-background relative" id="process">
      {/* Dual anchor for backward compatibility */}
      <span id="friction" className="absolute -top-20" aria-hidden="true" />
      <Container className="px-6 pt-8 pb-12 md:pt-10 md:pb-14 md:px-16">
        <SectionReveal>
          {/* Top Header matching exact visual reference */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-4 bg-accent inline-block" />
                <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
                  OUR PROCESS
                </span>
              </div>
              <div className="mt-3 flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
                <h2 className="type-section-title-compact shrink-0 text-foreground">
                  From idea to impact.
                </h2>
                <p className="type-body-sm max-w-md text-muted-foreground">
                  A focused, transparent process designed to turn your goals into working digital solutions.
                </p>
              </div>
            </div>
            <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground/70 md:text-right shrink-0 leading-relaxed">
              <div>FOUR STEPS.</div>
              <div>REAL PROGRESS.</div>
            </div>
          </div>

          {/* 4 Process Cards connected horizontally with copper square pips */}
          <StaggerGroup>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 relative items-stretch auto-rows-fr">
              {steps.map((step, idx) => {
                const Icon = stepIcons[idx] ?? IconCode;
                return (
                  <div key={step.id} className="relative flex">
                    <article className="group flex flex-col justify-between w-full h-full rounded-2xl border border-border/80 bg-surface/85 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-elevated/95 hover:shadow-[0_12px_32px_rgba(196,114,68,0.12)]">
                      <div>
                        {/* Top: Icon Box & Step Number */}
                        <div className="flex items-center justify-between">
                          <div className="size-11 rounded-xl border border-border/70 bg-background/60 flex items-center justify-center text-foreground/80 group-hover:border-accent/40 group-hover:text-accent transition-colors duration-200">
                            <Icon className="size-4" />
                          </div>
                          <span className="font-mono text-xs font-semibold text-accent">{step.number}</span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="type-card-title mt-5 text-foreground group-hover:text-accent transition-colors duration-200">
                          {step.title}
                        </h3>
                        <p className="type-body-sm mt-2 text-muted-foreground">
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom Deliverable & Step Progress Bar */}
                      <div className="mt-8 pt-4 border-t border-border/40">
                        {step.deliverable && (
                          <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/80 font-semibold block mb-2.5">
                            {step.deliverable}
                          </span>
                        )}
                        <div className="grid grid-cols-4 gap-1.5">
                          {[0, 1, 2, 3].map((barIdx) => (
                            <div
                              key={barIdx}
                              className={`h-0.5 rounded-full transition-colors duration-200 ${
                                barIdx <= idx ? "bg-accent" : "bg-border/60"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </article>

                    {/* Horizontal Connector Line + Copper Square Pip (Desktop only, between adjacent cards) */}
                    {idx < 3 && (
                      <div
                        className="hidden lg:flex absolute -right-[13px] top-1/2 -translate-y-1/2 translate-x-1/2 items-center justify-center w-[26px] z-10 pointer-events-none"
                        aria-hidden="true"
                      >
                        <div className="h-px w-full bg-border" />
                        <div className="absolute size-2 bg-accent rounded-[1px]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </StaggerGroup>
        </SectionReveal>
      </Container>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </section>
  );
}

export function EngagementSection({ plans }: { plans: PricingPlan[] }) {
  return (
    <section className="bg-background" id="pricing">
      <Container className="px-6 py-14 md:py-16 md:px-16">
        <SectionReveal>
          <div className="border-b border-border pb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <TechnicalLabel className="text-accent">ENGAGEMENT TIERS</TechnicalLabel>
              <h2 className="type-section-title-compact mt-3 text-foreground">
                Structured Engagement Tiers
              </h2>
              <p className="type-body mt-2.5 max-w-xl text-muted-foreground">
                Fixed scopes, clearly defined deliverables, and full code ownership with direct engineer access.
              </p>
            </div>
            <TechnicalLabel className="text-muted-foreground">
              100% OWNERSHIP • FIXED TIMELINES
            </TechnicalLabel>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:gap-8 items-stretch auto-rows-fr">
            {plans.map((plan) => (
              <PricingCard key={plan.id} {...plan} />
            ))}
          </div>
        </SectionReveal>
      </Container>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </section>
  );
}

