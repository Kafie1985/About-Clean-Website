import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "lucide-react";

import { LocationCard } from "@/components/location-card";
import {
  CtaBanner,
  FeatureGrid,
  SectionHeading,
  carWashFeatures,
  laundryFeatures,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { carWashLocations, laundryLocations } from "@/lib/locations";
import { site } from "@/lib/site";

export default function HomePage() {
  const featuredLaundry = laundryLocations().slice(0, 3);
  const featuredWashes = carWashLocations();

  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden">
        <Image
          src="/images/laundry-fold.jpg"
          alt="Row of commercial dryers in an About Clean laundromat"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0b3a5b]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b3a5b] via-transparent to-black/20" />
        <div className="relative mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
          <p className="text-sm font-semibold tracking-[0.2em] text-sky-200 uppercase">
            Welcome to About Clean
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            Your trusted self-service laundry and car wash: clean, safe,
            comfortable, and fast.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-sky-100/90 text-pretty">
            Big washers and hot dryers for life’s toughest laundry, plus 24-hour
            self-serve car washes across the Roanoke Valley and Blacksburg.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              render={<Link href="/locations" />}
              className="h-12 rounded-full bg-white px-6 text-base font-semibold text-[#0b3a5b] hover:bg-sky-100"
            >
              <MapPinIcon />
              Find location
            </Button>
            <Button
              variant="outline"
              render={<Link href="/contact" />}
              className="h-12 rounded-full border-white/40 bg-white/10 px-6 text-base font-semibold text-white hover:bg-white/20"
            >
              Contact us
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              Visit us
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold">
              Open when you need us
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Six laundromats and three car washes, stocked with commercial
              machines and the basics: changers, vending, TVs, and clean
              restrooms.
            </p>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-5">
              <dt className="text-sm font-medium text-muted-foreground">
                Laundromats
              </dt>
              <dd className="mt-1 text-lg font-semibold">{site.laundryHours}</dd>
              <dd className="text-sm text-muted-foreground">
                {site.laundryLastLoad}
              </dd>
            </div>
            <div className="rounded-2xl bg-sky-50 p-5">
              <dt className="text-sm font-medium text-muted-foreground">
                Car washes
              </dt>
              <dd className="mt-1 text-lg font-semibold">{site.carWashHours}</dd>
              <dd className="text-sm text-muted-foreground">
                Self-serve bays, vacuums, and supplies
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Experience the difference"
          title="Why neighbors pick About Clean"
          description="The same idea as a modern self-service laundry: get in, get it done, get on with your day — with car washes in the mix."
        />
        <div className="mt-12">
          <FeatureGrid items={laundryFeatures} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Laundromats"
              title="Find a laundry near you"
            />
            <Button
              variant="outline"
              render={<Link href="/locations?type=laundry" />}
              className="h-10 shrink-0 rounded-full px-4"
            >
              All laundromats
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredLaundry.map((location) => (
              <LocationCard key={location.slug} location={location} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/car-wash.jpg"
              alt="Soapy sponge washing a car at an About Clean car wash"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              Car washes
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Three 24-hour washes in Roanoke
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Manual bays, vacuums, change machines, and a dry-off area at every
              location. Peters Creek adds a touch-free automatic. Wasena includes
              free air for tires.
            </p>
            <div className="mt-8">
              <FeatureGrid items={carWashFeatures} />
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {featuredWashes.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </section>

      <section className="border-t bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-heading text-2xl font-semibold">
              Call or email anytime
            </h2>
            <p className="mt-2 text-muted-foreground">{site.supportHours}</p>
          </div>
          <div className="flex flex-col gap-2 text-lg font-semibold">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-primary">
              <PhoneIcon className="size-5" />
              {site.phone}
            </a>
            <a href={site.emailHref} className="hover:text-primary">
              {site.email}
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
