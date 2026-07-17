export interface Competitor {
  slug: string;
  name: string;
  title: string;
  description: string;
  comparison: { feature: string; us: string; them: string }[];
  faq: { q: string; a: string }[];
  bodyHtml: string;
}

export const competitors: Competitor[] = [
  {
    slug: 'almanac-garden-planner',
    name: 'The Old Farmer\'s Almanac Garden Planner',
    title: 'PlantingCalendar vs Almanac Garden Planner: Free USDA Zone Lookup vs $35/Year',
    description: 'The Almanac Garden Planner costs $35/year after a 7-day trial. PlantingCalendar gives you USDA hardiness zone lookup and planting calendar free.',
    comparison: [
      { feature: 'Price', us: 'Free', them: '$35/year (after 7-day trial)' },
      { feature: 'USDA zone lookup', us: 'Instant, free', them: 'Included in planner' },
      { feature: 'Account required', us: 'No', them: 'Yes' },
      { feature: 'Garden layout design', us: 'No — focused on calendar', them: 'Yes — drag-and-drop planner' },
      { feature: 'Planting dates', us: 'By zone, free', them: 'Included' },
    ],
    faq: [
      { q: 'Does PlantingCalendar do garden layout design?', a: 'No — PlantingCalendar focuses on USDA zone lookup and planting dates. For visual garden layout, the Almanac planner is the better tool.' },
      { q: 'How accurate is the USDA zone data?', a: 'PlantingCalendar uses the official USDA Plant Hardiness Zone Map data, updated to the 2023 revision.' },
    ],
    bodyHtml: '<h2>$35/year for a planting calendar</h2><p>The Old Farmer\'s Almanac Garden Planner is a polished visual layout tool with a 7-day free trial — then $35/year. It includes a planting calendar, but you are paying mostly for the drag-and-drop garden design features.</p><p>PlantingCalendar gives you the planting calendar part — USDA zone lookup, first/last frost dates, and planting windows — for free. No trial, no subscription, no registration.</p><h2>When the Almanac makes sense</h2><p>If you are designing raised beds and want a visual drag-and-drop layout with companion planting suggestions, the Almanac planner is worth $35/year. For everyone who just needs to know what to plant and when — PlantingCalendar is fast and free.</p>',
  },
  {
    slug: 'seedtime-garden',
    name: 'Seedtime',
    title: 'PlantingCalendar vs Seedtime: Free Planting Calendar vs $84/Year for Multi-Crop',
    description: 'Seedtime free tier limits you to 1 crop. Unlock full calendar at $84-168/year. PlantingCalendar: all crops, all zones, free.',
    comparison: [
      { feature: 'Price', us: 'Free', them: '1 crop free, $84-168/year' },
      { feature: 'Crop limit', us: 'No limit', them: '1 crop (free), unlimited (paid)' },
      { feature: 'USDA zones', us: 'All zones, free', them: 'Included' },
      { feature: 'Task reminders', us: 'No', them: 'Yes (paid)' },
      { feature: 'Account', us: 'Not needed', them: 'Required' },
    ],
    faq: [
      { q: 'Why does Seedtime cost so much?', a: 'Seedtime is a full garden management platform with task tracking, reminders, and yield logging. It is powerful — but overkill if you just want planting dates.' },
    ],
    bodyHtml: '<h2>One crop free, then pay</h2><p>Seedtime is a comprehensive garden management platform. The free tier gives you one crop. To add more crops and unlock the full calendar, you need Basic ($84/year) or Unlimited ($168/year).</p><p>PlantingCalendar gives you unlimited crops and zones for free. No tiers, no limits.</p><h2>When Seedtime is worth it</h2><p>If you manage a market garden or homestead with dozens of crops and need task scheduling, yield tracking, and harvest logging, Seedtime\'s $168/year is justified. For home gardeners who just want to know when to plant — PlantingCalendar is the lightweight, free alternative.</p>',
  },
  {
    slug: 'planter-garden',
    name: 'Planter',
    title: 'PlantingCalendar vs Planter: Free Browser Tool vs $24.99/Year App',
    description: 'Planter free tier limits you to 1 garden bed. Premium costs $24.99/year. PlantingCalendar: free, browser-based, no app install.',
    comparison: [
      { feature: 'Price', us: 'Free', them: '1 bed free, $24.99/year' },
      { feature: 'Platform', us: 'Browser — any device', them: 'Mobile app (iOS/Android)' },
      { feature: 'Installation', us: 'None', them: 'App download required' },
      { feature: 'Garden beds', us: 'N/A (calendar focus)', them: '1 free, unlimited paid' },
    ],
    faq: [
      { q: 'Is Planter better for visual garden planning?', a: 'Yes — Planter has a visual square-foot gardening layout. PlantingCalendar is better for quick zone/date lookups.' },
    ],
    bodyHtml: '<h2>App vs browser</h2><p>Planter is a mobile app for visual square-foot garden planning. The free version limits you to one garden bed — Premium at $24.99/year removes the limit and adds web access.</p><p>PlantingCalendar is a browser-based tool focused on USDA zone lookup and planting calendar. No app to install, no bed limit because there are no beds — just fast zone and date information.</p><h2>Use both</h2><p>They complement each other: use PlantingCalendar to find your zone and planting dates, then use Planter to lay out the visual garden design.</p>',
  },
];