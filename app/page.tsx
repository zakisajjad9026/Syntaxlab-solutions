import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { StudioManifestoSection } from "@/components/section/studio-manifesto-section";
import { EngagementSection, BusinessesSection, ProcessSection } from "@/components/section/supporting-sections";
import { HeroSection } from "@/components/section/hero-section";
import { TechStackMarquee } from "@/components/section/tech-stack-marquee";
import { TestimonialsSection } from "@/components/section/testimonials-section";
import { ProjectIntakeSection } from "@/components/section/project-intake-section";
import { ProjectsSection, FeaturedWorkSection } from "@/components/section/work-section";
import { SolutionsSection } from "@/components/section/solutions-section";
import { SectionScroller } from "@/components/animation/section-scroller";
import { siteConfig } from "@/data/site-config";

export default function Home({ targetId = "top" }: { targetId?: string }) {
  return (
    <>
      <SectionScroller targetId={targetId} />
      <Navigation items={siteConfig.navigation} />
      <main>
        <HeroSection hero={siteConfig.hero} />
        <TechStackMarquee items={siteConfig.techStack} />
        <ProcessSection steps={siteConfig.process} />
        <StudioManifestoSection manifesto={siteConfig.manifesto} />
        <SolutionsSection capabilities={siteConfig.capabilities} solutions={siteConfig.solutions} telemetry={siteConfig.telemetry} />
        <ProjectsSection projects={siteConfig.projects} />
        <FeaturedWorkSection projects={siteConfig.featuredWork} />
        <TestimonialsSection testimonials={siteConfig.testimonials} />
        <BusinessesSection benchmark={siteConfig.benchmark} />
        <EngagementSection plans={siteConfig.pricing} />
        <ProjectIntakeSection fields={siteConfig.intake.fields} telemetry={siteConfig.intake.telemetry} />
      </main>
      <Footer />
    </>
  );
}

