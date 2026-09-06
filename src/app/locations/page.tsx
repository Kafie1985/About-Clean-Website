import type { Metadata } from "next";
import { Suspense } from "react";

import { LocationDirectory } from "@/components/location-directory";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find About Clean laundromats and car washes in Roanoke, Vinton, and Blacksburg.",
};

export default function LocationsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
        Locations
      </p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight">
        Find a store near you
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
        Six self-service laundromats and three 24-hour car washes. Search by
        city, or filter by laundry and car wash.
      </p>
      <div className="mt-10">
        <Suspense fallback={<p className="text-sm text-muted-foreground">Loading locations…</p>}>
          <LocationDirectory />
        </Suspense>
      </div>
    </div>
  );
}
