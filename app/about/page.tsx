import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { publications, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Hwang's Research",
  description:
    "An independent research laboratory, established 2025. How we work, what we study, and what we have published.",
};

const P = ({ children }: { children: React.ReactNode }) => <p>{children}</p>;
const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-ink border-b border-ink/25 hover:border-ink transition-colors">
    {children}
  </Link>
);

const fields = [
  {
    id: "federated-learning",
    name: "Federated learning",
    body: "Training a shared model across clients that differ in data, architecture, and availability. AdaFed (ICUFN 2026) compared six aggregation strategies across seven driving models; CI-FL applies caching ideas to reduce communication between rounds.",
  },
  {
    id: "autonomous-driving",
    name: "Autonomous driving",
    body: "End-to-end driving models built on Mamba state-space architectures, which process long input sequences at lower cost than attention. H2PFUser is the main project; evaluation is closed-loop in CARLA.",
  },
  {
    id: "time-series-forecasting",
    name: "Time-series forecasting",
    body: "Architectures for data whose distribution drifts over time. NyRA is a new forecasting model measured on accuracy and inference cost together.",
  },
  {
    id: "computational-biology",
    name: "Computational biology",
    body: "Topological data analysis of gene expression. H2C (IEEE COINS 2026) found a 37-gene pan-cancer panel; the CKAIA 2026 benchmark then showed where such methods fall short of a simple baseline.",
  },
  {
    id: "security",
    name: "Robustness and security",
    body: "How deep learning models behave under adversarial input. Our ICAIIC 2026 paper evaluated three attacks and two defences on a wireless modulation classifier.",
  },
  {
    id: "quantum-computing",
    name: "Quantum computing",
    body: "PRISM, a qubit simulator for writing and testing gate-based and variational algorithms before they run on hardware.",
  },
];

export default function AboutPage() {
  const record = [...publications].sort((a, b) => b.year - a.year);
  const openRepos = projects.filter((p) => p.github);

  const sections: { label: string; title: string; body: React.ReactNode }[] = [
    {
      label: "Mission",
      title: "To understand learning systems well enough to build them properly.",
      body: (
        <>
          <P>
            Hwang&apos;s Research is an independent laboratory founded in 2025.
            We study how machine learning systems behave outside clean benchmark
            conditions: when data is spread across devices that cannot share
            it, when models must act over long time horizons, when the data
            itself drifts, and when someone is actively trying to make a model
            fail.
          </P>
          <P>
            For each problem we try to find out what actually works under
            these conditions, build it, and publish the result with enough
            detail and code that others can check it.
          </P>
        </>
      ),
    },
    {
      label: "Approach",
      title: "Build what you study. Publish what you build.",
      body: (
        <>
          <P>
            <strong className="font-medium text-ink">Code ships with the paper.</strong>{" "}
            {openRepos.length} of our {projects.length} projects are public on
            GitHub, and the rest will follow once their interfaces settle.
            Results that cannot be rerun are hard to trust, including our own.
          </P>
          <P>
            <strong className="font-medium text-ink">Baselines come first.</strong>{" "}
            Every new method is compared against the simplest reasonable
            alternative. In AdaFed, no federated strategy outperformed training
            each model locally, so we reframed the question as which strategy
            loses the least, and reported it that way.
          </P>
          <P>
            <strong className="font-medium text-ink">Negative results are results.</strong>{" "}
            Our CKAIA 2026 benchmark set out to test whether topological and
            quantum-geometric readouts of single-cell data could classify
            Alzheimer&apos;s disease better than simple averaging. Under
            repeated cross-validation and sequencing-depth adjustment, they
            could not. One apparent improvement disappeared once depth was
            controlled for. We published that finding, because the next
            researcher needs to know it.
          </P>
          <P>
            <strong className="font-medium text-ink">Evaluation is part of the method.</strong>{" "}
            Repeated cross-validation, covariate adjustment, closed-loop
            simulation, and size-matched permutation tests appear throughout
            our papers. They set the limit on what we claim.
          </P>
        </>
      ),
    },
    {
      label: "Fields",
      title: "The questions we return to.",
      body: (
        <ul className="divide-y divide-ink/10">
          {fields.map((f) => (
            <li key={f.id} className="py-6 first:pt-0">
              <Link href={`/research#${f.id}`} className="font-serif text-2xl lg:text-3xl text-ink link-line">
                {f.name}
              </Link>
              <p className="mt-2">{f.body}</p>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: "Record",
      title: "What we have published.",
      body: (
        <>
          <P>
            In its first year the laboratory has had {record.length} papers
            accepted or published across artificial intelligence, networking,
            and intelligent-systems venues.
          </P>
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {record.map((p) => (
              <li key={p.id} className="py-5 grid gap-1 sm:grid-cols-[150px,1fr] sm:gap-6">
                <span className="caps text-brass-deep pt-1">{p.venueShort}</span>
                <Link href={`/publications#${p.id}`} className="text-ink hover:text-brass-deep transition-colors">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
          <P>
            The full list, with abstracts and links, is on the{" "}
            <A href="/publications">publications</A> page.
          </P>
        </>
      ),
    },
    {
      label: "The Laboratory",
      title: "Small and independent, by design.",
      body: (
        <>
          <P>
            The laboratory has two researchers. Sunjun Hwang founded it and
            sets its research direction; Dohyun Hwang works on experiments and
            system development and has co-authored every paper to date. Both
            are profiled on the <A href="/team">people</A> page.
          </P>
          <P>
            Being independent means the choice of problems stays with the
            researchers. Being small means each project receives sustained
            attention from the people who designed it, from the first
            experiment to the released code.
          </P>
          <P>
            We also work with outside researchers. Eunho Choi co-authored our
            H2C and ICAIIC 2026 papers.
          </P>
        </>
      ),
    },
    {
      label: "Collaboration",
      title: "Working with us.",
      body: (
        <>
          <P>
            We welcome research partnerships with academic laboratories,
            industry teams, and independent researchers, particularly in
            federated learning, autonomous driving, and computational biology.
            Independent reproductions of our results, and issues filed on our
            repositories, are equally welcome.
          </P>
          <P>
            Details are on the <A href="/contact">contact</A> page.
          </P>
        </>
      ),
    },
  ];

  const numerals = ["I", "II", "III", "IV", "V", "VI", "VII"];

  return (
    <>
      <PageHeader
        label="About"
        title="An independent laboratory, founded in 2025."
        description="Open, reproducible research on how machines learn, perceive, and forecast, and on where they fail."
        video="/videos/driving"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-32">
        {sections.map((s, i) => (
          <section
            key={s.label}
            className="grid gap-6 lg:grid-cols-12 lg:gap-12 py-16 border-t border-ink/15 first:border-t-0 first:pt-0"
          >
            <div className="lg:col-span-3">
              <div className="caps text-brass-deep lg:sticky lg:top-28">
                {numerals[i]}. {s.label}
              </div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif font-light text-4xl lg:text-5xl leading-tight mb-8">{s.title}</h2>
              <div className="space-y-5 text-lg leading-relaxed text-stone max-w-3xl">{s.body}</div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
