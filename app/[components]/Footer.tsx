import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-32 bg-secondary">
      <div className="max-w-6xl mx-auto py-14 px-5 md:px-0">
        <div className="flex flex-wrap gap-8 justify-between">
          <div>
            <Image
              src="/images/togglelabss.png"
              alt="#"
              width={130}
              height={130}
              className="w-32.25"
            />
            <p className="w-90 mt-4 text-sm md:text-base text-abu font-normal leading-6 tracking-primary">
              Providing modern engineering and beautiful user interfaces for
              Indonesian software development, mobile apps, and systems audits.
            </p>
          </div>

          <div className="flex justify-center gap-20">
            <ul className="flex flex-col gap-2">
              <h1 className="text-lg md:text-xl font-semibold leading-5 tracking-primary">
                Explore
              </h1>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-abu leading-4 tracking-primary font-normal"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-abu leading-4 tracking-primary font-normal"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-abu leading-4 tracking-primary font-normal"
                >
                  Portofolio
                </a>
              </li>
            </ul>

            <ul className="flex flex-col gap-2 w-40.25">
              <h1 className="text-lg md:text-xl font-semibold leading-5 tracking-primary">
                Contact
              </h1>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-abu leading-4 tracking-primary font-normal"
                >
                  hello@togglelabs.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-abu leading-4 tracking-primary font-normal"
                >
                  +62-8138247764
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm md:text-base text-abu leading-4 tracking-primary font-normal"
                >
                  Jl. Bulungan No.76,Kota Jakarta Selatan 12130
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center border-b border-white/10 pb-12">
          <Image
            src="/images/TOGGLELABS.png"
            alt="ToggleLabs"
            width={1920}
            height={600}
            sizes="100vw"
            quality={90}
            className="h-auto w-full"
          />
        </div>

        <div className="mt-12 flex justify-between">
          <h1 className="text-xs font-normal leading-5 text-abu tracking-primary">
            © 2026 TOGGLELABS STUDIO. ALL RIGHTS RESERVED.
          </h1>
          <p className="text-xs font-normal leading-5 text-abu tracking-primary">
            MADE FOR PERFORMANCE & GROWTH.
          </p>
        </div>
      </div>
    </footer>
  );
}
