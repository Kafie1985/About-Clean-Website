import type { Metadata } from "next";
import { Suspense } from "react";

import { LocationDirectory } from "@/components/location-directory";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find About Clean laundromats and car washes in Roanoke and Vinton.",
};

export default function LocationsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-center font-heading text-4xl font-bold tracking-tight">
        Find a Location Near You!
      </h1>
      <p className="mt-3 text-center text-base leading-7 text-muted-foreground">
        Locate your nearest About Clean laundromat or car wash.
      </p>
      <div className="mt-10">
        <Suspense fallback={<p className="text-sm text-muted-foreground">Loading locations…</p>}>
          <LocationDirectory />
        </Suspense>
      </div>
    </div>
  );
}
