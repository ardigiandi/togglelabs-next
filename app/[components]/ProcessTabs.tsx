"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  process: { wireframe: string; design: string };
  title: string;
};

const tabs = [
  { key: "wireframe", label: "Wireframe" },
  { key: "design", label: "Design" },
  { key: "gabungan", label: "Gabungan" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

// Membantu Next.js memilih ukuran gambar yang pas di tiap layar
const SIZES = "(min-width: 1152px) 1104px, 100vw";

export default function ProcessTabs({ process, title }: Props) {
  const [aktif, setAktif] = useState<TabKey>("gabungan");
  const [posisi, setPosisi] = useState(50); // posisi garis geser, 0-100

  return (
    <section className="pt-16 md:pt-28">
      {/* Judul + tab: bertumpuk di HP, sejajar di layar md ke atas */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs tracking-widest text-zinc-400">PROSES</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl">
            Dari wireframe ke hasil akhir
          </h2>
        </div>

        <div className="flex w-full gap-1 rounded-full bg-zinc-900 p-1 md:w-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => {
                setAktif(t.key);
                setPosisi(50);
              }}
              className={`flex-1 rounded-full px-3 py-2 text-xs transition sm:text-sm md:flex-none md:px-4 ${
                aktif === t.key
                  ? "bg-red-700 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rasio 4:3 di HP supaya gambar tidak terlalu kecil, 16:9 di layar lebar */}
      <div className="relative aspect-4/3 w-full select-none overflow-hidden rounded-2xl bg-zinc-900 sm:aspect-video md:rounded-3xl">
        {aktif === "wireframe" && (
          <Image
            src={process.wireframe}
            alt={`${title} - Wireframe`}
            fill
            sizes={SIZES}
            className="object-cover"
          />
        )}

        {aktif === "design" && (
          <Image
            src={process.design}
            alt={`${title} - Design`}
            fill
            sizes={SIZES}
            className="object-cover"
          />
        )}

        {aktif === "gabungan" && (
          <>
            <Image
              src={process.design}
              alt={`${title} - Design`}
              fill
              sizes={SIZES}
              className="object-cover"
            />

            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - posisi}% 0 0)` }}
            >
              <Image
                src={process.wireframe}
                alt={`${title} - Wireframe`}
                fill
                sizes={SIZES}
                className="object-cover"
              />
            </div>

            <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2.5 py-1 text-[10px] text-white sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
              Wireframe
            </span>
            <span className="absolute right-2 top-2 rounded-full bg-black/70 px-2.5 py-1 text-[10px] text-white sm:right-4 sm:top-4 sm:px-3 sm:text-xs">
              Design
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-white"
              style={{ left: `${posisi}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs text-black shadow-lg sm:h-10 sm:w-10 sm:text-sm">
                &lt;&gt;
              </div>
            </div>

            {/* touch-pan-y: geser kiri-kanan untuk slider, geser atas-bawah tetap scroll halaman */}
            <input
              type="range"
              min={0}
              max={100}
              value={posisi}
              onChange={(e) => setPosisi(Number(e.target.value))}
              aria-label="Geser untuk membandingkan wireframe dan design"
              className="absolute inset-0 h-full w-full cursor-ew-resize touch-pan-y opacity-0"
            />
          </>
        )}
      </div>
    </section>
  );
}
