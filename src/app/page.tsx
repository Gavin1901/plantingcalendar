import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PlantingTool from "@/components/PlantingTool";
import { VEGETABLES, ZONES } from "@/lib/planting";

export default function Home() {
  const faq = [
    {
      q: "How do I know my USDA hardiness zone?",
      a: "Your USDA zone is based on the average annual minimum winter temperature where you live. Look up your ZIP code on the USDA Plant Hardiness Zone Map, then select that zone above to get your personalized planting calendar.",
    },
    {
      q: "What do the planting dates mean?",
      a: "Start Indoors is when to sow seeds in trays inside. Sow / Transplant is when to plant outside in the garden. Harvest From is the earliest you can expect to pick. All dates are calculated from your zone's average last spring frost.",
    },
    {
      q: "Are these dates exact for my town?",
      a: "They are regional averages for your USDA zone. Microclimates, elevation and a given year's weather shift them by a week or two. Use them as a reliable starting point and adjust to your local frost dates.",
    },
    {
      q: "Is this planting calendar free?",
      a: "Yes — completely free, no sign-up, no app. Your selected zone is saved in your browser so the calendar is ready every time you come back.",
    },
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="bg-gradient-to-b from-emerald-50 to-stone-50">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            2026 Vegetable Planting Calendar by Zone
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-stone-600">
            Pick your zone and get an instant planting calendar — start-indoors, sow, transplant and
            harvest dates for 20 popular vegetables. Free, no sign-up, your zone is remembered.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <PlantingTool />

        <section className="mt-12">
          <h2 className="text-xl font-bold text-stone-900">Popular: When to plant…</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {VEGETABLES.map((v) => (
              <Link
                key={v.slug}
                href={`/vegetables/${v.slug}`}
                className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 hover:border-emerald-300 hover:text-emerald-700"
              >
                <span className="mr-1">{v.emoji}</span>
                {v.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-stone-900">Browse by USDA zone</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {ZONES.map((z) => (
              <Link
                key={z.id}
                href={`/zones/${z.id}`}
                className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-700 hover:border-emerald-300 hover:text-emerald-700"
              >
                Zone {z.id}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 prose prose-stone max-w-none">
          <h2 className="text-xl font-bold text-stone-900">How this planting calendar works</h2>
          <p className="mt-3 text-stone-600">
            Every vegetable has a temperature personality. Cool-season crops like lettuce, peas,
            spinach and kale shrug off light frost and can go in the ground weeks before your last
            spring frost. Warm-season crops like tomatoes, peppers, cucumbers and squash are killed
            by frost and need warm soil, so they wait until the danger has passed. This tool takes
            the average last-frost and first-frost dates for your USDA hardiness zone and works
            backward and forward for each crop — telling you when to start seeds indoors, when to
            move them outside, and roughly when you&apos;ll be harvesting.
          </p>
          <p className="mt-3 text-stone-600">
            The biggest mistake new gardeners make is planting warm-season crops too early because
            of one nice week in spring. A late frost wipes them out overnight. The second biggest
            mistake is planting cool-season crops too late, so they bolt in the summer heat. A
            zone-based calendar fixes both. Select your zone above, bookmark the page, and come back
            each season — your zone is saved automatically.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-stone-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
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
