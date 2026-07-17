import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Terms of Use — PlantingCalendar",
  description: "Terms of use for PlantingCalendar. Planting dates are regional averages provided for general guidance only.",
  alternates: { canonical: "https://plantingcalendar.net/terms" },
};

export default function Terms() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-10 prose prose-stone">
        <h1>Terms of Use</h1>
        <p>Last updated: {new Date().getFullYear()}</p>
        <p>
          By using PlantingCalendar (plantingcalendar.net) you agree to these terms. The site is
          provided free of charge, &quot;as is,&quot; for general gardening guidance.
        </p>
        <h2>Accuracy of dates</h2>
        <p>
          Planting dates, frost dates and harvest estimates are regional averages based on USDA
          hardiness zones. Actual conditions vary by year, elevation and microclimate. We make no
          guarantee of accuracy and are not liable for crop outcomes based on this information.
          Always verify with your local frost dates and conditions.
        </p>
        <h2>Use of content</h2>
        <p>
          You may use the calendars for personal gardening. You may not scrape, republish or resell
          the content in bulk without permission.
        </p>
        <h2>Changes</h2>
        <p>We may update these terms at any time. Continued use means you accept the changes.</p>
      </div>
    </SiteShell>
  );
}
