import Image from "next/image";

export default function OurWorkSystem() {
  return (
    <div className="max-w-6xl mx-auto mt-32 flex flex-col justify-center items-center px-5 md:px-0">
      <span className="text-xs font-semibold leading-3.5 tracking-primary bg-white/10 py-2 px-3 border border-gray-500 rounded-full w-fit">
        Our Work System
      </span>
      <h1 className="text-3xl text-center md:text-start md:text-4xl font-bold leading-11 tracking-primary mt-4">
        From first idea to final product.
      </h1>
      <p className="text-base font-normal leading-6 tracking-primary text-abu mt-4 w-full md:w-120.5 text-center">
        A collaborative process that brings strategy, design, and development
        together to turn ideas into products that work.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-6">
        <div className="w-full md:w-67.5 px-8 pt-8 pb-14 bg-secondary rounded-3xl">
          <div className="flex justify-between items-center ">
            <Image
              src="/images/search.svg"
              alt="#"
              width={20}
              height={20}
              className="bg-biru/12 p-3 rounded-xl"
            />
            <p className="text-[28px] font-extrabold text-biru/20 ">
              01
            </p>
          </div>

          <div className="mt-6 border-b pb-3 border-white/10 ">
            <h1 className="text-xl font-bold leading-7 ">
              Discover
            </h1>
            <p className="mt-1 text-sm font-medium leading-5 ">
              Understand before we build.
            </p>
          </div>

          <p className="mt-3 text-sm text-abu font-normal">
            Learn about the business, users, goals, and challenges.
          </p>
        </div>
        <div className="w-full md:w-67.5 px-8 pt-8 pb-14 bg-secondary rounded-3xl">
          <div className="flex justify-between items-center">
            <Image
              src="/images/target.svg"
              alt="#"
              width={20}
              height={20}
              className="bg-biru/12 p-3 rounded-xl"
            />
            <p className="text-[28px] font-extrabold text-biru/20">
              02
            </p>
          </div>

          <div className="mt-6 border-b pb-3 border-white/10">
            <h1 className="text-xl font-bold leading-7 bg-secondary">Define</h1>
            <p className="mt-1 text-sm font-medium leading-5 bg-secondary">
              Turn challenges into opportunities.
            </p>
          </div>

          <p className="mt-3 text-sm text-abu font-normal ">
            Align on priorities, user needs, and product direction.
          </p>
        </div>
        <div className="w-full md:w-67.5 px-8 pt-8 pb-14 bg-secondary rounded-3xl">
          <div className="flex justify-between items-center">
            <Image
              src="/images/pen-tool.svg"
              alt="#"
              width={20}
              height={20}
              className="bg-biru/12 p-3 rounded-xl"
            />
            <p className="text-[28px] font-extrabold text-biru/20">
              03
            </p>
          </div>

          <div className="mt-6 border-b pb-3 border-white/10">
            <h1 className="text-xl font-bold leading-7">Design</h1>
            <p className="mt-1 text-sm font-medium leading-5">
              Turn ideas into experiences.
            </p>
          </div>

          <p className="mt-3 text-sm text-abu font-normal">
            Create user flows, wireframes, and polished interfaces.
          </p>
        </div>
        <div className="w-full md:w-67.5 px-8 pt-8 pb-14 bg-secondary rounded-3xl">
          <div className="flex justify-between items-center ">
            <Image
              src="/images/code2.svg"
              alt="#"
              width={20}
              height={20}
              className="bg-biru/12 p-3 rounded-xl"
            />
            <p className="text-[28px] font-extrabold text-biru/20 ">04</p>
          </div>

          <div className="mt-6 border-b pb-3 border-white/10 bg">
            <h1 className="text-xl font-bold leading-7">Develop</h1>
            <p className="mt-1 text-sm font-medium leading-5">
              Bring the experience to life.
            </p>
          </div>

          <p className="mt-3 text-sm text-abu font-normal">
            Turn validated designs into fast, responsive, and scalable products.
          </p>
        </div>
      </div>
    </div>
  );
}
