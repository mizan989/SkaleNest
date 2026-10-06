import Image from "next/image";
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.png"
        alt="SkaleNest logo"
        width={28}
        height={28}
        className="shrink-0"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-text-primary">
        Skale<span className="text-gold">Nest</span>
      </span>
    </div>
  );
}