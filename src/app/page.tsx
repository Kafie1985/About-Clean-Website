import Image from "next/image";
import Link from "next/link";
import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";

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
          src="/images/washing-machine.jpg"
          alt="Front-loading washing machine"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2c3d55]/75" />
        <div className="relative mx-auto grid min-h-[78vh] w-full max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm text-white/90">Welcome to About Clean</p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl">
              Your Trusted Self-Service Laundry and Car Wash: Clean, Safe, Comfortable, and Fast
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 text-pretty sm:text-lg">
              Discover the ultimate laundry experience at About Clean. We’ve got
              you covered with big washers and hot dryers, plus 24-hour car
              washes, because you deserve the best place to handle life’s
              toughest loads.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href="/locations" />}
                className="h-12 rounded-md bg-primary px-6 text-base font-semibold text-white hover:bg-primary/90"
              >
                <MapPinIcon />
                Find Location
              </Button>
              <Button
                variant="outline"
                render={<Link href="/contact" />}
                className="h-12 rounded-md border-white bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <aside className="max-w-md justify-self-end rounded-2xl border border-white/20 bg-black/35 p-6 text-white shadow-xl backdrop-blur-md lg:p-8">
            <h2 className="font-heading text-2xl font-semibold">Visit Us</h2>
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-100">
              <ClockIcon className="size-4" />
              {site.laundryHours}
            </p>
            <p className="mt-1 text-sm text-sky-100/80">{site.laundryLastLoad}</p>
            <p className="mt-2 text-sm font-medium text-sky-100">
              Car washes: {site.carWashHours}
            </p>
            <p className="mt-4 text-sm leading-6 text-white/85">
              Our stores are equipped with modern commercial machines and
              amenities to make laundry and car washing seamless and efficient.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          title="Experience the Difference"
          description="Discover why About Clean is the best laundry and car wash near you."
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
        <SectionHeading
          eyebrow="Car washes"
          title="Three 24-hour washes in Roanoke"
          description="Manual bays, vacuums, change machines, and a dry-off area at every location. Peters Creek adds a touch-free automatic. Wasena includes free air for tires."
        />
        <div className="mt-10">
          <FeatureGrid items={carWashFeatures} />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {featuredWashes.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 text-muted-foreground">{site.supportHours}</p>
          <div className="mt-8 space-y-2 text-lg font-semibold">
            <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 hover:text-primary">
              <PhoneIcon className="size-5 text-primary" />
              {site.phone}
            </a>
            <div>
              <a href={site.emailHref} className="hover:text-primary">
                {site.email}
              </a>
            </div>
            <p className="pt-2 text-sm font-normal text-muted-foreground">
              For refund requests, please fill out the form{" "}
              <Link href="/refunds" className="font-medium text-primary underline-offset-4 hover:underline">
                here
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
