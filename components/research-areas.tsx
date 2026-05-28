import Link from "next/link";
import {
  ArrowRight,
  Atom,
  Bot,
  Car,
  Cpu,
  Network,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { SectionLabel } from "./section-label";
import { researchAreas } from "@/lib/data";

const iconMap = {
  Network,
  Car,
  Atom,
  Cpu,
  Bot,
  ShieldCheck,
  Smartphone,
} as const;

export function ResearchAreas() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Soft accent wash */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Research</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight">
              Where we focus
            </h2>
          </div>
          <p className="text-text-secondary max-w-md text-sm lg:text-base leading-relaxed">
            Seven areas of active investigation — from distributed learning to
            quantum simulation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchAreas.map((area) => {
            const Icon = iconMap[area.icon] ?? Cpu;
            return (
              <Link
                key={area.id}
                href={`/research#${area.id}`}
                className="group block p-7 rounded-2xl bg-bg-surface border border-white/[0.05] hover:border-accent/30 hover:bg-bg-raised transition-all hover:-translate-y-0.5 hover:shadow-glow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/15 transition">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-lg">
                    {area.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 min-h-[64px]">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {area.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm text-text-muted group-hover:text-accent transition-colors">
                  Explore
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
