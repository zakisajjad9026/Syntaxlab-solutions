"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { ProjectItem } from "@/components/ui/project-item";
import { ProjectVisual } from "@/components/ui/project-visual";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Card, CardBadge } from "@/components/ui/card";
import { IconArrowRight } from "@/components/ui/icons";
import { SectionReveal, ImageReveal } from "@/components/animation/motion-primitives";
import type { FeaturedProject, Project } from "@/lib/types";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-background" id="work">
      <Container className="px-6 py-14 md:py-16 md:px-16">
        <SectionReveal>
          {/* Header */}
          <div className="flex flex-col justify-between gap-3 border-b border-border pb-6 md:flex-row md:items-end">
            <div>
              <TechnicalLabel className="text-accent">PORTFOLIO SHOWCASE</TechnicalLabel>
              <h2 className="type-section-title-compact mt-3 text-foreground">Projects Index</h2>
              <p className="type-body mt-2.5 max-w-xl text-muted-foreground">
                Technical overviews, interactive system architectures, and operational telemetry of custom production systems.
              </p>
            </div>
            <TechnicalLabel className="text-muted-foreground">
              04 PRODUCTION BUILDS • 100% SPEC PASS
            </TechnicalLabel>
          </div>

          {/* Interactive Project Showcase Grid: Balanced 2-column grid with equal card ratios */}
          <div
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch auto-rows-fr"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {projects.map((project, idx) => (
              <div key={project.id} className="h-full">
                <ProjectItem
                  index={idx}
                  hoveredIndex={hoveredIndex}
                  onHover={setHoveredIndex}
                  {...project}
                />
              </div>
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

export function FeaturedWorkSection({ projects }: { projects: FeaturedProject[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawX = useTransform(scrollYProgress, [0.2, 0.8], [0, -32]);
  const horizontalX = shouldReduceMotion || !isDesktop ? 0 : rawX;

  return (
    <section className="bg-background overflow-hidden" id="featured-work" ref={sectionRef}>
      <Container className="px-6 py-14 md:py-16 md:px-16">
        <SectionReveal>
          {/* Header */}
          <div className="flex flex-col justify-between gap-3 border-b border-border pb-6 lg:flex-row lg:items-end">
            <div>
              <TechnicalLabel className="text-accent">SELECTED WORK</TechnicalLabel>
              <h2 className="type-section-title-compact mt-3 text-foreground">Featured Work</h2>
              <p className="type-body mt-2.5 max-w-xl text-muted-foreground">
                Visual walkthroughs, interaction models, and architectural narratives of selected web platforms.
              </p>
            </div>
            <TechnicalLabel className="shrink-0 text-muted-foreground">STUDIO SHOWCASE • PRODUCTION BUILDS</TechnicalLabel>
          </div>
        </SectionReveal>

        {/* Uniform 2-Column Grid: Every card shares the exact same aspect ratio and dimensions */}
        <motion.div style={{ x: horizontalX }} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch auto-rows-fr">
          {projects.map((project) => (
            <ImageReveal className="h-full" key={project.id}>
              <Card
                as="article"
                variant="interactive"
                padding="none"
                className="overflow-hidden p-4 md:p-5 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                    <ProjectVisual
                      alt={project.alt ?? project.title}
                      className="h-full w-full"
                      image={project.image ?? ""}
                      priority={project.placement === "primary"}
                    />
                    <div className="absolute left-3 top-3 z-10">
                      <CardBadge>FEATURED</CardBadge>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-muted-foreground uppercase tracking-wider text-[10px]">
                      {project.category.replace(/\/\/\s*/g, "• ")}
                    </span>
                    {project.telemetryValue ? (
                      <span className="font-semibold text-success">{project.telemetryValue}</span>
                    ) : null}
                  </div>
                  <h3 className="type-card-title mt-2 text-foreground transition-colors duration-200 group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="type-body-sm mt-1.5 text-muted-foreground">{project.description}</p>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-3.5 font-mono text-[11px]">
                  <span className="text-muted-foreground text-[10px]">
                    {project.stackText ? project.stackText.replace(/\/\/\s*/g, "• ") : ""}
                  </span>
                  <Link
                    href="/contact"
                    className="type-button inline-flex items-center gap-1.5 text-accent transition-all duration-200 group-hover:translate-x-1"
                  >
                    <span>{project.actionText ?? "VIEW CASE STUDY →"}</span>
                    <IconArrowRight className="size-3.5" />
                  </Link>
                </div>
              </Card>
            </ImageReveal>
          ))}
        </motion.div>
      </Container>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </section>
  );
}


