import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { ZONES } from "@/lib/planting";

export const metadata: Metadata = {
  title: "2026 Frost Dates by USDA Zone — First & Last Frost Calculator",
  description: "Average last spring frost and first fall frost dates for every USDA hardiness zone (3a-10b).",
  alternates: { canonical: "https://plantingcalendar.net/frost-dates" },
};

export default function FrostDates() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-2xl font-extrabold text-stone-900 sm:text-3xl">2026 Frost Dates by USDA Zone</h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          Frost dates are the foundation of every planting calendar. The last spring frost tells you
          when it&apos;s safe to plant tender crops; the first fall frost tells you when the season
          ends. Find your zone below.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 bg-white">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-stone-500">
                <th className="p-3">Zone</th>
                <th className="p-3">Min Temp (°F)</th>
                <th className="p-3">Last Spring Frost</th>
                <th className="p-3">First Fall Frost</th>
                <th className="p-3">Growing Days</th>
              </tr>
            </thead>
            <tbody>
              {ZONES.map((z) => (
                <tr key={z.id} className="border-b border-stone-100 hover:bg-stone-50">
                  <td className="p-3 font-medium">
                    <Link href={`/zones/${z.id}`} className="text-emerald-700 hover:underline">Zone {z.id}</Link>
                  </td>
                  <td className="p-3 text-stone-600">{z.minTempF}</td>
                  <td className="p-3 text-stone-700">{z.lastFrost}</td>
                  <td className="p-3 text-stone-700">{z.firstFrost}</td>
                  <td className="p-3 text-stone-600">~{z.growingDays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-stone-500">
          These are regional averages for each USDA zone. Your exact frost dates depend on local
          elevation, proximity to water and microclimate — treat them as a reliable baseline.
        </p>

        {/* Gap filling: Late frost preparedness */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-stone-900">What to do when a late spring frost is forecast</h2>
          <p className="mt-3 text-stone-600">
            Even with careful planning around your average last frost date, a late cold snap can threaten
            tender seedlings. Here is what to do when frost is unexpectedly forecast after you have already planted:
          </p>
          <ul className="mt-3 space-y-2 text-stone-600">
            <li><strong>Water deeply the evening before.</strong> Moist soil holds more heat than dry soil and radiates warmth upward through the night, raising the temperature around your plants by 2-3°F.</li>
            <li><strong>Cover plants before sunset.</strong> Use frost blankets, old sheets, overturned buckets, cloches, or even cardboard boxes. The cover traps heat radiating from the soil. Remove covers in the morning once temperatures rise above freezing.</li>
            <li><strong>Do not use plastic sheeting directly on plants.</strong> Plastic touching leaves transfers cold and causes freeze damage where it contacts. If using plastic, support it with stakes or hoops so it does not touch the foliage.</li>
            <li><strong>Add a heat source under the cover.</strong> A string of old-fashioned incandescent Christmas lights (not LED) under a frost blanket adds 5-10°F of protection on the coldest nights.</li>
            <li><strong>Know which plants to save first.</strong> Warm-season crops (tomatoes, peppers, squash, basil) die at 32°F. Cool-season crops (kale, spinach, peas, broccoli) tolerate light frosts down to 28°F and often need no protection.</li>
          </ul>
        </section>

        {/* Gap filling: Frost blanket guide */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-stone-900">Frost blankets: which one and how to use them</h2>
          <p className="mt-3 text-stone-600">
            Frost blankets (also called floating row covers or horticultural fleece) are lightweight
            spun-bonded polypropylene fabrics that let light and water through while trapping heat. They are
            the single most useful tool for extending your growing season at both ends.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
            <table className="w-full min-w-[500px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-left text-stone-500">
                  <th className="p-3">Weight</th>
                  <th className="p-3">Frost protection</th>
                  <th className="p-3">Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="p-3 font-medium">Light (0.5 oz/yd²)</td>
                  <td className="p-3">2-4°F</td>
                  <td className="p-3 text-stone-600">Insect barrier, light chill protection, summer shade</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-3 font-medium">Medium (1.0-1.2 oz/yd²)</td>
                  <td className="p-3">4-6°F</td>
                  <td className="p-3 text-stone-600">Spring and fall frost protection, extending season 2-3 weeks</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Heavy (1.5-2.0 oz/yd²)</td>
                  <td className="p-3">6-8°F</td>
                  <td className="p-3 text-stone-600">Deep winter protection, overwintering crops in zones 5-7</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-stone-600">
            Secure the edges with soil, rocks, or landscape staples — a gust of wind can undo hours of work.
            For hoops, use 1/2-inch PVC pipe bent into arches every 3-4 feet, then drape the blanket over
            top. This creates a mini greenhouse effect and prevents the fabric from resting directly on
            delicate seedlings.
          </p>
        </section>

        {/* Gap filling: Microclimate */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-stone-900">Microclimate: why your garden is not exactly your zone</h2>
          <p className="mt-3 text-stone-600">
            USDA zones are based on the average annual minimum winter temperature across broad regions.
            Your actual garden may vary by half a zone or more due to microclimate factors. Here is how
            to assess and adjust for your specific site:
          </p>
          <ul className="mt-3 space-y-2 text-stone-600">
            <li><strong>South-facing slopes</strong> warm up earlier in spring and stay warmer — they effectively act like one zone warmer. North-facing slopes are cooler and act like one zone colder.</li>
            <li><strong>Proximity to water.</strong> Lakes, rivers and even large ponds moderate temperature swings. A garden 100 feet from a lake may have frost dates shifted by 1-2 weeks compared to a garden half a mile inland.</li>
            <li><strong>Urban heat islands.</strong> City gardens surrounded by pavement and buildings can be 5-10°F warmer than rural areas in the same zone. This can shift your effective zone by half a step warmer.</li>
            <li><strong>Elevation.</strong> Cold air sinks and pools in low spots. A garden at the bottom of a slope may experience frost when a garden 20 feet higher in elevation on the same property does not. Valley floors are frost pockets.</li>
            <li><strong>Wind exposure.</strong> Open, windy sites lose heat faster at night. A hedge, fence or row of shrubs as a windbreak can raise the microclimate temperature by 2-4°F on cold nights.</li>
            <li><strong>Soil type.</strong> Sandy soils warm up faster in spring than clay soils. Raised beds warm up 1-2 weeks earlier than in-ground soil at the same location — a significant advantage in short-season zones.</li>
          </ul>
          <p className="mt-3 text-stone-600">
            <strong>Bottom line:</strong> use the zone table above as your starting point, then track your own
            garden&apos;s actual frost dates for 2-3 years. Keep a notebook: when did the last spring frost
            actually happen? When was the first killing frost in fall? Your garden&apos;s real-world dates
            will be more accurate than any zone-based estimate.
          </p>
        </section>
      </div>
    </SiteShell>
  );
}
