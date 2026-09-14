"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { FormField } from "@/components/ui/form-field";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Card } from "@/components/ui/card";
import { IconSecurity, IconCheck } from "@/components/ui/icons";
import { SectionReveal } from "@/components/animation/motion-primitives";
import type { FormFieldConfig } from "@/lib/types";

const PROJECT_TYPES = [
  { id: "web-app", label: "Custom Web Application", badge: "Next.js / React" },
  { id: "e-commerce", label: "Headless E-Commerce", badge: "Shopify / Stripe" },
  { id: "business-site", label: "High-Performance Site", badge: "Sub-second SSR" },
  { id: "internal-portal", label: "Internal Portal / SaaS", badge: "Postgres / Auth" },
  { id: "modernization", label: "Legacy Modernization", badge: "Clean Architecture" },
];

const BUDGET_TIERS = [
  { id: "starter", label: "Starter", range: "$1.5k - $3k / ₹1.2L - ₹2.5L" },
  { id: "growth", label: "Growth", range: "$3k - $8k / ₹2.5L - ₹6.5L" },
  { id: "custom", label: "Custom System", range: "$8k+ / ₹6.5L+" },
  { id: "flexible", label: "Flexible", range: "Let's discuss" },
];

const TIMELINES = [
  { id: "fast", label: "Fast-Track (2-4 Weeks)" },
  { id: "standard", label: "Standard (4-8 Weeks)" },
  { id: "flexible", label: "Flexible (Q2/Q3)" },
];

export function ProjectIntakeSection({
  fields,
}: {
  fields: FormFieldConfig[];
  telemetry?: unknown;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string>("Custom Web Application");
  const [selectedBudget, setSelectedBudget] = useState<string>("Growth ($3k - $8k)");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Standard (4-8 Weeks)");

  const nameField = fields.find((f) => f.id === "name");
  const bizNameField = fields.find((f) => f.id === "businessName" || f.id === "organization");
  const emailField = fields.find((f) => f.id === "email");
  const phoneField = fields.find((f) => f.id === "phone");
  const reqField = fields.find((f) => f.id === "requirements");

  return (
    <>
      <section className="bg-background py-14 md:py-18" id="contact">
        <Container className="px-6 md:px-16">
          <SectionReveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
              {/* Left Panel — 5 cols */}
              <div className="flex flex-col justify-between lg:col-span-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                    <TechnicalLabel className="text-accent">PROJECT SCOPE & DISCOVERY</TechnicalLabel>
                  </div>
                  <h2 className="type-section-title-compact mt-3 text-foreground">
                    Start a Project
                  </h2>
                  <p className="type-body mt-3 text-muted-foreground leading-relaxed">
                    Select your architecture requirements and project scope. We&apos;ll evaluate your specs and return a clear technical roadmap within 24 hours.
                  </p>

                  {/* Active Scope Summary Card */}
                  <div className="mt-6 rounded-xl border border-accent/40 bg-accent/5 p-4.5 font-mono text-xs backdrop-blur-xs">
                    <div className="flex items-center justify-between border-b border-border/80 pb-2.5">
                      <span className="text-accent font-semibold tracking-wider uppercase text-[10.5px]">
                        SELECTED PROJECT SPEC
                      </span>
                      <span className="text-success text-[10px] font-bold">24H RESPONSE SLA</span>
                    </div>
                    <div className="mt-3 space-y-2 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="font-semibold text-foreground">{selectedProjectType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Budget Tier:</span>
                        <span className="font-semibold text-accent">{selectedBudget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Timeline:</span>
                        <span className="font-semibold text-foreground">{selectedTimeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* What Happens Next Reassuring Box */}
                  <Card variant="default" padding="md" className="mt-5 space-y-3">
                    <TechnicalLabel className="text-accent font-semibold block border-b border-border/60 pb-2.5">
                      WHAT HAPPENS NEXT
                    </TechnicalLabel>
                    <div className="type-body-sm space-y-2 pt-1 font-mono text-xs">
                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-accent">01</span>
                        <span className="text-foreground font-sans">Engineering review of your specs</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-accent">02</span>
                        <span className="text-foreground font-sans">30-min technical discovery call</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-accent">03</span>
                        <span className="text-foreground font-sans">Architecture blueprint & fixed milestone quote</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-accent">04</span>
                        <span className="text-foreground font-sans">Direct sprint kick-off</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <p className="type-body-sm mt-6 flex items-center gap-1.5 text-muted-foreground font-mono text-[11px]">
                  <IconSecurity className="size-3.5 text-accent shrink-0" />
                  <span>Strict NDA and data privacy protection guaranteed.</span>
                </p>
              </div>

              {/* Right Panel — Interactive Estimator & Form (7 cols) */}
              <div className="lg:col-span-7">
                {submitted ? (
                  <Card variant="featured" padding="lg" className="text-center space-y-4 py-12">
                    <div className="inline-flex size-14 items-center justify-center rounded-full bg-accent/15 border border-accent text-accent">
                      <IconCheck className="size-7 text-accent" />
                    </div>
                    <TechnicalLabel className="block text-accent">
                      ENQUIRY RECEIVED • QUEUED FOR TRIAGE
                    </TechnicalLabel>
                    <h3 className="text-2xl font-bold tracking-normal text-foreground">
                      Technical Spec Received!
                    </h3>
                    <p className="type-body-sm mx-auto max-w-md text-muted-foreground">
                      We have received your requirements for <strong className="text-foreground">{selectedProjectType}</strong>. A senior engineer will review your inquiry and email you within 24 hours.
                    </p>
                    <div className="pt-4">
                      <Button
                        onClick={() => setSubmitted(false)}
                        label="SEND ANOTHER ENQUIRY"
                        variant="secondary"
                      />
                    </div>
                  </Card>
                ) : (
                  <Card
                    as="form"
                    variant="elevated"
                    padding="lg"
                    className="backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div className="space-y-6">
                      {/* Step 1: Interactive Project Type Selector */}
                      <div>
                        <label className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-2.5">
                          1. SELECT PROJECT TYPE
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {PROJECT_TYPES.map((type, idx) => {
                            const isSelected = selectedProjectType === type.label;
                            const isLast = idx === PROJECT_TYPES.length - 1 && PROJECT_TYPES.length % 2 !== 0;
                            return (
                              <button
                                key={type.id}
                                type="button"
                                onClick={() => setSelectedProjectType(type.label)}
                                className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all duration-200 ${
                                  isLast ? "sm:col-span-2 " : ""
                                }${
                                  isSelected
                                    ? "border-accent bg-accent/15 shadow-[0_0_15px_rgba(196,114,68,0.2)] text-foreground"
                                    : "border-border/80 bg-surface text-muted-foreground hover:border-accent/50 hover:text-foreground"
                                }`}
                              >
                                <span className="font-sans text-xs font-semibold">{type.label}</span>
                                <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-background/80 text-accent">
                                  {type.badge}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Step 2: Budget & Timeline Selectors */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-2">
                            2. ESTIMATED BUDGET
                          </label>
                          <div className="space-y-1.5">
                            {BUDGET_TIERS.map((tier) => {
                              const isSelected = selectedBudget.startsWith(tier.label);
                              return (
                                <button
                                  key={tier.id}
                                  type="button"
                                  onClick={() => setSelectedBudget(`${tier.label} (${tier.range})`)}
                                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md border text-xs font-mono transition-all duration-150 ${
                                    isSelected
                                      ? "border-accent bg-accent/15 text-accent font-bold"
                                      : "border-border/70 bg-surface/80 text-muted-foreground hover:border-border hover:text-foreground"
                                  }`}
                                >
                                  <span>{tier.label}</span>
                                  <span className="text-[10px] opacity-80">{tier.range}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <label className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-2">
                            3. DESIRED TIMELINE
                          </label>
                          <div className="space-y-1.5">
                            {TIMELINES.map((time) => {
                              const isSelected = selectedTimeline === time.label;
                              return (
                                <button
                                  key={time.id}
                                  type="button"
                                  onClick={() => setSelectedTimeline(time.label)}
                                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md border text-xs font-mono transition-all duration-150 ${
                                    isSelected
                                      ? "border-accent bg-accent/15 text-accent font-bold"
                                      : "border-border/70 bg-surface/80 text-muted-foreground hover:border-border hover:text-foreground"
                                  }`}
                                >
                                  <span>{time.label}</span>
                                  {isSelected && <span className="size-1.5 rounded-full bg-accent" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Step 3: Contact Details */}
                      <div className="pt-2 border-t border-border/80 space-y-4">
                        <label className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block">
                          4. YOUR CONTACT DETAILS
                        </label>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {nameField ? <FormField {...nameField} /> : null}
                          {bizNameField ? <FormField {...bizNameField} /> : null}
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {emailField ? <FormField {...emailField} /> : null}
                          {phoneField ? <FormField {...phoneField} /> : null}
                        </div>
                        {reqField ? <FormField {...reqField} /> : null}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      label="Submit Architecture Spec →"
                      variant="primary"
                      className="mt-6 w-full text-center py-3.5 text-xs font-bold uppercase tracking-wider"
                    />

                    <p className="font-mono text-[10.5px] mt-3 text-center text-muted-foreground">
                      🔒 Zero spam. Direct senior engineering review within 24 hours.
                    </p>
                  </Card>
                )}
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </>
  );
}
