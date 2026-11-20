import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About — Hwang's Research",
  description: "An independent research laboratory, established 2025.",
};

const sections: { label: string; title: string; body: React.ReactNode }[] = [
  {
    label: "Mission",
    title: "To understand learning systems well enough to build them properly.",
    body: (
      <>
        <p>
          We study intelligent systems across federated learning, autonomous
          perception, time-series forecasting, and quantum computation, and we
          publish that work openly and reproducibly.
        </p>
        <p>
          The problems we care about need both careful theory and the patience
          to build infrastructure from scratch. We do both.
        </p>
      </>
    ),
  },
  {
    label: "Approach",
    title: "Build what you study. Publish what you build.",
    body: (
      <>
        <p>
          We release source code with our papers, not after them. We report
          negative results when they matter, as in our CKAIA 2026 benchmark,
          where a simple pseudobulk baseline outperformed the more elaborate
          topological methods.
        </p>
        <p>We are cautious about claims that have not been reproduced, including our own.</p>
      </>
    ),
  },
  {
    label: "Fields",
    title: "The questions we return to.",
    body: (
      <ul className="space-y-4">
        <li>
          <span className="font-serif text-2xl text-ink">Federated learning</span>: training
          across heterogeneous clients without moving raw data.
        </li>
        <li>
          <span className="font-serif text-2xl text-ink">Autonomous driving</span>: state-space
          models for efficient long-horizon perception and planning.
        </li>
        <li>
          <span className="font-serif text-2xl text-ink">Time-series forecasting</span>: new
          architectures for non-stationary sequential data.
        </li>
        <li>
          <span className="font-serif text-2xl text-ink">Quantum computing</span>: simulation and
          prototyping for hybrid classical-quantum workloads.
        </li>
      </ul>
    ),
  },
  {
    label: "Origin",
    title: "Independent, by design.",
    body: (
      <>
        <p>
          Hwang&apos;s Research was founded in 2025 so that its agenda could be
          set by the problems themselves, not by the cycles of an employer, a
          grant body, or a product roadmap.
        </p>
        <p>The laboratory is small on purpose. We optimise for depth, not headcount.</p>
      </>
    ),
  },
];

const numerals = ["I", "II", "III", "IV", "V", "VI"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="An independent laboratory, founded in 2025."
        description="Open, reproducible research on how machines learn, perceive, and forecast."
        video="/videos/discussion"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-32">
        {sections.map((s, i) => (
          <section key={s.label} className="grid gap-6 lg:grid-cols-12 lg:gap-12 py-14 border-t border-ink/15 first:border-t-0">
            <div className="lg:col-span-3 caps text-brass-deep">
              {numerals[i]}. {s.label}
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
