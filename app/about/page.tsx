import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About — Hwang's Research",
  description:
    "An independent research organization building the systems that define how machines learn, perceive, and reason.",
};

type Section = { label: string; title?: string; body: React.ReactNode };

const sections: Section[] = [
  {
    label: "Mission",
    title: "Open research at the frontier of intelligent systems.",
    body: (
      <>
        <p>
          To advance the understanding and engineering of intelligent
          systems — across federated learning, autonomous perception, and
          quantum computation — through open, reproducible research.
        </p>
        <p>
          We believe the most important problems in AI today demand both
          rigorous theory and the willingness to build infrastructure from
          scratch. We pursue both.
        </p>
      </>
    ),
  },
  {
    label: "Vision",
    title: "Research that scales beyond the lab.",
    body: (
      <>
        <p>
          A future where the systems we build don&apos;t stay confined to
          benchmark numbers — where federated, on-device, and quantum methods
          run in production environments, audited and reproducible by anyone.
        </p>
        <p>
          We want our research to be useful at the moment it&apos;s released,
          not five years later.
        </p>
      </>
    ),
  },
  {
    label: "Philosophy",
    title: "Build what you study. Publish what you build.",
    body: (
      <>
        <p>
          We work from first principles. We prefer building infrastructure to
          choosing between existing options. We release source code with
          papers, not after them.
        </p>
        <p>
          Open by default. Honest about what didn&apos;t work. Cautious about
          claims that haven&apos;t been reproduced.
        </p>
      </>
    ),
  },
  {
    label: "Direction",
    title: "Three frontiers we keep returning to.",
    body: (
      <ul className="space-y-3 list-none pl-0">
        <li>
          <span className="text-accent font-medium">Federated Learning</span> —
          distributed training that respects privacy, scales across
          heterogeneous clients, and survives continual participation.
        </li>
        <li>
          <span className="text-accent font-medium">Autonomous Driving</span> —
          state-space models for efficient long-horizon perception and
          planning.
        </li>
        <li>
          <span className="text-accent font-medium">Quantum Computing</span> —
          simulation and prototyping for hybrid classical-quantum workloads.
        </li>
      </ul>
    ),
  },
  {
    label: "Origin",
    title: "An independent lab, by design.",
    body: (
      <>
        <p>
          Hwang&apos;s Research was founded to do serious research outside the
          boundaries of any single institution. We chose independence so that
          our research agenda could be driven by the problems we find most
          important — not by the cycles of any specific employer, grant body,
          or product roadmap.
        </p>
        <p>
          The lab is small by design. We optimize for depth, not headcount.
        </p>
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="An independent research organization at the frontier of intelligent systems."
        description="Founded to pursue deep technical research outside the boundaries of any single institution — open, reproducible, and built with care."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        {sections.map((s, i) => (
          <section
            key={s.label}
            className={`grid lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16 ${
              i !== sections.length - 1
                ? "border-b border-white/[0.05]"
                : ""
            }`}
          >
            <div className="lg:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent sticky top-24">
                {s.label}
              </div>
            </div>
            <div className="lg:col-span-9">
              {s.title && (
                <h2 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight mb-6 leading-tight">
                  {s.title}
                </h2>
              )}
              <div className="space-y-4 text-base lg:text-lg text-text-secondary leading-relaxed">
                {s.body}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
