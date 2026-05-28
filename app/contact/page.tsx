import type { Metadata } from "next";
import { ArrowRight, Github, Mail } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Hwang's Research",
  description:
    "Get in touch with Hwang's Research for collaborations, partnerships, and inquiries.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    description: "Primary channel for collaboration, press, and serious inquiries.",
  },
  {
    icon: Github,
    label: "GitHub",
    value: contact.github.replace("https://", ""),
    href: contact.github,
    description: "Issues, pull requests, and open-source contributions.",
  },
];

const collabAreas = [
  {
    title: "Research partnerships",
    body: "Joint projects with academic labs, industry teams, or independent researchers — especially in federated learning, autonomous driving, and quantum systems.",
  },
  {
    title: "Open-source contributions",
    body: "PRs, issue reports, and infrastructure help on our public repositories. Reproductions of our results are particularly welcome.",
  },
  {
    title: "Speaking and reviews",
    body: "Talks, paper reviews, and panel participation. Reach out with timing and context.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's collaborate."
        description="We're open to research partnerships, open-source contributions, and serious technical inquiries."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24 space-y-12 lg:space-y-16">
        <section>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
            Channels
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group p-7 lg:p-8 rounded-2xl bg-bg-surface border border-white/[0.05] hover:border-accent/30 hover:bg-bg-raised transition-all hover:shadow-glow-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-lg">
                        {c.label}
                      </h3>
                      <div className="text-sm font-mono text-text-muted truncate group-hover:text-accent transition-colors">
                        {c.value}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {c.description}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        <section>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
            What we&apos;re open to
          </div>
          <h2 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight mb-8 max-w-2xl">
            Reach out about any of the following.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {collabAreas.map((a) => (
              <div
                key={a.title}
                className="p-6 rounded-xl bg-bg-surface border border-white/[0.05]"
              >
                <h3 className="font-display font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
