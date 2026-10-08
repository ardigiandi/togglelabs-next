import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects, getProjectBySlug } from "@/data/projects";
import ProcessTabs from "@/app/[components]/ProcessTabs";

type Props = { params: Promise<{ slug: string }> };

const posisiCallout = [
  { top: "28%", left: "6%" },
  { top: "48%", left: "4%" },
  { top: "68%", left: "8%" },
];

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
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/arrow-left.svg"
            alt="back"
            height={20}
            width={20}
          />
        </Link>

        <span className="text-xs tracking-widest text-zinc-400">
          CASE {nomor} / {total}
        </span>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-700 px-5 py-2 text-sm font-medium"
          >
            Visit Live Site
          </a>
        ) : (
          <span />
        )}
      </nav>

      <section className="mt-20 md:mt-28 flex flex-col gap-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-800 px-3 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl ">{project.title}</h1>
        <p className="max-w-lg text-abu text-sm md:text-base">
          {project.description}
        </p>
      </section>

      <section className="relative mt-12 aspect-16/10 w-full overflow-hidden rounded-3xl bg-zinc-800">
        <Image
          src={project.hero}
          alt={`Mockup ${project.title}`}
          fill
          priority
          className="object-cover"
        />

        {project.highlights.map((label, i) => {
          const pos = posisiCallout[i] ?? {
            top: `${28 + i * 20}%`,
            left: "6%",
          };
          return (
            <span
              key={label}
              style={{ top: pos.top, left: pos.left }}
              className="absolute hidden rounded-full bg-black px-4 py-2 text-sm font-medium md:block"
            >
              {label}
            </span>
          );
        })}

        <dl className="absolute right-4 top-4 hidden max-w-xs space-y-3 rounded-2xl bg-zinc-900/95 p-5 md:block">
          <div>
            <dt className="text-[10px] tracking-widest text-zinc-400">
              CLIENT
            </dt>
            <dd className="text-sm font-medium">{project.info.client}</dd>
          </div>
          <div>
            <dt className="text-[10px] tracking-widest text-zinc-400">PERAN</dt>
            <dd className="text-sm font-medium">{project.info.role}</dd>
          </div>
          <div>
            <dt className="text-[10px] tracking-widest text-zinc-400">STACK</dt>
            <dd className="text-sm font-medium">{project.info.stack}</dd>
          </div>
          <div>
            <dt className="text-[10px] tracking-widest text-zinc-400">
              DURASI
            </dt>
            <dd className="text-sm font-medium">{project.info.duration}</dd>
          </div>
        </dl>
      </section>

      <ProcessTabs process={project.process} title={project.title} />

      <section className="mt-28">
        <p className="mb-6 text-xs tracking-widest text-zinc-400">
          FITUR UTAMA
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {project.features.map((f, i) => (
            <div
              key={f.title}
              className={`flex min-h-64 flex-col justify-end rounded-2xl p-6 ${
                f.featured ? "bg-red-700" : "bg-zinc-900"
              } ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <h3 className="text-2xl">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 flex flex-col items-center gap-4 rounded-3xl bg-zinc-900 px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl">Punya project serupa?</h2>
        <p className="text-zinc-300">Ceritakan idenya, kita bangun bersama.</p>
        <Link
          href="/kontak"
          className="mt-2 rounded-full bg-red-700 px-6 py-3 text-sm font-medium"
        >
          Yuk diskusi
        </Link>
      </section>
    </main>
  );
}
