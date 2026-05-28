import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Hwang's Research",
  description:
    "Active research projects at Hwang's Research: CI-FL, H2PFUser, AdaFed, PRISM.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="What we're building right now."
        description="Active research projects across federated learning, autonomous driving, and quantum simulation."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-4">
          {projects.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="group relative scroll-mt-24 rounded-2xl bg-bg-surface border border-white/[0.05] hover:border-accent/30 hover:bg-bg-raised transition-all p-7 lg:p-8 hover:shadow-glow-sm overflow-hidden flex flex-col"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <h2 className="font-display font-semibold text-2xl lg:text-3xl">
                      {p.name}
                    </h2>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/10 text-accent-soft border border-accent/20">
                      {p.status}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">{p.tagline}</p>
                </div>
              </div>

              <p className="text-base text-text-secondary leading-relaxed mb-5">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.03] text-text-secondary border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-5 text-sm text-text-muted pt-4 border-t border-white/[0.05]">
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-text-muted/60">
                    <Github className="w-4 h-4" /> Code coming soon
                  </span>
                )}
                <Link
                  href="/research"
                  className="inline-flex items-center gap-1.5 hover:text-accent transition-colors ml-auto"
                >
                  Related research
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
