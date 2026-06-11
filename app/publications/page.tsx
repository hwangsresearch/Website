import type { Metadata } from "next";
import { ExternalLink, FileText, Link2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { publications, team, type Publication } from "@/lib/data";

export const metadata: Metadata = {
  title: "Publications — Hwang's Research",
  description: "Research papers and technical reports from Hwang's Research.",
};

const teamNames = new Set(team.map((m) => m.name));

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  return (
    <>
      <PageHeader
        label="Publications"
        title="Papers, preprints, and technical reports."
        description="Peer-reviewed and open work from the lab. Authors from Hwang's Research are highlighted."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="space-y-4">
          {sorted.map((p) => (
            <PublicationCard key={p.id} pub={p} />
          ))}
        </div>
      </div>
    </>
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article
      id={pub.id}
      className="group scroll-mt-24 rounded-2xl bg-bg-surface border border-white/[0.05] hover:border-accent/30 hover:bg-bg-raised transition-all p-6 sm:p-8 lg:p-10"
    >
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {pub.year}
        </span>
        <span className="text-text-muted">·</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary">
          {pub.venueShort}
        </span>
        {pub.location && (
          <>
            <span className="text-text-muted">·</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              {pub.location}
            </span>
          </>
        )}
        {pub.status === "Accepted" && (
          <span className="ml-1 font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/10 text-accent-soft border border-accent/20">
            Accepted
          </span>
        )}
      </div>

      <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight leading-tight mb-4">
        {pub.title}
      </h2>

      <div className="text-sm sm:text-base text-text-secondary mb-5">
        {pub.authors.map((a, i) => (
          <span key={a}>
            <span
              className={
                teamNames.has(a) ? "text-accent font-medium" : undefined
              }
            >
              {a}
            </span>
            {i < pub.authors.length - 1 && <span>, </span>}
          </span>
        ))}
      </div>

      <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
        {pub.abstract}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {pub.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.03] text-text-secondary border border-white/[0.06]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-white/[0.05]">
        {pub.url && (
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 text-sm text-text-secondary hover:border-accent/40 hover:text-accent transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            IEEE Xplore
          </a>
        )}
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 text-sm text-text-secondary hover:border-accent/40 hover:text-accent transition-all"
          >
            <Link2 className="w-3.5 h-3.5" />
            <span className="font-mono text-xs">{pub.doi}</span>
          </a>
        )}
        {pub.pdf && (
          <a
            href={pub.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 text-sm text-text-secondary hover:border-accent/40 hover:text-accent transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            PDF
          </a>
        )}
      </div>
    </article>
  );
}
