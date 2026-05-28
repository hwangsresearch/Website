import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ParticlesBackground } from "./particles-background";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      {/* Particles */}
      <ParticlesBackground />

      {/* Radial accent glow */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-accent/[0.08] blur-[120px]" />
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,#0B0F14_85%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.05] opacity-0 animate-fade-up [animation-delay:80ms]">
            Hwang&apos;s Research
          </h1>

          <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-display font-medium tracking-tight gradient-text opacity-0 animate-fade-up [animation-delay:220ms]">
            Research Beyond Boundaries
          </p>

          <p className="mt-8 max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed opacity-0 animate-fade-up [animation-delay:360ms]">
            Advancing intelligent systems, autonomous driving, quantum computing,
            and federated learning — independent research at the frontier of AI.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-up [animation-delay:520ms]">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg-base font-medium hover:bg-accent-soft transition-all hover:shadow-glow"
            >
              Explore Research
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-text-primary font-medium hover:border-white/40 hover:bg-white/5 transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted animate-scroll-hint">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
