import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Hwang's Research",
  description: "Correspondence and collaboration with Hwang's Research.",
};

const topics = [
  {
    title: "Research partnerships",
    body: "Joint projects with academic laboratories, industry teams, or independent researchers, particularly in federated learning, autonomous driving, and forecasting.",
  },
  {
    title: "Reproductions",
    body: "Issues, pull requests, and independent reproductions of our results on the public repositories.",
  },
  {
    title: "Talks and reviews",
    body: "Invitations to speak, review, or sit on a panel. Please include timing and context.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Correspondence."
        description="We read every message and reply to those we can help with."
        video="/videos/night"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <section className="grid gap-6 lg:grid-cols-12 lg:gap-12 pb-16">
          <div className="lg:col-span-4 caps text-brass-deep">Write to us</div>
          <div className="lg:col-span-8 space-y-6">
            <a href={`mailto:${contact.email}`} className="block font-serif font-light text-4xl sm:text-5xl link-line w-fit break-all">
              {contact.email}
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="block text-lg text-stone link-line w-fit hover:text-ink">
              {contact.github.replace("https://", "")} ↗
            </a>
          </div>
        </section>

        {topics.map((t) => (
          <section key={t.title} className="grid gap-4 lg:grid-cols-12 lg:gap-12 py-10 border-t border-ink/15">
            <h2 className="lg:col-span-4 font-serif text-3xl">{t.title}</h2>
            <p className="lg:col-span-8 text-lg leading-relaxed text-stone">{t.body}</p>
          </section>
        ))}
      </div>
    </>
  );
}
