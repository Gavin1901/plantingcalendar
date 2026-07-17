import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { VEGETABLES } from "@/lib/planting";

export const metadata: Metadata = {
  title: "When to Plant Vegetables — 2026 Planting Guides for 20 Crops",
  description: "Planting guides for 20 popular vegetables. Find out when to plant tomatoes, peppers, lettuce, carrots and more in your USDA zone.",
  alternates: { canonical: "https://plantingcalendar.net/vegetables" },
};

export default function VegIndex() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-2xl font-extrabold text-stone-900 sm:text-3xl">When to Plant Vegetables (2026)</h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          Pick a vegetable to see its planting window in every USDA zone, plus spacing, sun and
          companion planting tips.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {VEGETABLES.map((v) => (
            <Link key={v.slug} href={`/vegetables/${v.slug}`} className="rounded-xl border border-stone-200 bg-white p-4 hover:border-emerald-300">
              <p className="font-bold text-stone-800"><span className="mr-1">{v.emoji}</span>{v.name}</p>
              <p className="text-sm text-stone-600">{v.hardiness} · {v.daysToHarvest} days</p>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
