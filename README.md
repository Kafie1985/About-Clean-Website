# About Clean

Website for **About Clean**, a self-service laundromat and car wash operator in the Roanoke Valley and Blacksburg, Virginia. Built as a modern replacement for [aboutcleanva.com](https://www.aboutcleanva.com), following the structure and feel of a contemporary laundry chain site: find a location, see hours and machines, contact the team, and request a refund.

## What’s included

- Home page with hours, laundry highlights, and 24-hour car washes
- Location directory with search and laundry / car wash filters
- A page for each store (address, hours, amenities, washer/dryer counts, map)
- FAQ, about, contact, and refund request forms
- Mobile-friendly layout

Location details (addresses, hours, amenities, machine counts) come from the existing About Clean store pages.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm start
```

## Contact forms

The contact and refund forms open the visitor’s email client addressed to `aboutcleanva@gmail.com`. No third-party email service is required. To send mail from the server later, swap the form handler for a provider such as Resend.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
