export const site = {
  name: "About Clean",
  legalName: "About Clean VA",
  domain: "aboutcleanva.com",
  tagline: "Clean, safe, comfortable, and fast.",
  description:
    "Self-service laundromats and car washes across the Roanoke Valley. Big washers, hot dryers, 24-hour wash bays, and the amenities that make the trip easy.",
  phone: "(540) 339-6695",
  phoneHref: "tel:+15403396695",
  email: "aboutcleanva@gmail.com",
  emailHref: "mailto:aboutcleanva@gmail.com",
  laundryHours: "Open Every Day | 6 AM – 10 PM",
  laundryLastLoad: "Last load 8:45 PM",
  carWashHours: "Open 24 Hours",
  supportHours:
    "Have questions? We’re here to help. Reach us any day of the week.",
} as const;

export const nav = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/about", label: "About", icon: "about" },
  { href: "/locations", label: "Store Locator", icon: "pin" },
  { href: "/refunds", label: "Refunds", icon: "refund" },
  { href: "/faq", label: "FAQ", icon: "faq" },
  { href: "/contact", label: "Contact", icon: "contact" },
] as const;
