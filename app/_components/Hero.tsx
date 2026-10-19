import Image from "next/image";

type Star = {
  position: string;
  size: string;
  delay: string;
  duration: string;
};

const stars: Star[] = [
  // Kiri
  { position: "left-16 top-36", size: "w-6", delay: "0s", duration: "3.5s" },
  { position: "left-48 top-56", size: "w-6", delay: "1.2s", duration: "4.5s" },
  { position: "left-48 top-92", size: "w-4", delay: "2s", duration: "5s" },
  // Kanan
  { position: "right-32 top-32", size: "w-6", delay: "0.6s", duration: "4s" },
  { position: "right-14 top-52", size: "w-6", delay: "1.8s", duration: "3.8s" },
  { position: "right-48 top-84", size: "w-4", delay: "2.4s", duration: "4.8s" },
  { position: "right-28 top-112", size: "w-4", delay: "3s", duration: "5.2s" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-32 pb-16">
      <Image
        src="/images/pettern.svg"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="z-0 object-cover"
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 hidden md:block"
        aria-hidden="true"
      >
        {stars.map((star, i) => (
          <img
            key={i}
            src="/images/star.svg"
            alt=""
            width={24}
            height={24}
            className={`absolute h-auto animate-twinkle ${star.position} ${star.size}`}
            style={{
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-205 text-center">
        <span className="rounded-full border-2 border-gray-600 bg-white/10 px-4 py-1.5 text-xs leading-4 tracking-primary">
          Digital Product Design Studio
        </span>

        <div className="mt-4 flex flex-col items-center gap-8">
          <h1
            id="scramble-text-original"
            className="text-[40px] font-bold leading-tight tracking-primary sm:text-[56px] lg:text-[68px] lg:leading-22"
          >
            We turn ideas into sharp digital products.
          </h1>

          <p className="max-w-169 text-base font-normal leading-6">
            We help businesses redesign websites and applications that are
            easier to use, aligned with business goals, and built to create
            better customer experiences.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-primary px-8 py-2.5 text-base font-medium leading-6 tracking-primary shadow-custom"
            >
              Start Your Project
            </a>
            <a
              href="#"
              className="rounded-full bg-white px-8 py-2.5 text-base font-medium leading-6 tracking-primary text-black shadow-custom2"
            >
              See Our Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
