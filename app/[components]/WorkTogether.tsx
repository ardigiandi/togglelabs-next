import Link from "next/link";

export default function WorkTogether() {
  return (
    <div className="max-w-6xl mx-auto mt-32 flex flex-col justify-center items-center text-center w-200">
      <span className="text-xs font-semibold leading-3.5 tracking-primary bg-white/10 py-2 px-3 border border-gray-500 rounded-full w-fit">
        Let`s Work Together
      </span>
      <h1 className="text-5xl mt-4 font-extrabold leading-[120%] tracking-[-1px]">
        Ready to transform your brand's digital experience?
      </h1>
      <p className="mt-8 text-abu w-160 text-base leading-[160%] tracking-[0%]">
        Let's jump on a quick 15-minute diagnostic call. We'll audit your
        current site or app performance and draft a straightforward execution
        plan.
      </p>
      <div className="mt-8 flex gap-5 items-center">
        <Link
          href="#"
          className="bg-biru px-8 py-2.5 rounded-full shadow-custom text-base font-medium leading-6 tracking-primary"
        >
          Schedue Call
        </Link>
        <Link
          href="#"
          className="bg-white px-8 text-black py-2.5 rounded-full shadow-custom2 text-base font-medium leading-6 tracking-primary"
        >
          WhatsApp Chat
        </Link>
      </div>
    </div>
  );
}
