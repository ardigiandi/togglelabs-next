export type Project = {
  id: number;
  slug: string;
  image: string;
  tags: string[];
  category: string;
  title: string;
  description: string;
  href?: string;

  info: {
    client: string;
    role: string;
    stack: string;
    duration: string;
  };

  highlights: string[];

  process: {
    wireframe: string;
    design: string;
    live: string;
  };

  features: {
    title: string;
    description: string;
    featured?: boolean;
  }[];
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
    slug: "pancarona",
    image: "/images/card1.png",
    tags: ["Web Design", "MERN Stack", "E-Commerce"],
    category: "Web",
    title: "Pancarona",
    description:
      "Platform e-commerce fashion dengan nuansa quiet luxury dan minimalisme yang rapi, dibuat untuk UMKM Clothing.",
    href: "https://togglelabs.vercel.app",

    info: {
      client: "UMKM Clothing",
      role: "UI/UX, Frontend, Backend",
      stack: "MongoDB, Express, React, Node",
      duration: "3 bulan",
    },
    highlights: ["Hero slider", "Filter produk", "Checkout 3 langkah"],
    process: {
      wireframe: "/images/card1.png",
      design: "/images/card2.png",
      live: "/images/card3.png",
    },
    features: [
      {
        title: "Katalog dan filter produk",
        description: "Cari berdasarkan kategori, ukuran, dan harga.",
      },
      {
        title: "Checkout",
        description: "Keranjang sampai bayar dalam 3 langkah.",
        featured: true,
      },
      {
        title: "Autentikasi",
        description: "Login dan akun pelanggan.",
      },
      {
        title: "Dashboard admin",
        description: "Kelola produk, stok, dan pesanan.",
      },
    ],
  },
];

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

