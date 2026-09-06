import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";

import { Logo } from "@/components/logo";
import { locations } from "@/lib/locations";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  const laundry = locations.filter((l) => l.type === "laundry");
  const carWashes = locations.filter((l) => l.type === "car-wash");

  return (
    <footer className="mt-auto bg-[#0b3a5b] text-sky-50">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo
            className="[&_span.block:first-child]:text-white [&_span.block:last-child]:text-sky-200"
            markClassName="size-9"
          />
          <p className="mt-4 max-w-xs text-sm leading-6 text-sky-100/80">
            Self-service laundromats and car washes in Roanoke, Vinton, and
            Blacksburg. Clean stores, big machines, and hours that fit real
            life.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
            Visit
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-sky-100/85">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/refunds" className="hover:text-white">
                Request a refund
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
            Laundromats
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-sky-100/85">
            {laundry.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="hover:text-white"
                >
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
            Car washes
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-sky-100/85">
            {carWashes.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="hover:text-white"
                >
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-sm text-sky-100/85">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 hover:text-white"
            >
              <PhoneIcon className="size-4" />
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="flex items-center gap-2 hover:text-white"
            >
              <MailIcon className="size-4" />
              {site.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-sky-200/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Serving the Roanoke Valley and Blacksburg, Virginia.</p>
        </div>
      </div>
    </footer>
  );
}
