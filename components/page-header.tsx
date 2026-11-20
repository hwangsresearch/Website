import { Video } from "./video";
import { SectionLabel } from "./section-label";

export function PageHeader({
  label,
  title,
  description,
  video,
}: {
  label: string;
  title: string;
  description?: string;
  video?: string;
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink text-ivory">
      {video && (
        <>
          <Video src={video} />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        </>
      )}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-44 pb-24 lg:pt-56 lg:pb-32">
        <SectionLabel dark>{label}</SectionLabel>
        <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl animate-rise">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-xl text-base lg:text-lg text-ivory/65 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
