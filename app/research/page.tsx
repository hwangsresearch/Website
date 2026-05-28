import type { Metadata } from "next";
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
import { PageHeader } from "@/components/page-header";
import { researchAreas, projects } from "@/lib/data";

const iconMap = {
  Network,
  Car,
  Atom,
  Cpu,
  Bot,
  ShieldCheck,
  Smartphone,
} as const;

export const metadata: Metadata = {
  title: "Research — Hwang's Research",
  description:
    "Research areas at Hwang's Research: federated learning, autonomous driving, quantum computing, AI systems, and more.",
};

function relatedProjects(areaTitle: string) {
  const lowerArea = areaTitle.toLowerCase();
  return projects.filter((p) =>
    p.tags.some((t) => {
      const lowerTag = t.toLowerCase();
      return lowerTag === lowerArea || lowerArea.includes(lowerTag);
    })
  );
}

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        label="Research"
        title="Seven areas of active investigation."
        description="From distributed learning to quantum simulation — the questions we keep coming back to, and how we pursue them."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        <nav className="flex flex-wrap gap-2 mb-12 lg:mb-16 pb-8 border-b border-white/[0.05]">
          {researchAreas.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-md bg-bg-surface border border-white/10 text-text-secondary hover:border-accent/40 hover:text-accent transition-all"
            >
              {a.title}
            </a>
          ))}
        </nav>

        <div className="space-y-12 lg:space-y-20">
          {researchAreas.map((area) => {
            const Icon = iconMap[area.icon] ?? Cpu;
            const related = relatedProjects(area.title);
            return (
              <section
                key={area.id}
                id={area.id}
                className="scroll-mt-24 grid lg:grid-cols-12 gap-8 lg:gap-12"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight">
                    {area.title}
                  </h2>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {area.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base lg:text-lg text-text-secondary leading-relaxed mb-6">
                    {area.longDescription}
                  </p>

                  {related.length > 0 && (
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted mb-3">
                        Related Projects
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {related.map((p) => (
                          <Link
                            key={p.id}
                            href={`/projects#${p.id}`}
                            className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-surface border border-white/[0.06] hover:border-accent/30 hover:bg-bg-raised transition-all"
                          >
                            <span className="font-display font-medium text-sm">
                              {p.name}
                            </span>
                            <span className="text-xs text-text-muted">
                              {p.tagline}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
