export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        {children}
      </span>
      <span className="h-px w-12 bg-gradient-to-r from-accent to-transparent" />
    </div>
  );
}
