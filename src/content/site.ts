import type {
  ContentSectionData,
  FAQItem,
  FeatureItem,
  FooterColumn,
  HeroContent,
  NavItem,
  Testimonial,
} from "../types";
export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "#hero",
    children: [
      { label: "App Landing", href: "/" },
      { label: "App Showcase #1", href: "/demo-2" },
      { label: "Startup Agency", href: "/demo-3" },
    ],
  },
  {
    label: "About",
    href: "#benefits",
    children: [
      { label: "Why OLMO?", href: "#benefits" },
      { label: "Best Solutions", href: "#solutions" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Testimonials", href: "#reviews" },
      { label: "Read the FAQs", href: "#faqs" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Core Features", href: "/features" },
      { label: "Plans & Pricing", href: "/pricing" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "#blog" },
];
export const heroContent: HeroContent = {
  title: "Share text, voice, photos, videos and GIFs files for free",
  description:
    "Feugiat primis ligula sapien mauris lorem in suscipit undo feugiat integer a placerat the laoreet a congue bibendum aliquette auctor egestas quaerat a purus convallis",
  primaryCta: { label: "Get Started Now", href: "#banner" },
  secondaryCta: {
    label: "How It Works",
    href: "https://www.youtube.com/watch?v=B2-ur-kEej4",
  },
  image: { src: "assets/images/img-02p.png", alt: "OLMO hero" },
  advantages: ["14 days free trial", "No credit card"],
};
export const benefits: FeatureItem[] = [
  ["flaticon-smartphone-1", "Cross-Platform"],
  ["flaticon-wireframe", "Friendly Interface"],
  ["flaticon-interface", "Quick Access"],
  ["flaticon-fingerprint-scan", "Strong Encryption"],
].map(([icon, title]) => ({
  icon,
  title,
  description:
    "Tempor rhoncus undo fusce mollis rhoncus the hendrerit nostra laoreet and sodales",
}));
export const solutionFeatures: FeatureItem[] = [
  ["flaticon-video-call", "Voice and Video Calls"],
  ["flaticon-insult", "Instant Messages"],
  ["flaticon-group", "Group Files Sharing"],
  ["flaticon-security", "Private and Safe"],
].map(([icon, title]) => ({
  icon,
  title,
  description:
    "Ligula risus auctor magnis mauris inceptos dolores lorem undo velna dignisim habitant luctus placerat auctor impedit morbi augue and blandit hendrerit",
}));
export const contentSections: ContentSectionData[] = [
  {
    badge: "Fast Performance",
    title: "Save your time and effort with OLMO",
    description:
      "Sapien tempor sodales mollis sappien sorales the malesuada lorem volutpat mauris laoreet dictun bibendum and dignisim posure fusce diam sodales imperdiet magna sorales curus in vitae dollores tellum hendrerit elementum totor in volutpate",
    image: { src: "assets/images/img-06.png", alt: "Fast performance" },
    bullets: [
      "Volute mauris dolores inceptos bibendum sagittis a neque fusce enim magna blandit sodales aliquet mollis convallis",
      "Volute turpis dolores sagittis ipsum blandit bibendum and sodales molestie bibendum ipsum enim rhoncus sappiem",
    ],
  },
  {
    badge: "Endless Possibilities",
    title: "Powerful photo and video editing tools",
    description:
      "Sapien tempor sodales mollis sappien sorales the malesuada lorem volutpat mauris laoreet dictun bibendum and dignisim posure fusce diam sodales imperdiet magna sorales curus in vitae dollores",
    image: { src: "assets/images/img-08.png", alt: "Photo and video editing" },
    reverse: true,
    bullets: [
      "Volute mauris dolores inceptos bibendum sagittis a neque fusce enim magna blandit sodales aliquet mollis convallis",
      "Volute turpis dolores sagittis ipsum blandit bibendum and sodales molestie bibendum ipsum enim rhoncus sappiem posure fusce diam sodales imperdiet magna sorales",
    ],
  },
  {
    badge: "Advanced Security",
    title: "No collection of user data. No Ads",
    image: { src: "assets/images/img-07.png", alt: "Advanced security" },
    bullets: [
      "Volute mauris dolores inceptos bibendum sagittis a neque fusce enim magna blandit sodales aliquet mollis convallis lorem undo sodales imperdiet",
      "Volute turpis dolores sagittis ipsum blandit posure sodales and molestie pretium matis tempor sapiem rhoncus mauris laoreet the magna inceptos neque",
    ],
  },
  {
    badge: "Handling With Ease",
    title: "Make it simpler with Quick Commands",
    description:
      "Sapien tempor sodales mollis sappien sorales the malesuada lorem volutpat mauris laoreet dictun bibendum and dignisim posure fusce diam sodales imperdiet magna sorales curus",
    image: { src: "assets/images/img-03.png", alt: "Quick commands" },
    reverse: true,
    bullets: [
      "Volute mauris dolores inceptos bibendum sagittis a neque fusce enim magna blandit sodales aliquet mollis convallis",
      "Volute turpis dolores sagittis ipsum blandit bibendum and sodales molestie bibendum ipsum enim rhoncus sappiem posure fusce diam sodales imperdiet magna sorales",
    ],
  },
  {
    badge: "Intuitive Files Manager",
    title: "Fast access to all your media content",
    description:
      "Sapien tempor sodales mollis sappien sorales the malesuada lorem volutpat mauris laoreet dictun bibendum and dignisim posure fusce diam sodales imperdiet magna sorales curus",
    image: { src: "assets/images/img-13.png", alt: "Files manager" },
  },
];
export const testimonials: Testimonial[] = [
  {
    quote:
      "Donec mauris magnis and sapien laoreet pretium at congue augue volutpat lectus aenean in magna mauris lectus laoreet fusce ligula egestas undo lectus suscipit",
    author: "OLMO customer",
    role: "Verified user",
    rating: 5,
  },
  {
    quote:
      "Aliquam augue suscipit and luctus neque purus rhoncus ipsum neque undo molestie volutpat and cursus rhoncus diam quaerat",
    author: "OLMO customer",
    role: "Verified user",
    rating: 5,
  },
];
export const faqs: FAQItem[] = [
  {
    question: "Get started with OLMO",
    answer:
      "Sapien tempor sodales the quaerat congue ipsum and turpis neque laoreet auctor vitae.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. The original page advertises a free trial and no credit card requirement.",
  },
  {
    question: "How secure is my data?",
    answer:
      "The source emphasizes strong encryption, privacy, and no collection of user data.",
  },
];
export const footerColumns: FooterColumn[] = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Projects", href: "/projects" },
      { label: "Testimonials", href: "/reviews" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Core Features", href: "/features" },
      { label: "Plans & Pricing", href: "/pricing" },
      { label: "Download", href: "/download" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Insights", href: "/blog" },
      { label: "Help & Support", href: "/faqs" },
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
