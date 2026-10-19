import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects, getProjectBySlug } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function DetailProject({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const nomor = String(project.id).padStart(2, "0");
  const total = String(projects.length).padStart(2, "0");

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8 text-white">
      <section className="pt-36 px-5 md:px-0">
        <div className="max-w-6xl mx-auto">
          <a href="#" className="flex gap-2 items-center w-fit">
            <Image
              src="../images/arrow-left.svg"
              alt=""
              width={14}
              height={14}
            />
            <span className="text-sm text-abu font-normal leading-[100%] tracking-primary">
              Back to Portofolio
            </span>
          </a>

          <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-y-0 items-end mt-8">
            <div className="md:w-200 w-full flex flex-col gap-5">
              <span className="text-xs font-semibold text-purple leading-3.5 tracking-primary">
                UMKM CLOTHING / FEATURED PROJECT
              </span>
              <h1 className="text-5xl md:text-[72px] font-bold leading-[112%] tracking-primary">
                Pancarona E-Commerce App
              </h1>
            </div>
            <div className="flex flex-col gap-6 md:w-90 w-full">
              <p className="text-base text-abu font-normal leading-6 tracking-primary">
                Quiet luxury. Clear choices. A fashion shopping experience with
                room to breathe.
              </p>
              <a href="#" className="flex gap-3 items-center w-fit">
                <span className="text-xs font-normal leading-3.5 tracking-primary">
                  Explore the case study
                </span>
                <Image
                  src="../images/arrow-down.svg"
                  alt=""
                  width={14}
                  height={14}
                  priority
                />
              </a>
            </div>
          </div>

          <div className="flex gap-2 mt-8">
            <span className="bg-secondary border border-abu text-xs font-normal leading-4 rounded-full tracking-primary px-3 py-1">
              Web Design
            </span>
            <span className="bg-secondary border border-abu text-xs font-normal leading-4 rounded-full tracking-primary px-3 py-1">
              MERN Stack
            </span>
            <span className="bg-secondary border border-abu text-xs font-normal leading-4 rounded-full tracking-primary px-3 py-1">
              E-Commerce
            </span>
          </div>

          <div className="mt-14">
            <Image
              src="/images/card1.png"
              alt="Pancarona E-Commerce App preview"
              width={1200}
              height={800}
              quality={100}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
