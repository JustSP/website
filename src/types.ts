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
  id: string | number;
  question: string;
  answer: string;
  delay?: string;
}
export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}
export interface SocialLink {
  label: string;
  href: string;
}
export interface Feature {
  id: string | number;
  icon: string;
  title: string;
  description: string;
  delay?: string;
}
export interface StatisticsData {
  title: string;
  stats: { value: string; label: string; delay?: string }[];
}
export interface BlogPost {
  id: string | number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  comments: number;
  delay?: string;
}
export interface Rating {
  platform: string;
  logo: string;
  rating?: string;
  stars?: number;
  delay?: string;
}
