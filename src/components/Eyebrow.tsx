export default function Eyebrow({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className="h-px w-8 bg-gold" />
      <span className="font-mono text-xs uppercase tracking-widest2 text-gold">
        {children}
      </span>
    </div>
  );
}
