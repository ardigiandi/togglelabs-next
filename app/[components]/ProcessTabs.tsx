"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  process: { wireframe: string; design: string; live: string };
  title: string;
};

const tabs = [
  { key: "wireframe", label: "Wireframe" },
  { key: "design", label: "Design" },
  { key: "live", label: "Live" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function ProcessTabs({ process, title }: Props) {
  const [aktif, setAktif] = useState<TabKey>("design");

  return (
    <section className="py-20 flex flex-col gap-4">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between items-start gap-4">
        <div>
          <p className="text-xs tracking-widest text-zinc-400">PROSES</p>
          <h2 className="text-3xl md:text-4xl mt-4">
            Dari wireframe ke hasil akhir
          </h2>
        </div>

        <div className="flex gap-1 rounded-full bg-zinc-900 p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setAktif(t.key)}
              className={`rounded-full px-4 py-2 text-sm transition ${
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

      <div className="overflow-hidden rounded-3xl bg-zinc-900">
        <Image
          src={process[aktif]}
          alt={`${title} - ${aktif}`}
          width={1200}
          height={700}
          className="h-120 w-full object-cover"
        />
      </div>
    </section>
  );
}
