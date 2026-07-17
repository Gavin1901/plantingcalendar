import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { ZONES } from "@/lib/planting";

export const metadata: Metadata = {
  title: "USDA Hardiness Zones — 2026 Planting Calendar by Zone (3a-10b)",
  description: "Browse vegetable planting calendars for every USDA hardiness zone from 3a to 10b. Frost dates, growing season length and what to plant when.",
  alternates: { canonical: "https://plantingcalendar.net/zones" },
};

export default function ZonesIndex() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-2xl font-extrabold text-stone-900 sm:text-3xl">2026 Planting Calendar by USDA Zone</h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          Each USDA hardiness zone has its own frost dates and growing season. Pick your zone to see
          when to plant every vegetable where you live.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {ZONES.map((z) => (
            <Link key={z.id} href={`/zones/${z.id}`} className="rounded-xl border border-stone-200 bg-white p-4 hover:border-emerald-300">
              <p className="font-bold text-emerald-700">Zone {z.id}</p>
              <p className="text-sm text-stone-600">{z.minTempF}°F · last frost {z.lastFrost}</p>
              <p className="text-xs text-stone-400">{z.exampleRegions}</p>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
