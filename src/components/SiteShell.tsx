import Link from "next/link";
import { SITE } from "@/lib/planting";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-bold text-emerald-700">
            <span className="text-xl">🌱</span>
            <span>{SITE.name}</span>
          </Link>
          <nav className="flex gap-4 text-sm text-stone-600">
            <Link href="/frost-dates" className="hover:text-emerald-700">Frost Dates</Link>
            <Link href="/vegetables" className="hover:text-emerald-700">Vegetables</Link>
            <Link href="/zones" className="hover:text-emerald-700">Zones</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-stone-500">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/" className="hover:text-emerald-700">Home</Link>
            <Link href="/vegetables" className="hover:text-emerald-700">All Vegetables</Link>
            <Link href="/zones" className="hover:text-emerald-700">All Zones</Link>
            <Link href="/frost-dates" className="hover:text-emerald-700">Frost Date Calculator</Link>
            <Link href="/privacy-policy" className="hover:text-emerald-700">Privacy</Link>
            <Link href="/terms" className="hover:text-emerald-700">Terms</Link>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-100">
            <p className="font-medium text-stone-700 mb-2">More Free Tools</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <a href="https://freetdee.com" className="hover:text-emerald-700" target="_blank" rel="noopener">TDEE Calculator</a>
              <a href="https://babypercent.com" className="hover:text-emerald-700" target="_blank" rel="noopener">Baby Growth Tracker</a>
              <a href="https://invoicepad.net" className="hover:text-emerald-700" target="_blank" rel="noopener">Invoice Generator</a>
              <a href="https://zoneplan.net" className="hover:text-emerald-700" target="_blank" rel="noopener">Time Zone Planner</a>
              <a href="https://pupvax.com" className="hover:text-emerald-700" target="_blank" rel="noopener">Dog Vaccine Tracker</a>
              <a href="https://livephotokit.com" className="hover:text-emerald-700" target="_blank" rel="noopener">HEIC Converter</a>
              <a href="https://iworkviewer.com" className="hover:text-emerald-700" target="_blank" rel="noopener">iWork Viewer</a>
            </div>
          </div>
          <p className="mt-4">
            © {new Date().getFullYear()} {SITE.name}. Free vegetable planting calendar by USDA zone.
            Dates are regional averages — always check your local frost dates.
          </p>
        </div>
      </footer>
    </div>
  );
}
