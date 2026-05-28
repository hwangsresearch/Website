import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionLabel } from "./section-label";
import { team } from "@/lib/data";

export function TeamPreview() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Team</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight">
              The people behind the work
            </h2>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            Meet the team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          {team.map((m) => (
            <div
              key={m.id}
              className="group p-7 lg:p-8 rounded-2xl bg-bg-surface border border-white/[0.05] hover:border-accent/30 transition-all"
            >
              <div className="flex gap-5 mb-5">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={m.avatar}
                    alt={m.name}
                    width={88}
                    height={88}
                    className="relative rounded-xl object-cover w-22 h-22 ring-1 ring-white/10"
                    style={{ width: 88, height: 88 }}
                  />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl">{m.name}</h3>
                  <p className="text-sm text-accent mt-0.5">{m.role}</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {m.areas.join(" · ")}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {m.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono border border-white/10 text-text-secondary hover:border-accent/40 hover:text-accent transition-all"
                  >
                    {l.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
