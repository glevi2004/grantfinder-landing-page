import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Grant Writing Tips & Funding Insights",
  description:
    "Discover grant writing tips, funding strategies, and industry insights to help your organization win more grants. Expert advice from the GrantWare AI team.",
  keywords: [
    "grant writing tips",
    "nonprofit funding",
    "grant application advice",
    "funding strategies",
    "grant management blog",
  ],
  openGraph: {
    title: "GrantWare AI Blog - Grant Writing Tips & Funding Insights",
    description:
      "Discover grant writing tips, funding strategies, and industry insights to help your organization win more grants.",
    type: "website",
  },
  twitter: {
    title: "GrantWare AI Blog - Grant Writing Tips & Funding Insights",
    description:
      "Discover grant writing tips, funding strategies, and industry insights to help your organization win more grants.",
  },
  alternates: {
    canonical: "https://www.grantware.ai/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

