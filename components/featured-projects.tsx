import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { SectionLabel } from "./section-label";
import { projects, type Project } from "@/lib/data";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Projects</SectionLabel>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight">
              What we&apos;re building
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} size="large" />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {others.map((p) => (
            <ProjectCard key={p.id} project={p} size="small" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  size,
}: {
  project: Project;
  size: "large" | "small";
}) {
  return (
    <div
      className={`group relative rounded-2xl bg-bg-surface border border-white/[0.05] hover:border-accent/30 hover:bg-bg-raised transition-all hover:-translate-y-0.5 hover:shadow-glow-sm overflow-hidden ${
        size === "large" ? "p-8" : "p-6"
      }`}
    >
      {size === "large" && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
      )}

      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <h3
              className={`font-display font-semibold ${
                size === "large" ? "text-2xl" : "text-xl"
              }`}
            >
              {project.name}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/10 text-accent-soft border border-accent/20">
              {project.status}
            </span>
          </div>
          <p className="text-sm text-text-muted">{project.tagline}</p>
        </div>
      </div>

      <p
        className={`text-text-secondary leading-relaxed mb-5 ${
          size === "large" ? "text-base" : "text-sm"
        }`}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.03] text-text-secondary border border-white/[0.06]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 text-sm text-text-muted">
        {project.github ? (
          <a
            href={project.github}
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
          href={`/projects#${project.id}`}
          className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          Details
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
