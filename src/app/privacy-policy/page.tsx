import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy — PlantingCalendar",
  description: "How PlantingCalendar handles your data. Your selected zone is stored only in your own browser. We use Google Analytics and Google AdSense.",
  alternates: { canonical: "https://plantingcalendar.net/privacy-policy" },
};

export default function Privacy() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-10 prose prose-stone">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().getFullYear()}</p>
        <p>
          PlantingCalendar (plantingcalendar.net) is a free vegetable planting calendar. We respect
          your privacy and collect as little data as possible.
        </p>
        <h2>Your zone selection</h2>
        <p>
          When you select your USDA hardiness zone, it is saved in your browser&apos;s local storage
          so the calendar is ready next time. This data never leaves your device and is not sent to us.
        </p>
        <h2>Analytics</h2>
        <p>
          We use Google Analytics to understand aggregate, anonymous traffic patterns (such as which
          pages are popular). Google Analytics may set cookies. No personally identifying information
          is collected.
        </p>
        <h2>Advertising</h2>
        <p>
          We display ads through Google AdSense. Google and its partners may use cookies to serve ads
          based on your prior visits to this and other websites. You can opt out of personalized
          advertising by visiting Google&apos;s Ads Settings.
        </p>
        <h2>Contact</h2>
        <p>For privacy questions, contact us via the email listed in our domain registration.</p>
      </div>
    </SiteShell>
  );
}
