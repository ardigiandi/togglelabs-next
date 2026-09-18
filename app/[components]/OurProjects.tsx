import { projects } from "@/data/projects";

export default function OurProjects() {
  return (
    <div className="max-w-6xl mx-auto mt-20 lg:mt-32 px-5 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between items-end">
        <div className="flex flex-col gap-4 w-full lg:w-130">
          <span className="text-xs font-semibold leading-3.5 tracking-primary bg-white/10 py-2 px-3 border border-gray-500 rounded-full w-fit">
            Featured Projects
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-11 tracking-primary">
            Designing digital experiences that create meaningful impact.
          </h1>
        </div>
        <p className="w-full lg:w-115 mt-4 md:mt-0 text-base leading-6 tracking-primary text-abu">
          We partner with businesses to redesign websites and digital products
          that are easier to use, visually refined, and built to support
          long-term growth.
        </p>
      </div>

      <div className="mt-12 mb-7 flex flex-wrap gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="flex flex-col md:flex-row p-6 rounded-3xl gap-12 bg-secondary w-full border-gray-600 border items-center"
          >
            <img src={p.image} alt="#" className="w-80 lg:w-125" />
            <div className="flex flex-col gap-6 bg-secondary">
              <div className="flex gap-2 bg-secondary">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-third text-xs font-normal leading-4 rounded-full tracking-primary px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2 bg-secondary">
                <span className="text-xs font-medium leading-4.5 tracking-primary bg-secondary">
                  {p.category}
                </span>
                <h1 className="text-xl md:text-2xl font-bold leading-9 tracking-primary bg-secondary">
                  {p.title}
                </h1>
                <p className="text-sm md:text-base font-normal leading-6 tracking-primary text-abu bg-secondary">
                  {p.description}
                </p>
              </div>

              <a href={p.href} className="flex gap-2 items-center bg-secondary">
                <h1 className="text-sm font-medium leading-5 tracking-primary bg-secondary">
                  See Project
                </h1>
                <img
                  src="/images/arrow-right.svg"
                  alt="#"
                  className="w-5 bg-secondary"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
