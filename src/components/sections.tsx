import Link from "next/link";
import {
  CarFrontIcon,
  ClockIcon,
  CreditCardIcon,
  SparklesIcon,
  TvIcon,
  WashingMachineIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

export const laundryFeatures = [
  {
    title: "Self-service, on your schedule",
    body: "Laundromats open every day from 6 AM to 10 PM so you can wash when it actually fits.",
    icon: ClockIcon,
  },
  {
    title: "Large-capacity machines",
    body: "Need to wash comforters, rugs, or a week of laundry at once? Extra-large commercial loaders handle the bulky stuff.",
    icon: WashingMachineIcon,
  },
  {
    title: "Clean, comfortable, and easy",
    body: "Spotless restrooms, seating, TVs, and vending while you wait. Brambleton even has two waiting rooms.",
    icon: TvIcon,
  },
  {
    title: "Coin changers on site",
    body: "Pay with coins. Every laundry has changers plus soap and soda vending so you are not stuck without supplies.",
    icon: CreditCardIcon,
  },
];

export const carWashFeatures = [
  {
    title: "Open all night",
    body: "All three Roanoke car washes run 24 hours. Pull in after shift, before work, or whenever the car needs it.",
    icon: ClockIcon,
  },
  {
    title: "Self-serve bays and vacuums",
    body: "Manual bays, vacuums, change machines, and a supplies vendor at every wash. Peters Creek also has a touch-free automatic.",
    icon: CarFrontIcon,
  },
  {
    title: "Finish in the dry-off area",
    body: "Detail and dry-off parking at each wash so you can towel off and go without blocking a bay.",
    icon: SparklesIcon,
  },
];

export function FeatureGrid({
  items,
}: {
  items: { title: string; body: string; icon: typeof ClockIcon }[];
}) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2",
        items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
      )}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <item.icon className="size-5" />
          </div>
          <h3 className="mt-4 font-heading text-lg font-semibold text-balance">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function CtaBanner() {
  return (
    <section className="bg-[#0b3a5b] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            Get in touch
          </h2>
          <p className="mt-2 max-w-xl text-sky-100/85">
            Questions about a store, a machine, or a refund? We are here to help.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-full bg-brand-gold px-5 text-sm font-semibold text-brand-ink hover:bg-brand-gold-deep"
          >
            Contact us
          </Link>
          <Link
            href="/refunds"
            className="inline-flex h-11 items-center rounded-full border border-brand-gold px-5 text-sm font-semibold text-brand-gold hover:bg-brand-gold hover:text-brand-ink"
          >
            Request a refund
          </Link>
        </div>
      </div>
    </section>
  );
}
