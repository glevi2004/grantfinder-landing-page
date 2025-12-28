import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import { GoogleAnalyticsComponent } from "@/components/google-analytics"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grantware.ai"),
  title: {
    default: "GrantWare AI - Intelligent Grant Discovery & Management",
    template: "%s | GrantWare AI",
  },
  description:
    "Discover, apply, and manage grants with AI-powered automation. Win the funding your organization deserves with GrantWare AI.",
  keywords: [
    "grant management",
    "AI grants",
    "funding discovery",
    "grant writing",
    "nonprofit funding",
    "grant automation",
    "grant search",
    "proposal writing",
    "grant tracking",
  ],
  authors: [{ name: "GrantWare AI" }],
  creator: "GrantWare AI",
  publisher: "GrantWare AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.grantware.ai",
    siteName: "GrantWare AI",
    title: "GrantWare AI - Intelligent Grant Discovery & Management",
    description:
      "Discover, apply, and manage grants with AI-powered automation. Win the funding your organization deserves.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "GrantWare AI - Win funding for your organization faster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrantWare AI - Intelligent Grant Discovery & Management",
    description:
      "Discover, apply, and manage grants with AI-powered automation.",
    images: ["/twitter-image.svg"],
  },
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
  alternates: {
    canonical: "https://www.grantware.ai",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
        <GoogleAnalyticsComponent />
      </body>
    </html>
  )
}
