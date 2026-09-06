"use client";

import { faqs } from "@/lib/faqs";

export function FaqList() {
  return (
    <div className="mt-10 divide-y rounded-2xl border bg-white px-5 py-2 shadow-sm">
      {faqs.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="cursor-pointer list-none py-4 text-left text-base font-medium marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {item.question}
              <span
                aria-hidden="true"
                className="mt-1 inline-block text-muted-foreground transition group-open:rotate-180"
              >
                ▾
              </span>
            </span>
          </summary>
          <p className="pb-4 text-sm leading-6 text-muted-foreground">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
