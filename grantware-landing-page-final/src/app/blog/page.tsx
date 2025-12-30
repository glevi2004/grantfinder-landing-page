"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { HeaderPill } from "@/components/header-pill"
import { FooterSection } from "@/components/footer-section"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  date: string
  category: string
  image: string
  content: string
}

// Blog posts data
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "sponsored-by-redhat",
    title: "GrantWare AI is Proudly Sponsored by Red Hat",
    description:
      "We're excited to announce our partnership with Red Hat, bringing enterprise-grade open source technology to grant management.",
    date: "Oct 30, 2024",
    category: "Announcement",
    image: "/logos/redhat.svg",
    content: `We are thrilled to announce that GrantWare AI has been selected as a sponsored project by Red Hat, a global leader in enterprise open source solutions.

This partnership represents a significant milestone for our team and validates our mission to transform how organizations discover and manage grant funding through intelligent automation.

Red Hat's sponsorship provides us with access to cutting-edge open source technologies, cloud infrastructure, and mentorship from industry experts. This support enables us to accelerate our development and bring more powerful features to nonprofits and grant-seeking organizations.

"Red Hat's commitment to open source innovation aligns perfectly with our vision of making grant management accessible to all organizations," said Ryan Rodriguez, Co-Founder & CEO of GrantWare AI. "This partnership will help us scale our platform and serve more communities in need."

As part of this collaboration, we'll be leveraging Red Hat's enterprise technologies to ensure our platform delivers the reliability, security, and performance that our users deserve.

We're grateful for Red Hat's support and excited about what this partnership means for the future of grant management. Stay tuned for more updates as we continue to build and improve GrantWare AI.`,
  },
  {
    id: 2,
    slug: "bu-demo-day-second-place",
    title: "GrantWare AI Takes Second Place at Boston University Demo Day",
    description:
      "Our team celebrated an incredible achievement at the BU SPARK! Demo Day, showcasing our AI-powered grant management platform.",
    date: "Dec 20, 2024",
    category: "News",
    image: "/blog/bu-demo-day.jpeg",
    content: `We are proud to share that GrantWare AI placed second at the prestigious Boston University SPARK! Demo Day competition!

This achievement is a testament to our team's dedication, innovative approach, and the real-world impact of our AI-powered grant management platform.

The BU SPARK! program has been instrumental in our journey, providing mentorship, resources, and a collaborative environment that helped us refine our product and business model. Competing alongside talented teams from across the university pushed us to elevate our pitch and demonstrate the true potential of GrantWare AI.

Our demo showcased how our platform helps nonprofits and organizations:
• Discover relevant grant opportunities using AI-powered matching
• Draft compelling proposals with intelligent writing assistance
• Track applications and manage deadlines in one centralized dashboard

The judges were particularly impressed by our user-centric approach and the tangible results our early adopters have experienced.

We want to thank the BU SPARK! team, our mentors, advisors, and everyone who has supported us on this journey. This recognition motivates us to work even harder to deliver a platform that truly makes a difference for grant-seeking organizations.

Congratulations to all the teams who participated—the future of innovation at Boston University is bright!`,
  },
  {
    id: 3,
    slug: "future-of-ai-in-grant-management",
    title: "The Future of AI in Grant Management",
    description:
      "Explore how artificial intelligence is transforming the grant discovery and application process for nonprofits.",
    date: "Dec 31, 2024",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    content: `Artificial intelligence is revolutionizing how organizations approach grant funding, and the impact is only beginning to unfold.

For decades, grant management has been a labor-intensive process requiring countless hours of research, writing, and administrative work. Organizations often miss opportunities simply because they lack the resources to discover and apply for all relevant grants. AI is changing this paradigm.

[HEADING]Intelligent Grant Discovery[/HEADING]

Traditional grant searches involve manually sifting through databases, newsletters, and websites. AI-powered platforms can now analyze an organization's mission, past projects, and eligibility criteria to automatically surface the most relevant opportunities. Machine learning algorithms continuously improve these matches based on application outcomes and user feedback.

[HEADING]Automated Proposal Drafting[/HEADING]

Writing compelling grant proposals requires significant expertise and time. AI writing assistants can now help organizations draft initial proposals, suggest improvements, and ensure compliance with funder requirements. This doesn't replace human creativity—it amplifies it by handling routine elements and freeing teams to focus on strategy.

[HEADING]Predictive Analytics[/HEADING]

AI can analyze historical data to predict which grants an organization is most likely to win, helping teams prioritize their efforts. By understanding patterns in successful applications, organizations can make more informed decisions about where to invest their limited resources.

[HEADING]Compliance and Reporting[/HEADING]

Post-award management is equally transformed. AI can track compliance requirements, generate progress reports, and flag potential issues before they become problems. This reduces administrative burden and helps organizations maintain good standing with funders.

[HEADING]The Human Element Remains Essential[/HEADING]

While AI offers powerful tools, the human element remains irreplaceable. Relationships with funders, compelling storytelling, and mission-driven passion cannot be automated. The most effective approach combines AI efficiency with human insight.

At GrantWare AI, we're building tools that embody this philosophy—augmenting human capability rather than replacing it. The future of grant management is collaborative, intelligent, and accessible to all organizations regardless of size.`,
  },
  {
    id: 4,
    slug: "how-to-find-the-right-grant",
    title: "How to Find the Right Grant for Your Organization",
    description:
      "Discover proven strategies for identifying grants that align with your mission and increase your chances of success.",
    date: "Dec 30, 2024",
    category: "Grant Writing",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    content: `Finding the right grant can feel like searching for a needle in a haystack. With thousands of funding opportunities available, how do you identify the ones that truly fit your organization?

[HEADING]1. Know Your Organization Inside and Out[/HEADING]

Before you start searching, clearly define:
• Your mission and core programs
• Your target population and geographic focus
• Your organizational capacity and track record
• Your specific funding needs and timeline

This clarity helps you quickly evaluate whether a grant is a good fit.

[HEADING]2. Understand Different Grant Types[/HEADING]

Not all grants are created equal:
• Foundation grants often support specific causes or populations
• Government grants tend to be larger but more competitive with extensive reporting requirements
• Corporate grants may align with business interests or CSR initiatives
• Community grants focus on local impact

Each type has different application processes, timelines, and expectations.

[HEADING]3. Use Multiple Search Strategies[/HEADING]

Don't rely on a single source:
• Federal databases (Grants.gov, SAM.gov)
• Foundation directories (Foundation Directory Online, Candid)
• State and local government portals
• Industry-specific grant listings
• AI-powered platforms like GrantWare AI that match opportunities to your profile

[HEADING]4. Evaluate Fit Before Applying[/HEADING]

Ask these questions:
• Does your organization meet all eligibility requirements?
• Is the grant amount appropriate for your project scope?
• Can you meet the deadline with a quality application?
• Do you have the capacity to fulfill reporting requirements?
• Does the funder's priorities align with your work?

[HEADING]5. Build Relationships Before You Apply[/HEADING]

When possible, connect with program officers before submitting. Attend funder webinars, ask clarifying questions, and demonstrate genuine interest in their mission.

[HEADING]6. Track Everything[/HEADING]

Maintain a database of:
• Grants you've researched
• Application deadlines
• Submission status
• Funder feedback

This historical data helps you improve over time and avoid duplicating effort.

[HEADING]7. Don't Chase Funding That Doesn't Fit[/HEADING]

It's tempting to pursue any available funding, but mission drift is real. Prioritize grants that genuinely advance your core work rather than pulling you in new directions.

Finding the right grant takes time and strategy, but the effort pays off in stronger applications and more sustainable funding. Tools like GrantWare AI can accelerate this process by surfacing relevant opportunities based on your organization's unique profile.`,
  },
]

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="flex flex-col gap-4 h-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden">
          {/* Image */}
          <AspectRatio ratio={4 / 3} className="overflow-hidden bg-gray-50">
            <Image
              src={post.image}
              alt={`${post.title} thumbnail`}
              fill
              className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${
                post.image.includes("redhat") ? "object-contain p-8" : "object-cover"
              }`}
            />
          </AspectRatio>

          {/* Content */}
          <div className="flex flex-col gap-3 p-5 pt-0 flex-1">
            {/* Meta */}
            <div className="flex items-center gap-2 text-left">
              <span className="text-gray-500 text-sm">{post.date}</span>
              <span className="text-gray-400 text-sm">·</span>
              <span className="text-[#5b8cff] text-sm font-medium">{post.category}</span>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-[#5b8cff] transition-colors">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {post.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function BlogPage() {
  return (
    <main className="min-h-screen relative bg-white">
      {/* Header */}
      <HeaderPill />

      {/* Blog Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-3.5 py-1.5 mb-6 rounded-full bg-gray-100 border border-gray-200"
          >
            <span className="text-gray-700 text-xs font-medium">Resources</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-gray-900"
          >
            GrantWare Blog
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Insights, tips, and best practices to help you discover funding opportunities and write winning grant applications.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLOG_POSTS.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </main>
  )
}
