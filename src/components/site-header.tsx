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
} from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
              />
            }
          >
            <MenuIcon />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
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
              <Button
                render={<a href={site.phoneHref} />}
                className="mt-4 h-11 rounded-md"
              >
                <PhoneIcon />
                Call {site.phone}
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
