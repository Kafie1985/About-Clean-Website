"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const store = String(data.get("store") || "").trim();
    const message = String(data.get("message") || "").trim();
    const machine = String(data.get("machine") || "").trim();

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

    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailto(href);
    setSubmitted(true);
    window.location.href = href;
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border bg-blue-50 px-6 py-10 text-center">
        <CheckCircle2Icon className="mx-auto size-10 text-primary" />
        <h3 className="mt-4 font-heading text-xl font-semibold">
          {kind === "refund" ? "Refund request ready to send" : "Message ready to send"}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Your email app should open with the details addressed to {site.email}.
          If it does not, tap the button below.
        </p>
        <Button render={<a href={mailto} />} className="mt-5 h-10 rounded-full px-5">
          Open email to {site.email}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" htmlFor={`${kind}-name`}>
          <Input id={`${kind}-name`} name="name" required className="h-10" />
        </Field>
        <Field label="Email" htmlFor={`${kind}-email`}>
          <Input
            id={`${kind}-email`}
            name="email"
            type="email"
            required
            className="h-10"
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" htmlFor={`${kind}-phone`}>
          <Input id={`${kind}-phone`} name="phone" type="tel" className="h-10" />
        </Field>
        <Field label="Location" htmlFor={`${kind}-store`}>
          <select
            id={`${kind}-store`}
            name="store"
            defaultValue={defaultLocation ?? ""}
            className="h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
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
        <Field label="Machine number (if you have it)" htmlFor="machine">
          <Input id="machine" name="machine" className="h-10" />
        </Field>
      ) : null}
      <Field
        label={kind === "refund" ? "What happened?" : "How can we help?"}
        htmlFor={`${kind}-message`}
      >
        <Textarea
          id={`${kind}-message`}
          name="message"
          required
          minLength={10}
          className="min-h-32"
        />
      </Field>
      <Button type="submit" className="h-11 rounded-full px-6">
        {kind === "refund" ? "Submit refund request" : "Send message"}
      </Button>
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
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
