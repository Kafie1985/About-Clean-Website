import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 text-muted-foreground">
        That link doesn’t match a store or page. Head home or pick a location.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button render={<Link href="/" />} className="h-10 rounded-full px-5">
          Return home
        </Button>
        <Button
          variant="outline"
          render={<Link href="/locations" />}
          className="h-10 rounded-full px-5"
        >
          Find a location
        </Button>
      </div>
    </div>
  );
}
