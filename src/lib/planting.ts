// 种植日历核心数据引擎 —— 纯数据驱动，程序化SEO的心脏
// 数据源：USDA 硬植区平均霜冻日期 + 各蔬菜相对播种/移栽/收获窗口
// 全部纯计算，零依赖、零上传、零API成本

export type ZoneId =
  | "3a" | "3b" | "4a" | "4b" | "5a" | "5b"
  | "6a" | "6b" | "7a" | "7b" | "8a" | "8b"
  | "9a" | "9b" | "10a" | "10b";

export interface ZoneInfo {
  id: ZoneId;
  /** 该区代表性温度下限 (°F) */
  minTempF: string;
  /** 平均最后春霜（月-日） */
  lastFrost: string;
  /** 平均第一秋霜（月-日） */
  firstFrost: string;
  /** 大致无霜期天数 */
  growingDays: number;
  /** 该区代表性美国地区，提升内容真实度 */
  exampleRegions: string;
}

// USDA 区平均霜冻日期（北半球美国大陆典型值，作为通用参考）
export const ZONES: ZoneInfo[] = [
  { id: "3a", minTempF: "-40 to -35", lastFrost: "May 15", firstFrost: "Sep 15", growingDays: 123, exampleRegions: "northern Minnesota, International Falls" },
  { id: "3b", minTempF: "-35 to -30", lastFrost: "May 15", firstFrost: "Sep 20", growingDays: 128, exampleRegions: "northern Maine, Bemidji MN" },
  { id: "4a", minTempF: "-30 to -25", lastFrost: "May 10", firstFrost: "Sep 25", growingDays: 138, exampleRegions: "northern Wisconsin, Fargo ND" },
  { id: "4b", minTempF: "-25 to -20", lastFrost: "May 5", firstFrost: "Oct 1", growingDays: 149, exampleRegions: "Minneapolis MN, Burlington VT" },
  { id: "5a", minTempF: "-20 to -15", lastFrost: "Apr 30", firstFrost: "Oct 5", growingDays: 158, exampleRegions: "Chicago IL, Des Moines IA" },
  { id: "5b", minTempF: "-15 to -10", lastFrost: "Apr 25", firstFrost: "Oct 10", growingDays: 168, exampleRegions: "Denver CO, Columbus OH" },
  { id: "6a", minTempF: "-10 to -5", lastFrost: "Apr 20", firstFrost: "Oct 15", growingDays: 178, exampleRegions: "St. Louis MO, Philadelphia PA" },
  { id: "6b", minTempF: "-5 to 0", lastFrost: "Apr 15", firstFrost: "Oct 20", growingDays: 188, exampleRegions: "Washington DC, Lexington KY" },
  { id: "7a", minTempF: "0 to 5", lastFrost: "Apr 10", firstFrost: "Oct 25", growingDays: 198, exampleRegions: "Nashville TN, Oklahoma City OK" },
  { id: "7b", minTempF: "5 to 10", lastFrost: "Apr 5", firstFrost: "Nov 1", growingDays: 210, exampleRegions: "Atlanta GA, Raleigh NC" },
  { id: "8a", minTempF: "10 to 15", lastFrost: "Mar 25", firstFrost: "Nov 10", growingDays: 230, exampleRegions: "Dallas TX, Charleston SC" },
  { id: "8b", minTempF: "15 to 20", lastFrost: "Mar 15", firstFrost: "Nov 20", growingDays: 250, exampleRegions: "Austin TX, Savannah GA" },
  { id: "9a", minTempF: "20 to 25", lastFrost: "Feb 25", firstFrost: "Dec 5", growingDays: 283, exampleRegions: "Houston TX, Jacksonville FL" },
  { id: "9b", minTempF: "25 to 30", lastFrost: "Feb 10", firstFrost: "Dec 15", growingDays: 308, exampleRegions: "Orlando FL, Tucson AZ" },
  { id: "10a", minTempF: "30 to 35", lastFrost: "Jan 31", firstFrost: "Dec 30", growingDays: 333, exampleRegions: "Miami FL, Phoenix AZ" },
  { id: "10b", minTempF: "35 to 40", lastFrost: "Jan 15", firstFrost: "Dec 31", growingDays: 350, exampleRegions: "Key West FL, coastal So-Cal" },
];

export const ZONE_IDS = ZONES.map((z) => z.id);
export const zoneById = (id: string) => ZONES.find((z) => z.id === id);

export type Method = "Start indoors" | "Direct sow" | "Transplant" | "Direct sow or transplant";

export interface Vegetable {
  slug: string;
  name: string;
  emoji: string;
  /** 室内育苗：最后春霜前几周（负=霜后），null=不育苗 */
  indoorWeeksBeforeLastFrost: number | null;
  /** 直播/移栽相对最后春霜的周数（负=霜前，正=霜后，0=霜当周） */
  outdoorWeeksFromLastFrost: number;
  method: Method;
  /** 出苗到可收获天数 */
  daysToHarvest: number;
  /** 耐寒/喜温 */
  hardiness: "Cool-season" | "Warm-season";
  spacingInches: number;
  sun: string;
  /** 简短描述 */
  blurb: string;
  /** 伴生植物 */
  companions: string[];
  /** 常见病虫害 */
  pests: string[];
  /** 特有种植技巧（每菜不同） */
  tips: string;
  /** 常见问题+解法 */
  problems: string;
  /** 容器种植要点 */
  container: string;
  /** 能否秋播二茬 */
  secondCrop: string;
}

export const VEGETABLES: Vegetable[] = [
  {
    slug: "tomato", name: "Tomato", emoji: "🍅",
    indoorWeeksBeforeLastFrost: 6, outdoorWeeksFromLastFrost: 1, method: "Transplant", daysToHarvest: 75,
    hardiness: "Warm-season", spacingInches: 24, sun: "Full sun (6-8h)",
    blurb: "The backyard favorite. Start indoors and transplant after all danger of frost.",
    companions: ["basil", "carrot", "marigold"], pests: ["hornworm", "blight", "aphids"],
    tips: "Deep planting builds stronger roots—bury 2/3 of the stem when transplanting tomatoes.",
    problems: "Blossom end rot appears as dark sunken spots on fruit bottom, caused by calcium deficiency and inconsistent watering. Mulch to keep soil moisture even and avoid high-nitrogen fertilizers during fruiting.",
    container: "Needs at least a 5-gallon container per plant. Determinate (bush) varieties like Roma perform best in pots. Use a sturdy cage or stake—container tomatoes still grow 3-5 feet tall.",
    secondCrop: "Yes—in zones 6 and warmer, plant a second round of fast-maturing varieties (60-day) in early to mid-July for a fall harvest before first frost.",
  },
  {
    slug: "pepper", name: "Pepper", emoji: "🫑",
    indoorWeeksBeforeLastFrost: 8, outdoorWeeksFromLastFrost: 2, method: "Transplant", daysToHarvest: 70,
    hardiness: "Warm-season", spacingInches: 18, sun: "Full sun (6-8h)",
    blurb: "Loves heat. Needs a long warm head start indoors before transplanting.",
    companions: ["basil", "onion", "carrot"], pests: ["aphids", "flea beetle", "hornworm"],
    tips: "Bottom-heat mats speed germination—peppers need 80-85°F soil to sprout reliably. Once fruiting, pick the first peppers when slightly under-ripe to signal the plant to produce more.",
    problems: "Blossom drop happens when daytime temps exceed 90°F or nights stay above 75°F. Use 30% shade cloth during heat waves. Also, peppers need consistent phosphorus—bone meal at transplant helps.",
    container: "Thrives in 3-gallon containers minimum; compact varieties like 'Lunchbox' or 'Cajun Belle' fit 2-gallon pots. Peppers actually prefer being slightly root-bound for heavier fruit set.",
    secondCrop: "Not recommended—peppers require a long warm growing season and slow down as days shorten. Focus on one strong crop per year in most zones.",
  },
  {
    slug: "cucumber", name: "Cucumber", emoji: "🥒",
    indoorWeeksBeforeLastFrost: 3, outdoorWeeksFromLastFrost: 2, method: "Direct sow or transplant", daysToHarvest: 55,
    hardiness: "Warm-season", spacingInches: 12, sun: "Full sun (6-8h)",
    blurb: "Fast and productive once soil is warm. Sow directly after frost.",
    companions: ["beans", "corn", "radish"], pests: ["cucumber beetle", "powdery mildew"],
    tips: "Harvest daily once fruiting begins—overripe cucumbers signal the plant to stop producing. Trellis vines vertically to save space and keep fruit straight and clean.",
    problems: "Bitter fruit results from heat stress and inconsistent watering. Powdery mildew appears as white dust on leaves in humid weather—water at soil level and space plants for airflow.",
    container: "Bush cucumber varieties in 3-gallon pots with a small trellis work great. Standard vining types need 5+ gallons. Self-watering containers help maintain the consistent moisture cucumbers demand.",
    secondCrop: "Yes—sow a second round 4-6 weeks after the first planting. In zones 5-7, target a July 15 sowing for fall harvest. Choose fast-maturing (50-day) varieties for succession.",
  },
  {
    slug: "lettuce", name: "Lettuce", emoji: "🥬",
    indoorWeeksBeforeLastFrost: 4, outdoorWeeksFromLastFrost: -3, method: "Direct sow or transplant", daysToHarvest: 45,
    hardiness: "Cool-season", spacingInches: 8, sun: "Full sun to part shade",
    blurb: "Cool-season green that can go out weeks before the last frost.",
    companions: ["carrot", "radish", "cucumber"], pests: ["slugs", "aphids"],
    tips: "Use cut-and-come-again harvesting—pick outer leaves when 3-4 inches long and the center keeps producing for weeks. For full heads, harvest in the morning when leaves are crispest.",
    problems: "Bolting (sending up a flower stalk) happens when soil temperatures exceed 70°F. Leaves turn bitter once bolting starts. Plant in afternoon shade and choose slow-bolt varieties like 'Buttercrunch' for summer.",
    container: "Ideal for shallow containers—roots only go 4-6 inches deep. Window boxes, salad trays, even repurposed gutters work perfectly. One 12-inch pot yields salad for two people.",
    secondCrop: "Absolutely—succession sow every 2-3 weeks for continuous harvest. In zones 5+, sow spring crops until late May, then resume in late August for fall. Lettuce germinates poorly above 80°F soil.",
  },
  {
    slug: "carrot", name: "Carrot", emoji: "🥕",
    indoorWeeksBeforeLastFrost: null, outdoorWeeksFromLastFrost: -3, method: "Direct sow", daysToHarvest: 70,
    hardiness: "Cool-season", spacingInches: 3, sun: "Full sun",
    blurb: "Sow directly — carrots hate being transplanted. Tolerates light frost.",
    companions: ["onion", "lettuce", "tomato"], pests: ["carrot fly", "wireworm"],
    tips: "Loose, stone-free soil to at least 12 inches deep is non-negotiable—compacted or rocky soil produces forked, twisted carrots. Mix sand into heavy clay and remove all pebbles larger than a pea.",
    problems: "Carrot rust fly maggots tunnel through roots leaving rusty-brown trails. The fly is attracted by the scent of thinning—use row cover from sowing to harvest, and thin on windy days only.",
    container: "Deep containers (12+ inches) are essential. Choose shorter varieties like 'Paris Market' (round, 2 inches) or 'Little Finger' (4 inches) for standard pots. A 5-gallon bucket can grow 15-20 carrots.",
    secondCrop: "Yes—sow a fall crop in mid to late July for zones 5+. Carrots touched by light frost convert starches to sugar and taste noticeably sweeter. Mulch heavily if overwintering in zones 6+.",
  },
  {
    slug: "broccoli", name: "Broccoli", emoji: "🥦",
    indoorWeeksBeforeLastFrost: 5, outdoorWeeksFromLastFrost: -2, method: "Transplant", daysToHarvest: 65,
    hardiness: "Cool-season", spacingInches: 18, sun: "Full sun",
    blurb: "Cool-season brassica. Transplant before the last frost for spring crops.",
    companions: ["onion", "beets", "lettuce"], pests: ["cabbage worm", "aphids"],
    tips: "Harvest the central head while buds are still tight and dark green—once they start to yellow or loosen, you have waited too long. After cutting the main head, side shoots will keep producing smaller florets for 4-6 more weeks.",
    problems: "Imported cabbage worms (velvety green caterpillars) chew leaves to skeletons. Check undersides of leaves daily for eggs. Apply Bt (Bacillus thuringiensis) spray—it is organic and only affects caterpillars.",
    container: "One plant per 5-gallon container minimum. Broccoli is a heavy feeder with an extensive root system—use rich compost and supplement with fish emulsion every 2-3 weeks.",
    secondCrop: "Yes—start fall broccoli seeds indoors in early to mid-July in zones 5+. Fall crops often outperform spring ones because heads mature in cooling weather rather than warming weather.",
  },
  {
    slug: "spinach", name: "Spinach", emoji: "🍃",
    indoorWeeksBeforeLastFrost: null, outdoorWeeksFromLastFrost: -5, method: "Direct sow", daysToHarvest: 40,
    hardiness: "Cool-season", spacingInches: 4, sun: "Full sun to part shade",
    blurb: "Very cold-hardy. One of the first things you can sow in spring.",
    companions: ["radish", "strawberry", "peas"], pests: ["leaf miner", "aphids"],
    tips: "Soak seeds in water for 12-24 hours before sowing to soften the tough seed coat and speed germination, especially when soil is still cool. Spinach germinates best in soil between 40-70°F.",
    problems: "Leaf miners tunnel inside leaves creating winding translucent trails. Remove and destroy affected leaves immediately—do not compost. Row cover at planting prevents the adult fly from laying eggs.",
    container: "Shallow 6-inch deep containers are plenty—spinach has a modest root system. Great for windowsill growing indoors year-round. One 12-inch pot provides enough for weekly salads.",
    secondCrop: "Yes—sow in late summer (August in zones 5+, September in zones 7+) for a fall and early winter harvest. Spinach thrives in cooling weather and can survive temperatures down to 15-20°F.",
  },
  {
    slug: "kale", name: "Kale", emoji: "🥬",
    indoorWeeksBeforeLastFrost: 5, outdoorWeeksFromLastFrost: -3, method: "Direct sow or transplant", daysToHarvest: 55,
    hardiness: "Cool-season", spacingInches: 12, sun: "Full sun to part shade",
    blurb: "Frost actually sweetens it. Plant early spring and again for fall.",
    companions: ["beets", "onion", "herbs"], pests: ["cabbage worm", "aphids"],
    tips: "Frost converts starches to sugar—kale harvested after a light freeze tastes noticeably sweeter. Harvest the oldest outer leaves first and the plant keeps producing from the center for months.",
    problems: "Cabbage aphids cluster in dense gray colonies inside leaf crevices and growing tips. A strong jet of water knocks most off. For persistent infestations, insecticidal soap or neem oil applied to leaf undersides works well.",
    container: "One plant per 3-gallon pot minimum. Kale is ornamental enough for mixed flower planters—varieties like 'Red Russian' and 'Lacinato' (dinosaur kale) look striking alongside annual flowers.",
    secondCrop: "Yes—spring and fall crops are standard practice. In zones 5+, start fall kale indoors in early July and transplant by early August. Mature kale survives winter down to zone 5 with minimal protection.",
  },
  {
    slug: "onion", name: "Onion", emoji: "🧅",
    indoorWeeksBeforeLastFrost: 10, outdoorWeeksFromLastFrost: -4, method: "Transplant", daysToHarvest: 100,
    hardiness: "Cool-season", spacingInches: 4, sun: "Full sun",
    blurb: "Long season. Start from seed indoors very early or use sets.",
    companions: ["carrot", "lettuce", "beets"], pests: ["onion maggot", "thrips"],
    tips: "Day-length determines bulb formation—plant long-day varieties north of 37°N latitude and short-day varieties south of it. Using the wrong type means you will get scallions, not bulbs.",
    problems: "Onion maggots tunnel into bulbs from below causing rot. The adult fly lays eggs at the base of seedlings. Rotate allium family crops (onions, garlic, leeks) on a 3-year cycle to break the pest cycle.",
    container: "Grow 4-6 bulbs per 5-gallon bucket, spaced evenly. Green onions (scallions) are even easier—plant sets 1 inch apart in any 6-inch deep container and harvest continuously.",
    secondCrop: "Generally no—onions are a single long-season crop taking 100-120 days. However, you can interplant fast crops like radishes or lettuce between young onion rows before they fill out.",
  },
  {
    slug: "garlic", name: "Garlic", emoji: "🧄",
    indoorWeeksBeforeLastFrost: null, outdoorWeeksFromLastFrost: 24, method: "Direct sow", daysToHarvest: 240,
    hardiness: "Cool-season", spacingInches: 6, sun: "Full sun",
    blurb: "Planted in fall, harvested next summer. The set-it-and-forget-it crop.",
    companions: ["tomato", "carrot", "beets"], pests: ["onion maggot", "rust"],
    tips: "Crack bulbs and plant individual cloves pointy-side up, 2 inches deep and 6 inches apart. The largest cloves produce the largest bulbs—save the biggest for planting, cook with the small ones.",
    problems: "Garlic rust appears as orange-brown powdery spots on leaves. It spreads in humid conditions with poor airflow. Space plants adequately, avoid overhead watering, and remove infected leaves promptly.",
    container: "6-inch deep containers work with 4-inch spacing between cloves. A 5-gallon grow bag holds 8-10 plants. Mulch heavily with straw after planting for winter insulation in zones 3-6.",
    secondCrop: "No—garlic is planted in fall (October-November) and harvested the following summer (July), an 8-9 month cycle. It occupies the bed for nearly a year, so plan space accordingly.",
  },
  {
    slug: "potato", name: "Potato", emoji: "🥔",
    indoorWeeksBeforeLastFrost: null, outdoorWeeksFromLastFrost: -2, method: "Direct sow", daysToHarvest: 90,
    hardiness: "Cool-season", spacingInches: 12, sun: "Full sun",
    blurb: "Plant seed potatoes a couple weeks before the last frost.",
    companions: ["beans", "corn", "cabbage"], pests: ["colorado potato beetle", "blight"],
    tips: "Hill soil around stems when plants reach 6 inches tall—buried stem sections produce more tubers via stolons. Repeat every 2-3 weeks until the mound is 8-10 inches high. This can double your yield.",
    problems: "Colorado potato beetles (yellow-and-black striped) strip foliage rapidly. Hand-pick adults daily and crush orange egg clusters on leaf undersides. Rotate planting areas yearly—beetles overwinter in soil.",
    container: "Grow bags or 15-gallon fabric pots are ideal—fill with 6 inches of soil, plant seed potatoes, and add soil as plants grow. Harvest by simply dumping the bag out. No digging required.",
    secondCrop: "Not typical—one crop per season. But you can plant early varieties (70-day) in spring and late varieties (100+ day) simultaneously for a staggered harvest from July through September.",
  },
  {
    slug: "corn", name: "Corn", emoji: "🌽",
    indoorWeeksBeforeLastFrost: null, outdoorWeeksFromLastFrost: 2, method: "Direct sow", daysToHarvest: 80,
    hardiness: "Warm-season", spacingInches: 12, sun: "Full sun",
    blurb: "Sow directly in warm soil. Plant in blocks for good pollination.",
    companions: ["beans", "squash", "cucumber"], pests: ["corn earworm", "armyworm"],
    tips: "Plant in blocks of at least 4 short rows, not one long single row. Corn is wind-pollinated—each silk must receive pollen from a neighboring tassel. Poorly pollinated ears have missing kernels.",
    problems: "Corn earworms enter through the silk tips and feed on developing kernels. Apply a few drops of mineral oil or Bt mixed with oil to the silk tips 5-7 days after silks first appear.",
    container: "Possible in large containers (20+ gallons) with at least 9-12 stalks planted closely for wind pollination. Choose shorter varieties like 'Trinity' or 'On Deck' bred for containers. Expect 1-2 ears per stalk.",
    secondCrop: "Yes in zones 6+—sow a second block 3 weeks after the first for staggered harvest. In zones 7+, you can fit three successions. Choose varieties with different maturity dates for a longer harvest window.",
  },
  {
    slug: "beans", name: "Bush Beans", emoji: "🫘",
    indoorWeeksBeforeLastFrost: null, outdoorWeeksFromLastFrost: 1, method: "Direct sow", daysToHarvest: 55,
    hardiness: "Warm-season", spacingInches: 4, sun: "Full sun",
    blurb: "Easy and fast. Direct sow after the soil warms up.",
    companions: ["corn", "squash", "cucumber"], pests: ["bean beetle", "aphids"],
    tips: "Inoculate seeds with rhizobium bacteria powder before planting—it costs a few dollars and dramatically improves nitrogen fixation, leading to healthier plants and bigger yields from the same soil.",
    problems: "Mexican bean beetles look like yellow ladybugs but skeletonize leaves leaving only veins. Check leaf undersides for yellow-orange egg clusters. Crush eggs and hand-pick adults; neem oil suppresses larvae.",
    container: "Excellent container crop—an 8-inch pot holds 3-4 bush bean plants and needs no trellis. Bush beans are compact (12-18 inches) and produce heavily for their size.",
    secondCrop: "Yes—succession sow every 3 weeks through mid-summer. In zones 5+, the last sowing around July 20 still matures before frost. Pole beans produce longer but bush beans are better for staggered fresh eating.",
  },
  {
    slug: "peas", name: "Peas", emoji: "🟢",
    indoorWeeksBeforeLastFrost: null, outdoorWeeksFromLastFrost: -6, method: "Direct sow", daysToHarvest: 60,
    hardiness: "Cool-season", spacingInches: 2, sun: "Full sun to part shade",
    blurb: "Sow as soon as soil can be worked — peas love the cold.",
    companions: ["carrot", "radish", "cucumber"], pests: ["aphids", "powdery mildew"],
    tips: "Install trellis or netting at planting time, not after—peas send out tendrils immediately and tangled vines break when you try to untangle them. Soak seeds overnight before planting for faster germination in cold soil.",
    problems: "Powdery mildew (white powder on leaves) strikes late plantings as weather warms. The best defense is planting early so peas finish before hot weather arrives. Choose resistant varieties like 'Sugar Snap' for later sowings.",
    container: "Dwarf pea varieties in 8-inch deep containers with a small trellis thrive on patios. 'Tom Thumb' grows only 8-10 inches tall and needs no support at all—perfect for small containers.",
    secondCrop: "Yes—sow a fall crop in late July to early August in zones 5+. Peas love cooling autumn weather. Count back 60-70 days from your first fall frost date to time the planting.",
  },
  {
    slug: "squash", name: "Summer Squash", emoji: "🎃",
    indoorWeeksBeforeLastFrost: 3, outdoorWeeksFromLastFrost: 1, method: "Direct sow or transplant", daysToHarvest: 50,
    hardiness: "Warm-season", spacingInches: 24, sun: "Full sun",
    blurb: "Prolific producer. Wait until frost danger has fully passed.",
    companions: ["corn", "beans", "nasturtium"], pests: ["squash bug", "vine borer"],
    tips: "Pick at 6-8 inches for best flavor and tender skin—oversized squash turns seedy and woody. Check plants every other day during peak season: a zucchini can go from 4 to 12 inches in 48 hours.",
    problems: "Squash vine borers kill plants by tunneling inside stems. The adult moth lays eggs at the stem base. Wrap the lower 2 inches of stems with aluminum foil at transplant time, or inject Bt into stems at first sign of frass (sawdust-like droppings).",
    container: "Bush varieties in 10-gallon containers or large grow bags work well. Do not even try vining types in containers—a single plant can sprawl 15+ feet. One container plant feeds a family of 4.",
    secondCrop: "Yes—sow a second round in early summer (late June in zones 5+) to extend harvest into fall. Squash vine borers are less active later in summer, so second plantings often escape damage.",
  },
  {
    slug: "zucchini", name: "Zucchini", emoji: "🥒",
    indoorWeeksBeforeLastFrost: 3, outdoorWeeksFromLastFrost: 1, method: "Direct sow or transplant", daysToHarvest: 50,
    hardiness: "Warm-season", spacingInches: 24, sun: "Full sun",
    blurb: "One plant feeds the neighborhood. Sow after the last frost.",
    companions: ["corn", "beans", "nasturtium"], pests: ["squash bug", "vine borer"],
    tips: "Harvest relentlessly at 6-8 inches—missed zucchini become woody baseball bats within 48 hours and the plant slows production once seeds mature inside oversized fruit. Daily checking in July is essential.",
    problems: "Squash bugs suck sap from leaves and stems causing sudden wilting that looks like lack of water. Check under leaves daily for bronze-colored egg clusters in neat rows. Crush eggs and drop adults into soapy water.",
    container: "One plant per 10-gallon container minimum; compact bush varieties like 'Astia' or 'Raven' are bred specifically for containers. Use self-watering containers—zucchini drinks heavily in hot weather.",
    secondCrop: "Yes—stagger plantings 3 weeks apart (e.g., May 15 and June 5) to avoid the classic feast-or-famine zucchini problem. Second sowings in zones 6+ mature in late summer when pest pressure is lower.",
  },
  {
    slug: "radish", name: "Radish", emoji: "🌶️",
    indoorWeeksBeforeLastFrost: null, outdoorWeeksFromLastFrost: -4, method: "Direct sow", daysToHarvest: 28,
    hardiness: "Cool-season", spacingInches: 2, sun: "Full sun to part shade",
    blurb: "The fastest crop in the garden. Ready in under a month.",
    companions: ["carrot", "lettuce", "spinach"], pests: ["flea beetle", "root maggot"],
    tips: "Sow thinly—overcrowding causes all leaves and no bulb formation. Thin to 2 inches apart ruthlessly. The thinnings are edible microgreens. For the mildest flavor, harvest promptly once shoulders push above soil.",
    problems: "Flea beetles chew tiny round holes (shotgun pattern) in leaves. While severe damage stunts root development, light damage is cosmetic. Row cover at sowing completely prevents infestation.",
    container: "Shallow 4-6 inch deep trays work perfectly—radishes are the easiest container vegetable. One 12-inch windowsill planter produces a fresh batch every month. Great for kids and beginners.",
    secondCrop: "Absolutely—sow every 2 weeks in spring and again when temperatures cool in late summer. Skip mid-summer (July) in hot zones—radishes bolt and turn woody above 80°F. Fall radishes are sweeter.",
  },
  {
    slug: "beet", name: "Beet", emoji: "🫜",
    indoorWeeksBeforeLastFrost: null, outdoorWeeksFromLastFrost: -4, method: "Direct sow", daysToHarvest: 55,
    hardiness: "Cool-season", spacingInches: 4, sun: "Full sun to part shade",
    blurb: "Two crops in one — roots and greens. Sow before the last frost.",
    companions: ["onion", "lettuce", "kale"], pests: ["leaf miner", "flea beetle"],
    tips: "Soak seeds overnight before sowing—each 'seed' is actually a dried fruit containing 2-4 embryos. You must thin to one plant per cluster or roots will not develop. Eat the thinnings as baby greens.",
    problems: "Leaf miners create blister-like translucent trails inside beet leaves. Remove and destroy affected leaves immediately. Row cover at planting prevents the adult fly from accessing leaves to lay eggs.",
    container: "8-inch deep containers minimum. Standard round beet varieties work well—a 5-gallon bucket grows 12-15 beets. Harvest greens continuously by cutting outer leaves; pull roots at 2-3 inch diameter for best flavor.",
    secondCrop: "Yes—sow spring crop 4 weeks before last frost, then a fall crop in late July to early August in zones 5+. Beets sweetened by light frost rival carrots. Mulch for overwintering in zones 6+.",
  },
  {
    slug: "cabbage", name: "Cabbage", emoji: "🥬",
    indoorWeeksBeforeLastFrost: 6, outdoorWeeksFromLastFrost: -2, method: "Transplant", daysToHarvest: 80,
    hardiness: "Cool-season", spacingInches: 18, sun: "Full sun",
    blurb: "Cool-season heavy feeder. Transplant a couple weeks before last frost.",
    companions: ["onion", "beets", "herbs"], pests: ["cabbage worm", "aphids"],
    tips: "Fertilize heavily with nitrogen early in the growing season—cabbage is one of the heaviest feeders in the garden and depletes soil quickly. Side-dress with compost or fish emulsion every 2 weeks until heads begin forming.",
    problems: "Split heads occur when a dry period is followed by heavy rain or overwatering—the inner leaves grow faster than outer leaves can stretch. Harvest promptly when heads feel firm; if cracking starts, twist the plant to break some roots and slow water uptake.",
    container: "One plant per 5-gallon container. Cabbage needs consistent moisture and heavy feeding in containers. Compact early varieties like 'Golden Acre' or 'Early Jersey Wakefield' are best suited for pots.",
    secondCrop: "Yes—start fall cabbage seeds indoors in early to mid-July in zones 5+. Transplant by mid-August. Fall cabbage often forms tighter, sweeter heads because they mature in cooling weather.",
  },
  {
    slug: "cauliflower", name: "Cauliflower", emoji: "🥦",
    indoorWeeksBeforeLastFrost: 6, outdoorWeeksFromLastFrost: -2, method: "Transplant", daysToHarvest: 75,
    hardiness: "Cool-season", spacingInches: 18, sun: "Full sun",
    blurb: "Fussier brassica that wants steady cool weather. Transplant early.",
    companions: ["beans", "onion", "celery"], pests: ["cabbage worm", "aphids"],
    tips: "Blanch heads by gathering outer leaves and tying them loosely over the developing curd with string or a rubber band when it reaches 2-3 inches across. This keeps the curd snowy white and prevents bitterness.",
    problems: "Buttoning—forming tiny, unusable heads prematurely—is caused by temperature swings, drought stress, or root-bound seedlings. Transplant on time (not late), keep soil consistently moist, and choose stress-tolerant varieties.",
    container: "One plant per 5-gallon pot, but cauliflower is the most challenging brassica for containers. It demands perfectly steady cool temperatures, no check in growth, and consistent moisture from transplant to harvest.",
    secondCrop: "Yes—and fall cauliflower often outperforms spring-planted. Start seeds indoors in early July in zones 5+ and transplant by early August. Heads mature in September-October cooling weather with fewer pest issues.",
  },
];

export const VEG_SLUGS = VEGETABLES.map((v) => v.slug);
export const vegBySlug = (slug: string) => VEGETABLES.find((v) => v.slug === slug);

// ── 日期计算工具 ────────────────────────────────────────────
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseMD(md: string): Date {
  const [mon, day] = md.split(" ");
  const m = MONTHS.indexOf(mon);
  return new Date(2025, m, parseInt(day, 10));
}

function fmtMD(d: Date): string {
  return `${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

function addWeeks(d: Date, weeks: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + Math.round(weeks * 7));
  return r;
}

function addDays(d: Date, days: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + days);
  return r;
}

export interface PlantingWindow {
  startIndoors: string | null;
  transplantOrSow: string;
  harvestFrom: string;
  method: Method;
}

/** 给定区 + 蔬菜，算出具体播种/移栽/收获窗口 */
export function computeWindow(zone: ZoneInfo, veg: Vegetable): PlantingWindow {
  const lastFrost = parseMD(zone.lastFrost);
  const startIndoors =
    veg.indoorWeeksBeforeLastFrost != null
      ? fmtMD(addWeeks(lastFrost, -veg.indoorWeeksBeforeLastFrost))
      : null;
  const outDate = addWeeks(lastFrost, veg.outdoorWeeksFromLastFrost);
  const transplantOrSow = fmtMD(outDate);
  const harvestFrom = fmtMD(addDays(outDate, veg.daysToHarvest));
  return { startIndoors, transplantOrSow, harvestFrom, method: veg.method };
}

export const SITE = {
  name: "PlantingCalendar",
  domain: "plantingcalendar.net",
  url: "https://plantingcalendar.net",
  tagline: "Free Vegetable Planting Calendar by USDA Zone",
};
