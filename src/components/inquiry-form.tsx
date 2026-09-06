"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2Icon } from "lucide-react";

import { locations } from "@/lib/locations";
import { site } from "@/lib/site";

type InquiryKind = "contact" | "refund";

export function InquiryForm({
  kind,
  defaultLocation,
}: {
  kind: InquiryKind;
  defaultLocation?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [mailto, setMailto] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const store = String(data.get("store") || "").trim();
    const message = String(data.get("message") || "").trim();
    const machine = String(data.get("machine") || "").trim();

    if (!name || !email || message.length < 10) return;

    const subject =
      kind === "refund"
        ? `Refund request${store ? ` — ${store}` : ""}`
        : `Website message${store ? ` — ${store}` : ""}`;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      store ? `Location: ${store}` : null,
      machine ? `Machine: ${machine}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    setMailto(
      `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    setSubmitted(true);
  }

  if (submitted) {
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
          Thanks — your message is ready to send to {site.email}. Tap the button
          below to open it in your email app.
        </p>
        <a
          href={mailto}
          className="mt-5 inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
        >
          Open email to {site.email}
        </a>
      </div>
    );
  }

  const fieldClass =
    "h-10 w-full rounded-lg border border-input bg-white px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" htmlFor={`${kind}-name`}>
          <input
            id={`${kind}-name`}
            name="name"
            required
            className={fieldClass}
          />
        </Field>
        <Field label="Email" htmlFor={`${kind}-email`}>
          <input
            id={`${kind}-email`}
            name="email"
            type="email"
            required
            className={fieldClass}
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" htmlFor={`${kind}-phone`}>
          <input
            id={`${kind}-phone`}
            name="phone"
            type="tel"
            className={fieldClass}
          />
        </Field>
        <Field label="Location" htmlFor={`${kind}-store`}>
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
        </Field>
      </div>
      {kind === "refund" ? (
        <Field label="Machine number (if you have it)" htmlFor={`${kind}-machine`}>
          <input id={`${kind}-machine`} name="machine" className={fieldClass} />
        </Field>
      ) : null}
      <Field
        label={kind === "refund" ? "What happened?" : "How can we help?"}
        htmlFor={`${kind}-message`}
      >
        <textarea
          id={`${kind}-message`}
          name="message"
          required
          minLength={10}
          className="min-h-32 w-full rounded-lg border border-input bg-white px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </Field>
      <button
        type="submit"
        className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/80"
      >
        {kind === "refund" ? "Submit refund request" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}
