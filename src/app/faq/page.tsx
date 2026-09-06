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
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-center font-heading text-4xl font-bold tracking-tight">
        Frequently Asked Questions
      </h1>
      <p className="mt-3 text-center text-base leading-7 text-muted-foreground">
        Find answers to common questions about About Clean.
      </p>
      <Accordion className="mt-10 rounded-2xl border bg-white px-5 py-2 shadow-sm">
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
