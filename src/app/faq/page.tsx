import type { Metadata } from "next";

import { FaqList } from "@/components/faq-list";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Hours, payments, bulky loads, car wash amenities, and how to request a refund at About Clean.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-center font-heading text-4xl font-bold tracking-tight">
        Frequently Asked Questions
      </h1>
      <p className="mt-3 text-center text-base leading-7 text-muted-foreground">
        Find answers to common questions about About Clean.
      </p>
      <FaqList />
    </div>
  );
}
