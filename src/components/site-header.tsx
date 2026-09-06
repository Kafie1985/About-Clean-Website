import Link from "next/link";
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

const icons = {
  home: HomeIcon,
  about: InfoIcon,
  pin: MapPinIcon,
  refund: RefreshCcwIcon,
  faq: CircleHelpIcon,
  contact: PhoneIcon,
};

export function SiteHeader() {
  return (
    <header className="group sticky top-0 z-40 border-b bg-white shadow-sm">
      <input id="nav-toggle" type="checkbox" className="peer sr-only" />
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const Icon = icons[item.icon];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                <Icon className="size-4 text-primary" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <label
          htmlFor="nav-toggle"
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-md text-foreground hover:bg-muted lg:hidden"
        >
          <MenuIcon className="size-5 group-has-[#nav-toggle:checked]:hidden" />
          <XIcon className="hidden size-5 group-has-[#nav-toggle:checked]:block" />
          <span className="sr-only">Menu</span>
        </label>
      </div>

      <nav className="hidden border-t bg-white peer-checked:block lg:peer-checked:hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          {nav.map((item) => {
            const Icon = icons[item.icon];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium hover:bg-muted"
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
        </div>
      </nav>
    </header>
  );
}
