"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

export default function StarsBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = {
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: { value: 15 },
      color: { value: "#ffffff" },
      shape: { type: "star" },
      size: { value: { min: 3, max: 6 } },
      opacity: {
        value: { min: 0.2, max: 1 },
        animation: { enable: true, speed: 1, sync: false, startValue: "random" },
      },
      move: { enable: false },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      id="stars"
      options={options}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}