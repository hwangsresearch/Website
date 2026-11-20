import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "People — Hwang's Research",
  description: "The researchers of Hwang's Research.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        label="People"
        title="The researchers."
        description="A deliberately small laboratory. The two people below are the whole of it."
        video="/videos/hero"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        {team.map((m) => (
          <article
            key={m.id}
            id={m.id}
            className="scroll-mt-28 grid gap-10 md:grid-cols-12 md:gap-14 py-16 border-t border-ink/15 first:border-t-0"
          >
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-top grayscale contrast-[1.05]"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pt-6">
              <div className="caps text-brass-deep">{m.role}</div>
              <h2 className="font-serif font-light text-5xl lg:text-6xl mt-3">{m.name}</h2>
              <p className="mt-8 text-lg leading-relaxed text-stone">{m.bio}</p>

              <div className="caps text-stone mt-10 mb-3">Areas</div>
              <p className="font-serif text-xl">{m.areas.join(" · ")}</p>

              <div className="caps text-stone mt-10 mb-3">Elsewhere</div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {m.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link-line border-b border-ink/20 hover:border-transparent">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
