"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SearchIcon } from "lucide-react";

import { LocationCard } from "@/components/location-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { locations, type LocationType } from "@/lib/locations";

type Filter = "all" | LocationType;

function initialFilter(value: string | null): Filter {
  if (value === "laundry" || value === "car-wash") return value;
  return "all";
}

export function LocationDirectory() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(() =>
    initialFilter(searchParams.get("type"))
  );

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return locations.filter((location) => {
      if (filter !== "all" && location.type !== filter) return false;
      if (!needle) return true;
      return (
        location.name.toLowerCase().includes(needle) ||
        location.city.toLowerCase().includes(needle) ||
        location.address.toLowerCase().includes(needle)
      );
    });
  }, [filter, query]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Roanoke, Vinton, Blacksburg…"
            className="h-11 rounded-full pl-9"
            aria-label="Search locations"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["all", "All stores"],
              ["laundry", "Laundromats"],
              ["car-wash", "Car washes"],
            ] as const
          ).map(([value, label]) => (
            <Button
              key={value}
              variant={filter === value ? "default" : "outline"}
              onClick={() => setFilter(value)}
              className="h-9 rounded-full px-4"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed bg-muted/40 px-6 py-16 text-center">
          <p className="font-heading text-lg font-semibold">No stores match that search</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a city name, or clear the search to see every location.
          </p>
          <Button
            className="mt-5 h-9 rounded-full px-4"
            variant="outline"
            onClick={() => {
              setQuery("");
              setFilter("all");
            }}
          >
            Show all locations
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      )}
    </div>
  );
}
