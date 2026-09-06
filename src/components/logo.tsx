import { cn } from "@/lib/utils";

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className={cn("size-9 shrink-0", markClassName)}
      >
        <rect width="40" height="40" rx="12" className="fill-primary" />
        <circle
          cx="20"
          cy="20"
          r="11"
          className="fill-none stroke-white"
          strokeWidth="2.2"
        />
        <circle
          cx="20"
          cy="20"
          r="5.5"
          className="fill-none stroke-white/90"
          strokeWidth="1.6"
        />
        <path
          d="M20 9.5c2.2 3.4 2.2 6.8 0 10.2-2.2-3.4-2.2-6.8 0-10.2Z"
          className="fill-white"
        />
      </svg>
      <span className="leading-tight">
        <span className="block font-heading text-[15px] font-semibold tracking-tight text-foreground">
          About Clean
        </span>
        <span className="block text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
          Laundry &amp; Car Wash
        </span>
      </span>
    </span>
  );
}
