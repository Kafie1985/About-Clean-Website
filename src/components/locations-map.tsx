"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

import { type SiteLocation } from "@/lib/locations";

export function LocationsMap({ locations }: { locations: SiteLocation[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const key = locations.map((location) => location.slug).join("|");

  useEffect(() => {
    const el = containerRef.current;
    if (!el || locations.length === 0) return;

    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    async function setup() {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !el) return;

      const DefaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      map = L.map(el, { scrollWheelZoom: false });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const bounds = L.latLngBounds([]);
      for (const location of locations) {
        const marker = L.marker([location.lat, location.lon], {
          icon: DefaultIcon,
          title: location.name,
        }).addTo(map);
        marker.bindPopup(
          `<strong>${location.name}</strong><br/>${location.address}<br/><a href="/locations/${location.slug}">Store details</a>`
        );
        bounds.extend([location.lat, location.lon]);
      }
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [32, 32], maxZoom: 12 });
      }
    }

    void setup();
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [key, locations]);

  if (locations.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
      <div ref={containerRef} className="h-[420px] w-full" />
      <p className="sr-only">
        Map of About Clean stores.{" "}
        {locations.map((location) => (
          <Link key={location.slug} href={`/locations/${location.slug}`}>
            {location.name}
          </Link>
        ))}
      </p>
    </div>
  );
}
