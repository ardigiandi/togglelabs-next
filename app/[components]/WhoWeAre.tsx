export default function WhoWeAre() {
  return (
    <div className="md:max-w-6xl md:mx-auto mt-32 flex flex-col md:flex-col lg:flex-row justify-between items-center gap-10 px-5 z-10 ">
      <div className="w-full md:w-full lg:w-[50%] flex flex-col items-start">
        <span className="py-2 px-3 border border-gray-500 rounded-full">
          <h1 className="bg-secondary text-xs font-semibold leading-3.5 tracking-primary ">Who We Are</h1>
        </span>
        <h1 className="text-2xl md:text-4xl mt-4 font-bold leading-8 md:leading-11 tracking-normal md:tracking-primary">
          Building digital solutions to solve concrete business challenges.
        </h1>
        <p className="mt-6 text-sm lg:text-base font-normal text-abu">
          At ToggleLabs, we don't believe in over-engineered software or complex
          jargon. We are engineers, designers, and systems architects passionate
          about supporting Indonesian growth. Whether you are a growing UMKM or
          a venture-backed tech startup, we build the clean, fast infrastructure
          your products demand.
        </p>
      </div>

      <div className="flex flex-col items-center bg-secondary p-10 w-full md:w-full lg:w-[50%] rounded-3xl border border-gray-800">
        <div className="flex gap-10 w-full border-b border-gray-800 pb-8 justify-center bg-transparent">
          <div className="flex flex-col gap-2 text-center bg-transparent">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-[100%] tracking-normal bg-transparent ">
              10+
            </h1>
            <p className="text-sm font-normal leading-3.5 tracking-primary bg-transparent">
              Successful Project
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center bg-transparent">
            <h1 className="text-3xl md:text-5xl  font-extrabold leading-[100%] tracking-normal bg-transparent">
              98%
            </h1>
            <p className="text-sm font-normal leading-3.5 tracking-primary bg-transparent">
              Client satisfaction
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center bg-transparent">
            <h1 className="text-3xl md:text-5xl  font-extrabold leading-[100%] tracking-normal bg-transparent">
              2+
            </h1>
            <p className="text-sm font-normal leading-3.5 tracking-primary bg-transparent">
              Years Experience
            </p>
          </div>
        </div>
        <p className="pt-8 text-sm text-abu bg-transparent">
          "Our ultimate metric is the operational shift. If the website doesn't
          make customer acquisition easier, or the app doesn't save your ops
          team time, we haven't done our job."
        </p>
      </div>
    </div>
  );
}
