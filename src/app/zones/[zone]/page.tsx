import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { ZONE_IDS, VEGETABLES, zoneById, computeWindow } from "@/lib/planting";

export function generateStaticParams() {
  return ZONE_IDS.map((zone) => ({ zone }));
}

type Props = { params: Promise<{ zone: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { zone: zoneId } = await params;
  const zone = zoneById(zoneId);
  if (!zone) return {};
  const title = `Zone ${zone.id} Planting Calendar — What to Plant & When (2026 Guide)`;
  return {
    title,
    description: `Full vegetable planting calendar for USDA zone ${zone.id}. Last frost ${zone.lastFrost}, first frost ${zone.firstFrost}. Sow, transplant and harvest dates for 20 vegetables.`,
    alternates: { canonical: `https://plantingcalendar.net/zones/${zone.id}` },
  };
}

export default async function ZonePage({ params }: Props) {
  const { zone: zoneId } = await params;
  const zone = zoneById(zoneId);
  if (!zone) notFound();

  const rows = VEGETABLES.map((v) => ({ veg: v, win: computeWindow(zone, v) })).sort((a, b) =>
    a.veg.name.localeCompare(b.veg.name)
  );

  const cool = VEGETABLES.filter((v) => v.hardiness === "Cool-season");
  const warm = VEGETABLES.filter((v) => v.hardiness === "Warm-season");
  const lastFrostMonth = zone.lastFrost.split(" ")[0];
  const firstFrostMonth = zone.firstFrost.split(" ")[0];
  const seasonClass =
    zone.growingDays < 150 ? "short" : zone.growingDays < 210 ? "moderate" : "long";

  const faq = [
    {
      q: `What planting zone is ${zone.exampleRegions.split(",")[0]}?`,
      a: `Areas like ${zone.exampleRegions} fall in USDA hardiness zone ${zone.id}, defined by an average annual minimum temperature of ${zone.minTempF}°F. Your average last spring frost is around ${zone.lastFrost} and your first fall frost around ${zone.firstFrost}.`,
    },
    {
      q: `When is the last frost in zone ${zone.id}?`,
      a: `The average last spring frost in zone ${zone.id} is around ${zone.lastFrost}. Wait until after this date before transplanting warm-season crops like tomatoes, peppers and squash. Cool-season crops can go out 2-4 weeks earlier because they tolerate light frost.`,
    },
    {
      q: `How long is the growing season in zone ${zone.id}?`,
      a: `Zone ${zone.id} has roughly ${zone.growingDays} frost-free days between the last spring frost (${zone.lastFrost}) and first fall frost (${zone.firstFrost}). That is a ${seasonClass} season — ${seasonClass === "short" ? "focus on fast-maturing and cool-season crops, and start heat lovers indoors." : seasonClass === "moderate" ? "enough time for most vegetables plus some succession planting." : "long enough for two or even three successive harvests of fast crops."}`,
    },
    {
      q: `What vegetables grow best in zone ${zone.id}?`,
      a: `Reliable choices for zone ${zone.id} include cool-season crops such as ${cool.slice(0, 4).map((v) => v.name.toLowerCase()).join(", ")} planted in early spring, and warm-season crops such as ${warm.slice(0, 4).map((v) => v.name.toLowerCase()).join(", ")} planted after the last frost. See the full table below for exact dates.`,
    },
    {
      q: `Can I grow a fall garden in zone ${zone.id}?`,
      a: `Yes. With a first frost around ${zone.firstFrost}, you can plant a second round of quick cool-season crops in mid to late summer. Count back the days-to-harvest from ${zone.firstFrost} to find your fall planting date.`,
    },
    {
      q: `When should I start seeds indoors in zone ${zone.id}?`,
      a: `Most warm-season seedlings are started indoors 6-8 weeks before the last frost — that means roughly ${lastFrostMonth} for zone ${zone.id}. Tomatoes, peppers and eggplant benefit most from an indoor head start in this zone.`,
    },
  ];

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://plantingcalendar.net/" },
          { "@type": "ListItem", position: 2, name: "Zones", item: "https://plantingcalendar.net/zones" },
          { "@type": "ListItem", position: 3, name: `Zone ${zone.id}`, item: `https://plantingcalendar.net/zones/${zone.id}` },
        ],
      },
    ],
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <nav className="text-xs text-stone-400">
          <Link href="/" className="hover:text-emerald-700">Home</Link>{" / "}
          <Link href="/zones" className="hover:text-emerald-700">Zones</Link>{" / "}
          <span className="text-stone-600">Zone {zone.id}</span>
        </nav>
        <h1 className="mt-3 text-2xl font-extrabold text-stone-900 sm:text-3xl">
          USDA Zone {zone.id} Planting Calendar (2026)
        </h1>
        <p className="mt-2 text-stone-600">
          Zone {zone.id} ({zone.minTempF}°F) has an average last spring frost on <strong>{zone.lastFrost}</strong> and
          first fall frost on <strong>{zone.firstFrost}</strong> — about {zone.growingDays} growing days.
          Typical areas: {zone.exampleRegions}.
        </p>

        {/* How to use */}
        <section className="mt-6 prose prose-stone max-w-none text-stone-600">
          <h2 className="text-lg font-bold text-stone-900">How to use the zone {zone.id} planting calendar</h2>
          <p className="mt-2">
            Every planting date on this page is calculated from zone {zone.id}&apos;s average frost dates.
            Because your last spring frost lands around {zone.lastFrost} and your first fall frost around{" "}
            {zone.firstFrost}, you have roughly {zone.growingDays} frost-free days to work with — a{" "}
            {seasonClass} growing season. The table below lists, for each of 20 common vegetables, when to start
            seeds indoors, when to sow or transplant outdoors, and when you can expect your first harvest.
          </p>
          <p className="mt-2">
            Frost dates are averages, not guarantees. In a cold year the last frost can arrive 1-2 weeks later,
            so keep row covers handy for tender seedlings in {lastFrostMonth}. Click any vegetable name to open a
            detailed zone {zone.id} guide with spacing, companions, container tips and troubleshooting.
          </p>
        </section>

        {/* Cool vs warm season */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-stone-700">
            <h2 className="text-base font-bold text-emerald-800">Cool-season crops for zone {zone.id}</h2>
            <p className="mt-2">
              These tolerate light frost and go out first, 2-4 weeks before your {zone.lastFrost} last frost, and
              again in late summer for a fall crop: {cool.map((v) => v.name.toLowerCase()).join(", ")}.
            </p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-stone-700">
            <h2 className="text-base font-bold text-amber-800">Warm-season crops for zone {zone.id}</h2>
            <p className="mt-2">
              These need warm soil and frost-free weather, so plant them after {zone.lastFrost}:{" "}
              {warm.map((v) => v.name.toLowerCase()).join(", ")}. In a {seasonClass} season, start the slowest
              ones indoors to be sure they ripen before {firstFrostMonth}.
            </p>
          </div>
        </section>

        <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 bg-white">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-stone-500">
                <th className="p-3">Vegetable</th>
                <th className="p-3">Start Indoors</th>
                <th className="p-3">Sow / Transplant</th>
                <th className="p-3">Harvest From</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ veg, win }) => (
                <tr key={veg.slug} className="border-b border-stone-100 hover:bg-stone-50">
                  <td className="p-3 font-medium">
                    <Link href={`/${zone.id}/${veg.slug}`} className="text-emerald-700 hover:underline">
                      {veg.emoji} {veg.name}
                    </Link>
                  </td>
                  <td className="p-3 text-stone-600">{win.startIndoors ?? "—"}</td>
                  <td className="p-3 text-stone-700">{win.transplantOrSow}</td>
                  <td className="p-3 text-stone-600">{win.harvestFrom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Season breakdown */}
        <section className="mt-8 prose prose-stone max-w-none text-stone-600">
          <h2 className="text-lg font-bold text-stone-900">Spring, summer and fall planting in zone {zone.id}</h2>
          <p className="mt-2">
            <strong>Spring ({lastFrostMonth}):</strong> As soon as the soil can be worked, direct sow hardy
            cool-season crops and set out frost-tolerant transplants. This is your window for peas, lettuce,
            spinach and the brassicas before summer heat arrives.
          </p>
          <p className="mt-2">
            <strong>Early summer (after {zone.lastFrost}):</strong> Once frost danger passes and soil warms past
            60°F, transplant tomatoes, peppers and squash and direct sow beans and cucumbers. This is the heart of
            the zone {zone.id} growing season.
          </p>
          <p className="mt-2">
            <strong>Late summer to fall (before {zone.firstFrost}):</strong> Sow a second round of quick cool-season
            crops for a fall harvest. Count back each crop&apos;s days-to-harvest from {zone.firstFrost} to find the
            latest safe sowing date, and use row covers to stretch the season a few extra weeks.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">Zone {zone.id} planting FAQ</h2>
          <div className="mt-3 space-y-3">
            {faq.map((f) => (
              <div key={f.q} className="rounded-xl border border-stone-200 bg-white p-4">
                <h3 className="font-semibold text-stone-800">{f.q}</h3>
                <p className="mt-1 text-sm text-stone-600">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
