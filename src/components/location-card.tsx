import Image from "next/image";
import Link from "next/link";
import { ClockIcon, MapPinIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  machineTotal,
  mapsSearchUrl,
  typeLabel,
  type SiteLocation,
} from "@/lib/locations";
import { cn } from "@/lib/utils";

export function LocationCard({
  location,
  className,
}: {
  location: SiteLocation;
  className?: string;
}) {
  const washerCount = machineTotal(location.washers);
  const dryerCount = machineTotal(location.dryers);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-foreground/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={location.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <Badge className="absolute top-3 left-3 bg-white/95 text-foreground">
          {typeLabel(location.type)}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-heading text-lg font-semibold tracking-tight">
            {location.name}
          </h3>
          <p className="mt-1 flex items-start gap-1.5 text-sm text-muted-foreground">
            <MapPinIcon className="mt-0.5 size-4 shrink-0" />
            {location.address}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <ClockIcon className="size-4 shrink-0" />
            {location.hours}
            {location.lastLoad ? ` · ${location.lastLoad}` : null}
          </p>
        </div>
        <p className="text-sm leading-6 text-foreground/80">{location.blurb}</p>
        {location.type === "laundry" ? (
          <p className="text-sm font-medium text-primary">
            {washerCount} washers · {dryerCount} dryers
          </p>
        ) : (
          <p className="text-sm font-medium text-primary">
            {location.carWashFeatures?.join(" · ")}
          </p>
        )}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Button
            render={<Link href={`/locations/${location.slug}`} />}
            className="h-9 rounded-full px-4"
          >
            Store details
          </Button>
          <Button
            variant="outline"
            render={
              <a href={mapsSearchUrl(location.address)} target="_blank" rel="noreferrer" />
            }
            className="h-9 rounded-full px-4"
          >
            Directions
          </Button>
        </div>
      </div>
    </article>
  );
}
