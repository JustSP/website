import { FooterSection, SocialLink } from "../types";

export const footerSections: FooterSection[] = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Projects", href: "/projects" },
      { label: "Testimonials", href: "/#reviews" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "ERPNext", href: "/erpnext" },
      { label: "Startups", href: "/startups" },
      { label: "WISH Wallet", href: "/wallet" },
      { label: "Blog & Insights", href: "/#blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Insights", href: "/#blog" },
      { label: "Help & Support", href: "/#faqs" },
      { label: "FAQ", href: "/#faqs" },
      { label: "Startup Program", href: "/startups" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/wwhub" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ww-hub" },
  { label: "Dribbble", href: "#" },
];

export const footerData = {
  logo: "/assets/images/logo-light.png",
  description:
    "WISH — Winworld Innovative Solutions Hub. We build, deploy, host, audit, and support software applications, from websites and ERPs to MVPs and Web3 products. You got idea, we got tech.",
  copyright:
    "&copy; 2026 WISH — Winworld Innovative Solutions Hub. All Rights Reserved",
};
