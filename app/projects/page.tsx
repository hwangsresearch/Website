import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { contact, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Hwang's Research",
  description: "Research projects and open-source repositories from Hwang's Research.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="Work in progress, in the open."
        description="Each project ships with its code. Repositories are public as soon as their first stable interface lands."
        video="/videos/typing"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        {projects.map((p) => (
          <article
            key={p.id}
            id={p.id}
            className="scroll-mt-28 grid gap-6 lg:grid-cols-12 lg:gap-12 py-14 border-t border-ink/15"
          >
            <div className="lg:col-span-4">
              <h2 className="font-serif text-5xl">{p.name}</h2>
              <div className="caps text-brass-deep mt-4">{p.status}</div>
            </div>
            <div className="lg:col-span-8">
              <p className="font-serif italic text-2xl text-ink/80">{p.tagline}</p>
              <p className="mt-4 text-lg leading-relaxed text-stone">{p.description}</p>
              <p className="mt-5 text-sm text-stone">{p.tags.join(" · ")}</p>
              <div className="mt-6 text-sm">
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="caps link-line pb-1 text-brass-deep">
                    View repository ↗
                  </a>
                ) : (
                  <span className="caps text-stone/70">Repository forthcoming</span>
                )}
              </div>
            </div>
          </article>
        ))}

        <section className="grid gap-6 lg:grid-cols-12 lg:gap-12 py-14 border-t border-ink/15">
          <div className="lg:col-span-4 caps text-brass-deep">Repositories</div>
          <div className="lg:col-span-8 text-lg">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="link-line">
              {contact.github.replace("https://", "")} ↗
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
