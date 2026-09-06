import type { Metadata } from "next";
import { MailIcon, PhoneIcon } from "lucide-react";

import { InquiryForm } from "@/components/inquiry-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, email, or send a message to About Clean about a laundromat or car wash.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  const { sent } = await searchParams;
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
          Contact
        </p>
        <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight">
          Get in touch
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Have a question? We are here to help. Include the store name so we can
          get you an answer faster.
        </p>
        <div className="mt-8 space-y-4">
          <a
            href={site.phoneHref}
            className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-4 hover:border-primary"
          >
            <PhoneIcon className="size-5 text-primary" />
            <span>
              <span className="block text-sm text-muted-foreground">Phone</span>
              <span className="font-semibold">{site.phone}</span>
            </span>
          </a>
          <a
            href={site.emailHref}
            className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-4 hover:border-primary"
          >
            <MailIcon className="size-5 text-primary" />
            <span>
              <span className="block text-sm text-muted-foreground">Email</span>
              <span className="font-semibold">{site.email}</span>
            </span>
          </a>
          <div className="rounded-2xl bg-sky-50 px-4 py-4 text-sm leading-6">
            <p className="font-semibold">Hours</p>
            <p className="mt-1 text-muted-foreground">{site.laundryHours}</p>
            <p className="text-muted-foreground">
              Car washes: {site.carWashHours}
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-heading text-xl font-semibold">Send a message</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          For lost coins or a machine that didn’t start, use the{" "}
          <a href="/refunds" className="font-medium text-primary underline-offset-4 hover:underline">
            refund form
          </a>
          .
        </p>
        <div className="mt-6">
          <InquiryForm kind="contact" next="/contact" sent={sent === "1"} />
        </div>
      </div>
    </div>
  );
}
