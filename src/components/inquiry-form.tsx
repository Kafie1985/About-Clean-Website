import { CheckCircle2Icon } from "lucide-react";

import { submitInquiry } from "@/app/actions";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";

type InquiryKind = "contact" | "refund";

export function InquiryForm({
  kind,
  defaultLocation,
  next = "/contact",
  sent = false,
}: {
  kind: InquiryKind;
  defaultLocation?: string;
  next?: string;
  sent?: boolean;
}) {
  if (sent) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-primary/20 bg-blue-50 px-6 py-10 text-center"
      >
        <CheckCircle2Icon className="mx-auto size-10 text-primary" />
        <h3 className="mt-4 font-heading text-xl font-semibold">
          {kind === "refund"
            ? "Refund request ready to send"
            : "Message ready to send"}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Thanks — copy the details into an email to {site.email}, or tap below
          to open your mail app.
        </p>
        <a
          href={site.emailHref}
          className="mt-5 inline-flex h-10 items-center rounded-full bg-brand-gold px-5 text-sm font-medium text-brand-ink hover:bg-brand-gold-deep"
        >
          Email {site.email}
        </a>
      </div>
    );
  }

  const fieldClass =
    "h-10 w-full rounded-lg border border-input bg-white px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

  return (
    <form action={submitInquiry} className="space-y-4">
      <input type="hidden" name="next" value={next} />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium" htmlFor={`${kind}-name`}>
          Name
          <input id={`${kind}-name`} name="name" required className={fieldClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium" htmlFor={`${kind}-email`}>
          Email
          <input
            id={`${kind}-email`}
            name="email"
            type="email"
            required
            className={fieldClass}
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium" htmlFor={`${kind}-phone`}>
          Phone
          <input id={`${kind}-phone`} name="phone" type="tel" className={fieldClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium" htmlFor={`${kind}-store`}>
          Location
          <select
            id={`${kind}-store`}
            name="store"
            defaultValue={defaultLocation ?? ""}
            className={fieldClass}
          >
            <option value="">Any location</option>
            {locations.map((location) => (
              <option key={location.slug} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      {kind === "refund" ? (
        <label className="grid gap-1.5 text-sm font-medium" htmlFor={`${kind}-machine`}>
          Machine number (if you have it)
          <input id={`${kind}-machine`} name="machine" className={fieldClass} />
        </label>
      ) : null}
      <label className="grid gap-1.5 text-sm font-medium" htmlFor={`${kind}-message`}>
        {kind === "refund" ? "What happened?" : "How can we help?"}
        <textarea
          id={`${kind}-message`}
          name="message"
          required
          minLength={10}
          className="min-h-32 w-full rounded-lg border border-input bg-white px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </label>
      <button
        type="submit"
        className="inline-flex h-11 items-center rounded-full bg-brand-gold px-6 text-sm font-medium text-brand-ink hover:bg-brand-gold-deep"
      >
        {kind === "refund" ? "Submit refund request" : "Send message"}
      </button>
    </form>
  );
}
