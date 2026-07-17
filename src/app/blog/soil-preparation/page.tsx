import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Soil Preparation Guide 2026 — How to Build Great Garden Soil",
  description: "Complete 2026 guide to preparing garden soil for vegetables. Soil testing, pH adjustment, composting, drainage fixes, raised beds vs in-ground, and the",
  alternates: { canonical: "https://plantingcalendar.net/blog/soil-preparation" },
};

const faq = [
  {
    q: "What is the best soil mix for a vegetable garden?",
    a: "The ideal vegetable garden soil is loam — a balanced mix of sand, silt, and clay with 5-10% organic matter. For in-ground beds, mix 2-3 inches of compost into the top 6-8 inches. For raised beds, use a 60-30-10 mix of topsoil, compost, and coarse sand or perlite. Avoid pure compost as a growing medium — it is too rich and compacts over time.",
  },
  {
    q: "How do I test my garden soil?",
    a: "A basic soil test kit ($10-15 at garden centers) measures pH and the three main nutrients (N-P-K: nitrogen, phosphorus, potassium). For a complete analysis including micronutrients and organic matter percentage, send a sample to your local cooperative extension office — it costs $15-30 and gives you a detailed report with specific amendment recommendations.",
  },
  {
    q: "What is the right pH for vegetables?",
    a: "Most vegetables grow best in slightly acidic soil with a pH between 6.0 and 7.0. Below 6.0, nutrients like phosphorus become locked up. Above 7.5, iron and manganese become unavailable. Add lime to raise pH or sulfur to lower it, based on a soil test. Do not guess — applying the wrong amendment makes things worse.",
  },
  {
    q: "Should I use raised beds or plant in the ground?",
    a: "Raised beds warm up 1-2 weeks earlier in spring, drain better, and give you complete control over soil quality. In-ground beds are cheaper to start and hold moisture longer. If your native soil is heavy clay, pure sand, or full of rocks, raised beds will save you years of frustration. For well-draining loam, in-ground works great.",
  },
  {
    q: "When should I prepare my soil for spring planting?",
    a: "Fall is the best time to prepare soil — add compost and amendments in October-November and let winter freeze-thaw cycles incorporate them. Spring preparation works too: wait until soil is dry enough that a handful crumbles rather than forming a wet ball. Working wet soil destroys its structure and creates concrete-like clods.",
  },
  {
    q: "What is no-till gardening and should I do it?",
    a: "No-till gardening means you never dig or turn the soil. Instead, you add compost and mulch on top each season and let worms and soil life incorporate it naturally. It preserves soil structure, fungal networks, and beneficial microorganisms. For new beds on compacted ground, till once initially to break compaction, then switch to no-till going forward.",
  },
  {
    q: "How do I fix heavy clay soil?",
    a: "Add 3-4 inches of compost and work it into the top 8 inches. Do not add sand to clay — it creates a concrete-like mix. Gypsum helps break up some clay types by displacing sodium. The fastest solution is building raised beds on top of the clay and filling them with good soil. Over time, annual compost additions transform even heavy clay into productive soil.",
  },
];

const ld = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SoilPrep() {
  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <article className="mx-auto max-w-3xl px-4 py-10 prose prose-stone">
        <nav className="text-xs text-stone-400 not-prose">
          <Link href="/" className="hover:text-emerald-700">Home</Link>{" / "}
          <span className="text-stone-600">Soil Preparation Guide</span>
        </nav>

        <h1>Soil Preparation Guide 2026: How to Build Great Garden Soil</h1>

        <p className="lead">
          Your vegetables are only as good as your soil. You can buy the best seeds, plant at the perfect
          time, and water religiously — but if your soil is lifeless, compacted, or nutritionally empty,
          your plants will struggle. The good news: healthy soil is not complicated to build. It takes
          organic matter, proper drainage, the right pH, and time. This guide covers everything you need
          to prepare your soil for the 2026 growing season.
        </p>

        <h2>What makes great garden soil?</h2>
        <p>
          Great vegetable soil has four properties: it drains well but holds moisture, it is loose enough
          for roots to penetrate easily, it contains 5-10% organic matter, and it is biologically alive
          with earthworms, beneficial bacteria, and fungi. This is called <strong>loam</strong> — roughly
          40% sand, 40% silt, and 20% clay, with organic matter binding it all together.
        </p>
        <p>
          Test your soil by picking up a handful when it is damp (not wet). Squeeze it into a ball, then
          poke it. Good loam crumbles into loose crumbs. Pure clay stays in a hard, shiny ball. Pure sand
          will not hold a ball at all. Most yards are somewhere in between and just need organic matter to
          tilt toward loam.
        </p>

        <h2>Step 1: Remove the existing vegetation</h2>
        <p>
          If you are converting lawn or weedy ground into a garden bed, you need to kill off what is there
          first. The simplest method for 2026: <strong>sheet mulching</strong> (also called lasagna
          gardening). Mow or weed-whack the area as short as possible. Lay down a single layer of plain
          brown cardboard (remove tape and staples) overlapping by 6 inches so no light gets through. Wet
          the cardboard thoroughly. Top with 4-6 inches of compost and 2-3 inches of straw or wood chips.
        </p>
        <p>
          Do this in fall or early spring and by planting time the grass is dead and the cardboard has
          softened into a weed barrier that roots can punch through. No digging, no herbicides, no
          backbreaking sod removal. If you need to plant immediately, you can dig out the sod, but sheet
          mulching is worth the patience.
        </p>

        <h2>Step 2: Test your soil</h2>
        <p>
          Before adding anything, know what you are starting with. A soil test tells you:
        </p>
        <ul>
          <li><strong>pH level</strong> — most vegetables want 6.0-7.0. Blueberries want 4.5-5.5. Potatoes
          tolerate 5.0-6.0. Outside the crop's preferred range, nutrients become chemically locked up even
          if they are present in the soil.</li>
          <li><strong>Nitrogen (N)</strong> — drives leafy growth. Too little = yellow, stunted plants. Too
          much = all leaves, no fruit.</li>
          <li><strong>Phosphorus (P)</strong> — drives root development and fruiting. Critical for tomatoes,
          peppers, and root vegetables.</li>
          <li><strong>Potassium (K)</strong> — overall plant health, disease resistance, water regulation.</li>
          <li><strong>Organic matter percentage</strong> — target 5-10%. Below 3% and your soil struggles
          to hold water and nutrients.</li>
        </ul>
        <p>
          In 2026, send a sample to your local cooperative extension office (search "[your county] extension
          soil test"). It costs $15-30 and takes 1-2 weeks. The report comes back with specific amendment
          recommendations for vegetables — follow them exactly.
        </p>

        <h2>Step 3: Adjust pH if needed</h2>
        <p>
          If your soil test shows pH below 6.0 (too acidic), add <strong>garden lime</strong> (calcium
          carbonate). The rate depends on your current pH and soil type — a typical application for moderately
          acidic soil (pH 5.5) is 5-10 pounds of lime per 100 square feet. Apply in fall if possible; it
          takes months to fully react with the soil.
        </p>
        <p>
          If pH is above 7.5 (too alkaline), add <strong>elemental sulfur</strong> or aluminum sulfate.
          Sulfur works slowly — apply in fall for spring planting. Peat moss also acidifies soil slightly
          while adding organic matter. For quick pH correction in spring, use aluminum sulfate at the rate
          on the package based on your soil test numbers.
        </p>

        <h2>Step 4: Add organic matter — the universal fix</h2>
        <p>
          Organic matter (compost, aged manure, leaf mold) improves every soil type. In sandy soil, it
          acts like a sponge, holding water and nutrients that would otherwise drain away. In clay soil,
          it creates pore spaces, improving drainage and aeration. In every soil, it feeds the microbial
          life that makes nutrients available to plants.
        </p>
        <p>
          For a new garden bed in 2026, spread 2-4 inches of well-aged compost and work it into the top
          6-8 inches of soil with a garden fork or tiller. Do not use fresh manure on vegetable gardens —
          it can contain pathogens and the high ammonia level burns roots. Compost should be dark brown,
          crumbly, and smell like forest floor, not ammonia or rot.
        </p>
        <p>
          <strong>Where to get compost in bulk:</strong> Many municipalities give away free compost made
          from yard waste collection — check your city's website. Garden centers sell bagged compost ($5-10
          per cubic foot). For large projects, landscape supply yards deliver bulk compost by the cubic
          yard ($25-50 per yard; 1 yard covers about 100 square feet at 3 inches deep).
        </p>

        <h2>Step 5: Fix drainage problems</h2>
        <p>
          Poor drainage drowns roots. If water stands on your soil for hours after rain, you have a drainage
          problem. Solutions ranked by effectiveness:
        </p>
        <ol>
          <li><strong>Raised beds</strong> — elevate the growing area 8-12 inches above ground level. This
          is the most reliable fix for heavy clay or high water tables. Fill with the 60-30-10 mix described
          in the FAQ.</li>
          <li><strong>Add organic matter</strong> — for mild drainage issues, 3-4 inches of compost worked
          deep into clay soil dramatically improves percolation over 1-2 seasons.</li>
          <li><strong>Install French drains</strong> — for chronic standing water in a low spot, a gravel-filled
          trench with a perforated pipe redirects water away from the garden area.</li>
          <li><strong>Grow in containers</strong> — if your ground is hopeless (pure clay, ledge rock,
          contaminated soil), skip it entirely and use containers. Modern grow bags and self-watering
          planters produce excellent yields with zero ground preparation.</li>
        </ol>

        <h2>Step 6: Fertilize based on your soil test</h2>
        <p>
          Your soil test will tell you exactly what to add, but here are the common scenarios:
        </p>
        <ul>
          <li><strong>General purpose:</strong> A balanced organic fertilizer like 5-5-5 or 10-10-10 at
          2-3 pounds per 100 square feet before planting covers most bases.</li>
          <li><strong>Nitrogen boost for leafy greens:</strong> Blood meal (12-0-0) or fish emulsion (5-1-1)
          side-dressed around lettuce, kale, cabbage and spinach every 3-4 weeks.</li>
          <li><strong>Phosphorus for roots and fruit:</strong> Bone meal (3-15-0) or rock phosphate worked
          into the planting hole for tomatoes, peppers, carrots and beets.</li>
          <li><strong>Potassium for overall health:</strong> Wood ash (0-1-5, also raises pH) or greensand
          (0-0-3) for disease resistance and drought tolerance.</li>
        </ul>
        <p>
          Synthetic fertilizers give a fast, concentrated nutrient hit but do nothing for soil structure.
          Organic amendments release nutrients slowly as they break down and improve soil at the same time.
          For a home vegetable garden, organic is the better long-term play.
        </p>

        <h2>Step 7: Mulch after planting</h2>
        <p>
          Once your soil is prepared and plants are in the ground, cover the bare soil with 2-3 inches of
          organic mulch. This prevents the soil from crusting over, suppresses weeds, keeps moisture even,
          and feeds soil life as it decomposes. Straw, shredded leaves, and grass clippings (from untreated
          lawns) are all excellent. Replenish the mulch layer mid-season as it breaks down.
        </p>

        <h2>No-till: the long-term approach</h2>
        <p>
          Tilling or digging disrupts soil structure and the fungal networks that help plants access nutrients.
          After your initial soil preparation, consider switching to no-till:
        </p>
        <ul>
          <li>Each spring, add 1-2 inches of compost on top of the bed — do not dig it in</li>
          <li>Plant directly through the compost layer</li>
          <li>After harvest, leave roots in the ground to decompose in place</li>
          <li>Cover beds with mulch or a cover crop over winter</li>
          <li>Earthworms and soil life incorporate the organic matter for you</li>
        </ul>
        <p>
          No-till soil develops better structure, holds more water, and requires less fertilizer over time.
          It takes 2-3 years for the full benefits to accumulate, but each season the soil gets better
          with less work from you.
        </p>

        <h2>Putting your prepared soil to work</h2>
        <p>
          Once your soil is ready, the next step is knowing when to plant. Check our{" "}
          <Link href="/">free 2026 vegetable planting calendar</Link> — select your USDA zone and get
          exact indoor seed-starting, transplant, and harvest dates for 20 vegetables. The calendar
          accounts for your zone's frost dates and each crop's specific temperature needs.
        </p>
        <p>
          If you are new to all of this, start with our{" "}
          <Link href="/blog/beginner-garden-guide">beginner garden guide</Link> which walks through
          the full process from bare ground to first harvest.
        </p>

        <section className="mt-12">
          <h2>Frequently asked questions</h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <div key={f.q} className="rounded-xl border border-stone-200 bg-white p-4">
                <h3 className="font-semibold text-stone-800">{f.q}</h3>
                <p className="mt-1 text-sm text-stone-600">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
