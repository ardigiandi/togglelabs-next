export type Project = {
  id: number;
  image: string;
  tags: string[];
  category: string;
  title: string;
  description: string;
  href: string;
};

export type Testimonials = {
  id: number;
  quote: string;
  name: string;
  role: string;
  logo: string;
};

export const projects: Project[] = [
  {
    id: 1,
    image: "/images/card1.png",
    tags: ["Web Design", "MERN Stack", "E-Commerce"],
    category: "UMKM Clothing",
    title: "Pancarona E-Commerce App",
    description:
      "Pancarona is a modern fashion e-commerce platform built around quiet luxury and sleek minimalism",
    href: "#",
  },
  {
    id: 2,
    image: "/images/card2.png",
    tags: ["UI / UX", "PHP", "MySQL"],
    category: "Education",
    title: "Online SPMB App",
    description:
      "SPMB Online is a streamlined, web-based platform designed to make the student enrollment and application process simple, transparent, and completely digital.",
    href: "#",
  },
  {
    id: 3,
    image: "/images/card3.png",
    tags: ["Company Profil", "UI / UX", "Design"],
    category: "Beauty product",
    title: "Company Profile Jasmine Beauty",
    description:
      "Jasmine Beauty is a modern, minimalist skincare e-commerce platform centered on natural beauty and self-confidence, featuring an elegant, warm terracotta aesthetic.",
    href: "#",
  },
];

export const testimonials: Testimonials[] = [
  {
    id: 1,
    quote:
      "ToggleLabs helped us turn a complex product into a simple, intuitive experience that our users genuinely enjoy.",
    name: "Alex Morgan",
    role: "Founder, Acme Studio",
    logo: "/images/acme.png",
  },
  {
    id: 2,
    quote:
      "ToggleLabs helped us turn a complex product into a simple, intuitive experience that our users genuinely enjoy.",
    name: "Alex Morgan",
    role: "Founder, Acme Studio",
    logo: "/images/acme.png",
  },
  {
    id: 3,
    quote:
      "ToggleLabs helped us turn a complex product into a simple, intuitive experience that our users genuinely enjoy.",
    name: "Alex Morgan",
    role: "Founder, Acme Studio",
    logo: "/images/acme.png",
  },
];
