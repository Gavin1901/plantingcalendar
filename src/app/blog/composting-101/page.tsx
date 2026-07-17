import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Composting 101 Guide 2026 — How to Make Rich Compost at Home",
  description: "Complete 2026 guide to home composting for vegetable gardeners. What to compost, what not to, hot vs cold composting, bin choices, troubleshooting smells",
  alternates: { canonical: "https://plantingcalendar.net/blog/composting-101" },
};

const faq = [
  {
    q: "What is the ratio of browns to greens in compost?",
    a: "Aim for roughly 3 parts browns (carbon) to 1 part greens (nitrogen) by volume. Browns are dry materials like fallen leaves, straw, shredded cardboard, and sawdust. Greens are fresh materials like kitchen scraps, grass clippings, and coffee grounds. Too many greens = slimy, smelly pile. Too many browns = pile that never heats up and takes forever to break down.",
  },
  {
    q: "What should I NOT put in my compost?",
    a: "Never compost: meat, fish, dairy, bones, oils, or greasy foods (attract rats and raccoons). Avoid pet waste (pathogens), diseased plants (can survive composting), weeds with mature seeds (can sprout later), and treated wood sawdust (chemicals). Onion and citrus scraps are fine in moderation but slow to break down.",
  },
  {
    q: "How long does composting take?",
    a: "Hot composting (turned weekly, proper C:N ratio, kept moist) produces finished compost in 2-4 months. Cold composting (pile it and forget it) takes 6-12 months. A well-managed tumbler can finish a batch in 4-6 weeks in warm weather. The key variables are particle size (smaller = faster), turning frequency, and moisture.",
  },
  {
    q: "Does compost attract rats and pests?",
    a: "Only if you add the wrong things. Meat, dairy, bones, and cooked food attract rodents. A properly managed compost pile with only plant-based kitchen scraps and yard waste does not attract pests. Use an enclosed bin or tumbler if rodents are a concern in your area. Bury fresh kitchen scraps under 6 inches of browns to eliminate any smell.",
  },
  {
    q: "Why does my compost smell bad?",
    a: "A rotten-egg or ammonia smell means too much nitrogen (greens) and not enough carbon (browns), causing anaerobic decomposition. Fix it by turning the pile to introduce oxygen and mixing in 2-3 times as much brown material — shredded leaves, straw, or cardboard. A healthy compost pile smells earthy, like a forest floor.",
  },
  {
    q: "Do I need a compost bin or can I just make a pile?",
    a: "An open pile works fine if you have space and are not in a suburban area with HOAs or close neighbors. A bin keeps things tidy, retains heat better, and deters animals. The best budget option: make a 3x3x3 foot bin from four wooden pallets wired together at the corners. It costs nothing and works perfectly.",
  },
  {
    q: "How do I know when compost is ready to use?",
    a: "Finished compost is dark brown to black, crumbly, and smells like earth. You should not be able to identify the original materials (no visible banana peels or eggshells — though eggshells break down slowly and a few fragments are fine). If it is still warm in the center, it is not done. Screen through 1/2-inch hardware cloth to remove any unfinished chunks, which go back into the next pile.",
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

export default function Composting101() {
  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <article className="mx-auto max-w-3xl px-4 py-10 prose prose-stone">
        <nav className="text-xs text-stone-400 not-prose">
          <Link href="/" className="hover:text-emerald-700">Home</Link>{" / "}
          <span className="text-stone-600">Composting 101</span>
        </nav>

        <h1>Composting 101 Guide 2026: How to Make Rich Compost at Home</h1>

        <p className="lead">
          Compost is the closest thing to free fertility in gardening. It improves every soil type, feeds
          your plants slowly all season, suppresses disease, and keeps kitchen scraps and yard waste out
          of landfills. Making your own compost sounds mysterious, but it boils down to four ingredients:
          carbon (browns), nitrogen (greens), water, and air. Get the ratio roughly right and nature does
          the rest. This guide covers everything you need to start composting in 2026.
        </p>

        <h2>Why compost? The case for making your own</h2>
        <p>
          Bagged compost costs $5-10 per cubic foot. A productive vegetable garden needs 1-2 inches of
          compost applied annually — roughly 3-6 cubic feet per 100 square feet. That adds up to $30-120
          per year just on compost. Meanwhile, the average household produces over 200 pounds of
          compostable kitchen scraps and yard waste annually — free raw material that is currently going
          into your trash.
        </p>
        <p>
          Beyond the money, homemade compost is better than bagged. It is biologically alive with the
          specific mix of bacteria and fungi adapted to your local environment. It contains micronutrients
          from the diversity of materials that went into it. And you know exactly what is in it — no
          mystery biosolids, no herbicide residues from treated lawn clippings.
        </p>

        <h2>The four ingredients of compost</h2>

        <h3>1. Browns (carbon) — the energy source</h3>
        <p>
          Browns are dry, brown, carbon-rich materials. They provide the energy that microbes need to
          break everything down and give compost its structure so air can flow through. Without enough
          browns, your pile turns into a slimy, smelly mess.
        </p>
        <ul>
          <li>Fallen leaves (best free brown — collect and bag them in fall for year-round use)</li>
          <li>Straw (not hay — hay contains weed seeds)</li>
          <li>Shredded cardboard and plain paper (remove tape and glossy coatings)</li>
          <li>Sawdust from untreated wood (use sparingly — it is extremely carbon-dense)</li>
          <li>Wood chips (slow to break down; best for mulch, not fast compost)</li>
          <li>Dried grass clippings (once brown, they count as carbon)</li>
        </ul>

        <h3>2. Greens (nitrogen) — the protein for microbes</h3>
        <p>
          Greens are fresh, moist, nitrogen-rich materials that feed the bacteria and fungi doing the
          decomposition work. Nitrogen heats up the pile.
        </p>
        <ul>
          <li>Fruit and vegetable kitchen scraps (banana peels, apple cores, carrot tops, lettuce trimmings)</li>
          <li>Coffee grounds and tea bags (remove staples from tea bags)</li>
          <li>Fresh grass clippings (excellent nitrogen source but add in thin layers or they mat)</li>
          <li>Weeds pulled before they set seed</li>
          <li>Spent plants from the garden at end of season (if disease-free)</li>
          <li>Eggshells (rinse and crush; they add calcium but break down very slowly)</li>
        </ul>

        <h3>3. Water — keep it like a wrung-out sponge</h3>
        <p>
          Microbes need moisture to live and move. The pile should feel like a damp sponge that has been
          wrung out — moist but not dripping. If you squeeze a handful and water runs out, it is too wet
          (add browns and turn). If it feels dry and crumbly, it is too dry (water it with a hose). In
          rainy climates, cover the pile with a tarp to prevent waterlogging. In dry climates, you may
          need to water the pile occasionally.
        </p>

        <h3>4. Air — turn to feed the microbes</h3>
        <p>
          The fastest decomposition is aerobic — bacteria that need oxygen. Without oxygen, anaerobic
          bacteria take over, producing methane and that rotten-egg smell. Turning the pile with a garden
          fork once a week introduces fresh oxygen throughout. A pile that is never turned will still
          decompose, just much more slowly (6-12 months vs 2-3 months).
        </p>

        <h2>How to build a compost pile</h2>
        <ol>
          <li><strong>Choose a spot.</strong> Level ground, partial shade (full sun dries it out, full
          shade slows decomposition), convenient to the kitchen and garden. Minimum 3x3 feet for a
          self-heating pile.</li>
          <li><strong>Start with browns on the bottom.</strong> A 6-inch layer of coarse browns (twigs,
          straw, wood chips) creates airflow at the base.</li>
          <li><strong>Add greens in a thin layer.</strong> 2-3 inches of kitchen scraps and fresh
          materials on top of the brown layer.</li>
          <li><strong>Cover greens with browns immediately.</strong> Another 2-3 inches of browns on
          top eliminates smells and blocks flies. Always keep food scraps buried under browns.</li>
          <li><strong>Water each layer lightly</strong> as you build — it should be damp but not soaked.</li>
          <li><strong>Repeat until the bin is full</strong> (3-4 feet high). The pile will shrink by
          half within the first week as it heats up and settles.</li>
        </ol>

        <h2>Hot composting vs cold composting</h2>
        <p>
          <strong>Hot composting</strong> means actively managing the pile to reach 130-150°F in the center.
          It requires the right C:N ratio (roughly 30:1 by weight, or 3:1 browns to greens by volume),
          weekly turning, and consistent moisture. Hot piles kill most weed seeds and pathogens, and produce
          finished compost in 2-4 months. This is the method to choose if you want compost fast.
        </p>
        <p>
          <strong>Cold composting</strong> means piling materials as they become available and letting
          nature work at its own pace. No turning, no ratio monitoring, no temperature checking. You add
          to the top and harvest finished compost from the bottom once a year. Takes 6-12 months. Weed
          seeds and pathogens may survive. Best for patient gardeners with a "set it and forget it"
          approach.
        </p>
        <p>
          For most home gardeners in 2026, a hybrid approach works best: build a hot pile in spring with
          the abundance of materials (leaves from fall plus spring grass clippings), then let it go cold
          through summer and fall while you add materials to a second pile. Two bins are better than one.
        </p>

        <h2>Choosing a compost bin</h2>
        <p>
          You do not need to buy anything. The four-pallet bin (four wooden pallets wired together at the
          corners to form a 3x3x3 foot cube) is free from any warehouse or hardware store loading dock
          and works as well as anything you can buy. If you want something tidier:
        </p>
        <ul>
          <li><strong>Wire mesh cylinder:</strong> 10 feet of 3-foot-wide hardware cloth formed into a
          circle. $15, breathes well, easy to lift off when it is time to turn.</li>
          <li><strong>Tumbler:</strong> Elevated barrel on a stand that you spin to mix. $80-200. Fastest
          composting (4-6 weeks in summer) but limited capacity. Good for small yards.</li>
          <li><strong>Multi-bin system:</strong> Three side-by-side bins (one filling, one cooking, one
          finished). The gold standard for serious gardeners. $100-300 in lumber if DIY.</li>
          <li><strong>Worm bin (vermicomposting):</strong> Indoor or garage composting with red wiggler
          worms eating kitchen scraps. Produces the richest compost of any method. Ideal for apartments.
          Start with a simple plastic tote with air holes.</li>
        </ul>

        <h2>Troubleshooting common compost problems</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-stone-200 bg-white not-prose">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left text-stone-500">
                <th className="p-3">Problem</th>
                <th className="p-3">Cause</th>
                <th className="p-3">Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-100">
                <td className="p-3 font-medium">Rotten-egg smell</td>
                <td className="p-3 text-stone-600">Too wet, too much nitrogen, not enough air</td>
                <td className="p-3 text-stone-600">Turn pile, mix in dry browns, check drainage</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-3 font-medium">Ammonia smell</td>
                <td className="p-3 text-stone-600">Too much nitrogen (greens)</td>
                <td className="p-3 text-stone-600">Add 2-3x volume of browns, turn thoroughly</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-3 font-medium">Pile not heating up</td>
                <td className="p-3 text-stone-600">Too small, too dry, or too many browns</td>
                <td className="p-3 text-stone-600">Build to at least 3x3x3 ft, add water and greens, turn</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-3 font-medium">Flies around pile</td>
                <td className="p-3 text-stone-600">Food scraps exposed on surface</td>
                <td className="p-3 text-stone-600">Bury fresh scraps under 6 inches of browns immediately</td>
              </tr>
              <tr className="border-b border-stone-100">
                <td className="p-3 font-medium">Ants in pile</td>
                <td className="p-3 text-stone-600">Pile is too dry</td>
                <td className="p-3 text-stone-600">Water pile thoroughly and turn; ants usually leave</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Pile is dry and dusty</td>
                <td className="p-3 text-stone-600">Not enough water or greens</td>
                <td className="p-3 text-stone-600">Water each layer while turning, add fresh greens</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Using finished compost in your garden</h2>
        <p>
          Harvest compost from the bottom of the pile — that is where the oldest, most finished material
          sits. Screen it through 1/2-inch hardware cloth stretched over a wheelbarrow to separate
          finished compost from unfinished chunks. The chunks go back into the active pile.
        </p>
        <p>Finished compost is a soil amendment, not a replacement for soil. How to use it:</p>
        <ul>
          <li><strong>New beds:</strong> Mix 2-3 inches of compost into the top 6-8 inches of soil before planting</li>
          <li><strong>Existing beds:</strong> Spread 1-2 inches on top each spring — do not dig it in</li>
          <li><strong>Planting holes:</strong> Mix a handful into each hole when transplanting tomatoes, peppers, and heavy feeders</li>
          <li><strong>Side-dressing:</strong> Sprinkle a thin ring around heavy feeders mid-season and water in</li>
          <li><strong>Compost tea:</strong> Steep a shovelful in a 5-gallon bucket of water for 24 hours, then use the liquid to water plants. It is a gentle nutrient boost, not a fertilizer replacement.</li>
        </ul>

        <h2>Composting and your 2026 garden</h2>
        <p>
          Compost is the foundation of every productive vegetable garden. Start a pile now and by the time
          your mid-summer crops are heavy feeders, you will have your first batch of rich, dark, homemade
          compost ready to side-dress them. To know exactly when to plant, use our{" "}
          <Link href="/">free 2026 vegetable planting calendar</Link>. Select your USDA zone and get exact
          dates for all 20 vegetables — from indoor seed starting to first harvest.
        </p>
        <p>
          For soil preparation specifics, read our{" "}
          <Link href="/blog/soil-preparation">soil preparation guide</Link>. New to gardening entirely?
          Start with the <Link href="/blog/beginner-garden-guide">beginner garden guide</Link>.
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
