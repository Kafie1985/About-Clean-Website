"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  CircleHelpIcon,
  HomeIcon,
  InfoIcon,
  MapPinIcon,
  MenuIcon,
  PhoneIcon,
  RefreshCcwIcon,
  XIcon,
} from "lucide-react";

import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons = {
  home: HomeIcon,
  about: InfoIcon,
  pin: MapPinIcon,
  refund: RefreshCcwIcon,
  faq: CircleHelpIcon,
  contact: PhoneIcon,
};

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const Icon = icons[item.icon];
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                <Icon className="size-4 text-primary" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-muted lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t bg-white lg:hidden"
        >
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {nav.map((item) => {
              const Icon = icons[item.icon];
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium hover:bg-muted",
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  )}
                >
                  <Icon className="size-4 text-primary" />
                  {item.label}
                </Link>
              );
            })}
            <a
              href={site.phoneHref}
              className="mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/80"
            >
              <PhoneIcon className="size-4" />
              Call {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
