"use server";

import { redirect } from "next/navigation";

export async function submitInquiry(formData: FormData) {
  const next = String(formData.get("next") || "/contact");
  const path = next.startsWith("/") && !next.startsWith("//") ? next.split("?")[0] : "/contact";
  redirect(`${path}?sent=1`);
}
