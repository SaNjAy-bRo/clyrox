import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clyrox | Enterprise Software Consulting — New Jersey",
  description:
    "Clyrox places certified technology professionals and delivers enterprise solutions across ServiceNow, Salesforce, SAP, Multi-Cloud, Oracle, AI/ML, Java, .NET, and more. Deployed within 48 hours.",
  keywords: [
    "enterprise IT consulting",
    "ServiceNow",
    "Salesforce",
    "SAP consulting",
    "IT staffing",
    "New Jersey",
    "cloud consulting",
    "technology staffing",
  ],
  openGraph: {
    title: "Clyrox | Enterprise Software Consulting — New Jersey",
    description:
      "Certified technology professionals and enterprise solutions across 12+ platforms. Deployed within 48 hours.",
    type: "website",
    url: "https://clyrox.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
