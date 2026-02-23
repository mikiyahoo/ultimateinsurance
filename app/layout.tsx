import type { Metadata } from "next";
import { Inter, Cabin } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";
import FloatingActions from "@/components/layout/FloatingActions";
import SchemaScripts from "@/components/ui/SchemaScripts";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Ultimate Insurance Brokers Ethiopia - Best Insurance Coverage",
    template: "%s | Ultimate Insurance Brokers Ethiopia"
  },
  description: "Get the best insurance coverage in Ethiopia. Compare motor, health, life, marine insurance quotes from top insurers. Free consultation & instant quotes.",
  keywords: [
    "insurance Ethiopia",
    "3rd party insurance Ethiopia cost",
    "private health insurance Ethiopia",
    "motor insurance Ethiopia",
    "life insurance Ethiopia",
    "marine insurance Ethiopia",
    "insurance brokers Ethiopia",
    "insurance quotes Ethiopia"
  ],
  authors: [{ name: "Ultimate Insurance Brokers" }],
  creator: "Ultimate Insurance Brokers",
  publisher: "Ultimate Insurance Brokers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ET",
    url: "https://www.theultimateinsurance.com",
    title: "Ultimate Insurance Brokers Ethiopia - Best Insurance Coverage",
    description: "Your trusted insurance broker in Ethiopia for motor, health, life, and marine insurance.",
    siteName: "Ultimate Insurance Brokers",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ultimate Insurance Brokers Ethiopia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate Insurance Brokers Ethiopia",
    description: "Your trusted insurance broker in Ethiopia",
    images: ["/images/twitter-image.jpg"],
    creator: "@ultimateinset",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.theultimateinsurance.com",
    languages: {
      "en-ET": "https://www.theultimateinsurance.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ET" className={`${inter.variable} ${cabin.variable}`}>
      <head>
        <SchemaScripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
        {/* Add any verification codes here */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
          <div className="border-neutral-300"></div>
        </main>
        <Footer />
        <StickyCTA />
        <FloatingActions />
      </body>
    </html>
  );
}