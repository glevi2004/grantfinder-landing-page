import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { BackgroundPatternProvider } from "@/contexts/background-pattern-context";
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
        <ThemeProvider>
          <BackgroundPatternProvider>
            {children}
          </BackgroundPatternProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
