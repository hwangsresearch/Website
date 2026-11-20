import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PublicationEntry } from "@/components/publication-entry";
import { publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Publications — Hwang's Research",
  description: "Peer-reviewed papers from Hwang's Research.",
};

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  return (
    <>
      <PageHeader
        label="Publications"
        title="Papers and proceedings."
        description="Peer-reviewed work from the laboratory. Members of the laboratory are set in bold."
        video="/videos/night"
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        {sorted.map((p) => (
          <PublicationEntry key={p.id} pub={p} full />
        ))}
      </div>
    </>
  );
}
