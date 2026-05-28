import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Team — Hwang's Research",
  description: "The people behind Hwang's Research.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        label="Team"
        title="The people behind the work."
        description="A small, deliberately focused lab. The list below is the entire team."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="space-y-6">
          {team.map((m) => (
            <article
              key={m.id}
              className="group rounded-2xl bg-bg-surface border border-white/[0.05] hover:border-accent/30 transition-all p-6 sm:p-8 lg:p-10"
            >
              <div className="grid sm:grid-cols-[auto,1fr] gap-6 lg:gap-10">
                <div className="relative shrink-0 mx-auto sm:mx-0">
                  <div className="absolute inset-0 bg-accent/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={m.avatar}
                    alt={m.name}
                    width={140}
                    height={140}
                    className="relative rounded-2xl object-cover ring-1 ring-white/10"
                    style={{ width: 140, height: 140 }}
                  />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-2xl lg:text-3xl">
                    {m.name}
                  </h2>
                  <p className="text-accent mt-1 font-medium">{m.role}</p>

                  <p className="mt-5 text-base text-text-secondary leading-relaxed">
                    {m.bio}
                  </p>

                  <div className="mt-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted mb-2">
                      Research Areas
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {m.areas.map((a) => (
                        <span
                          key={a}
                          className="font-mono text-[11px] px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/15"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted mb-2">
                      Links
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {m.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-mono border border-white/10 text-text-secondary hover:border-accent/40 hover:text-accent transition-all"
                        >
                          {l.label}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
