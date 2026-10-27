import Image from "next/image";

const techs = [
  { name: "React", src: "/images/react.svg" },
  { name: "Next.js", src: "/images/next.svg" },
  { name: "Tailwind CSS", src: "/images/tailwind.svg" },
  { name: "Node.js", src: "/images/node.svg" },
  { name: "Figma", src: "/images/figma.svg" },
  { name: "PostgreSQL", src: "/images/postgresql.svg" },
  { name: "MySQL", src: "/images/mysql.svg" },
];

export default function Tech() {
  return (
    <section className="max-w-6xl mx-auto mt-10 z-10 md:-mt-87.5 lg:mt-10 flex flex-col items-center gap-4 md:px-0 px-5">
      <h2 className="text-sm lg:text-base font-normal leading-6 tracking-primary">
        Our Tech Stack
      </h2>
      <ul className="flex flex-wrap gap-8 justify-center">
        {techs.map((tech) => (
          <li
            key={tech.name}
            className="bg-secondary p-3 rounded-2xl flex items-center justify-center"
          >
            <Image
              src={tech.src}
              alt={tech.name}
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}