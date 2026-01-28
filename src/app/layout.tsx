import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";

import { siteContent } from '@/data/site-content';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteContent.general.brandName} ${siteContent.general.brandNameHighlight} - Odontología Integral en Oaxaca`,
    template: `%s | ${siteContent.general.brandName} ${siteContent.general.brandNameHighlight}`
  },
  description: siteContent.hero.subtitle,
  keywords: ["Dentista Oaxaca", "Clínica Dental", "Ortodoncia", "Implantes Dentales", "OdontoPediatra", "Blanqueamiento Dental", "Reforma Oaxaca"],
  authors: [{ name: "Aura Dental Team" }],
  creator: "Aura Dental",
  publisher: "Aura Dental",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://auradental.mx", // Placeholder URL
    title: `${siteContent.general.brandName} ${siteContent.general.brandNameHighlight} - Expertos en Sonrisas`,
    description: siteContent.hero.subtitle,
    siteName: `${siteContent.general.brandName} ${siteContent.general.brandNameHighlight}`,
    images: [
      {
        url: siteContent.hero.image, // Using hero image as OG image
        width: 1200,
        height: 630,
        alt: "Aura Dental Clínica - Oaxaca"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.general.brandName} ${siteContent.general.brandNameHighlight}`,
    description: siteContent.hero.subtitle,
    images: [siteContent.hero.image],
    creator: "@auradental" // Placeholder
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${poppins.variable} font-sans antialiased text-gray-600 overflow-x-hidden`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
