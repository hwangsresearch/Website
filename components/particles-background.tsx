"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      fullScreen: { enable: false },
      particles: {
        color: { value: "#38BDF8" },
        number: {
          value: 70,
          density: { enable: true, width: 1200, height: 800 },
        },
        opacity: {
          value: { min: 0.15, max: 0.55 },
          animation: { enable: true, speed: 0.6, sync: false },
        },
        size: { value: { min: 1, max: 2.5 } },
        links: {
          enable: true,
          distance: 140,
          color: "#38BDF8",
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: {
            distance: 180,
            links: { opacity: 0.55 },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="hero-particles"
      options={options}
      className="absolute inset-0 -z-0"
    />
  );
}
