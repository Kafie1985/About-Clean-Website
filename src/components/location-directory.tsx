"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LocateFixedIcon, SearchIcon } from "lucide-react";

import { LocationCard } from "@/components/location-card";
import { LocationsMap } from "@/components/locations-map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { locations, type LocationType, type SiteLocation } from "@/lib/locations";

type Filter = "all" | LocationType;

function initialFilter(value: string | null): Filter {
  if (value === "laundry" || value === "car-wash") return value;
  return "all";
}

const cities = ["All cities", ...Array.from(new Set(locations.map((l) => l.city)))];

function milesBetween(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const toRad = (n: number) => (n * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 3958.8 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function LocationDirectory() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All cities");
  const [filter, setFilter] = useState<Filter>(() =>
    initialFilter(searchParams.get("type"))
  );
  const [origin, setOrigin] = useState<{ lat: number; lon: number } | null>(null);
  const [geoError, setGeoError] = useState("");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = locations.filter((location) => {
      if (filter !== "all" && location.type !== filter) return false;
      if (city !== "All cities" && location.city !== city) return false;
      if (!needle) return true;
      return (
        location.name.toLowerCase().includes(needle) ||
        location.city.toLowerCase().includes(needle) ||
        location.address.toLowerCase().includes(needle)
      );
    });
    if (!origin) return filtered;
    return [...filtered].sort(
      (a, b) =>
        milesBetween(origin.lat, origin.lon, a.lat, a.lon) -
        milesBetween(origin.lat, origin.lon, b.lat, b.lon)
    );
  }, [city, filter, origin, query]);

  function useMyLocation() {
    setGeoError("");
    if (!navigator.geolocation) {
      setGeoError("Location is not available in this browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setOrigin({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      () => {
        setGeoError("Could not read your location. Search by city instead.");
      }
    );
  }

  return (
    <div>
      <div className="mx-auto flex max-w-3xl flex-col items-stretch gap-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative min-w-0 flex-1">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Enter address, city or zip code..."
              className="h-11 rounded-md pl-9"
              aria-label="Search locations"
            />
          </div>
          <Button
            type="button"
            onClick={useMyLocation}
            className="h-11 rounded-md bg-brand-gold px-4 text-brand-ink hover:bg-brand-gold-deep"
          >
            <LocateFixedIcon />
            Use My Location
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Or select a city</span>
          <select
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="h-10 rounded-full border border-input bg-white px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {cities.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
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
        {geoError ? (
          <p className="text-center text-sm text-destructive">{geoError}</p>
        ) : null}
      </div>

      <div className="mt-8">
        <LocationsMap locations={results} />
      </div>

      <h2 className="mt-10 font-heading text-2xl font-semibold">All Locations</h2>
      {origin ? (
        <p className="mt-1 text-sm text-muted-foreground">
          Sorted by distance from your location.
        </p>
      ) : null}

      {results.length === 0 ? (
        <EmptyState
          onReset={() => {
            setQuery("");
            setFilter("all");
            setCity("All cities");
          }}
        />
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((location: SiteLocation) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-8 rounded-2xl border border-dashed bg-muted/40 px-6 py-16 text-center">
      <p className="font-heading text-lg font-semibold">No stores match that search</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Try a city name, or clear the search to see every location.
      </p>
      <Button className="mt-5 h-9 rounded-full px-4" variant="outline" onClick={onReset}>
        Show all locations
      </Button>
    </div>
  );
}
