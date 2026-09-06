import { cn } from "@/lib/utils";

function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="40" height="40" rx="9" fill="#EDD23B" />
      <rect x="8" y="6" width="24" height="4.5" rx="1.2" fill="#212121" />
      <circle cx="12.2" cy="8.25" r="1.05" fill="#EDD23B" />
      <circle cx="16.4" cy="8.25" r="1.05" fill="#EDD23B" />
      <circle cx="20" cy="22.2" r="11.1" fill="#212121" />
      <circle
        cx="20"
        cy="22.2"
        r="7.4"
        fill="none"
        stroke="#EDD23B"
        strokeWidth="1.7"
      />
      <path
        d="M20 16.4c1.7 2.4 1.7 4.8 0 7.2-1.7-2.4-1.7-4.8 0-7.2Z"
        fill="#EDD23B"
      />
    </svg>
  );
}

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark className="size-10 shrink-0 sm:size-11" />
      <span className="min-w-0 leading-none">
        <span
          className={cn(
            "block font-logo text-[1.35rem] font-bold tracking-tight sm:text-[1.5rem]",
            inverted ? "text-white" : "text-[#212121]"
          )}
        >
          About Clean
        </span>
        <span
          className={cn(
            "mt-1 block text-[9px] font-semibold tracking-[0.2em] uppercase sm:text-[10px]",
            inverted ? "text-[#EDD23B]" : "text-[#0b3a5b]"
          )}
        >
          Laundry &amp; Car Wash
        </span>
      </span>
    </span>
  );
}
