import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Footer from "@/components/Footer";
import AutoBreadcrumb from "@/components/AutoBreadcrumb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indiajobs.co"),
  title: "IndiaJobs - Latest Govt & Private Jobs",
  description:
    "Find latest government jobs, private jobs, admit cards, results, answer keys and notifications in one place.",
  viewport: "width=device-width, initial-scale=1",
  verification: {
    google: "ZH5X-_lr8028WFHToifsL83PqtjE7exSdI7Dd-dzjiE",
  },
  keywords: [
    "latest govt jobs",
    "private jobs",
    "sarkari result",
    "indiajobs",
    "railway jobs",
    "ssc jobs",
    "bank jobs",
    "rajupatelbasni",
  ],
  openGraph: {
    title: "IndiaJobs - Latest Govt & Private Jobs",
    description:
      "Find latest government jobs, private jobs, admit cards, results and notifications.",
    url: "https://indiajobs.co",
    siteName: "IndiaJobs",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QL7C4PWPWR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QL7C4PWPWR');
          `}
        </Script>

      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 pt-4">
        <AutoBreadcrumb />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
