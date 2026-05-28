import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./section-label";

const focusItems = [
  {
    label: "Federated Learning",
    desc: "Distributed, privacy-preserving learning across heterogeneous clients. Adaptive aggregation, continual participation, and communication efficiency.",
  },
  {
    label: "Autonomous Driving",
    desc: "Mamba state-space models for efficient long-horizon perception and planning in end-to-end autonomous systems.",
  },
  {
    label: "Quantum Computing",
    desc: "Quantum circuit simulation and algorithm prototyping for hybrid classical-quantum workloads.",
  },
];

export function AboutPreview() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionLabel>About</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl leading-[1.1]">
          A research collective at the frontier of intelligent systems.
        </h2>

        <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              Hwang&apos;s Research is an independent research organization focused
              on the systems that will define how machines learn, perceive, and
              reason about the world.
            </p>
            <p>
              Our collaborative work spans{" "}
              <span className="text-accent">federated learning</span>,{" "}
              <span className="text-accent">autonomous driving</span>, and{" "}
              <span className="text-accent">quantum computing</span> — three
              frontiers where progress demands deep technical depth and a
              willingness to build infrastructure that doesn&apos;t yet exist.
            </p>
            <p>
              We publish openly, release code, and design our research to be
              reproducible and useful beyond our own work.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-soft font-medium pt-2 transition-colors"
            >
              Read more about our mission
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {focusItems.map((item) => (
              <div
                key={item.label}
                className="group p-6 rounded-xl bg-bg-surface border border-white/[0.05] hover:border-accent/30 hover:bg-bg-raised transition-all"
              >
                <div className="font-display font-semibold text-lg text-text-primary mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-glow-sm" />
                  {item.label}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
