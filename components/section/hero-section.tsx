"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Metric } from "@/components/ui/metric";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { AuroraAtmosphere } from "@/components/animation/aurora-atmosphere";
import { HeroShader } from "@/components/animation/hero-shader";
import { HeroOrbVisual } from "@/components/animation/hero-orb";
import {
  IconSystem,
  IconTarget,
  IconDispatch,
  IconLatency,
  IconNode,
  IconMemory,
  IconRender,
  IconDaemon,
} from "@/components/ui/icons";
import type { HeroConfig } from "@/lib/types";

const heroEyebrowVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.05, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const heroHeadlineVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.13, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const heroParagraphVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const heroCtaVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.27, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const heroMetricsVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.34, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

export function HeroSection({ hero }: { hero: HeroConfig }) {
  const shouldReduceMotion = useReducedMotion();
  const telemetryIcons = [
    IconTarget,
    IconDispatch,
    IconLatency,
    IconNode,
    IconMemory,
    IconRender,
    IconDaemon,
  ];

  return (
    <>
      <section className="relative bg-background overflow-hidden" id="top">
        {/* Layer 0: Controlled subtle Aurora Atmosphere */}
        <AuroraAtmosphere />

        {/* Layer 1: Architectural atmospheric grid & copper light background */}
        <HeroShader className="absolute inset-0 pointer-events-none z-0 opacity-70" />

        {/* Layer 2: 3D Spherical/Orbital Architectural Topology visual behind telemetry card */}
        <div className="absolute right-[-60px] md:right-[-20px] lg:right-0 top-1/2 -translate-y-1/2 h-[520px] w-[520px] sm:h-[600px] sm:w-[600px] lg:h-[660px] lg:w-[660px] pointer-events-none z-0 overflow-hidden opacity-40 sm:opacity-60 lg:opacity-85">
          <HeroOrbVisual className="h-full w-full" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-6 pt-10 pb-14 sm:pt-14 sm:pb-16 md:px-12 md:pt-16 md:pb-20 lg:grid-cols-12 lg:gap-12 lg:px-16 lg:pt-20 lg:pb-24">
          {/* Left Column — Editorial Hero Content */}
          <div className="flex flex-col justify-between lg:col-span-7 lg:pr-4">
            <div className="max-w-2xl">
              {/* Eyebrow Badge */}
              <motion.div
                initial={shouldReduceMotion ? false : "hidden"}
                animate="visible"
                variants={heroEyebrowVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm"
              >
                <span className="size-1.5 rounded-full bg-accent animate-pulse inline-block" />
                <TechnicalLabel className="text-accent tracking-widest text-[11px] font-semibold">
                  {hero.eyebrow ?? "WEB DESIGN & SOFTWARE DEVELOPMENT"}
                </TechnicalLabel>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={shouldReduceMotion ? false : "hidden"}
                animate="visible"
                variants={heroHeadlineVariants}
                className="type-hero mt-4 sm:mt-5 max-w-2xl text-foreground"
              >
                YOUR BUSINESS.<br className="hidden sm:inline" />{" "}
                <span className="bg-gradient-to-r from-[#d87c48] via-[#f0a672] to-[#c47244] bg-clip-text text-transparent">BUILT FOR THE</span><br className="hidden sm:inline" />{" "}
                <span className="bg-gradient-to-r from-[#d87c48] via-[#f0a672] to-[#c47244] bg-clip-text text-transparent">MODERN WEB.</span>
              </motion.h1>

              {/* Supporting Description */}
              <motion.p
                initial={shouldReduceMotion ? false : "hidden"}
                animate="visible"
                variants={heroParagraphVariants}
                className="type-body mt-4 sm:mt-5 max-w-xl text-muted-foreground leading-relaxed"
              >
                {hero.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={shouldReduceMotion ? false : "hidden"}
                animate="visible"
                variants={heroCtaVariants}
                className="mt-6 sm:mt-7"
              >
                <div className="flex flex-wrap items-center gap-3.5">
                  <Button href="/contact" label="START A PROJECT →" variant="primary" />
                  <Button href="/solutions" label="EXPLORE SOLUTIONS" variant="secondary" />
                </div>
              </motion.div>
            </div>

            {/* Bottom Metrics with Vertical Line Dividers */}
            <motion.div
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              variants={heroMetricsVariants}
              className="mt-8 sm:mt-10 lg:mt-12 grid max-w-xl grid-cols-3 divide-x divide-border border-t border-border/80 pt-5 sm:pt-6"
            >
              {hero.metrics.map((metric) => (
                <div key={metric.id} className="first:pl-0 px-3.5 sm:px-5 last:pr-0">
                  <Metric {...metric} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — System Architecture & Runtime Telemetry Panel */}
          <div className="flex flex-col justify-center lg:col-span-5 w-full max-w-lg lg:max-w-none mx-auto">
            <motion.div
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              variants={heroMetricsVariants}
              className="border-copper-glow group relative overflow-hidden rounded-xl border border-border/90 bg-surface-elevated/95 p-5 sm:p-6 backdrop-blur-md shadow-[0_16px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-accent/50 hover:shadow-[0_20px_60px_rgba(196,114,68,0.14)]"
            >
              {/* Panel Top Header */}
              <div className="flex items-center justify-between border-b border-border/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <IconSystem className="size-4 text-accent" />
                  <TechnicalLabel className="text-foreground font-semibold">
                    {hero.telemetryTitle ?? "SYSTEM ARCHITECTURE & RUNTIME"}
                  </TechnicalLabel>
                </div>
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="size-2 rounded-full bg-success inline-block"
                  />
                  <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-success">
                    {hero.telemetryStatus ?? "ACTIVE • VERIFIED"}
                  </span>
                </div>
              </div>

              {/* Spec / Telemetry Rows */}
              <div className="mt-3 divide-y divide-border/60">
                {hero.telemetryRows?.map((row, idx) => {
                  const RowIcon = telemetryIcons[idx % telemetryIcons.length] ?? IconSystem;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2 font-mono text-[10.5px] tracking-[0.06em] transition-colors duration-150 hover:bg-white/[0.03] dark:hover:bg-white/[0.04] px-1 rounded-sm"
                    >
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <RowIcon className="size-3 text-muted-foreground shrink-0" />
                        <span className="uppercase text-[9.5px]">{row.label}</span>
                      </div>
                      <span
                        className={
                          row.variant === "accent"
                            ? "text-accent font-semibold"
                            : row.variant === "success"
                            ? "text-success font-semibold flex items-center gap-1.5"
                            : "text-foreground font-medium"
                        }
                      >
                        {row.variant === "success" ? <span className="size-1.5 rounded-full bg-success inline-block" /> : null}
                        {row.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Card Annotation */}
              <div className="mt-3.5 flex items-center justify-between border-t border-border/80 pt-2.5 font-mono text-[9.5px] text-muted-foreground uppercase tracking-[0.14em]">
                <span>ARCHITECTURE / OBSERVED</span>
                <span className="text-accent font-bold">V.01.24</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </>
  );
}
