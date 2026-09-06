export type LocationType = "laundry" | "car-wash";

export type MachineCount = {
  size: string;
  count: number;
};

export type SiteLocation = {
  slug: string;
  name: string;
  type: LocationType;
  city: string;
  address: string;
  hours: string;
  lastLoad?: string;
  phone?: string;
  phoneHref?: string;
  parking?: string;
  amenities: string[];
  washers?: MachineCount[];
  dryers?: MachineCount[];
  carWashFeatures?: string[];
  blurb: string;
  lat: number;
  lon: number;
  image: string;
};

export const locations: SiteLocation[] = [
  {
    slug: "brandon-laundromat",
    name: "Brandon Laundromat",
    type: "laundry",
    city: "Roanoke",
    address: "3310 Brandon Ave SW, Roanoke, VA 24018",
    hours: "6:00 AM – 10:00 PM",
    lastLoad: "Last load 8:45 PM",
    phone: "(540) 339-6695",
    phoneHref: "tel:+15403396695",
    parking: "25 parking spaces",
    amenities: [
      "Coin changers",
      "Soap and soda vending",
      "Flat-screen televisions",
      "Clean restrooms",
    ],
    washers: [
      { size: "1x loader", count: 14 },
      { size: "2x loader", count: 4 },
      { size: "3x loader", count: 12 },
      { size: "4x loader", count: 4 },
      { size: "5x loader", count: 3 },
      { size: "6x loader", count: 2 },
    ],
    dryers: [
      { size: "3x loader", count: 18 },
      { size: "5x loader", count: 5 },
    ],
    blurb:
      "A well-equipped southwest Roanoke laundry with loaders from everyday loads to bulky comforters.",
    lat: 37.2628906,
    lon: -80.0026367,
    image: "/images/washing-machine.jpg",
  },
  {
    slug: "brambleton-laundromat",
    name: "Brambleton Laundromat",
    type: "laundry",
    city: "Roanoke",
    address: "3309 Brambleton Ave, Roanoke, VA 24018",
    hours: "6:00 AM – 10:00 PM",
    lastLoad: "Last load 8:45 PM",
    parking: "25 parking spaces",
    amenities: [
      "Coin changers",
      "Soap and soda vending",
      "2 flat-screen televisions",
      "Clean restrooms",
      "2 separate waiting rooms",
    ],
    washers: [
      { size: "1x loader", count: 10 },
      { size: "2x loader", count: 6 },
      { size: "3x loader", count: 11 },
      { size: "4x loader", count: 1 },
      { size: "5x loader", count: 4 },
      { size: "6x loader", count: 2 },
    ],
    dryers: [
      { size: "3x loader", count: 24 },
      { size: "5x loader", count: 5 },
    ],
    blurb:
      "Two waiting rooms, plenty of dryers, and extra-large washers for southwest Roanoke families.",
    lat: 37.2394385,
    lon: -79.9974799,
    image: "/images/washing-machine.jpg",
  },
  {
    slug: "peters-creek-laundromat",
    name: "Peters Creek Laundromat",
    type: "laundry",
    city: "Roanoke",
    address: "2388 Peters Creek Rd, Roanoke, VA 24017",
    hours: "6:00 AM – 10:00 PM",
    lastLoad: "Last load 8:45 PM",
    phone: "(540) 682-4955",
    phoneHref: "tel:+15406824955",
    parking: "19 parking spaces",
    amenities: [
      "Coin changers",
      "Soap and soda vending",
      "2 flat-screen televisions",
      "Clean restrooms",
    ],
    washers: [
      { size: "1x loader", count: 10 },
      { size: "2x loader", count: 4 },
      { size: "3x loader", count: 14 },
      { size: "4x loader", count: 1 },
      { size: "5x loader", count: 6 },
      { size: "6x loader", count: 2 },
    ],
    dryers: [
      { size: "3x loader", count: 14 },
      { size: "5x loader", count: 8 },
      { size: "7x loader", count: 2 },
    ],
    blurb:
      "Northwest Roanoke laundry with oversized dryers and a car wash next door when you need both done.",
    lat: 37.314139,
    lon: -80.005805,
    image: "/images/washing-machine.jpg",
  },
  {
    slug: "williamson-road-coin-laundry",
    name: "Williamson Road Coin Laundry",
    type: "laundry",
    city: "Roanoke",
    address: "4206 Williamson Rd, Roanoke, VA 24012",
    hours: "6:00 AM – 10:00 PM",
    lastLoad: "Last load 8:45 PM",
    phone: "(540) 265-2579",
    phoneHref: "tel:+15402652579",
    parking: "53 parking spaces",
    amenities: [
      "Four outdoor car vacuums",
      "Coin changers",
      "Soap and soda vending",
      "Flat-screen televisions",
      "Clean restroom",
    ],
    washers: [
      { size: "1x loader", count: 3 },
      { size: "2x loader", count: 13 },
      { size: "3x loader", count: 12 },
      { size: "6x loader", count: 4 },
    ],
    dryers: [
      { size: "3x loader", count: 14 },
      { size: "4x loader", count: 12 },
      { size: "7x loader", count: 4 },
    ],
    blurb:
      "Our largest parking lot, outdoor vacuums, and jumbo dryers on Williamson Road.",
    lat: 37.310622,
    lon: -79.950132,
    image: "/images/washing-machine.jpg",
  },
  {
    slug: "vinton-laundromat",
    name: "Vinton Laundromat",
    type: "laundry",
    city: "Vinton",
    address: "805 Hardy Rd, Vinton, VA 24179",
    hours: "6:00 AM – 10:00 PM",
    lastLoad: "Last load 8:45 PM",
    parking: "22 parking spaces",
    amenities: [
      "Coin changers",
      "Soap and soda vending",
      "2 flat-screen televisions",
      "Clean restrooms",
    ],
    washers: [
      { size: "1x loader", count: 12 },
      { size: "2x loader", count: 6 },
      { size: "3x loader", count: 18 },
      { size: "4x loader", count: 1 },
      { size: "5x loader", count: 4 },
      { size: "6x loader", count: 6 },
    ],
    dryers: [
      { size: "3x loader", count: 28 },
      { size: "5x loader", count: 8 },
    ],
    blurb:
      "Vinton’s high-capacity laundry with 28 standard dryers and extra-large washers for bulky loads.",
    lat: 37.2731653,
    lon: -79.890295,
    image: "/images/washing-machine.jpg",
  },
  {
    slug: "north-main-street-laundromat",
    name: "North Main Street Laundromat",
    type: "laundry",
    city: "Blacksburg",
    address: "1003 N Main St, Blacksburg, VA 24060",
    hours: "6:00 AM – 10:00 PM",
    lastLoad: "Last load 8:45 PM",
    phone: "(540) 798-1647",
    phoneHref: "tel:+15407981647",
    parking: "11 parking spaces, plus overflow parking in the rear",
    amenities: [
      "Coin changers",
      "Soap and soda vending",
      "Flat-screen televisions",
      "Clean restroom",
    ],
    washers: [
      { size: "1x loader", count: 5 },
      { size: "2x loader", count: 15 },
      { size: "3x loader", count: 10 },
      { size: "4x loader", count: 1 },
      { size: "5x loader", count: 1 },
      { size: "6x loader", count: 2 },
    ],
    dryers: [
      { size: "3x loader", count: 22 },
      { size: "7x loader", count: 2 },
    ],
    blurb:
      "Blacksburg’s Main Street laundry with a wide mix of top-load and large side-load machines.",
    lat: 37.2390534,
    lon: -80.4203524,
    image: "/images/washing-machine.jpg",
  },
  {
    slug: "peters-creek-car-wash",
    name: "Peters Creek Car Wash",
    type: "car-wash",
    city: "Roanoke",
    address: "2388 Peters Creek Rd, Roanoke, VA 24017",
    hours: "Open 24 hours",
    phone: "(540) 339-6695",
    phoneHref: "tel:+15403396695",
    amenities: [
      "Change machine",
      "Car wash items vendor",
      "Detail / dry-off parking area",
    ],
    carWashFeatures: [
      "Automatic touch-free Water Wizard",
      "6 manual car wash bays",
      "8 vacuums",
    ],
    blurb:
      "Touch-free automatic plus six self-serve bays, open around the clock on Peters Creek Road.",
    lat: 37.314139,
    lon: -80.005805,
    image: "/images/car-wash.jpg",
  },
  {
    slug: "williamson-road-car-wash",
    name: "Williamson Road Car Wash",
    type: "car-wash",
    city: "Roanoke",
    address: "3632 Williamson Rd NW, Roanoke, VA 24012",
    hours: "Open 24 hours",
    phone: "(540) 682-4955",
    phoneHref: "tel:+15406824955",
    amenities: [
      "Change machine",
      "Car wash items vendor",
      "Detail / dry-off parking area",
    ],
    carWashFeatures: ["8 manual car wash bays", "8 vacuums"],
    blurb:
      "Eight self-serve bays and eight vacuums, ready whenever you are on Williamson Road.",
    lat: 37.3393457,
    lon: -79.9564153,
    image: "/images/car-wash.jpg",
  },
  {
    slug: "wasena-car-wash",
    name: "Wasena Car Wash",
    type: "car-wash",
    city: "Roanoke",
    address: "1818 Main St SW, Roanoke, VA 24015",
    hours: "Open 24 hours",
    amenities: [
      "Free air for tires",
      "Change machine",
      "Car wash items vendor",
      "Detail / dry-off parking area",
    ],
    carWashFeatures: ["7 manual car wash bays", "7 vacuums"],
    blurb:
      "Wasena’s 24-hour self-serve wash with free tire air, seven bays, and seven vacuums.",
    lat: 37.259161,
    lon: -79.965462,
    image: "/images/car-wash.jpg",
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function laundryLocations() {
  return locations.filter((location) => location.type === "laundry");
}

export function carWashLocations() {
  return locations.filter((location) => location.type === "car-wash");
}

export function machineTotal(machines?: MachineCount[]) {
  return machines?.reduce((sum, machine) => sum + machine.count, 0) ?? 0;
}

export function mapsSearchUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function mapsEmbedUrl(lat: number, lon: number) {
  const pad = 0.01;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${lon - pad}%2C${lat - pad}%2C${lon + pad}%2C${lat + pad}&layer=mapnik&marker=${lat}%2C${lon}`;
}

export function typeLabel(type: LocationType) {
  return type === "laundry" ? "Laundromat" : "Car wash";
}
