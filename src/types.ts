export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
export interface HeroContent {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: { src: string; alt: string };
  advantages?: string[];
}
export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}
export interface ContentSectionData {
  id?: string;
  badge?: string;
  title: string;
  description?: string;
  image?: { src: string; alt: string };
  bullets?: string[];
  features?: FeatureItem[];
  reverse?: boolean;
}
export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
}
export interface FAQItem {
  question: string;
  answer: string;
}
export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
