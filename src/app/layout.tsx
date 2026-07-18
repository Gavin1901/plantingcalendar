import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// ─── 埋点配置（填上值即自动生效，留空则不渲染）───────────────
// GA4：Google Analytics 后台拿 "G-XXXXXXXXXX"（新站待建后填）
const GA_ID = "G-YV9YXJX3WV";
// GSC：Search Console 加资源→"HTML 标记"验证（新站待建后填）
const GSC_TOKEN = "";
// AdSense：与现有站共用同一发布商号（账号级，不能跨号）
const ADS_CLIENT = "ca-pub-3256422033020643";
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://plantingcalendar.net"),
  ...(GSC_TOKEN ? { verification: { google: GSC_TOKEN } } : {}),
  title: {
    template: "%s | 2026 Planting Guide",
    default: "Planting Calendar by ZIP & USDA Zone 2026 | Frost Dates",
  },
  description:
    "Find your 2026 planting calendar by USDA zone with last frost dates, first frost dates, seed-starting, transplant and harvest windows for 20+ vegetables. Free, printable, no sign-up.",
  keywords: [
    "planting calendar 2026",
    "when to plant tomatoes",
    "vegetable planting calendar",
    "usda zone planting",
    "frost dates 2026",
    "planting schedule by zone",
    "garden calendar",
  ],
  openGraph: {
    title: "Planting Calendar by ZIP & USDA Zone 2026",
    description:
      "Find last frost dates, first frost dates and vegetable planting windows by USDA zone. Free 2026 garden planner for tomatoes, carrots, lettuce, garlic and more.",
    url: "https://plantingcalendar.net",
    siteName: "PlantingCalendar",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  alternates: { canonical: "https://plantingcalendar.net" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {ADS_CLIENT ? <meta name="google-adsense-account" content={ADS_CLIENT} /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PlantingCalendar",
              url: "https://plantingcalendar.net"
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-stone-50 font-sans text-stone-900">
        {children}
        <Footer siteName="PlantingCalendar" domain="plantingcalendar.net" />
        {GA_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        ) : null}
        {ADS_CLIENT ? (
          <Script
            id="adsbygoogle"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}

