import type { Metadata } from "next";

import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Request a refund",
  description:
    "Report a machine problem or request a refund at an About Clean laundromat or car wash.",
};

export default function RefundsPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
        Refunds
      </p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight">
        Request a refund
      </h1>
      <p className="mt-3 text-base leading-7 text-muted-foreground">
        Tell us the store, what happened, and a machine number if you have one.
        We’ll follow up at the email or phone you leave.
      </p>
      <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
        <InquiryForm kind="refund" />
      </div>
    </div>
  );
}
