import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Clean operates self-service laundromats and car washes in Roanoke, Vinton, and Blacksburg.",
};

export default function AboutPage() {
  const laundryCount = locations.filter((l) => l.type === "laundry").length;
  const washCount = locations.filter((l) => l.type === "car-wash").length;

  return (
    <>
      <section className="relative isolate min-h-[40vh] overflow-hidden">
        <Image
          src="/images/laundry-row.jpg"
          alt="Commercial washers at About Clean"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0b3a5b]/70" />
        <div className="relative mx-auto flex min-h-[40vh] w-full max-w-6xl flex-col justify-end px-4 py-12 sm:px-6">
          <p className="text-sm font-semibold tracking-[0.2em] text-sky-200 uppercase">
            About us
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Local laundry and car wash stores built for getting it done.
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-lg leading-8 text-foreground/85">
          About Clean is a Roanoke-area operator of self-service laundromats and
          car washes. The job is simple: keep the stores clean, keep the machines
          working, and give people a reliable place to wash clothes and cars
          without waiting on someone else’s schedule.
        </p>
        <p className="mt-6 text-lg leading-8 text-foreground/85">
          We currently run {laundryCount} laundromats and {washCount} car washes
          in Roanoke, Vinton, and Blacksburg. Laundries are open 6 AM to 10 PM
          every day (last load 8:45 PM). Car washes stay open 24 hours with
          self-serve bays, vacuums, and a dry-off area.
        </p>
        <p className="mt-6 text-lg leading-8 text-foreground/85">
          This site replaces the old Google Sites pages with a clearer way to
          find a store, see machine counts, get directions, and request a refund
          when something goes wrong.
        </p>
        <Button
          render={<Link href="/locations" />}
          className="mt-8 h-11 rounded-full px-6"
        >
          Browse locations
        </Button>
      </section>
    </>
  );
}
