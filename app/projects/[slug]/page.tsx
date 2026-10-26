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

  // const nomor = String(project.id).padStart(2, "0");
  // const total = String(projects.length).padStart(2, "0");

  return (
    <main className="mx-auto w-full md:max-w-6xl py-8 text-white">
      <section className="pt-36 px-5 md:px-0">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="flex gap-2 items-center w-fit">
            <Image
              src="../images/arrow-left.svg"
              alt=""
              width={14}
              height={14}
            />
            <span className="text-sm text-abu font-normal leading-[100%] tracking-primary">
              Back to Portofolio
            </span>
          </Link>

          <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-y-0 items-end mt-8">
            <div className="md:w-200 w-full flex flex-col gap-5">
              <span className="text-xs font-semibold text-purple leading-3.5 tracking-primary">
                {`${project.category} / FEATURED PROJECT`}
              </span>
              <h1 className="text-4xl md:text-[72px] font-bold leading-[112%] tracking-primary">
                {project.title}
              </h1>
            </div>
            <div className="flex flex-col gap-6 md:w-90 w-full">
              <p className="text-sm md:text-base text-abu font-normal leading-6 tracking-primary">
                {project.description}
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
            {project.tags.map((tag, index) => (
              <div key={index}>
                <span className="bg-secondary border border-abu text-xs font-normal leading-4 rounded-full tracking-primary px-3 py-1">
                  {tag}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Image
              src={project.hero}
              alt={`${project.title} E-Commerce App preview`}
              width={1920}
              height={1080}
              sizes="(min-width: 1280px) 1152px, 100vw"
              quality={90}
              priority
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mt-24 border-b border-white/10 pb-20 px-5 md:px-0">
        <div className="flex gap-3 items-center">
          <span className="text-xs font-semibold text-purple">01</span>
          <h1 className="text-xs font-semibold text-abu leading-3.5 tracking-primary uppercase">
            Project overview
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-10 gap-16">
          <div className="flex flex-col gap-6 md:w-145 w-full">
            <h1 className="text-3xl md:text-[40px] font-bold leading-12 tracking-primary text-white">
              {project.overview.title}
            </h1>
            <p className="text-sm md:text-base text-abu font-normal leading-6 tracking-primary">
              {project.overview.description}
            </p>
          </div>

          <div className="flex flex-col w-full md:w-140">
            <div className="flex flex-col md:flex-row gap-3.5 md:gap-0 justify-between border-b border-white/10 pb-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-normal tracking-primary leading-4 text-abu">
                  CLIENT
                </span>
                <h1 className="text-base font-semibold leading-6 tracking-primary">
                  {project.overview.client.name}
                </h1>
                <p className="text-sm font-normal leading-5 tracking-primary text-abu">
                  {project.overview.client.description}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-normal tracking-primary leading-4 text-abu">
                  ROLE
                </span>
                <h1 className="text-base font-semibold leading-6 tracking-primary">
                  {project.overview.role.name}
                </h1>
                <p className="text-sm font-normal leading-5 tracking-primary text-abu">
                  {project.overview.client.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-xs font-normal leading-4 tracking-primary text-abutua pt-6">
                ILLUSTRATIVE SCOPE
              </h1>

              <p className="text-base font-normal leading-6 tracking-primary text-abu">
                {project.overview.stack.description}
              </p>

              <div className="flex gap-2 items-center">
                {project.overview.stack.images.map((img) => (
                  <div key={img.src}>
                    <div className="bg-secondary px-3 py-2 rounded-2xl">
                      <Image
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        width={3.5}
                        height={3.5}
                        className="w-3.5 h-3.5"
                      />
                    </div>
                  </div>
                ))}
                <span className="text-sm font-normal text-abu leading-5 tracking-primary">
                  {project.overview.stack.build}
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="mt-14 text-xs text-abu border border-white/10 px-5 py-4 rounded-xl">
          Case-study concept: project identity and featured imagery are from the
          portfolio. Process, expanded screens, and intended outcomes are
          illustrative—not reported client results.
        </h1>
      </section>

      <section className="md:max-w-6xl mx-auto flex flex-col md:flex-row my-24 justify-between gap-5 md:gap-0 px-5 md:px-0">
        <div className="flex flex-col w-full md:w-145">
          <div className="flex gap-2 items-center">
            <span className="text-xs font-semibold text-purple">02</span>
            <h1 className="text-xs font-semibold leading-4 tracking-primary uppercase text-abu">
              The challenge
            </h1>
          </div>
          <h1 className="mt-6 text-3xl md:text-[40px] font-bold leading-12 tracking-primary">
            Keep the luxury. Remove the friction.
          </h1>
        </div>

        <div className="w-full md:w-140">
          <h1 className="text-sm md:text-base leading-6 font-normal text-abu tracking-primary">
            A minimal storefront should never leave shoppers guessing. The
            design challenge is to balance a fashion-led visual identity with
            clear product information and familiar shopping behavior.
          </h1>
          <div className="flex flex-col mt-6 gap-4">
            {project.challenges.points.map((point, index) => (
              <div key={index}>
                <div className="flex gap-2 items-center">
                  <Image
                    src="../images/check.svg"
                    alt=""
                    width={14}
                    height={14}
                    priority
                  />
                  <p className="text-sm leading-5 font-normal text-abu tracking-primary">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-24 px-5 md:px-0">
        <div className="flex flex-col justify-between items-end md:items-start gap-4 md:gap-5">
          <div className="flex flex-col w-full md:w-145">
            <div className="flex gap-2 items-center">
              <span className="text-xs font-semibold text-purple">03</span>
              <h1 className="text-xs font-semibold leading-4 tracking-primary text-abu uppercase">
                Our approach
              </h1>
            </div>
            <h1 className="mt-6 text-3xl md:text-[40px] font-bold leading-12 tracking-primary">
              Clarity at every step.
            </h1>
          </div>

          <h1 className="w-full md:w-140 text-sm md:text-base leading-6 font-normal text-abu tracking-primary">
            A proposed workflow connecting brand, customer needs, and the
            details that make a storefront work.
          </h1>
        </div>

        <div className="flex flex-wrap justify-center mt-8 gap-6">
          <div className="w-full md:w-64 flex flex-col bg-secondary p-7 rounded-3xl border border-white/10">
            <div className="flex justify-between items-center">
              <div className="bg-primary/10 p-2.5 rounded-[10px]">
                <Image
                  width={20}
                  height={20}
                  src="../images/search.svg"
                  alt=""
                  className="w-5"
                />
              </div>
              <h1 className="text-sm text-purple font-normal leading-[100%] tracking-normal">
                01
              </h1>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-b border-white/10 pb-6">
              <h1 className="text-base md:text-lg font-semibold leading-6 tracking-primary">
                Discover
              </h1>
              <p className="text-sm font-normal text-abu leading-5 tracking-primary">
                Map the shopping journey and the moments where customers need
                reassurance.
              </p>
            </div>

            <span className="mt-6 text-xs text-abu font-normal leading-4 tracking-primary">
              Journey map · Content audit
            </span>
          </div>
          <div className="w-full md:w-64 flex flex-col bg-secondary p-7 rounded-3xl border border-white/10">
            <div className="flex justify-between items-center">
              <div className="bg-primary/10 p-2.5 rounded-[10px]">
                <Image
                  width={20}
                  height={20}
                  src="../images/scan.svg"
                  alt=""
                  className="w-5"
                />
              </div>
              <h1 className="text-sm text-purple font-normal leading-[100%] tracking-normal">
                02
              </h1>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-b border-white/10 pb-6">
              <h1 className="text-base md:text-lg font-semibold leading-6 tracking-primary">
                Define
              </h1>
              <p className="text-sm font-normal text-abu leading-5 tracking-primary">
                Make collections, product details, and a direct path to purchase
                the foundation.
              </p>
            </div>

            <span className="mt-6 text-xs text-abu font-normal leading-4 tracking-primary">
              Information architecture · Flows
            </span>
          </div>
          <div className="w-full md:w-64 flex flex-col bg-secondary p-7 rounded-3xl border border-white/10">
            <div className="flex justify-between items-center">
              <div className="bg-primary/10 p-2.5 rounded-[10px]">
                <Image
                  width={20}
                  height={20}
                  src="../images/pen-tool.svg"
                  alt=""
                  className="w-5"
                />
              </div>
              <h1 className="text-sm text-purple font-normal leading-[100%] tracking-normal">
                03
              </h1>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-b border-white/10 pb-6">
              <h1 className="text-base md:text-lg font-semibold leading-6 tracking-primary">
                Design
              </h1>
              <p className="text-sm font-normal text-abu leading-5 tracking-primary">
                Pair editorial imagery with a quiet interface and consistent
                commerce patterns.
              </p>
            </div>

            <span className="mt-6 text-xs text-abu font-normal leading-4 tracking-primary">
              Responsive UI · Design system
            </span>
          </div>
          <div className="w-full md:w-64 flex flex-col bg-secondary p-7 rounded-3xl border border-white/10">
            <div className="flex justify-between items-center">
              <div className="bg-primary/10 p-2.5 rounded-[10px]">
                <Image
                  width={20}
                  height={20}
                  src="../images/code2.svg"
                  alt=""
                  className="w-5"
                />
              </div>
              <h1 className="text-sm text-purple font-normal leading-[100%] tracking-normal">
                04
              </h1>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-b border-white/10 pb-6">
              <h1 className="text-base md:text-lg font-semibold leading-6 tracking-primary">
                Develop
              </h1>
              <p className="text-sm font-normal text-abu leading-5 tracking-primary">
                Translate the system into reusable components and deliberate
                loading states.
              </p>
            </div>

            <span className="mt-6 text-xs text-abu font-normal leading-4 tracking-primary">
              MERN storefront · QA checklist
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
