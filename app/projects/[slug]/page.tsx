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
              <span className="text-xs font-semibold text-purle leading-3.5 tracking-primary">
                {`${project.category} / FEATURED PROJECT`}
              </span>
              <h1 className="text-5xl md:text-[72px] font-bold leading-[112%] tracking-primary">
                {project.title}
              </h1>
            </div>
            <div className="flex flex-col gap-6 md:w-90 w-full">
              <p className="text-base text-abu font-normal leading-6 tracking-primary">
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
          <span className="text-xs font-semibold text-purle">01</span>
          <h1 className="text-xs font-semibold text-abu leading-3.5 tracking-primary uppercase">
            Project overview
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-10 gap-16">
          <div className="flex flex-col gap-6 md:w-145 w-full">
            <h1 className="text-4xl md:text-[40px] font-bold leading-12 tracking-primary text-white">
              {project.overview.title}
            </h1>
            <p className="text-base text-abu font-normal leading-6 tracking-primary">
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
          <h1 className="mt-6 text-[40px] font-bold leading-12 tracking-primary">
            Keep the luxury. Remove the friction.
          </h1>
        </div>

        <div className="w-full md:w-140">
          <h1 className="text-base leading-6 font-normal text-abu tracking-primary">
            A minimal storefront should never leave shoppers guessing. The
            design challenge is to balance a fashion-led visual identity with
            clear product information and familiar shopping behavior.
          </h1>
          <div className="flex flex-col mt-6 gap-4">
            <div className="flex gap-2 items-center">
              <Image
                src="../images/check.svg"
                alt=""
                width={14}
                height={14}
                priority
              />
              <p className="text-sm leading-5 font-normal text-abu tracking-primary">
                Make collections easy to discover.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="../images/check.svg"
                alt=""
                width={14}
                height={14}
                priority
              />
              <p className="text-sm leading-5 font-normal text-abu tracking-primary">
                Bring fit, material, and availability into focus.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="../images/check.svg"
                alt=""
                width={14}
                height={14}
                priority
              />
              <p className="text-sm leading-5 font-normal text-abu tracking-primary">
                Keep the path from product to checkout clear.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
