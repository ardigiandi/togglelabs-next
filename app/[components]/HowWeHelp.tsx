export default function HowWeHelp() {
  return (
    <div className="w-full md:max-w-6xl md:mx-auto mt-32 flex flex-col gap-12 px-5 lg:px-0">
      <div className="flex flex-col gap-4 items-center mx-auto text-center justify-center w-full md:w-150.5">
        <span className="text-xs font-semibold leading-3.5 tracking-primary bg-white/10 py-2 px-3 border border-gray-500 rounded-full">
          How We Help
        </span>
        <h1 className="text-3xl md:text-4xl font-bold leading-11 tracking-primary">
          We build digital products that move businesses forward.
        </h1>
        <p className="text-sm md:text-base font-normal leading-6 tracking-primary text-abu w-full md:w-121.25">
          From new ideas to existing products, we combine strategy, design, and
          development to create exceptional digital experiences.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5 items-center">
        <div className="w-full md:w-151 bg-secondary p-8 rounded-3xl">
          <div className="flex flex-col gap-4 bg-transparent">
            <div className="bg-transparent">
              <div className="bg-biru p-3 rounded-xl w-fit">
                <img src="/images/design.svg" alt="" className="w-6 bg-biru" />
              </div>
            </div>
            <h1 className="text-lg md:text-xl font-semibold leading-5 tracking-primary bg-transparent">
              UI/UX Design
            </h1>
            <p className="text-sm leading-5 tracking-primary text-abu bg-transparent">
              User-centered design systems that convert.
            </p>
          </div>
        </div>
        <div className="w-full md:w-151 bg-secondary p-8 rounded-3xl">
          <div className="flex flex-col gap-4 bg-transparent">
            <div className="bg-transparent">
              <div className="bg-biru p-3 rounded-xl w-fit">
                <img src="/images/code.svg" alt="" className="w-6 bg-biru" />
              </div>
            </div>
            <h1 className="text-lg md:text-xl font-semibold leading-5 tracking-primary bg-transparent">
              Web Development
            </h1>
            <p className="text-sm leading-5 tracking-primary text-abu bg-transparent">
              Fast, scalable, and secure web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
