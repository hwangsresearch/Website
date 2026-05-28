import type { Metadata } from "next";
import { ArrowRight, Github, Package } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { team, contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Open Source — Hwang's Research",
  description: "Open-source repositories and frameworks from Hwang's Research.",
};

export default function OpenSourcePage() {
  return (
    <>
      <PageHeader
        label="Open Source"
        title="Built in the open."
        description="We release source code with our research, not after it. Repositories, documentation, and releases live here."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24 space-y-12">
        <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/[0.05]">
          <div className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Philosophy
            </div>
          </div>
          <div className="lg:col-span-8 space-y-4 text-base lg:text-lg text-text-secondary leading-relaxed">
            <p>
              Open-source is a feature of our research, not a release stage. We
              build code that we expect other people to read, run, and extend.
            </p>
            <p>
              Reproducibility, clear interfaces, and honest documentation matter
              as much as the underlying results.
            </p>
          </div>
        </section>

        <section>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
            Organization
          </div>
          <h2 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight mb-8">
            Repositories launching soon.
          </h2>

          <div className="rounded-2xl bg-bg-surface border border-white/[0.05] p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Package className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-xl mb-2">
                  Project releases in preparation
                </h3>
                <p className="text-text-secondary leading-relaxed mb-5">
                  CI-FL, H2PFUser, AdaFed, and PRISM repositories will be
                  released as their first stable interfaces stabilize. Until
                  then, follow contributors&apos; personal GitHub for ongoing
                  work-in-progress.
                </p>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-bg-base font-medium hover:bg-accent-soft transition-all hover:shadow-glow text-sm"
                >
                  <Github className="w-4 h-4" />
                  Visit organization on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
            Contributors
          </div>
          <h2 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight mb-6">
            Personal repositories
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {team.map((m) => {
              const github = m.links.find((l) => l.label === "GitHub");
              if (!github) return null;
              return (
                <a
                  key={m.id}
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-2xl bg-bg-surface border border-white/[0.05] hover:border-accent/30 hover:bg-bg-raised transition-all flex items-center gap-4"
                >
                  <Github className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
                  <div className="flex-1">
                    <div className="font-display font-semibold">{m.name}</div>
                    <div className="text-sm text-text-muted font-mono">
                      {github.href.replace("https://", "")}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
