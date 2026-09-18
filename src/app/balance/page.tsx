import type { Metadata } from "next";
import { CreditCardIcon } from "lucide-react";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Check Balance",
  description:
    "Check your About Clean laundry card balance online.",
};

export default function BalancePage() {
  return (
    <div className="bg-gradient-to-b from-background to-sky-50/70">
      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <CreditCardIcon className="size-4" />
            Check Your Balance
          </p>
          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Card Balance Checker
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Keep track of your laundry card balance with ease
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <iframe
            src={site.balanceEmbedUrl}
            title="Check laundry card balance"
            className="h-[min(75vh,760px)] w-full bg-white"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allow="payment; clipboard-write"
          />
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          If the checker does not load here,{" "}
          <a
            href={site.balanceEmbedUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            open it in a new tab
          </a>
          .
        </p>
      </div>
    </div>
  );
}
