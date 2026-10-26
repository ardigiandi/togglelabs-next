import { getProjects } from "@/lib/projects-store";
import Image from "next/image";
import Link from "next/link";

export default async function CardProjects() {
  const projects = await getProjects();
  return (
    <div className="mt-5 mb-7 flex flex-wrap gap-8">
      {projects.map((p) => (
        <div
          key={p.id}
          className="flex flex-col md:flex-row p-6 rounded-3xl gap-12 bg-secondary w-full border-gray-600 border items-center"
        >
          <Image
            src={p.image}
            alt="#"
            className="w-80 lg:w-125"
            width={400}
            height={300}
          />
          <div className="flex flex-col gap-6 ">
            <div className="flex gap-2 ">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-third text-xs font-normal leading-4 rounded-full tracking-primary px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4 ">
              <span className="text-xs font-medium leading-4.5 tracking-primary ">
                {p.category}
              </span>
              <h1 className="text-lg md:text-xl font-bold leading-9 tracking-primary ">
                {p.title}
              </h1>
              <p className="text-sm md:text-base font-normal leading-6 tracking-primary text-abu ">
                {p.description}
              </p>
            </div>

            <Link
              href={`/projects/${p.slug}`}
              className="flex gap-2 items-center "
            >
              <h1 className="text-sm font-medium leading-5 tracking-primary ">
                See Project
              </h1>
              <Image
                src="/images/arrow-right.svg"
                alt="#"
                className="w-5 "
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
