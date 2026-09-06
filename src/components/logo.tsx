import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-sm px-2.5 py-1.5 text-center leading-tight",
        inverted ? "bg-white text-[#0b3a5b]" : "bg-[#111827] text-white",
        className
      )}
    >
      <span className="block">
        <span className="block text-[13px] font-bold tracking-[0.12em] uppercase">
          About Clean
        </span>
        <span className="block text-[9px] font-medium tracking-[0.18em] uppercase opacity-80">
          Laundry &amp; Car Wash
        </span>
      </span>
    </span>
  );
}
