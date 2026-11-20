import { team, type Publication } from "@/lib/data";

const teamNames = new Set(team.map((m) => m.name));

export function PublicationEntry({ pub, full = false }: { pub: Publication; full?: boolean }) {
  return (
    <article id={pub.id} className="scroll-mt-28 grid gap-4 md:grid-cols-[180px,1fr] md:gap-12 py-10 border-t border-ink/15">
      <div className="caps text-brass-deep leading-6">
        <div>{pub.year}</div>
        <div className="text-stone">{pub.venueShort}</div>
        {pub.status && <div className="text-stone">{pub.status}</div>}
      </div>
      <div>
        <h3 className="font-serif text-2xl lg:text-[1.9rem] leading-snug">{pub.title}</h3>
        <p className="mt-3 text-sm text-stone">
          {pub.authors.map((a, i) => (
            <span key={a}>
              <span className={teamNames.has(a) ? "text-ink font-semibold" : undefined}>{a}</span>
              {i < pub.authors.length - 1 && ", "}
            </span>
          ))}
        </p>
        {full && (
          <>
            <p className="mt-1 text-sm text-stone italic">
              {pub.venue}
              {pub.location && `, ${pub.location}`}
            </p>
            <details className="group mt-5">
              <summary className="caps text-brass-deep cursor-pointer list-none">
                <span className="group-open:hidden">Read abstract +</span>
                <span className="hidden group-open:inline">Close abstract −</span>
              </summary>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink/80">{pub.abstract}</p>
            </details>
            {(pub.url || pub.doi || pub.pdf) && (
              <div className="mt-5 flex flex-wrap gap-6 text-sm">
                {pub.url && <ExtLink href={pub.url}>IEEE Xplore</ExtLink>}
                {pub.doi && <ExtLink href={`https://doi.org/${pub.doi}`}>DOI {pub.doi}</ExtLink>}
                {pub.pdf && <ExtLink href={pub.pdf}>PDF</ExtLink>}
              </div>
            )}
          </>
        )}
      </div>
    </article>
  );
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-line border-b border-ink/20 hover:border-transparent">
      {children} ↗
    </a>
  );
}
