export function SectionLabel({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 mb-8 ${className}`}>
      <span className={`h-px w-10 ${dark ? "bg-brass" : "bg-brass-deep"}`} />
      <span className={`caps ${dark ? "text-brass" : "text-brass-deep"}`}>{children}</span>
    </div>
  );
}
