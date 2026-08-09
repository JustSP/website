import { FooterSection, SocialLink } from "../types";

export const footerSections: FooterSection[] = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "about.html" },
      { label: "Our Projects", href: "projects.html" },
      { label: "Testimonials", href: "reviews.html" },
      { label: "Contact Us", href: "contacts.html" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Core Features", href: "features.html" },
      { label: "Integrations", href: "integrations.html" },
      { label: "Plans & Pricing", href: "pricing.html" },
      { label: "Download", href: "download.html" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Insights", href: "blog-page.html" },
      { label: "Help & Support", href: "faqs.html" },
      { label: "Press & Media", href: "#" },
      { label: "Life Chatting", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Terms of Use", href: "terms.html" },
      { label: "Privacy Policy", href: "privacy.html" },
      { label: "Cookie Policy", href: "cookies.html" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

export const footerData = {
  logo: "/assets/images/logo-light.png",
  description:
    "Aliquam augue suscipit and luctus neque purus rhoncus ipsum neque undo molestie volutpat and cursus rhoncus diam quaerat",
  copyright: "&copy; 2010 - 2026 OLMO. All Rights Reserved",
};
