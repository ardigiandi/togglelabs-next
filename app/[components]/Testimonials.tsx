"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/projects";


export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () =>
      setCurrent(Math.min(api.selectedScrollSnap(), testimonials.length - 1));

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section className="relative overflow-hidden mt-32">
      {/* Glow sebagai background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-105 md:h-130"
      >
        <Image
          src="/images/decorative-glow.png"
          alt=""
          fill
          priority
          className="object-contain object-top"
        />
      </div>

      {/* Konten */}
      <div className="relative z-10 pl-6 md:pl-12 lg:pl-18.75">
        <span className="inline-block rounded-full border border-gray-500 bg-white/10 px-3 py-2 text-xs font-semibold leading-3.5 tracking-primary">
          Our Client Story
        </span>
        <h2 className="mt-4 pr-6 text-2xl font-bold md:text-3xl lg:text-4xl">
          Good work speaks for itself.
        </h2>
        <p className="mt-3 pr-6 text-sm text-abu md:mt-4">
          See what our clients have to say about working with ToggleLabs.
        </p>

        <Carousel
          setApi={setApi}
          opts={{ align: "start" }}
          className="mt-8 md:mt-10"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((item, i) => (
              <CarouselItem
                key={i}
                className="basis-[88%] pl-4 sm:basis-[75%] md:pl-6 lg:basis-[65%]"
              >
                <div
                  className={cn(
                    "h-full origin-left rounded-3xl border border-white/10 bg-secondary p-6 transition-all duration-500 md:p-10",
                    i === current
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-40 md:scale-75",
                  )}
                >
                  <div className="relative">
                    <Image
                      src="/images/decorative-quote-mark.png"
                      alt=""
                      width={90}
                      height={90}
                      className="absolute -top-2 left-0 w-14 md:w-20"
                    />
                    <p className="relative pt-4 text-lg leading-7 md:pt-5 md:text-2xl md:leading-9">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5 md:mt-10 md:pt-6">
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-abu">{item.role}</p>
                    </div>
                    <Image
                      src={item.logo}
                      alt=""
                      width={80}
                      height={20}
                      className="h-auto w-16 md:w-20"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}

            {/* Spacer supaya kartu terakhir bisa sampai ke posisi kiri */}
            <div
              aria-hidden
              className="shrink-0 grow-0 basis-[12%] sm:basis-[25%] lg:basis-[35%]"
            />
          </CarouselContent>

          {/* Dots + arrows */}
          <div className="mt-6 flex items-center justify-between pr-6 md:mt-10 md:pr-12 lg:pr-18.75">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={cn(
                    "size-1.5 rounded-full transition-colors",
                    i === current ? "bg-white" : "bg-white/20",
                  )}
                />
              ))}
            </div>

            <div className="flex gap-2 md:gap-3">
              <button
                onClick={() => api?.scrollPrev()}
                aria-label="Previous"
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-secondary hover:bg-white/10 md:size-10"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                aria-label="Next"
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-secondary hover:bg-white/10 md:size-10"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
