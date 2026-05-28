import { Github, Mail } from "lucide-react";
import { contact } from "@/lib/data";

export function ContactCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] max-w-[900px] rounded-full bg-accent/[0.10] blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
          Let&apos;s collaborate.
        </h2>
        <p className="text-lg text-text-secondary mb-10 leading-relaxed">
          Open to research partnerships, open-source contributions, and serious
          technical inquiries.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg-base font-medium hover:bg-accent-soft transition-all hover:shadow-glow"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 hover:border-white/40 hover:bg-white/5 transition-all font-medium"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
