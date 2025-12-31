"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { HeaderPill } from "@/components/header-pill"
import { FooterSection } from "@/components/footer-section"
import { BLOG_POSTS, type BlogPost } from "../page"

// Helper function to render content with proper formatting
function renderContent(content: string) {
  const paragraphs = content.split("\n\n")
  const elements: React.ReactNode[] = []
  
  paragraphs.forEach((paragraph, index) => {
    // Handle [HEADING] markers
    if (paragraph.startsWith("[HEADING]") && paragraph.endsWith("[/HEADING]")) {
      const headingText = paragraph.replace("[HEADING]", "").replace("[/HEADING]", "")
      elements.push(
        <h3 key={index} className="text-xl font-semibold text-gray-900 mt-8 mb-4">
          {headingText}
        </h3>
      )
      return
    }
    
    // Handle bullet point lists
    if (paragraph.includes("•")) {
      const lines = paragraph.split("\n").filter(line => line.trim())
      elements.push(
        <ul key={index} className="list-disc pl-6 space-y-2 my-4">
          {lines.map((line, i) => (
            <li key={i} className="text-gray-700 leading-relaxed">
              {line.replace("•", "").trim()}
            </li>
          ))}
        </ul>
      )
      return
    }
    
    // Regular paragraph
    if (paragraph.trim()) {
      elements.push(
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      )
    }
  })
  
  return elements
}

function BlogPostContent({ post }: { post: BlogPost }) {
  // Split content for the two-column layout
  const paragraphs = post.content.split("\n\n")
  
  // Get first few paragraphs for the right column (before any headings)
  const introContent: string[] = []
  let remainingStartIndex = 0
  
  for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].startsWith("[HEADING]") || paragraphs[i].includes("•")) {
      remainingStartIndex = i
      break
    }
    introContent.push(paragraphs[i])
    remainingStartIndex = i + 1
  }
  
  // Limit intro to 3 paragraphs max
  const displayIntro = introContent.slice(0, 3)
  const remainingContent = paragraphs.slice(remainingStartIndex).join("\n\n")
  
  // Also include any remaining intro paragraphs in the remaining content
  const extraIntro = introContent.slice(3).join("\n\n")
  const fullRemainingContent = extraIntro ? extraIntro + "\n\n" + remainingContent : remainingContent

  return (
    <main className="min-h-screen relative bg-white">
      {/* Header */}
      <HeaderPill />

      {/* Blog Post Content */}
      <article className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#5b8cff] transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Main Content Grid - Image Left, Title & Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-2 lg:order-1"
            >
              <div className={`relative w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg ${
                post.image.includes("redhat") ? "bg-white aspect-square" : "aspect-[4/3]"
              }`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={`${
                    post.image.includes("redhat") 
                      ? "object-contain p-12" 
                      : "object-cover"
                  }`}
                  priority
                />
              </div>
            </motion.div>

            {/* Right Column - Title & Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 flex flex-col"
            >
              {/* Meta */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-300">|</span>
                <span className="text-[#5b8cff] text-sm font-medium px-2.5 py-1 bg-blue-50 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-[#5b8cff] pl-4">
                {post.description}
              </p>

              {/* Content - First few paragraphs */}
              <div className="prose prose-gray max-w-none">
                {displayIntro.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Remaining Content - Full Width Below */}
          {fullRemainingContent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <div className="prose prose-gray prose-lg max-w-none">
                {renderContent(fullRemainingContent)}
              </div>
            </motion.div>
          )}
        </div>
      </article>

      {/* Footer */}
      <FooterSection />
    </main>
  )
}

function NotFound() {
  return (
    <main className="min-h-screen relative bg-white">
      <HeaderPill />
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-gray-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The article you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#5b8cff] hover:text-blue-700 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
      <FooterSection />
    </main>
  )
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) {
    return <NotFound />
  }

  return <BlogPostContent post={post} />
}
