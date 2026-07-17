"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ZONES, VEGETABLES, computeWindow, type ZoneId } from "@/lib/planting";

const STORAGE_KEY = "pc_zone";

export default function PlantingTool() {
  const [zoneId, setZoneId] = useState<ZoneId>("7a");
  const [loaded, setLoaded] = useState(false);

  // 复购钩子：记住用户的区，下次回来直接显示
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && ZONES.some((z) => z.id === saved)) setZoneId(saved as ZoneId);
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      try { localStorage.setItem(STORAGE_KEY, zoneId); } catch {}
    }
  }, [zoneId, loaded]);

  const zone = useMemo(() => ZONES.find((z) => z.id === zoneId)!, [zoneId]);

  const rows = useMemo(
    () =>
      VEGETABLES.map((v) => ({ veg: v, win: computeWindow(zone, v) })).sort((a, b) =>
        a.veg.name.localeCompare(b.veg.name)
      ),
    [zone]
  );

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-end gap-4">
        <label className="flex flex-col gap-1 text-sm font-medium text-stone-700">
          Your USDA Hardiness Zone
          <select
            value={zoneId}
            onChange={(e) => setZoneId(e.target.value as ZoneId)}
            className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-base font-semibold text-emerald-700 focus:border-emerald-500 focus:outline-none"
          >
            {ZONES.map((z) => (
              <option key={z.id} value={z.id}>
                Zone {z.id} ({z.minTempF}°F)
              </option>
            ))}
          </select>
        </label>
        <div className="text-sm text-stone-600">
          <p>Last spring frost: <strong className="text-stone-800">{zone.lastFrost}</strong></p>
          <p>First fall frost: <strong className="text-stone-800">{zone.firstFrost}</strong></p>
          <p>Growing season: <strong className="text-stone-800">~{zone.growingDays} days</strong></p>
        </div>
      </div>

      <p className="mt-2 text-xs text-stone-400">
        Saved to this browser — your zone will be remembered next time. {zone.exampleRegions ? `Typical areas: ${zone.exampleRegions}.` : ""}
      </p>

      {/* Zone challenge alert */}
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-stone-700">
        <p className="font-semibold text-amber-800">Zone {zone.id} growing challenge:</p>
        <p className="mt-1">
          {zone.growingDays <= 140
            ? `With only ~${zone.growingDays} frost-free days, your biggest challenge is the short growing season. Start warm-season crops indoors 6-10 weeks before last frost (${zone.lastFrost}). Choose fast-maturing varieties and use row covers to extend the season at both ends. Cool-season crops are your best friends — they dominate in this zone.`
            : zone.growingDays <= 200
            ? `With ~${zone.growingDays} frost-free days, you have a solid growing window. Your main challenge is the transition between cool and warm seasons. Time your spring cool-season plantings to finish before summer heat arrives, and start fall crops in mid-summer.`
            : zone.growingDays <= 280
            ? `With ~${zone.growingDays} frost-free days, you have a long season but summer heat is your biggest challenge. Warm-season crops thrive, but cool-season crops need to be planted early (Feb-Mar) or as fall crops. Use afternoon shade for lettuce and spinach in summer.`
            : `With ~${zone.growingDays} frost-free days, you can garden year-round. Your biggest challenge is managing the heat — warm-season crops may need afternoon shade in July-August, and cool-season crops should be grown as winter crops (Oct-Mar). Pest pressure is year-round in this climate.`}
        </p>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-stone-200 text-left text-stone-500">
              <th className="py-2 pr-3">Vegetable</th>
              <th className="py-2 pr-3">Start Indoors</th>
              <th className="py-2 pr-3">Sow / Transplant</th>
              <th className="py-2 pr-3">Method</th>
              <th className="py-2 pr-3">Harvest From</th>
              <th className="py-2 pr-3"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ veg, win }) => (
              <tr key={veg.slug} className="border-b border-stone-100 hover:bg-stone-50">
                <td className="py-2 pr-3 font-medium text-stone-800">
                  <span className="mr-1">{veg.emoji}</span>{veg.name}
                </td>
                <td className="py-2 pr-3 text-stone-600">{win.startIndoors ?? "—"}</td>
                <td className="py-2 pr-3 text-emerald-700 font-medium">{win.transplantOrSow}</td>
                <td className="py-2 pr-3 text-stone-600">{win.method}</td>
                <td className="py-2 pr-3 text-stone-600">{win.harvestFrom}</td>
                <td className="py-2 pr-3">
                  <Link href={`/${zone.id}/${veg.slug}`} className="text-emerald-600 hover:underline">Details →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
