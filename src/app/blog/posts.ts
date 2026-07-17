export type FAQ = { q: string; a: string };
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  bodyHtml: string;
  faq: FAQ[];
};

export const posts: BlogPost[] = [
  {
    slug: "find-your-usda-hardiness-zone",
    title: "How to Find Your USDA Hardiness Zone (2026 Guide)",
    description:
      "Learn how to find your USDA hardiness zone in 2026, what the numbers mean, and how to use your zone to plan a productive vegetable garden.",
    date: "2026-06-27",
    readingTime: "8 min read",
    bodyHtml: `<p>If you have ever bought seeds or a plant and seen a label that says "hardy to zone 5" or "best in zones 7 to 10," you have already met the USDA Plant Hardiness Zone Map. Knowing your zone is the single most useful piece of information for planning a vegetable garden, because almost every planting date, frost estimate, and variety recommendation in our <a href="/">planting calendar</a> is built on top of it. This guide explains exactly how to find your zone, what the number really tells you, and how to turn it into a real planting plan.</p>

<h2>What a USDA Hardiness Zone Actually Measures</h2>
<p>The USDA Plant Hardiness Zone Map divides North America into zones based on the <strong>average annual extreme minimum winter temperature</strong>. In plain language, it answers one question: how cold does it usually get on the coldest night of a normal year? Each numbered zone spans a 10 degree Fahrenheit band, and each zone is split into an "a" (colder half) and "b" (warmer half) subzone covering 5 degrees each.</p>
<ul>
<li><strong>Zone 3:</strong> -40 to -30 F (far northern states, high elevations)</li>
<li><strong>Zone 4:</strong> -30 to -20 F (upper Midwest, northern New England)</li>
<li><strong>Zone 5:</strong> -20 to -10 F (much of the Midwest and interior Northeast)</li>
<li><strong>Zone 6:</strong> -10 to 0 F (mid-Atlantic, Ohio Valley)</li>
<li><strong>Zone 7:</strong> 0 to 10 F (Virginia, Oklahoma, parts of the Pacific Northwest)</li>
<li><strong>Zone 8:</strong> 10 to 20 F (the Deep South, Texas, coastal Northwest)</li>
<li><strong>Zone 9:</strong> 20 to 30 F (Florida, Gulf Coast, central California)</li>
<li><strong>Zone 10:</strong> 30 to 40 F (south Florida, southern California, deep desert)</li>
</ul>
<p>The colder your winter low, the lower your zone number. A perennial plant rated "hardy to zone 5" should survive a normal winter anywhere in zone 5 or warmer.</p>

<h2>Three Ways to Find Your Zone</h2>
<h3>1. Look it up by ZIP code</h3>
<p>The fastest method is the official USDA map at planthardiness.ars.usda.gov, where you type your ZIP code and instantly get your zone and subzone. The map was last updated in 2023 using 30 years of weather data (1991 to 2020), and that version is still current for 2026. Many gardeners discovered their zone shifted half a step warmer in that update, which matters for borderline perennials.</p>
<h3>2. Use our zone finder</h3>
<p>You can also find your zone and matching planting dates together using our <a href="/">planting calendar</a>. Entering your location gives you the zone plus a full schedule, so you skip the step of translating a raw zone number into actual sowing dates.</p>
<h3>3. Cross-check with local knowledge</h3>
<p>Maps draw smooth lines, but real weather has pockets. A valley bottom that collects cold air can run a full zone colder than the hilltop a mile away. Cities hold heat and often sit a half zone warmer than surrounding countryside, an effect called the urban heat island. Ask a neighbor who gardens, or call your county Cooperative Extension office. They track local frost behavior far more precisely than any national map.</p>

<h2>The Big Limitation: Zones Do Not Equal Planting Dates</h2>
<p>This trips up new gardeners constantly. Your hardiness zone tells you about <strong>winter cold</strong> only. It says nothing about your last spring frost date, your first fall frost date, summer heat, humidity, or how long your growing season runs. Two places can share zone 7 yet have last frost dates a month apart. Coastal Washington and northern Georgia are both zone 8, but their planting calendars look nothing alike because of heat and season length.</p>
<p>For vegetables, the dates that drive your sowing schedule are the <strong>average last spring frost</strong> and <strong>average first fall frost</strong>. The number of frost-free days between them is your growing season. Use your zone to choose perennials and to estimate frost timing, but always confirm your actual frost dates from a local weather record.</p>

<h2>Turning Your Zone Into a Plan</h2>
<p>Once you know your zone and frost dates, the workflow is simple:</p>
<ol>
<li>Find your last spring frost date (for example, around May 15 in zone 4, April 15 in zone 6, March 15 in zone 8).</li>
<li>Count backward from that date for crops you start indoors. Tomatoes need about 6 weeks, peppers 8 weeks, brassicas 5 to 6 weeks.</li>
<li>Direct sow cold-hardy crops like peas, spinach, and radishes 4 to 6 weeks before the last frost.</li>
<li>Direct sow warm crops like beans, squash, and cucumbers after the soil warms past 60 F, usually a week or two after the last frost.</li>
<li>Count back from your first fall frost to time a second round of cool-season crops.</li>
</ol>
<p>Gardeners in low zones (3 to 5) lean heavily on starting seeds indoors and using season extenders like row cover and cold frames to stretch a short season. Gardeners in high zones (9 to 10) often face the opposite problem, where summer heat is the limiting factor and the prime growing windows are fall, winter, and early spring.</p>

<h2>Common Mistakes to Avoid</h2>
<p>Do not assume a warmer zone is always easier. A zone 10 gardener cannot grow great cool-season broccoli in July, and a zone 3 gardener can grow stunning peas and kale that would bolt in the heat down south. Do not plant tender crops on the calendar date of your last frost either; that date is an average, meaning roughly half of years see a later frost. Wait a week or two past it for heat-loving plants, or be ready to cover them.</p>

<h2>Frequently Asked Questions</h2>`,
    faq: [
      {
        q: "What is a USDA hardiness zone?",
        a: "It is a region defined by its average annual extreme minimum winter temperature. Each zone covers a 10 degree Fahrenheit band, split into warmer 'b' and colder 'a' subzones, and it tells you which perennials can survive your winters.",
      },
      {
        q: "How do I find my hardiness zone?",
        a: "The fastest way is to enter your ZIP code on the official USDA map at planthardiness.ars.usda.gov, or use our planting calendar zone finder, which also returns matching planting dates for your location.",
      },
      {
        q: "Does my zone tell me when to plant vegetables?",
        a: "Not directly. Your zone only describes winter cold. Planting dates depend on your last spring frost and first fall frost, which can differ widely between two places that share the same zone.",
      },
      {
        q: "What is the difference between zone 7a and 7b?",
        a: "Both fall in the 0 to 10 F band, but 7a is the colder half (0 to 5 F) and 7b is the warmer half (5 to 10 F). The subzone helps you judge borderline perennials.",
      },
      {
        q: "Did the hardiness zones change recently?",
        a: "Yes. The USDA updated the map in 2023 using 1991 to 2020 climate data, and many areas shifted about half a zone warmer. That version is still the one to use in 2026.",
      },
      {
        q: "Can my zone be different from my neighbor's?",
        a: "Yes. Local features like valleys, hilltops, and city heat islands create microclimates. A cold valley bottom can run a full zone colder than nearby higher ground.",
      },
      {
        q: "Is a higher zone number always better for gardening?",
        a: "No. Higher zones favor heat-loving crops but make cool-season vegetables harder in summer. Lower zones grow excellent peas, kale, and broccoli that struggle in southern heat.",
      },
    ],
  },
  {
    slug: "when-to-start-tomato-seeds-indoors",
    title: "When to Start Tomato Seeds Indoors by Zone (2026)",
    description:
      "Find the exact week to start tomato seeds indoors by USDA zone in 2026, plus the weeks-before-last-frost math, lighting, and hardening off tips.",
    date: "2026-06-27",
    readingTime: "8 min read",
    bodyHtml: `<p>Tomatoes are the crop that teaches new gardeners the value of timing. Start them too early and you get leggy, root-bound plants stuck under lights for weeks. Start them too late and your fruit never ripens before fall. The good news is the timing is governed by one simple piece of arithmetic tied to your last frost date. This guide gives you the exact math, a zone-by-zone schedule for 2026, and the indoor care that turns seedlings into productive plants. Pair it with our <a href="/">planting calendar</a> to lock in your dates.</p>

<h2>The Core Rule: 6 Weeks Before Your Last Frost</h2>
<p>Tomatoes are tender, frost-killed plants, so they cannot go outside until all danger of frost has passed. The standard recommendation is to <strong>start tomato seeds indoors 6 weeks before your average last spring frost date</strong>. Some growers stretch to 8 weeks for large heirloom and beefsteak types that grow slowly, while 5 weeks works well for fast cherry and determinate varieties.</p>
<p>The reason for the 6 week window is biology. A tomato seed germinates in 5 to 10 days at warm soil temperatures, then needs roughly 5 to 6 weeks to grow into a stocky transplant with a true root system and several sets of leaves. Push much past 8 weeks indoors and the plant outgrows its pot, gets stressed, and actually fruits later than a younger, healthier transplant set out at the same time.</p>

<h2>How to Do the Math</h2>
<ol>
<li>Find your average last spring frost date for your location and zone.</li>
<li>Count back 6 weeks (42 days) on a calendar. That is your seed-starting date.</li>
<li>Plan to transplant outdoors 1 to 2 weeks after the last frost, once nighttime lows stay above 50 F and soil is past 60 F.</li>
</ol>
<p>Example: if your last frost is May 15, count back 6 weeks to about <strong>April 3</strong> as your sow date, and aim to transplant around May 22 to 29.</p>

<h2>Tomato Seed-Starting Dates by Zone for 2026</h2>
<p>These use typical average last frost dates. Always confirm yours locally, because two gardens in the same zone can differ by weeks.</p>
<ul>
<li><strong>Zone 3</strong> (last frost approx. June 1): start seeds approx. <strong>April 20</strong></li>
<li><strong>Zone 4</strong> (last frost approx. May 20): start seeds approx. <strong>April 8</strong></li>
<li><strong>Zone 5</strong> (last frost approx. May 10): start seeds approx. <strong>March 29</strong></li>
<li><strong>Zone 6</strong> (last frost approx. April 25): start seeds approx. <strong>March 14</strong></li>
<li><strong>Zone 7</strong> (last frost approx. April 10): start seeds approx. <strong>February 27</strong></li>
<li><strong>Zone 8</strong> (last frost approx. March 20): start seeds approx. <strong>February 6</strong></li>
<li><strong>Zone 9</strong> (last frost approx. February 20): start seeds approx. <strong>January 9</strong></li>
<li><strong>Zone 10</strong> (last frost approx. January 30): start seeds approx. <strong>mid December 2025</strong></li>
</ul>
<p>Gardeners in zones 9 and 10 often start a second sowing in late summer for a fall crop, since spring-planted tomatoes can stall in extreme midsummer heat above 90 F when blossoms fail to set fruit.</p>

<h2>Indoor Setup That Prevents Leggy Seedlings</h2>
<h3>Heat for germination</h3>
<p>Tomato seeds germinate fastest at a soil temperature of 75 to 85 F. A seedling heat mat under the tray cuts germination time roughly in half compared to a cool room. Once most seeds sprout, remove the mat so you do not cook the roots.</p>
<h3>Light, not a windowsill</h3>
<p>The number one cause of weak, stretched seedlings is too little light. A south window is rarely enough this early in the year. Use a shop light or LED grow light positioned 2 to 4 inches above the leaves, running 14 to 16 hours a day. Raise the light as the plants grow to keep it close. Insufficient light makes stems long and floppy as they reach for brightness.</p>
<h3>Potting up</h3>
<p>Start in small cells or 2 inch pots, then pot up into 3 to 4 inch containers once the first true leaves appear. Tomatoes can be planted deep because they grow roots along any buried stem, so bury them up to the lowest leaves each time you transplant. This builds a stronger root system.</p>

<h2>Hardening Off Before Transplant</h2>
<p>Seedlings raised indoors have never felt wind, direct sun, or temperature swings. Moving them straight outside causes transplant shock or sunburned leaves. Harden them off over 7 to 10 days:</p>
<ol>
<li>Day 1 to 2: set plants outside in shade for 1 to 2 hours, then bring them in.</li>
<li>Day 3 to 5: increase to a few hours, adding gentle morning sun.</li>
<li>Day 6 to 8: most of the day outside, including direct afternoon sun.</li>
<li>Day 9 to 10: leave them out overnight if lows stay above 50 F, then transplant.</li>
</ol>
<p>Skip watering slightly during hardening off to toughen the plants, and bring them in for any unexpected cold night.</p>

<h2>Common Timing Mistakes</h2>
<p>The most frequent error is starting in January because the seed catalogs arrived and excitement took over, then babysitting overgrown plants for months. Match your sow date to your zone instead. The second mistake is transplanting on the exact last frost date; tomatoes sulk in cold soil and a late frost can wipe them out, so wait for warm nights or be ready with row cover. Get the timing right and a single packet of seeds can fill a whole bed with strong, early-fruiting plants.</p>

<h2>Frequently Asked Questions</h2>`,
    faq: [
      {
        q: "How many weeks before the last frost should I start tomato seeds?",
        a: "Start tomato seeds indoors about 6 weeks before your average last spring frost date. Use 8 weeks for large slow-growing heirlooms and 5 weeks for fast cherry or determinate types.",
      },
      {
        q: "When should I start tomato seeds in zone 5?",
        a: "In zone 5, with a last frost around May 10, start seeds about March 29 and plan to transplant in the third or fourth week of May once nights stay above 50 F.",
      },
      {
        q: "Can I start tomato seeds too early?",
        a: "Yes. Starting more than 8 weeks ahead produces root-bound, leggy plants that get stressed indoors and often fruit later than younger, healthier transplants set out at the same time.",
      },
      {
        q: "Why are my tomato seedlings tall and floppy?",
        a: "They are not getting enough light. Use a grow light 2 to 4 inches above the leaves for 14 to 16 hours a day. A windowsill is usually too dim this early in the season.",
      },
      {
        q: "What soil temperature do tomato seeds need to germinate?",
        a: "About 75 to 85 F. A seedling heat mat speeds germination dramatically. Remove the mat once most seeds have sprouted so you do not overheat the roots.",
      },
      {
        q: "How do I harden off tomato seedlings?",
        a: "Over 7 to 10 days, gradually expose plants to outdoor sun and wind, starting with an hour or two in shade and building up to full days and overnight stays before transplanting.",
      },
      {
        q: "When can I plant tomato seedlings outdoors?",
        a: "Wait until 1 to 2 weeks after your last frost, when nighttime lows stay above 50 F and soil is past 60 F. Cold soil stalls growth and a late frost can kill the plants.",
      },
      {
        q: "Should I plant tomato seedlings deep?",
        a: "Yes. Tomatoes grow roots along any buried stem, so plant them up to the lowest set of leaves. This builds a stronger, more drought-resistant root system.",
      },
    ],
  },
  {
    slug: "spring-vegetable-planting-schedule",
    title: "Spring Vegetable Planting Schedule for Beginners (2026)",
    description:
      "A beginner-friendly 2026 spring vegetable planting schedule built around your last frost date, with cool-season and warm-season crop timing by zone.",
    date: "2026-06-27",
    readingTime: "9 min read",
    bodyHtml: `<p>Spring planting feels overwhelming when you are new, because every seed packet seems to suggest a different date and the weather refuses to cooperate. The secret that experienced gardeners rely on is that nearly the entire spring schedule revolves around one anchor: your <strong>average last spring frost date</strong>. Once you know that date, you can place every crop on the calendar with confidence. This beginner guide walks you through the whole spring sequence, from the first hardy greens to the last tender transplants. Use it alongside our <a href="/">planting calendar</a> to get dates tuned to your exact location.</p>

<h2>Step One: Find Your Last Frost Date</h2>
<p>Your last frost date is the average date of the final spring freeze in your area. It is the pivot for everything else. Typical dates by zone in 2026 look roughly like this:</p>
<ul>
<li><strong>Zone 3:</strong> around June 1</li>
<li><strong>Zone 4:</strong> around May 20</li>
<li><strong>Zone 5:</strong> around May 10</li>
<li><strong>Zone 6:</strong> around April 25</li>
<li><strong>Zone 7:</strong> around April 10</li>
<li><strong>Zone 8:</strong> around March 20</li>
<li><strong>Zone 9:</strong> around February 20</li>
<li><strong>Zone 10:</strong> around January 30</li>
</ul>
<p>Remember this is an average, so about half of all years will have a frost a little later. For tender crops, give yourself a buffer of one to two weeks past this date, or keep row cover handy.</p>

<h2>Step Two: Understand the Two Crop Families</h2>
<p>Spring vegetables split into two groups, and the difference decides when each one goes in the ground.</p>
<h3>Cool-season crops</h3>
<p>These tolerate frost and actually prefer cool weather. They include peas, spinach, lettuce, kale, radishes, carrots, beets, broccoli, cabbage, and onions. Many can go out <strong>4 to 6 weeks before your last frost</strong>, because a light frost does not hurt them and they bolt or turn bitter in summer heat.</p>
<h3>Warm-season crops</h3>
<p>These are killed by frost and need warm soil to grow. They include tomatoes, peppers, eggplant, beans, squash, cucumbers, melons, and corn. They go out <strong>only after the last frost</strong>, and most prefer soil above 60 F, which often means waiting a week or two beyond the frost date.</p>

<h2>Step Three: The Week-by-Week Spring Sequence</h2>
<p>Here is the order to plant, expressed in weeks relative to your last frost (LF). Slide the whole sequence onto your calendar once you know your date.</p>
<ol>
<li><strong>8 to 6 weeks before LF (indoors):</strong> Start seeds of onions, leeks, peppers, and eggplant indoors under lights.</li>
<li><strong>6 weeks before LF (indoors):</strong> Start tomatoes indoors. Start broccoli, cabbage, and other brassicas about 5 to 6 weeks before LF as well.</li>
<li><strong>4 to 6 weeks before LF (outdoors):</strong> Direct sow peas, spinach, radishes, arugula, and turnips. Transplant onion sets and hardened-off brassica seedlings. The soil only needs to be workable, not warm.</li>
<li><strong>2 to 4 weeks before LF (outdoors):</strong> Direct sow carrots, beets, lettuce, Swiss chard, and parsnips. Plant potatoes.</li>
<li><strong>At last frost:</strong> Begin hardening off your warm-season transplants. Direct sow nothing tender yet; soil is usually still cool.</li>
<li><strong>1 to 2 weeks after LF:</strong> Transplant tomatoes, peppers, and eggplant. Direct sow beans, squash, cucumbers, and corn once soil hits 60 F.</li>
<li><strong>2 to 4 weeks after LF:</strong> Direct sow heat lovers like melons, okra, and sweet potatoes (in warm zones), and make a second sowing of beans for a continuous harvest.</li>
</ol>

<h2>Step Four: Direct Sow or Transplant?</h2>
<p>Some crops resent being moved and should be sown directly where they will grow. These include carrots, beets, radishes, peas, beans, corn, and most root vegetables, because disturbing their roots stunts them. Other crops benefit from a head start indoors and transplant well, including tomatoes, peppers, eggplant, broccoli, cabbage, and lettuce. As a beginner, direct sow the easy fast crops and buy or start transplants for the slow heat lovers until you build confidence.</p>

<h2>Step Five: Prepare and Harden Off</h2>
<p>Before planting, loosen the top several inches of soil and mix in compost. Avoid working soil when it is soggy, since that compacts it into clumps. Any seedling you raised indoors or bought must be hardened off over 7 to 10 days, gradually exposing it to sun and wind so it does not suffer transplant shock or sunburn. Skipping this step is the most common reason beginner transplants stall or die in their first week outdoors.</p>

<h2>Beginner Tips for a Successful Spring</h2>
<ul>
<li><strong>Start small.</strong> A 4 by 8 foot bed planted well beats a large garden you cannot keep up with.</li>
<li><strong>Succession sow.</strong> Plant short rows of lettuce, radishes, and beans every two weeks for a steady harvest instead of a glut.</li>
<li><strong>Keep row cover ready.</strong> A light fabric cover protects against a surprise late frost and early pests.</li>
<li><strong>Label everything.</strong> Spring beds look like bare soil for weeks; labels save you from guessing what is coming up.</li>
<li><strong>Water consistently.</strong> Seeds need steady moisture to germinate, and dry spells during germination are a common cause of patchy rows.</li>
</ul>
<p>Follow this anchor-on-the-frost-date method and spring stops being a guessing game. You plant the cool crops while it is still chilly, hold the tender ones until the danger passes, and harvest steadily from late spring well into summer.</p>

<h2>Frequently Asked Questions</h2>`,
    faq: [
      {
        q: "What is the most important date for planning spring planting?",
        a: "Your average last spring frost date. Almost every spring planting decision is measured in weeks before or after it, so finding that date for your location is the first step.",
      },
      {
        q: "What can I plant before the last frost?",
        a: "Cool-season crops that tolerate frost, such as peas, spinach, lettuce, kale, radishes, carrots, beets, broccoli, and onions. Many can go out 4 to 6 weeks before the last frost.",
      },
      {
        q: "When should I plant tomatoes and peppers outside?",
        a: "Wait until 1 to 2 weeks after your last frost, when soil is above 60 F and nights stay above 50 F. These warm-season crops are killed by frost and stall in cold soil.",
      },
      {
        q: "Which vegetables should be direct sown instead of transplanted?",
        a: "Root crops and others that dislike root disturbance, including carrots, beets, radishes, peas, beans, corn, and parsnips. Sow these directly where they will grow.",
      },
      {
        q: "Do I really need to harden off seedlings?",
        a: "Yes. Seedlings raised indoors or bought from a store need 7 to 10 days of gradual exposure to sun and wind. Skipping this causes transplant shock and sunburned leaves.",
      },
      {
        q: "What is succession sowing?",
        a: "Planting small amounts of fast crops like lettuce, radishes, and beans every couple of weeks instead of all at once, so you get a steady harvest rather than one big glut.",
      },
      {
        q: "How early can I start seeds indoors for spring?",
        a: "Onions, leeks, peppers, and eggplant can begin 6 to 8 weeks before the last frost, tomatoes about 6 weeks before, and brassicas about 5 to 6 weeks before.",
      },
      {
        q: "What if a late frost is forecast after I plant?",
        a: "Cover tender plants with row cover, an old sheet, or buckets overnight and remove it in the morning. Keeping a frost cover on hand lets you plant on schedule without risking your crop.",
      },
    ],
  },
];
