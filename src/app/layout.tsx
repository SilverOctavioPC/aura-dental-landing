import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dentistas Oaxaca | OdontoCAM",
  description: "Especialistas dentales cerca de ti en Oaxaca. Conoce la excelencia para tu salud bucal.",
  icons: {
    icon: '/favicon.ico', // Assuming default or will need to add one
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased text-gray-600`}
      >
        {children}
      </body>
    </html>
  );
}
