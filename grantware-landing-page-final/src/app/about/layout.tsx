import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind GrantWare AI. Learn about our mission to help organizations win the funding they deserve.",
  openGraph: {
    title: "About GrantWare AI",
    description:
      "Meet the team behind GrantWare AI. Learn about our mission to help organizations win the funding they deserve.",
  },
  alternates: {
    canonical: "https://www.grantware.ai/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

