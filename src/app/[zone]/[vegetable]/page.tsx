import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import {
  ZONES, ZONE_IDS, VEGETABLES, VEG_SLUGS,
  zoneById, vegBySlug, computeWindow,
} from "@/lib/planting";

export function generateStaticParams() {
  const params: { zone: string; vegetable: string }[] = [];
  for (const z of ZONE_IDS) for (const v of VEG_SLUGS) params.push({ zone: z, vegetable: v });
  return params;
}

type Props = { params: Promise<{ zone: string; vegetable: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { zone: zoneId, vegetable } = await params;
  const zone = zoneById(zoneId);
  const veg = vegBySlug(vegetable);
  if (!zone || !veg) return {};
  const title = `When to Plant ${veg.name} in Zone ${zone.id} (2026 Guide)`;
  const url = `https://plantingcalendar.net/${zone.id}/${veg.slug}`;
  return {
    title,
    description: `When to plant ${veg.name.toLowerCase()} in USDA zone ${zone.id}. Last frost ${zone.lastFrost}, first frost ${zone.firstFrost}. Indoor seed start, transplant & harvest dates. 2026 planting guide.`,
    alternates: { canonical: url },
    openGraph: { title, url, type: "article" },
  };
}

export default async function Page({ params }: Props) {
  const { zone: zoneId, vegetable } = await params;
  const zone = zoneById(zoneId);
  const veg = vegBySlug(vegetable);
  if (!zone || !veg) notFound();

  const win = computeWindow(zone, veg);
  const season = veg.hardiness === "Cool-season" ? "cool-season" : "warm-season";
  const frostNote =
    veg.hardiness === "Cool-season"
      ? `Because ${veg.name.toLowerCase()} is a cool-season crop, it tolerates light frost and can go out around ${win.transplantOrSow}, before zone ${zone.id}'s average last frost on ${zone.lastFrost}.`
      : `Because ${veg.name.toLowerCase()} is a warm-season crop that frost will kill, wait until about ${win.transplantOrSow} in zone ${zone.id} — safely after the average last frost on ${zone.lastFrost}.`;

  const otherZones = ZONES.filter((z) => z.id !== zone.id).slice(0, 6);
  const otherVeg = VEGETABLES.filter((v) => v.slug !== veg.slug).slice(0, 8);

  // FAQ 6-8 items per vegetable — questions tied to the veg's unique data
  const faq = [
    {
      q: `When should I plant ${veg.name.toLowerCase()} in zone ${zone.id}?`,
      a: `${win.method} around ${win.transplantOrSow}.${win.startIndoors ? ` If starting from seed indoors, sow around ${win.startIndoors}.` : ""} ${frostNote}`,
    },
    {
      q: `How long does ${veg.name.toLowerCase()} take to grow in zone ${zone.id}?`,
      a: `About ${veg.daysToHarvest} days from ${win.method === "Transplant" ? "transplanting" : "sowing"} to first harvest. A ${win.transplantOrSow} planting in zone ${zone.id} is typically ready to pick from around ${win.harvestFrom}. Zone ${zone.id} has about ${zone.growingDays} frost-free days — plenty of time${veg.daysToHarvest * 1.8 < zone.growingDays ? " for a second succession planting" : " if you plant on schedule"}.`,
    },
    {
      q: `How far apart should I space ${veg.name.toLowerCase()}?`,
      a: `Space ${veg.name.toLowerCase()} about ${veg.spacingInches} inches apart in ${veg.sun.toLowerCase()}. This gives each plant enough room for roots to spread and leaves to catch sunlight without competing.`,
    },
    {
      q: `What is the best tip for growing ${veg.name.toLowerCase()}?`,
      a: veg.tips,
    },
    {
      q: `What are common problems with ${veg.name.toLowerCase()} and how do I fix them?`,
      a: veg.problems,
    },
    {
      q: `Can I grow ${veg.name.toLowerCase()} in a container?`,
      a: veg.container,
    },
    {
      q: `Can I plant a second crop of ${veg.name.toLowerCase()} for fall harvest?`,
      a: veg.secondCrop,
    },
    {
      q: `What grows well next to ${veg.name.toLowerCase()}?`,
      a: `Good companion plants for ${veg.name.toLowerCase()} are ${veg.companions.join(", ")}. Avoid planting near ${veg.hardiness === "Cool-season" ? "warm-season crops that compete for space and nutrients" : "cool-season crops that have different watering needs"}. ${veg.name} also benefits from crop rotation — do not plant it in the same spot year after year.`,
    },
  ];

  // JSON-LD: FAQPage + BreadcrumbList
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
          { "@type": "ListItem", position: 2, name: `Zone ${zone.id}`, item: `https://plantingcalendar.net/zones/${zone.id}` },
          { "@type": "ListItem", position: 3, name: `${veg.name} Planting Guide`, item: `https://plantingcalendar.net/${zone.id}/${veg.slug}` },
        ],
      },
    ],
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="mx-auto max-w-3xl px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-stone-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-emerald-700">Home</Link>{" / "}
          <Link href={`/zones/${zone.id}`} className="hover:text-emerald-700">Zone {zone.id}</Link>{" / "}
          <span className="text-stone-600">{veg.name}</span>
        </nav>

        {/* H1 with emoji */}
        <h1 className="mt-3 text-2xl font-extrabold text-stone-900 sm:text-3xl">
          <span className="mr-2">{veg.emoji}</span>
          When to Plant {veg.name} in USDA Zone {zone.id} (2026 Guide)
        </h1>
        <p className="mt-2 text-stone-600">
          {veg.blurb} Here is the {season} planting schedule for {veg.name.toLowerCase()} in zone {zone.id}
          {zone.exampleRegions ? ` (covering areas like ${zone.exampleRegions})` : ""}.
          All dates are based on 2026 frost data for your zone.
        </p>

        {/* Planting date cards */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {win.startIndoors && (
            <DateCard label="Start Seeds Indoors" value={win.startIndoors} accent />
          )}
          <DateCard label={veg.method} value={win.transplantOrSow} accent />
          <DateCard label="Harvest From" value={win.harvestFrom} />
        </div>

        {/* Key facts table */}
        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-5 text-sm text-stone-700">
          <p className="font-medium text-stone-800">{frostNote}</p>
          <ul className="mt-3 grid gap-1 sm:grid-cols-2">
            <li><strong>Type:</strong> {veg.hardiness}</li>
            <li><strong>Method:</strong> {veg.method}</li>
            <li><strong>Days to harvest:</strong> {veg.daysToHarvest}</li>
            <li><strong>Spacing:</strong> {veg.spacingInches}&quot; apart</li>
            <li><strong>Sun:</strong> {veg.sun}</li>
            <li><strong>Zone {zone.id} frost:</strong> {zone.lastFrost} – {zone.firstFrost}</li>
            <li><strong>Season length:</strong> ~{zone.growingDays} days</li>
            <li><strong>Companions:</strong> {veg.companions.join(", ")}</li>
          </ul>
        </div>

        {/* Layer 1: Science — how the plant grows in this zone */}
        <section className="mt-8 prose prose-stone max-w-none text-stone-600">
          <h2 className="text-lg font-bold text-stone-900">Growing {veg.name.toLowerCase()} in zone {zone.id}</h2>
          <p className="mt-2">
            Zone {zone.id} has an average last spring frost around {zone.lastFrost} and a first fall
            frost around {zone.firstFrost}, giving roughly {zone.growingDays} frost-free growing days.
            That window comfortably fits {veg.name.toLowerCase()}&apos;s {veg.daysToHarvest}-day cycle
            {veg.daysToHarvest * 1.6 < zone.growingDays
              ? ", with room for a second succession planting if you time it right."
              : ", so plant on time to make the most of the season."}
          </p>
          <p className="mt-2">
            {win.startIndoors
              ? `Get a head start by sowing seeds indoors around ${win.startIndoors}, roughly ${veg.indoorWeeksBeforeLastFrost} weeks before your last frost. Move the seedlings outside around ${win.transplantOrSow}.`
              : `${veg.name} resents transplanting, so direct sow it right in the garden around ${win.transplantOrSow}.`}
            {" "}Give each plant about {veg.spacingInches} inches of space in {veg.sun.toLowerCase()}.
          </p>
        </section>

        {/* Layer 2: Scene — zone-specific growing advice */}
        <section className="mt-6 rounded-xl border border-stone-200 bg-white p-5 text-sm text-stone-700">
          <h2 className="text-base font-bold text-stone-900">Zone {zone.id} specific growing notes</h2>
          <p className="mt-2">
            In zone {zone.id} ({zone.exampleRegions}), your {zone.growingDays}-day growing season
            means {veg.name.toLowerCase()} should be
            {veg.hardiness === "Cool-season"
              ? " one of your first spring plantings. Cool-season crops thrive in the mild part of your growing window. Monitor soil temperature — " + veg.name.toLowerCase() + " germinates best when soil is 40-75°F."
              : " planted only after the soil has thoroughly warmed. Warm-season crops like " + veg.name.toLowerCase() + " need soil temperatures of at least 60°F. In zone " + zone.id + "'s climate, using black plastic mulch can warm the soil 2-3 weeks earlier."}
          </p>
          <p className="mt-2">
            Your first fall frost around {zone.firstFrost} means your last possible harvest is roughly
            late {zone.firstFrost.split(" ")[0]}. For a continuous supply, consider
            {veg.daysToHarvest * 1.6 < zone.growingDays
              ? " succession planting every 2-3 weeks from " + win.transplantOrSow + " through mid-season."
              : " planting early and using season extension techniques like row covers."}
          </p>
        </section>

        {/* Unique fields: Tips section */}
        <section className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-stone-700">
          <h2 className="text-base font-bold text-emerald-800">Pro tip for {veg.name.toLowerCase()}</h2>
          <p className="mt-2">{veg.tips}</p>
        </section>

        {/* Unique fields: Problems section */}
        <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-stone-700">
          <h2 className="text-base font-bold text-amber-800">Troubleshooting {veg.name.toLowerCase()}</h2>
          <p className="mt-2">{veg.problems}</p>
        </section>

        {/* Unique fields: Container section */}
        <section className="mt-6 rounded-xl border border-stone-200 bg-white p-5 text-sm text-stone-700">
          <h2 className="text-base font-bold text-stone-900">Growing {veg.name.toLowerCase()} in containers</h2>
          <p className="mt-2">{veg.container}</p>
        </section>

        {/* Unique fields: Second crop section */}
        <section className="mt-6 rounded-xl border border-stone-200 bg-white p-5 text-sm text-stone-700">
          <h2 className="text-base font-bold text-stone-900">Can you plant {veg.name.toLowerCase()} twice a year?</h2>
          <p className="mt-2">{veg.secondCrop}</p>
        </section>

        {/* FAQ section */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">Frequently asked questions</h2>
          <div className="mt-3 space-y-3">
            {faq.map((f) => (
              <div key={f.q} className="rounded-xl border border-stone-200 bg-white p-4">
                <h3 className="font-semibold text-stone-800">{f.q}</h3>
                <p className="mt-1 text-sm text-stone-600">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-linking: other zones for this veg, other veg in this zone */}
        <section className="mt-10 border-t border-stone-200 pt-6">
          <h2 className="text-sm font-semibold text-stone-500">More {veg.name} planting dates</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {otherZones.map((z) => (
              <Link key={z.id} href={`/${z.id}/${veg.slug}`} className="rounded-lg border border-stone-200 bg-white px-3 py-1 text-sm text-stone-600 hover:text-emerald-700">
                Zone {z.id}
              </Link>
            ))}
            <Link href={`/vegetables/${veg.slug}`} className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 hover:bg-emerald-100">
              All zones for {veg.name} →
            </Link>
          </div>
          <h2 className="mt-5 text-sm font-semibold text-stone-500">Other vegetables to grow in zone {zone.id}</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {otherVeg.map((v) => (
              <Link key={v.slug} href={`/${zone.id}/${v.slug}`} className="rounded-lg border border-stone-200 bg-white px-3 py-1 text-sm text-stone-600 hover:text-emerald-700">
                {v.emoji} {v.name}
              </Link>
            ))}
            <Link href={`/zones/${zone.id}`} className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 hover:bg-emerald-100">
              All zone {zone.id} plants →
            </Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

function DateCard({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${accent ? "border-emerald-200 bg-emerald-50" : "border-stone-200 bg-white"}`}>
      <p className="text-xs font-medium uppercase tracking-wide text-stone-500">{label}</p>
      <p className={`mt-1 text-lg font-bold ${accent ? "text-emerald-700" : "text-stone-800"}`}>{value}</p>
    </div>
  );
}
