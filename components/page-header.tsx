export function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] max-w-[900px] rounded-full bg-accent/[0.08] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {label}
          </span>
          <span className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
