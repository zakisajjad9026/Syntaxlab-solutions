"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import {
  IconArrowRight,
  IconCheck,
  IconMonitor,
  IconShoppingCart,
  IconLayoutDashboard,
  IconCrosshair,
  IconLayers,
  IconShieldCheck,
} from "@/components/ui/icons";
import {
  LaptopBrowserVisual,
  CommerceCheckoutVisual,
  DashboardAnalyticsVisual,
  CampaignConversionVisual,
  ModernizationLayersVisual,
  SupportShieldVisual,
} from "@/components/ui/perspective-visuals";
import { SolutionCard } from "@/components/ui/solution-card";
import { SectionReveal } from "@/components/animation/motion-primitives";
import type { CapabilityGroup, Solution } from "@/lib/types";

interface SolutionOverviewMeta {
  index: string;
  category: string;
  spec: string;
  benefits: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

const solutionOverviewData: Record<string, SolutionOverviewMeta> = {
  "business-websites": {
    index: "01 / 06",
    category: "BUSINESS WEBSITES",
    spec: "NEXT.JS SSR • SUB-SECOND RENDERING",
    benefits: [
      "Custom Design Architecture",
      "Mobile & Tablet Optimized",
      "Technical SEO & Metadata",
      "Core Web Vitals 99+",
    ],
    metrics: [
      { label: "PERFORMANCE", value: "99+ LIGHTHOUSE SCORE" },
      { label: "LOAD TIME", value: "< 0.8s AVERAGE" },
      { label: "RESPONSIVE", value: "MOBILE + TABLET READY" },
    ],
  },
  "e-commerce": {
    index: "02 / 06",
    category: "E-COMMERCE",
    spec: "SUB-1S STRIPE & SHOPIFY CHECKOUT",
    benefits: [
      "Sub-1s Instant Checkout",
      "Headless Stripe & Shopify",
      "Automated Inventory Sync",
      "Zero Cart Drop-Off",
    ],
    metrics: [
      { label: "CHECKOUT SPEED", value: "SUB-1S TRANSACTION" },
      { label: "CONVERSION", value: "ZERO DROP-OFF FUNNEL" },
      { label: "PLATFORM", value: "HEADLESS STRIPE & SHOPIFY" },
    ],
  },
  "business-tools": {
    index: "03 / 06",
    category: "BUSINESS TOOLS",
    spec: "INTERNAL PORTALS • RELATIONAL PIPELINES",
    benefits: [
      "Role-Based Access Control",
      "Database & API Pipelines",
      "Secure Internal Portals",
      "Automated Operational Flows",
    ],
    metrics: [
      { label: "QUERY LATENCY", value: "< 50ms P95 RESPONSE" },
      { label: "SECURITY", value: "ENCRYPTED RBAC VAULT" },
      { label: "PIPELINES", value: "AUTOMATED EVENT SYNC" },
    ],
  },
  "marketing": {
    index: "04 / 06",
    category: "LANDING PAGES",
    spec: "HIGH CONVERSION • SERVER TELEMETRY",
    benefits: [
      "A/B Testing Infrastructure",
      "Sub-Second Asset Loading",
      "Conversion-Optimized Forms",
      "First-Party Event Analytics",
    ],
    metrics: [
      { label: "FIRST PAINT", value: "< 400ms HERO ASSETS" },
      { label: "ATTRIBUTION", value: "SERVER-SIDE TELEMETRY" },
      { label: "EXPERIMENTS", value: "INSTANT VARIANT ROUTING" },
    ],
  },
  "modernization": {
    index: "05 / 06",
    category: "MODERNIZATION",
    spec: "ZERO-DOWNTIME ROLLOUT • CLEAN REFACTOR",
    benefits: [
      "Zero-Downtime Migration",
      "Clean Modular Architecture",
      "Security Hardening & Audits",
      "Complete Source Ownership",
    ],
    metrics: [
      { label: "DOWNTIME", value: "ZERO-DOWNTIME CUTOVER" },
      { label: "TECH DEBT", value: "LEGACY CODE ELIMINATION" },
      { label: "OWNERSHIP", value: "100% UNRESTRICTED IP" },
    ],
  },
  "support": {
    index: "06 / 06",
    category: "SUPPORT & RELIABILITY",
    spec: "SLA GUARANTEE • DIRECT ESCALATION",
    benefits: [
      "99.9% Uptime Guarantee",
      "Proactive Security Patches",
      "Direct Engineer Escalation",
      "Automated Health Checks",
    ],
    metrics: [
      { label: "UPTIME SLA", value: "99.9% CONTRACTUAL" },
      { label: "ESCALATION", value: "DIRECT CORE LEAD ACCESS" },
      { label: "MONITORING", value: "24/7 CONTINUOUS PING" },
    ],
  },
};

export function SolutionsSection({
  capabilities,
  solutions,
}: {
  capabilities?: CapabilityGroup[];
  solutions: Solution[];
  telemetry?: unknown;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeSolution = solutions[activeIndex] ?? solutions[0];
  const overviewMeta =
    solutionOverviewData[activeSolution?.id ?? "business-websites"] ??
    solutionOverviewData["business-websites"];

  const card1 = solutions[0];
  const card2 = solutions[1];
  const card3 = solutions[2];
  const card4 = solutions[3];
  const card5 = solutions[4];
  const card6 = solutions[5];

  return (
    <section className="bg-background py-8 md:py-10 scroll-mt-6 md:scroll-mt-8" id="solutions">
      <Container className="px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 max-w-[1400px]">
        <SectionReveal>
          <div className="flex flex-col xl:flex-row items-stretch gap-6 xl:gap-7">
            {/* ---------------------------------------------------------------- */}
            {/* LEFT COLUMN — On xl: left sidebar (~300px). On lg: top header grid. On md/mobile: clean top area. */}
            {/* ---------------------------------------------------------------- */}
            <div className="w-full xl:w-[290px] 2xl:w-[310px] shrink-0 flex flex-col justify-between lg:max-xl:grid lg:max-xl:grid-cols-12 lg:max-xl:gap-8 lg:max-xl:items-start">
              <div className="lg:max-xl:col-span-7">
                {/* Eyebrow with copper bar */}
                <div className="type-technical flex items-center gap-2 text-accent">
                  <span className="w-3.5 h-[1.5px] bg-accent inline-block" />
                  <span>WHAT WE BUILD</span>
                </div>

                {/* 3-line Display Headline */}
                <h2 className="type-section-title-compact mt-3 text-foreground">
                  Digital Solutions<br className="hidden sm:inline lg:hidden xl:inline" />{" "}
                  for Growing<br className="hidden sm:inline lg:hidden xl:inline" />{" "}
                  Businesses
                </h2>

                {/* Supporting Description */}
                <p className="type-body-sm mt-2.5 max-w-xl text-muted-foreground sm:mt-3 xl:max-w-none">
                  Engineered web systems and custom software designed for commercial clarity, high conversion, and operational autonomy.
                </p>

                {/* Technical Metadata Row */}
                <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center gap-2 font-mono text-[9.5px] tracking-[0.12em] text-muted-foreground border-y border-border/70 py-2">
                  <span className="size-1.5 rounded-full bg-accent inline-block shrink-0" />
                  <span>06 PRACTICES</span>
                  <span className="text-border">•</span>
                  <span>FIXED SCOPE</span>
                  <span className="text-border">•</span>
                  <span>DIRECT ACCESS</span>
                </div>

                {/* CTA Button */}
                <div className="mt-4">
                  <Button
                    href="/contact"
                    label="REQUEST A PROPOSAL →"
                    variant="primary"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>

              {/* Architecture Standards Technical Readout Card */}
              {capabilities && capabilities.length > 0 && (
                <div className="mt-5 sm:mt-6 lg:max-xl:mt-0 lg:max-xl:col-span-5 rounded-xl border border-border/80 bg-surface/80 p-3.5 font-mono text-xs shadow-xs">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2 text-[10px] uppercase tracking-[0.12em]">
                    <span className="font-semibold text-foreground">ARCHITECTURE STANDARDS</span>
                    <span className="text-accent text-[9px] font-semibold">ENTERPRISE</span>
                  </div>
                  <div className="mt-2.5 space-y-1.5 text-[10.5px]">
                    {capabilities.map((cap) => (
                      <div key={cap.id} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{cap.label}</span>
                        <span className="font-semibold text-foreground/90">{cap.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* MAIN CONTENT AREA: Bento Cards + Solution Overview Panel         */}
            {/* ---------------------------------------------------------------- */}
            <div className="flex-1 min-w-0 flex flex-col xl:flex-row items-stretch gap-6 xl:gap-7">
              {/* CENTER / MAIN — Uniform Balanced Grid of 6 Solutions Cards */}
              <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch auto-rows-fr">
                {/* CARD 01: Business Websites */}
                {card1 && (
                  <SolutionCard
                    index={0}
                    activeIndex={activeIndex}
                    hoveredIndex={hoveredIndex}
                    onSelect={setActiveIndex}
                    onHover={setHoveredIndex}
                    ariaLabel="01 — Business Websites"
                    className="min-h-[165px] h-full"
                    paddingClassName="p-4 sm:p-4.5"
                  >
                    <div className="relative z-10 max-w-[65%] sm:max-w-[60%] pointer-events-none">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                          <IconMonitor className="size-3.5" />
                        </div>
                        <span className="type-technical-xs text-muted-foreground">
                          01 — WEBSITES
                        </span>
                      </div>

                      <h3
                        className={`mt-2 text-sm font-bold tracking-normal transition-colors duration-200 sm:text-[15px] ${
                          activeIndex === 0 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card1.title}
                      </h3>

                      <p className="type-body-sm mt-1 text-muted-foreground line-clamp-2">
                        {card1.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-3 pt-1 flex items-end justify-between pointer-events-none">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent group-hover:translate-x-0.5">
                        <IconArrowRight className="size-3" />
                      </div>
                    </div>

                    {/* Decorative absolute SVG in lower right */}
                    <LaptopBrowserVisual
                      isHovered={hoveredIndex === 0 || activeIndex === 0}
                      className="absolute -right-2 -bottom-2 w-[118px] sm:w-[130px] h-auto pointer-events-none select-none z-0"
                    />
                  </SolutionCard>
                )}

                {/* CARD 02: E-Commerce */}
                {card2 && (
                  <SolutionCard
                    index={1}
                    activeIndex={activeIndex}
                    hoveredIndex={hoveredIndex}
                    onSelect={setActiveIndex}
                    onHover={setHoveredIndex}
                    ariaLabel="02 — E-Commerce"
                    className="min-h-[165px] h-full"
                    paddingClassName="p-4 sm:p-4.5"
                  >
                    <div className="relative z-10 max-w-[65%] sm:max-w-[60%] pointer-events-none">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                          <IconShoppingCart className="size-3.5" />
                        </div>
                        <span className="type-technical-xs text-muted-foreground">
                          02 — E-COMMERCE
                        </span>
                      </div>

                      <h3
                        className={`mt-2 text-sm font-bold tracking-normal transition-colors duration-200 sm:text-[15px] ${
                          activeIndex === 1 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card2.title}
                      </h3>

                      <p className="type-body-sm mt-1 text-muted-foreground line-clamp-2">
                        {card2.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-3 pt-1 flex items-end justify-between pointer-events-none">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent group-hover:translate-x-0.5">
                        <IconArrowRight className="size-3" />
                      </div>
                    </div>

                    {/* Decorative absolute SVG in lower right */}
                    <CommerceCheckoutVisual
                      isHovered={hoveredIndex === 1 || activeIndex === 1}
                      className="absolute -right-2 -bottom-2 w-[118px] sm:w-[130px] h-auto pointer-events-none select-none z-0"
                    />
                  </SolutionCard>
                )}

                {/* CARD 03: Business Tools */}
                {card3 && (
                  <SolutionCard
                    index={2}
                    activeIndex={activeIndex}
                    hoveredIndex={hoveredIndex}
                    onSelect={setActiveIndex}
                    onHover={setHoveredIndex}
                    ariaLabel="03 — Business Tools"
                    className="min-h-[165px] h-full"
                    paddingClassName="p-4 sm:p-4.5"
                  >
                    <div className="relative z-10 max-w-[65%] sm:max-w-[60%] pointer-events-none">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                          <IconLayoutDashboard className="size-3.5" />
                        </div>
                        <span className="type-technical-xs text-muted-foreground">
                          03 — BUSINESS TOOLS
                        </span>
                      </div>

                      <h3
                        className={`mt-2 text-sm font-bold tracking-normal transition-colors duration-200 sm:text-[15px] ${
                          activeIndex === 2 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card3.title}
                      </h3>

                      <p className="type-body-sm mt-1 text-muted-foreground line-clamp-2">
                        {card3.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-3 pt-1 flex items-end justify-between pointer-events-none">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent group-hover:translate-x-0.5">
                        <IconArrowRight className="size-3" />
                      </div>
                    </div>

                    {/* Decorative absolute SVG in lower right */}
                    <DashboardAnalyticsVisual
                      isHovered={hoveredIndex === 2 || activeIndex === 2}
                      className="absolute -right-2 -bottom-2 w-[118px] sm:w-[130px] h-auto pointer-events-none select-none z-0"
                    />
                  </SolutionCard>
                )}

                {/* CARD 04: Landing Pages */}
                {card4 && (
                  <SolutionCard
                    index={3}
                    activeIndex={activeIndex}
                    hoveredIndex={hoveredIndex}
                    onSelect={setActiveIndex}
                    onHover={setHoveredIndex}
                    ariaLabel="04 — Campaigns"
                    className="min-h-[165px] h-full"
                    paddingClassName="p-4 sm:p-4.5"
                  >
                    <div className="relative z-10 max-w-[65%] sm:max-w-[60%] pointer-events-none">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                          <IconCrosshair className="size-3.5" />
                        </div>
                        <span className="type-technical-xs text-muted-foreground">
                          04 — CAMPAIGNS
                        </span>
                      </div>

                      <h3
                        className={`mt-2 text-sm font-bold tracking-normal transition-colors duration-200 sm:text-[15px] ${
                          activeIndex === 3 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card4.title}
                      </h3>

                      <p className="type-body-sm mt-1 text-muted-foreground line-clamp-2">
                        {card4.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-3 pt-1 flex items-end justify-between pointer-events-none">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent group-hover:translate-x-0.5">
                        <IconArrowRight className="size-3" />
                      </div>
                    </div>

                    {/* Decorative absolute SVG in lower right */}
                    <CampaignConversionVisual
                      isHovered={hoveredIndex === 3 || activeIndex === 3}
                      className="absolute -right-2 -bottom-2 w-[118px] sm:w-[130px] h-auto pointer-events-none select-none z-0"
                    />
                  </SolutionCard>
                )}

                {/* CARD 05: Modernization */}
                {card5 && (
                  <SolutionCard
                    index={4}
                    activeIndex={activeIndex}
                    hoveredIndex={hoveredIndex}
                    onSelect={setActiveIndex}
                    onHover={setHoveredIndex}
                    ariaLabel="05 — Modernization"
                    className="min-h-[165px] h-full"
                    paddingClassName="p-4 sm:p-4.5"
                  >
                    <div className="relative z-10 max-w-[65%] sm:max-w-[60%] pointer-events-none">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                          <IconLayers className="size-3.5" />
                        </div>
                        <span className="type-technical-xs text-muted-foreground">
                          05 — MODERNIZATION
                        </span>
                      </div>

                      <h3
                        className={`mt-2 text-sm font-bold tracking-normal transition-colors duration-200 sm:text-[15px] ${
                          activeIndex === 4 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card5.title}
                      </h3>

                      <p className="type-body-sm mt-1 text-muted-foreground line-clamp-2">
                        {card5.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-3 pt-1 flex items-end justify-between pointer-events-none">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent group-hover:translate-x-0.5">
                        <IconArrowRight className="size-3" />
                      </div>
                    </div>

                    {/* Decorative absolute SVG in lower right */}
                    <ModernizationLayersVisual
                      isHovered={hoveredIndex === 4 || activeIndex === 4}
                      className="absolute -right-2 -bottom-2 w-[118px] sm:w-[130px] h-auto pointer-events-none select-none z-0"
                    />
                  </SolutionCard>
                )}

                {/* CARD 06: Support & Reliability */}
                {card6 && (
                  <SolutionCard
                    index={5}
                    activeIndex={activeIndex}
                    hoveredIndex={hoveredIndex}
                    onSelect={setActiveIndex}
                    onHover={setHoveredIndex}
                    ariaLabel="06 — Support & SLA"
                    className="min-h-[165px] h-full"
                    paddingClassName="p-4 sm:p-4.5"
                  >
                    <div className="relative z-10 max-w-[65%] sm:max-w-[60%] pointer-events-none">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded border border-accent/40 bg-accent/15 flex items-center justify-center text-accent">
                          <IconShieldCheck className="size-3.5" />
                        </div>
                        <span className="type-technical-xs text-muted-foreground">
                          06 — SUPPORT & SLA
                        </span>
                      </div>

                      <h3
                        className={`mt-2 text-sm font-bold tracking-normal transition-colors duration-200 sm:text-[15px] ${
                          activeIndex === 5 ? "text-accent" : "text-foreground group-hover:text-accent"
                        }`}
                      >
                        {card6.title}
                      </h3>

                      <p className="type-body-sm mt-1 text-muted-foreground line-clamp-2">
                        {card6.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-3 pt-1 flex items-end justify-between pointer-events-none">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent group-hover:translate-x-0.5">
                        <IconArrowRight className="size-3" />
                      </div>
                    </div>

                    {/* Decorative absolute SVG in lower right */}
                    <SupportShieldVisual
                      isHovered={hoveredIndex === 5 || activeIndex === 5}
                      className="absolute -right-2 -bottom-2 w-[118px] sm:w-[130px] h-auto pointer-events-none select-none z-0"
                    />
                  </SolutionCard>
                )}
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* RIGHT COLUMN — Solution Overview & Commitment Panel */}
            {/* ---------------------------------------------------------------- */}
            <div className="w-full xl:w-[280px] 2xl:w-[310px] shrink-0 flex flex-col md:max-xl:grid md:max-xl:grid-cols-12 justify-between gap-3.5">
              {/* DYNAMIC DARK OVERVIEW CARD */}
              <div className="md:max-xl:col-span-8 relative overflow-hidden rounded-xl border border-[#1e222b] bg-[#0c0e12] p-4 sm:p-5 text-white shadow-xl flex flex-col justify-between flex-1 min-h-[380px] sm:min-h-[400px] xl:min-h-[420px]">
                {/* Background subtle copper geometric ambient glow */}
                <div className="pointer-events-none absolute -right-8 -bottom-8 size-36 rounded-full bg-accent/10 blur-2xl" />
                <svg
                  className="pointer-events-none absolute inset-0 size-full opacity-20"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="160" cy="160" r="100" stroke="#c47244" strokeWidth="0.75" strokeDasharray="3 3" />
                  <circle cx="160" cy="160" r="60" stroke="#c47244" strokeWidth="0.75" />
                  <circle cx="160" cy="160" r="25" stroke="#c47244" strokeWidth="0.75" strokeDasharray="2 2" />
                </svg>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={overviewMeta.index}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 flex flex-col justify-between h-full"
                  >
                    {/* TOP TIER: Header + Service Title + Spec + Deliverables Checklist */}
                    <div>
                      {/* Panel Top Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-[9px] uppercase tracking-[0.14em]">
                        <span className="text-white/60 font-medium">SOLUTION OVERVIEW</span>
                        <span className="text-accent font-semibold">
                          {overviewMeta.index}
                        </span>
                      </div>

                      {/* Selected Service Title */}
                      <h4 className="type-card-title mt-3.5 text-white">
                        {overviewMeta.category}
                      </h4>

                      {/* Technical Spec Tag */}
                      <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-accent/90">
                        {overviewMeta.spec}
                      </div>

                      {/* Deliverables Checklist */}
                      <ul className="type-body-sm mt-3.5 space-y-2">
                        {overviewMeta.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2 text-white/90">
                            <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full bg-accent text-[#08090a]">
                              <IconCheck className="size-2.5 stroke-[3]" />
                            </span>
                            <span className="text-[11px] font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* MIDDLE TIER: Technical Performance Metrics Rows */}
                    <div className="my-3.5 border-t border-white/10 pt-3.5">
                      <div className="space-y-3 font-mono">
                        {overviewMeta.metrics.map((m, idx) => (
                          <div key={idx} className="flex flex-col gap-0.5">
                            <span className="text-[8.5px] uppercase tracking-[0.14em] text-white/45">
                              {m.label}
                            </span>
                            <span className="text-[10.5px] font-semibold text-white/95 tracking-wide">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM TIER: Outcome Statement & Verified Status */}
                    <div className="border-t border-white/10 pt-3 flex items-center justify-between font-mono text-[9px] font-bold tracking-[0.12em] text-white/60 uppercase">
                      <div>
                        BUILT FOR REAL<br />
                        BUSINESS OUTCOMES.
                      </div>
                      <div className="flex items-center gap-1.5 text-accent text-[8.5px] font-semibold">
                        <span className="size-1.5 rounded-full bg-accent animate-pulse inline-block" />
                        <span>VERIFIED</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* SYNTAXLAB COMMITMENT CARD */}
              <div className="md:max-xl:col-span-4 rounded-xl border border-border/80 bg-surface/80 p-4 sm:p-5 shadow-xs flex flex-col justify-center">
                <div className="type-technical-xs flex items-center gap-1.5 text-accent">
                  <span className="size-1.5 rounded-full bg-accent inline-block" />
                  <span>SYNTAXLAB COMMITMENT</span>
                </div>
                <p className="type-body-xs mt-1.5 text-muted-foreground">
                  Every system is engineered from clean code — eliminating recurring license dependencies and plugin vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
      <Container className="px-6 md:px-16 mt-10 md:mt-12">
      <Divider />
    </Container>
  </section>
);
}
