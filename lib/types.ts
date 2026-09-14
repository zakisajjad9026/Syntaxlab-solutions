export type ThemeMode = "dark" | "light";

export interface ThemeTokens {
  background: string;
  surface: string;
  surfaceElevated: string;
  foreground: string;
  mutedForeground: string;
  border: string;
  accent: string;
  success: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface ActionLink {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface Metric {
  id: string;
  value: string;
  label: string;
}

export interface TelemetryRow {
  label: string;
  value: string;
  variant?: "success" | "accent" | "white";
}

export interface HeroConfig {
  eyebrow?: string;
  titlePrefix?: string;
  titleAccent?: string;
  title: string;
  description: string;
  actions: ActionLink[];
  metrics: Metric[];
  telemetryTitle?: string;
  telemetryStatus?: string;
  telemetryRows?: TelemetryRow[];
}

export interface CapabilityGroup {
  id: string;
  label: string;
  value: string;
}

export interface FrictionStep {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  estimate?: string;
  deliverable?: string;
  status?: string;
}

export interface StudioManifestoConfig {
  eyebrow: string;
  title: string;
  ref: string;
  rev: string;
  tagline: string;
  quotePrefix: string;
  quoteAccent: string;
  quoteSuffix: string;
  paragraph: string;
}

export interface Solution {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  spec: string;
  context?: string;
}

export interface TechnicalReadout {
  id: string;
  label: string;
  value: string;
  status?: "neutral" | "success";
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  location?: string;
  refId?: string;
  badge?: string;
  description: string;
  stackPrimary?: string;
  stackSecondary?: string;
  telemetryValue?: string;
  telemetryLabel?: string;
  image?: string;
  alt?: string;
}

export interface FeaturedProject extends Project {
  placement: "primary" | "secondary" | "lower";
  recordId?: string;
  actionText?: string;
  stackText?: string;
}

export interface BenchmarkRow {
  metric: string;
  offTheShelf: string;
  bespoke: string;
  variant?: "danger" | "success" | "white";
}

export interface BenchmarkConfig {
  eyebrow: string;
  title: string;
  description: string;
  advantages: {
    number: string;
    title: string;
    description: string;
  }[];
  tableHeader: string;
  auditTag: string;
  rows: BenchmarkRow[];
  conversionDelta: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  tag?: string;
  title: string;
  description: string;
  deliverable?: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  tierTag: string;
  name: string;
  subtitle: string;
  price?: string;
  pricePeriod?: string;
  recommendedTag?: string;
  features: PricingFeature[];
  cta: ActionLink;
  featured?: boolean;
}

export interface FormFieldConfig {
  id: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  defaultValue?: string;
}

export interface IntakeTelemetry {
  onboardingCapacity: string;
  discoveryLeadTime: string;
  studioLocations: string;
}

export interface FooterGroup {
  id: string;
  label: string;
  links: NavigationItem[];
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  iconName?: string;
  highlight?: string;
}

export interface TestimonialItem {
  id: string;
  client: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
  metric: string;
  metricLabel: string;
  quote: string;
  projectRef: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    descriptor: string;
  };
  theme: {
    dark: ThemeTokens;
    light: ThemeTokens;
  };
  navigation: NavigationItem[];
  hero: HeroConfig;
  techStack?: TechItem[];
  testimonials?: TestimonialItem[];
  friction: FrictionStep[];
  manifesto: StudioManifestoConfig;
  capabilities: CapabilityGroup[];
  solutions: Solution[];
  telemetry: TechnicalReadout[];
  projects: Project[];
  featuredWork: FeaturedProject[];
  benchmark: BenchmarkConfig;
  process: ProcessStep[];
  pricing: PricingPlan[];
  intake: {
    eyebrow: string;
    title: string;
    description: string;
    telemetry: IntakeTelemetry;
    fields: FormFieldConfig[];
    ctaLabel: string;
  };
  footer: {
    latency: string;
    groups: FooterGroup[];
    email: string;
    addresses: string[];
    copyright: string;
    security: string;
  };
}

