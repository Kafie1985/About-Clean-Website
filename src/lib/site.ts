export const site = {
  name: "About Clean",
  legalName: "About Clean VA",
  domain: "aboutcleanva.com",
  tagline: "Clean, safe, comfortable, and fast.",
  description:
    "Self-service laundromats and car washes across the Roanoke Valley and Blacksburg. Big washers, hot dryers, 24-hour wash bays, and the amenities that make the trip easy.",
  phone: "(540) 339-6695",
  phoneHref: "tel:+15403396695",
  email: "aboutcleanva@gmail.com",
  emailHref: "mailto:aboutcleanva@gmail.com",
  laundryHours: "Open every day | 6:00 AM – 10:00 PM",
  laundryLastLoad: "Last load 8:45 PM",
  carWashHours: "Open 24 hours",
  supportHours: "Questions? Reach us any day of the week.",
} as const;

export const nav = [
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;
