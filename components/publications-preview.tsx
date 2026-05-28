import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./section-label";
import { publications, team } from "@/lib/data";

const teamNames = new Set(team.map((m) => m.name));

export function PublicationsPreview() {
  const recent = [...publications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3);

  if (recent.length === 0) return null;

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Publications</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight">
              Recent work
            </h2>
          </div>
          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            View all publications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-3">
          {recent.map((pub) => (
            <Link
              key={pub.id}
              href={`/publications#${pub.id}`}
              className="group block rounded-2xl bg-bg-surface border border-white/[0.05] hover:border-accent/30 hover:bg-bg-raised transition-all p-6 lg:p-7"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {pub.year}
                </span>
                <span className="text-text-muted">·</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary">
                  {pub.venueShort}
                </span>
              </div>
              <h3 className="font-display text-lg lg:text-xl font-semibold leading-snug mb-2 group-hover:text-accent-soft transition-colors">
                {pub.title}
              </h3>
              <div className="text-sm text-text-secondary">
                {pub.authors.map((a, i) => (
                  <span key={a}>
                    <span
                      className={
                        teamNames.has(a)
                          ? "text-accent font-medium"
                          : undefined
                      }
                    >
                      {a}
                    </span>
                    {i < pub.authors.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
