import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { VEG_SLUGS, ZONES, vegBySlug, computeWindow } from "@/lib/planting";

export function generateStaticParams() {
  return VEG_SLUGS.map((vegetable) => ({ vegetable }));
}

type Props = { params: Promise<{ vegetable: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vegetable } = await params;
  const veg = vegBySlug(vegetable);
  if (!veg) return {};
  const title = `When to Plant ${veg.name} — 2026 Planting Dates for Every USDA Zone`;
  return {
    title,
    description: `When to plant ${veg.name.toLowerCase()} in USDA zones 3a–10b. Start indoors, sow/transplant and harvest dates, spacing ${veg.spacingInches}", ${veg.sun.toLowerCase()}, companions and pests.`,
    alternates: { canonical: `https://plantingcalendar.net/vegetables/${veg.slug}` },
  };
}

export default async function VegPage({ params }: Props) {
  const { vegetable } = await params;
  const veg = vegBySlug(vegetable);
  if (!veg) notFound();

  const rows = ZONES.map((z) => ({ zone: z, win: computeWindow(z, veg) }));
  const name = veg.name;
  const lc = veg.name.toLowerCase();

  const faq = [
    {
      q: `When is the best time to plant ${lc}?`,
      a: `${name} is a ${veg.hardiness.toLowerCase()} crop. ${veg.hardiness === "Cool-season" ? `Plant it in early spring as soon as the soil can be worked, and again in late summer for a fall harvest. It tolerates light frost.` : `Plant it only after all danger of frost has passed and the soil has warmed to at least 60°F.`} Find the exact date for your USDA zone in the table below.`,
    },
    {
      q: `How long does ${lc} take to grow?`,
      a: `${name} takes about ${veg.daysToHarvest} days from ${veg.method === "Transplant" ? "transplant" : "sowing"} to first harvest. ${veg.indoorWeeksBeforeLastFrost ? `Starting seeds indoors ${veg.indoorWeeksBeforeLastFrost} weeks before your last frost gives the plants a head start.` : `It is best direct-sown rather than transplanted.`}`,
    },
    {
      q: `How far apart should I space ${lc}?`,
      a: `Space ${lc} about ${veg.spacingInches} inches apart in ${veg.sun.toLowerCase()}. Proper spacing gives roots room to spread and improves airflow, which reduces disease.`,
    },
    {
      q: `What is the best growing tip for ${lc}?`,
      a: veg.tips,
    },
    {
      q: `What are common problems with ${lc}?`,
      a: veg.problems,
    },
    {
      q: `Can I grow ${lc} in a container?`,
      a: veg.container,
    },
    {
      q: `Can I plant ${lc} for a second harvest?`,
      a: veg.secondCrop,
    },
    {
      q: `What grows well with ${lc}?`,
      a: `Good companion plants for ${lc} are ${veg.companions.join(", ")}. Companion planting can deter pests and make better use of garden space. Rotate where you plant ${lc} each year to keep soil healthy.`,
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
          { "@type": "ListItem", position: 2, name: "Vegetables", item: "https://plantingcalendar.net/vegetables" },
          { "@type": "ListItem", position: 3, name: name, item: `https://plantingcalendar.net/vegetables/${veg.slug}` },
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
          <Link href="/vegetables" className="hover:text-emerald-700">Vegetables</Link>{" / "}
          <span className="text-stone-600">{name}</span>
        </nav>
        <h1 className="mt-3 text-2xl font-extrabold text-stone-900 sm:text-3xl">
          <span className="mr-2">{veg.emoji}</span>When to Plant {name} (2026)
        </h1>
        <p className="mt-2 text-stone-600">{veg.blurb}</p>

        <div className="mt-4 rounded-xl border border-stone-200 bg-white p-4 text-sm text-stone-700">
          <ul className="grid gap-1 sm:grid-cols-2">
            <li><strong>Type:</strong> {veg.hardiness}</li>
            <li><strong>Method:</strong> {veg.method}</li>
            <li><strong>Days to harvest:</strong> {veg.daysToHarvest}</li>
            <li><strong>Spacing:</strong> {veg.spacingInches}&quot; apart</li>
            <li><strong>Sun:</strong> {veg.sun}</li>
            <li><strong>Companions:</strong> {veg.companions.join(", ")}</li>
          </ul>
        </div>

        {/* Zone matching guidance */}
        <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-stone-700">
          <h2 className="text-base font-bold text-emerald-800">Is {name} right for your USDA zone?</h2>
          <p className="mt-2">
            {veg.hardiness === "Cool-season"
              ? `${name} is a cool-season crop, which means it thrives in the mild temperatures of spring and fall. Gardeners in zones 3a through 7b get the longest ${lc} season — you can plant in early spring and again in late summer for a fall harvest. In warmer zones (8a-10b), grow ${lc} as a winter crop from October through February when temperatures are coolest.`
              : `${name} is a warm-season crop that needs frost-free weather and warm soil to thrive. Gardeners in zones 5b through 10b have the longest ${lc} season. In cooler zones (3a-5a), choose fast-maturing varieties (${veg.daysToHarvest - 10} days or less) and start seeds indoors to extend your window. In hot zones (9a-10b), ${lc} may struggle in peak summer — consider planting in February-March for a spring crop before the heat.`}
          </p>
          <p className="mt-2">
            {name} needs about {veg.daysToHarvest} days from {veg.method === "Transplant" ? "transplant to harvest" : "sowing to harvest"},
            so any zone with at least {veg.daysToHarvest + 14} frost-free days can grow it successfully.
            Check your zone&apos;s specific dates in the table below.
          </p>
        </section>

        {/* How to grow */}
        <section className="mt-6 prose prose-stone max-w-none text-stone-600">
          <h2 className="text-lg font-bold text-stone-900">How to grow {lc}</h2>
          <p className="mt-2">
            {veg.indoorWeeksBeforeLastFrost
              ? `Start ${lc} seeds indoors about ${veg.indoorWeeksBeforeLastFrost} weeks before your last spring frost, then harden off and transplant the seedlings once frost danger has passed.`
              : `${name} grows best when direct-sown right where it will mature, because it dislikes having its roots disturbed.`}
            {" "}Give each plant {veg.spacingInches} inches of room in {veg.sun.toLowerCase()}, and keep the soil
            consistently moist while seeds germinate and plants establish.
          </p>
          <p className="mt-2">
            Expect roughly {veg.daysToHarvest} days to your first harvest. Watch for {veg.pests.join(", ")},
            the most common pests of {lc}, and scout plants weekly so you can act early. {veg.tips}
          </p>
        </section>

        {/* Troubleshooting */}
        <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-stone-700">
          <h2 className="text-base font-bold text-amber-800">Troubleshooting {lc}</h2>
          <p className="mt-2">{veg.problems}</p>
        </section>

        {/* Containers */}
        <section className="mt-6 rounded-xl border border-stone-200 bg-white p-5 text-sm text-stone-700">
          <h2 className="text-base font-bold text-stone-900">Growing {lc} in containers</h2>
          <p className="mt-2">{veg.container}</p>
        </section>

        <h2 className="mt-8 text-lg font-bold text-stone-900">{name} planting dates by zone (2026)</h2>
        <div className="mt-3 overflow-x-auto rounded-xl border border-stone-200 bg-white">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-stone-500">
                <th className="p-3">Zone</th>
                <th className="p-3">Start Indoors</th>
                <th className="p-3">Sow / Transplant</th>
                <th className="p-3">Harvest From</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ zone, win }) => (
                <tr key={zone.id} className="border-b border-stone-100 hover:bg-stone-50">
                  <td className="p-3 font-medium">
                    <Link href={`/${zone.id}/${veg.slug}`} className="text-emerald-700 hover:underline">Zone {zone.id}</Link>
                  </td>
                  <td className="p-3 text-stone-600">{win.startIndoors ?? "—"}</td>
                  <td className="p-3 text-stone-700">{win.transplantOrSow}</td>
                  <td className="p-3 text-stone-600">{win.harvestFrom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">{name} planting FAQ</h2>
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
