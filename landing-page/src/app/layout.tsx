import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { BackgroundPatternProvider } from "@/contexts/background-pattern-context";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { geistSans, geistMono, sourceSerif } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "GrantWare AI - AI-Powered Grant Management for K-12 Districts",
  description:
    "Transform your district's grant success with AI-powered discovery, eligibility analysis, and collaborative workspace designed for education leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_URL!}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FE1T0FBYJM');
          `}
        </Script>

        <SmoothScrollProvider>
          <ThemeProvider>
            <BackgroundPatternProvider>{children}</BackgroundPatternProvider>
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
