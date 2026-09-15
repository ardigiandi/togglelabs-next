import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/images/pettern.svg"
        alt=""
        fill
        className="object-cover z-0"
        priority
      />

      <div className="absolute top-10 inset-x-0 px-24 flex items-center justify-between">
        <Image
          src="/images/togglelabss.svg"
          alt=""
          width={129}
          height={26}
          style={{ width: "auto", height: "auto" }}
          priority
        />

        {/* <Image src="/images/star.svg" alt="star" width={100} height={100} className="w-full h-auto" /> */}

        <ul className="flex gap-10">
          <li>
            <a href="#" className="text-base leading-4 tracking-primary">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-base leading-4 tracking-primary">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-base leading-4 tracking-primary">
              Portofolio
            </a>
          </li>
          <li>
            <a href="#" className="text-base leading-4 tracking-primary">
              Testimonial
            </a>
          </li>
        </ul>

        <a
          href="#"
          className="text-base bg-primary rounded-full px-8 py-2.5 shadow-custom"
        >
          Book a Call
        </a>
      </div>

      <div className="absolute left-0 top-36">
        <Image
          src="/images/star.svg"
          alt=""
          width={10}
          height={10}
          className="relative w-5 left-16 animate-twinkle"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />
        <Image
          src="/images/star.svg"
          alt=""
          width={10}
          height={10}
          className="relative w-5 top-20 left-48 animate-twinkle"
          style={{ animationDelay: "1.2s", animationDuration: "4.5s" }}
        />
        <Image
          src="/images/star.svg"
          alt=""
          width={10}
          height={10}
          className="relative  top-56 left-48 w-4 animate-twinkle"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />
      </div>

      <div className="absolute right-0 top-32">
        <Image
          src="/images/star.svg"
          alt=""
          width={10}
          height={10}
          className="relative w-5 right-32 animate-twinkle"
          style={{ animationDelay: "0.6s", animationDuration: "4s" }}
        />
        <Image
          src="/images/star.svg"
          alt=""
          width={10}
          height={10}
          className="relative w-5 top-20 right-14 animate-twinkle"
          style={{ animationDelay: "1.8s", animationDuration: "3.8s" }}
        />
        <Image
          src="/images/star.svg"
          alt=""
          width={10}
          height={10}
          className="relative top-52 right-48 w-4 animate-twinkle"
          style={{ animationDelay: "2.4s", animationDuration: "4.8s" }}
        />
        <Image
          src="/images/star.svg"
          alt=""
          width={10}
          height={10}
          className="relative top-80 right-28 w-4 animate-twinkle"
          style={{ animationDelay: "3s", animationDuration: "5.2s" }}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center w-204.75 max-w-[90vw] px-4 mt-12">
        <span className="bg-white/10 py-1.5 px-4 border-gray-600 text-xs leading-4 tracking-primary border-2 rounded-full">
          Digital Product Design Studio
        </span>

        <div className="mt-4 flex flex-col gap-8 items-center">
          <h1
            id="scramble-text-original"
            className="text-[56px] lg:text-[68px] font-bold leading-tight lg:leading-22 tracking-primary max-w-6xl wrap-break-word"
          >
            We turn ideas into sharp digital products.
          </h1>
          <p className="text-base leading-6 font-normal w-[676px] max-w-full">
            We help businesses redesign websites and applications that are
            easier to use, aligned with business goals, and built to create
            better customer experiences.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-base leading-6 tracking-primary font-medium bg-primary px-8 py-2.5 rounded-full shadow-custom"
            >
              Start Your Project
            </a>
            <a
              href="#"
              className="text-base leading-6 tracking-primary font-medium text-black bg-white px-8 py-2.5 rounded-full shadow-custom2"
            >
              See Our Portofolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
