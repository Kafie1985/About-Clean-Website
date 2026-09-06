import type { Metadata } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Hours, payments, bulky loads, car wash amenities, and how to request a refund at About Clean.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
        FAQ
      </p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight">
        Frequently asked questions
      </h1>
      <p className="mt-3 text-base leading-7 text-muted-foreground">
        Straight answers about hours, machines, car washes, and refunds.
      </p>
      <Accordion className="mt-10 rounded-2xl border bg-white px-4">
        {faqs.map((item, index) => (
          <AccordionItem key={item.question} value={`faq-${index}`}>
            <AccordionTrigger className="py-4 text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
