import type { Metadata } from "next";
import { ArrowRight, Github, Package } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { team, contact, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Open Source — Hwang's Research",
  description: "Open-source repositories and frameworks from Hwang's Research.",
};

export default function OpenSourcePage() {
  const publishedRepos = projects.filter((p) => p.github);
  const pendingRepos = projects.filter((p) => !p.github);

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
            Project Repositories
          </div>
          <h2 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight mb-8">
            Released and in preparation.
          </h2>

          {publishedRepos.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {publishedRepos.map((p) => (
                <a
                  key={p.id}
                  href={p.github!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-7 rounded-2xl bg-bg-surface border border-white/[0.05] hover:border-accent/30 hover:bg-bg-raised transition-all hover:shadow-glow-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Github className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-semibold text-xl">
                          {p.name}
                        </h3>
                        <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/10 text-accent-soft border border-accent/20">
                          {p.status}
                        </span>
                      </div>
                      <div className="text-sm text-text-muted font-mono truncate">
                        {p.github!.replace("https://", "")}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.03] text-text-secondary border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          )}

          {pendingRepos.length > 0 && (
            <div className="rounded-2xl bg-bg-surface/50 border border-white/[0.04] p-6 lg:p-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-text-muted shrink-0">
                  <Package className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold mb-1.5">
                    Additional releases in preparation
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {pendingRepos.map((p) => p.name).join(", ")} will be
                    released as their first stable interfaces land. Follow the
                    organization for release announcements.
                  </p>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Visit organization
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
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
