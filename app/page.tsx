import Image from "next/image";
import Link from "next/link";
import { Video } from "@/components/video";
import { SectionLabel } from "@/components/section-label";
import { PublicationEntry } from "@/components/publication-entry";
import { contact, projects, publications, researchAreas, team } from "@/lib/data";

export default function Home() {
  const featured = researchAreas.filter((a) => a.video);
  const others = researchAreas.filter((a) => !a.video);
  const recent = [...publications].sort((a, b) => b.year - a.year).slice(0, 3);

  const facts = [
    { value: "2025", label: "Established" },
    { value: String(publications.length), label: "Publications" },
    { value: String(projects.length), label: "Research projects" },
    { value: String(projects.filter((p) => p.github).length), label: "Open repositories" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="grain relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-ivory">
        <Video src="/videos/hero" pauseButton />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink" />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-28 lg:pb-32 text-center items-center">
          <div className="caps text-brass animate-rise [animation-delay:200ms]">
            <span className="hidden sm:inline">Independent Research Laboratory · </span>Est. 2025
          </div>
          <h1 className="mt-6 font-serif font-light text-6xl sm:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight animate-rise [animation-delay:400ms]">
            Hwang&apos;s Research
          </h1>
          <p className="mt-6 font-serif italic text-xl lg:text-2xl text-ivory/75 animate-rise [animation-delay:650ms]">
            Patient, rigorous work on how machines learn.
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 h-16 w-px bg-ivory/20 overflow-hidden" aria-hidden>
          <div className="h-full w-full bg-ivory animate-drift" />
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-28 lg:py-40">
        <SectionLabel>The Laboratory</SectionLabel>
        <p className="font-serif font-light text-3xl/[1.3] sm:text-4xl/[1.3] lg:text-[2.9rem]/[1.3] max-w-4xl">
          Hwang&apos;s Research is an independent laboratory founded in 2025. We
          study how machines learn when data is scattered, private, and
          imperfect, and we publish what we find, including what did not work.
        </p>
        <Link href="/about" className="caps link-line inline-block mt-12 pb-1 text-brass-deep">
          Our approach →
        </Link>

        <dl className="mt-24 grid grid-cols-2 lg:grid-cols-4 border-t border-ink/15">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col-reverse pt-8 pb-2 pr-6">
              <dt className="caps text-stone">{f.label}</dt>
              <dd className="font-serif font-light text-6xl mb-3">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Fields of inquiry */}
      <section className="bg-ink text-ivory py-28 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
            <div>
              <SectionLabel dark>Fields of Inquiry</SectionLabel>
              <h2 className="font-serif font-light text-5xl lg:text-6xl tracking-tight">
                Where our work leads.
              </h2>
            </div>
            <Link href="/research" className="caps link-line pb-1 text-brass">
              All research →
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {featured.map((a, i) => (
              <Link key={a.id} href={`/research#${a.id}`} className="group block">
                <div className="grain relative aspect-[4/5] overflow-hidden bg-ink-soft">
                  <Video
                    src={a.video!}
                    mode="hover"
                    className="opacity-80 transition duration-[1.2s] group-hover:opacity-100 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="caps text-brass mt-6">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-serif text-3xl mt-2">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">{a.description}</p>
              </Link>
            ))}
          </div>

          <p className="mt-20 pt-8 border-t border-ivory/15 text-sm text-ivory/55 leading-loose">
            <span className="caps text-ivory/40 mr-4">Also</span>
            {others.map((a, i) => (
              <span key={a.id}>
                <Link href={`/research#${a.id}`} className="link-line hover:text-ivory">
                  {a.title}
                </Link>
                {i < others.length - 1 && <span className="mx-3 text-brass">·</span>}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Interlude */}
      <section className="grain relative h-[80svh] min-h-[520px] overflow-hidden bg-ink text-ivory">
        <Video src="/videos/discussion" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <blockquote className="font-serif font-light italic text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl">
            &ldquo;Build what you study.
            <br />
            Publish what you build.&rdquo;
          </blockquote>
          <div className="caps text-brass mt-10">The principle of the laboratory</div>
        </div>
      </section>

      {/* Publications */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-28 lg:py-40">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <div>
            <SectionLabel>Selected Publications</SectionLabel>
            <h2 className="font-serif font-light text-5xl lg:text-6xl tracking-tight">Recent work.</h2>
          </div>
          <Link href="/publications" className="caps link-line pb-1 text-brass-deep">
            All publications →
          </Link>
        </div>
        {recent.map((p) => (
          <PublicationEntry key={p.id} pub={p} />
        ))}
      </section>

      {/* People */}
      <section className="bg-ivory-deep py-28 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <SectionLabel>People</SectionLabel>
          <h2 className="font-serif font-light text-5xl lg:text-6xl tracking-tight mb-16">
            The researchers.
          </h2>
          <div className="grid gap-16 md:grid-cols-2 md:gap-12">
            {team.map((m) => (
              <Link key={m.id} href={`/team#${m.id}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
                  <Image
                    src={m.avatar}
                    alt={m.name}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover object-top grayscale contrast-[1.05] transition duration-[1.2s] group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="caps text-brass-deep mt-6">{m.role}</div>
                <h3 className="font-serif text-4xl mt-2">{m.name}</h3>
                <p className="mt-3 text-sm text-stone">{m.areas.join(" · ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Correspondence */}
      <section className="grain relative overflow-hidden bg-ink text-ivory">
        <Video src="/videos/night" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-36 lg:py-48 text-center">
          <div className="caps text-brass">Correspondence</div>
          <h2 className="mt-8 font-serif font-light text-5xl lg:text-6xl leading-tight">
            We welcome serious collaboration.
          </h2>
          <p className="mt-6 text-ivory/65">
            Research partnerships, reproductions of our results, and invitations to speak.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="caps inline-block mt-12 px-8 py-4 border border-ivory/40 hover:bg-ivory hover:text-ink transition-colors"
          >
            Write to us
          </a>
        </div>
      </section>
    </>
  );
}
