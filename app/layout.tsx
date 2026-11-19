import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import { FloatingWA, Footer, MobileBar } from "@/components/Blocks";
import { site } from "@/lib/site";
import "./globals.css";

const display = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"] });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Physiotherapy at Home in Rawalpindi & Islamabad | Home Physio Pro", template: "%s | Home Physio Pro" },
  description: "Expert physiotherapy at home and in clinic across Rawalpindi & Islamabad. Certified physiotherapists, female doctors available, Rs 3,000 per session. Book on WhatsApp.",
  openGraph: { type: "website", siteName: site.name, locale: "en_PK" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: site.name,
  url: site.url,
  telephone: site.phoneIntl,
  email: site.email,
  areaServed: ["Rawalpindi", "Islamabad"],
  priceRange: "Rs 3,000 per session",
  openingHours: "Mo-Su 00:00-23:59",
  medicalSpecialty: "PhysicalTherapy",
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWA />
        <MobileBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
