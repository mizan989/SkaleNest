import Image from "next/image";

export default function Logo({
  className = "",
  size = 36,
  showText = true,
  dark = false,
}: {
  className?: string;
  size?: number;
  showText?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div
        className="relative shrink-0 flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo1.png"
          alt="SkaleNest emblem"
          width={size}
          height={size}
          priority
          className="h-full w-full object-contain"
        />
      </div>
      {showText && (
        <span
          className={`font-display text-lg sm:text-xl font-bold tracking-tight ${
            dark ? "text-[#F7F6F2]" : "text-[#171715]"
          }`}
        >
          Skale<span className="text-[#C9A45C]">Nest</span>
        </span>
      )}
    </div>
  );
}