import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClockIcon, MapPinIcon, ParkingCircleIcon, PhoneIcon } from "lucide-react";

import { InquiryForm } from "@/components/inquiry-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getLocation,
  locations,
  machineTotal,
  mapsEmbedUrl,
  mapsSearchUrl,
  typeLabel,
} from "@/lib/locations";

type LocationParams = {
  params: Promise<{ slug: string }>;
};

type LocationPageProps = LocationParams & {
  searchParams: Promise<{ sent?: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: LocationParams): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: "Location" };
  return {
    title: location.name,
    description: `${location.name} at ${location.address}. ${location.blurb}`,
  };
}

export default async function LocationPage({ params, searchParams }: LocationPageProps) {
  const { slug } = await params;
  const { sent } = await searchParams;
  const location = getLocation(slug);
  if (!location) notFound();

  const washerCount = machineTotal(location.washers);
  const dryerCount = machineTotal(location.dryers);

  return (
    <article>
      <div className="relative isolate min-h-[42vh] overflow-hidden">
        <Image
          src={location.image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0b3a5b]/70" />
        <div className="relative mx-auto flex min-h-[42vh] w-full max-w-6xl flex-col justify-end px-4 py-12 sm:px-6">
          <Badge className="w-fit bg-white/95 text-foreground">
            {typeLabel(location.type)} · {location.city}
          </Badge>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {location.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sky-100">{location.blurb}</p>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <dl className="grid gap-4 sm:grid-cols-2">
            <Info
              icon={MapPinIcon}
              label="Address"
              value={location.address}
            />
            <Info
              icon={ClockIcon}
              label="Hours"
              value={
                location.lastLoad
                  ? `${location.hours} · ${location.lastLoad}`
                  : location.hours
              }
            />
            {location.parking ? (
              <Info icon={ParkingCircleIcon} label="Parking" value={location.parking} />
            ) : null}
            {location.phone ? (
              <Info
                icon={PhoneIcon}
                label="Phone"
                value={
                  <a href={location.phoneHref} className="hover:text-primary">
                    {location.phone}
                  </a>
                }
              />
            ) : null}
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              render={
                <a href={mapsSearchUrl(location.address)} target="_blank" rel="noreferrer" />
              }
              className="h-10 rounded-full px-5"
            >
              Get directions
            </Button>
            <Button
              variant="outline"
              render={<Link href="/refunds" />}
              className="h-10 rounded-full px-5"
            >
              Report a machine
            </Button>
          </div>

          <h2 className="mt-10 font-heading text-2xl font-semibold">Amenities</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {(location.carWashFeatures ?? []).concat(location.amenities).map((item) => (
              <li
                key={item}
                className="rounded-xl bg-sky-50 px-4 py-3 text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>

          {location.washers && location.dryers ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <MachineTable
                title={`Washers (${washerCount})`}
                machines={location.washers}
              />
              <MachineTable
                title={`Dryers (${dryerCount})`}
                machines={location.dryers}
              />
            </div>
          ) : null}

          <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <iframe
              title={`Map of ${location.name}`}
              src={mapsEmbedUrl(location.lat, location.lon)}
              className="h-72 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <aside className="h-fit rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="font-heading text-xl font-semibold">Ask about this store</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Machine issue, hours, or a question — send it through and we’ll follow
            up.
          </p>
          <div className="mt-5">
            <InquiryForm
              kind="contact"
              defaultLocation={location.name}
              next={`/locations/${location.slug}`}
              sent={sent === "1"}
            />
          </div>
        </aside>
      </div>
    </article>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPinIcon;
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <dt className="flex items-center gap-2 text-sm text-muted-foreground">
        <Icon className="size-4" />
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium leading-6">{value}</dd>
    </div>
  );
}

function MachineTable({
  title,
  machines,
}: {
  title: string;
  machines: { size: string; count: number }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <h3 className="border-b bg-muted/40 px-4 py-3 font-heading font-semibold">
        {title}
      </h3>
      <table className="w-full text-sm">
        <tbody>
          {machines.map((machine) => (
            <tr key={machine.size} className="border-b last:border-0">
              <td className="px-4 py-2.5">{machine.size}</td>
              <td className="px-4 py-2.5 text-right font-semibold">
                {machine.count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
