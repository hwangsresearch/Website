import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Video } from "@/components/video";
import { researchAreas, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research — Hwang's Research",
  description:
    "Fields of inquiry at Hwang's Research: federated learning, autonomous driving, time-series forecasting, computational biology, robustness, and quantum computing.",
};

function relatedProjects(areaTitle: string) {
  const area = areaTitle.toLowerCase();
  return projects.filter((p) => p.tags.some((t) => area.includes(t.toLowerCase())));
}

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        label="Research"
        title="Fields of inquiry."
        description="The questions we keep returning to, and how we pursue them."
        video="/videos/data"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <nav className="flex flex-wrap gap-x-8 gap-y-3 pb-12 mb-4">
          {researchAreas.map((a) => (
            <a key={a.id} href={`#${a.id}`} className="caps link-line pb-1 text-stone hover:text-ink">
              {a.title}
            </a>
          ))}
        </nav>

        {researchAreas.map((area, i) => {
          const related = relatedProjects(area.title);
          return (
            <section
              key={area.id}
              id={area.id}
              className="scroll-mt-28 grid gap-8 lg:grid-cols-12 lg:gap-12 py-16 border-t border-ink/15"
            >
              <div className="lg:col-span-4">
                <div className="caps text-brass-deep">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="font-serif font-light text-4xl lg:text-5xl leading-tight mt-3">{area.title}</h2>
                <p className="mt-5 text-sm text-stone">{area.tags.join(" · ")}</p>
                {area.video && (
                  <div className="grain relative aspect-[4/3] mt-8 overflow-hidden bg-ink">
                    <Video src={area.video} mode="hover" />
                  </div>
                )}
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg lg:text-xl leading-relaxed text-ink/80">{area.longDescription}</p>
                {related.length > 0 && (
                  <div className="mt-10">
                    <div className="caps text-stone mb-4">Related projects</div>
                    <ul className="space-y-2">
                      {related.map((p) => (
                        <li key={p.id}>
                          <Link href={`/projects#${p.id}`} className="group inline-flex items-baseline gap-3">
                            <span className="font-serif text-2xl link-line">{p.name}</span>
                            <span className="text-sm text-stone">{p.tagline}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
