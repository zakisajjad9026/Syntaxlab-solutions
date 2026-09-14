import { SectionReveal, StaggerGroup } from "@/components/animation/motion-primitives";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import type { FrictionStep } from "@/lib/types";

export function BusinessFrictionSection({ steps }: { steps: FrictionStep[] }) {
  return (
    <section className="bg-background" id="friction">
      <Container className="px-6 py-20 md:px-16">
        <SectionReveal>
          <SectionHeading
            eyebrow="HOW WE BUILD"
            title="From Business Idea to Live Website"
            description="A clear, practical process designed to take your business from an initial idea to a reliable digital presence."
          />
        </SectionReveal>

        <StaggerGroup>
          <div className="mt-14 grid grid-cols-1 border-y border-border divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0 items-stretch auto-rows-fr">
            {steps.map((step) => (
              <article className="group flex min-h-[300px] flex-col justify-between p-6 md:p-8 transition-colors duration-200 hover:bg-surface-elevated/60" key={step.id}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-accent">{step.number}</span>
                    {step.estimate ? (
                      <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground">{step.estimate}</span>
                    ) : null}
                  </div>
                  <h3 className="type-card-title mt-8 text-foreground transition-colors duration-200 group-hover:text-accent">{step.title}</h3>
                  <p className="type-body-sm mt-3 text-muted-foreground">{step.description}</p>
                </div>

                {step.deliverable ? (
                  <div className="mt-8 border-t border-border/60 pt-4">
                    <TechnicalLabel className={step.status === "success" ? "text-success" : "text-muted-foreground"}>
                      {step.deliverable}
                    </TechnicalLabel>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </StaggerGroup>
      </Container>
      <Container className="px-6 md:px-16">
        <Divider />
      </Container>
    </section>
  );
}
