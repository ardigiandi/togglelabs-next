function slugify(teks: string) {
  return teks
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// export type ProjectFeature = {
//   title: string;
//   description: string;
//   featured?: boolean;
// };

export type Project = {
  id: number;
  slug: string;
  image: string;
  hero: string;
  tags: string[];
  category: string;
  title: string;
  description: string;
  href?: string;

  overview: {
    title: string;
    description: string;
    client: {
      name: string;
      description: string;
    };
    role: {
      name: string;
      description: string;
    };
    stack: {
      description: string;
      images: { src: string; alt: string }[];
      build: string;
    };
  };

};

type ProjectInput = Omit<Project, "slug">;

export type Testimonials = {
  id: number;
  quote: string;
  name: string;
  role: string;
  logo: string;
};

const projectData: ProjectInput[] = [
  {
    id: 1,
    image: "/images/card2.png",
    hero: "/images/card1.png",
    tags: ["Web Design", "MERN Stack", "E-Commerce"],
    category: "UMKM CLOTHING",
    title: "Pancarona E-Commerce App",
    description:
      "Platform e-commerce fashion dengan nuansa quiet luxury dan minimalisme yang rapi, dibuat untuk UMKM Clothing.",
    href: "https://pancarona.com",

    overview: {
      title: "An understated brand. An effortless storefront.",
      description:
        "Pancarona is a modern fashion e-commerce platform built around quiet luxury and sleek minimalism. This case-study concept explores how that identity can guide the entire journey: from discovering a collection to finding the right fit and checking out with confidence.",
      client: {
        name: "Pancarona",
        description: "UMKM Clothing",
      },
      role: {
        name: "Design & development",
        description: "ToggleLabs Studio",
      },
      stack: {
        description:
          "Experience strategy · UI/UX design · Responsive storefront · Component system · MERN implementation",
        images: [
          {
            src: "/images/figma.svg",
            alt: "Pancarona homepage design",
          },
          {
            src: "/images/react.svg",
            alt: "Pancarona product detail page",
          },
          {
            src: "/images/node.svg",
            alt: "Pancarona checkout flow",
          },
        ],
        build: "Designed in Figma. Built on MERN.",
      },
    },

    // challenges: {

    // }
  },
];

export const projects: Project[] = projectData.map((p) => ({
  ...p,
  slug: slugify(p.title),
}));

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

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
