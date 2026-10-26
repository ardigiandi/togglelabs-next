import Image from "next/image";
import Link from "next/link";

type CardLayoutProps = {
  title: string;
  subtitle: string;
  description: string;
  children?: React.ReactNode;
  image?: string;
  next?: string;
};

export default function CardLayout({
  title,
  subtitle,
  description,
  children,
  image,
  next,
}: CardLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto mt-32 lg:mt-32 px-5 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between items-end">
        <div className="flex flex-col gap-4 w-full lg:w-130">
          <span className="text-xs font-semibold leading-3.5 tracking-primary bg-white/10 py-2 px-3 border border-gray-500 rounded-full w-fit">
            {subtitle}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-11 tracking-primary">
            {title}
          </h1>
        </div>
        <p className="w-full lg:w-115 mt-4 md:mt-0 text-sm md:text-base leading-6 tracking-primary text-abu">
          {description}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        <Link href="/projects" className="flex justify-end items-center gap-2">
          <h1 className="text-xs md:text-sm font-medium leading-5 tracking-primary text-abu">
            {next}
          </h1>
          {image && (
            <Image
              src={image}
              alt={title}
              className="w-3.5"
              width={3.5}
              height={3.5}
            />
          )}
        </Link>
        {children}
      </div>
    </div>
  );
}
