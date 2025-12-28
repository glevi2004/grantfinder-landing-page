import type { Metadata } from "next"
import Link from "next/link"
import { HeaderPill } from "@/components/header-pill"
import { FooterSection } from "@/components/footer-section"
import { LegalOutlineRail } from "@/components/legal-outline-rail"
import { LegalOutlineSheet } from "@/components/legal-outline-sheet"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how GrantWare AI collects, uses, and protects your personal information. Your privacy is important to us.",
  openGraph: {
    title: "Privacy Policy | GrantWare AI",
    description:
      "Learn how GrantWare AI collects, uses, and protects your personal information. Your privacy is important to us.",
  },
  alternates: {
    canonical: "https://www.grantware.ai/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderPill />
      <LegalOutlineRail />
      <LegalOutlineSheet />

      <article className="pt-32 pb-16 px-6" data-legal-doc="privacy">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <p className="text-gray-500 text-sm mb-2">GrantWare AI</p>
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500">
              Last updated: November 19, 2025
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            {/* Section 1 */}
            <section id="section-1" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction and Scope
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.1 Who We Are.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Privacy Policy explains how GrantWare AI, Inc. (&quot;GrantWare AI&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, shares, and protects information in connection with our websites, products, and services. GrantWare AI provides an AI-powered, B2B software platform that helps organizations (including K–12 school districts, higher education institutions, nonprofits, and other public- and mission-driven entities) manage and automate parts of their funding workflows, such as finding opportunities, evaluating fit, and drafting grant and RFP responses.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.2 What This Privacy Policy Covers.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Privacy Policy applies to personal data we process when:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>You or your organization visit, access, or use our websites, web applications, or other online properties that link to this Privacy Policy (collectively, the &quot;Sites&quot;);</li>
                <li>You or your organization sign up for, configure, or use our hosted software-as-a-service platform, including associated AI features, APIs, and integrations (collectively, the &quot;Services&quot;); and</li>
                <li>You communicate or interact with us in other ways, such as by email, support requests, surveys, events, or sales and onboarding calls.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Together, we refer to the Sites and Services as the &quot;Platform.&quot;
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Privacy Policy does not apply to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Third-party websites, services, or applications that are linked from the Platform but that we do not operate or control; or</li>
                <li>Our processing of personal data in our capacity as an employer (e.g., information about job applicants, employees, or contractors).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Those activities are governed by separate notices or policies provided by those third parties or by us as applicable.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.3 Relationship to Our Terms of Service and Other Agreements.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your use of the Services is also governed by our Terms of Service (the &quot;ToS&quot;) or another written agreement between GrantWare AI and your organization (for example, a master services agreement, data processing agreement, or student data privacy agreement with a school district). If there is a conflict between this Privacy Policy and those agreements, the terms of the applicable agreement will control to the extent of the conflict for the relevant Services or data set.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.4 Who This Privacy Policy Is For.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Privacy Policy is primarily intended for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Organizational customers and their Authorized Users (e.g., district administrators, grant managers, development staff, or other employees using the Services on behalf of an organization);</li>
                <li>Visitors to our Sites and individuals who interact with us for sales, support, or marketing purposes; and</li>
                <li>Other individuals whose personal data we process in connection with operating our business (for example, contacts at prospective customer organizations).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We design and provide the Services for use by organizations and their staff, not for direct, unsupervised use by students or children in a personal/consumer capacity. Where we process student or other regulated educational data on behalf of a school or district, we do so under the direction of that institution and, where required, under a separate agreement that incorporates applicable student data privacy requirements (for example, FERPA-aligned &quot;school official&quot; arrangements and state K–12 privacy statutes).
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.5 Children&apos;s Privacy.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not knowingly collect personal data directly from children under the age of 13 (or another age as defined by applicable law) through the Sites or for our own independent purposes. Our Services may be used by schools and other institutions that themselves handle student data; in those cases, we rely on the institution to ensure any such use complies with applicable laws (such as FERPA and COPPA) and with any agreements in place between us and the institution. If you believe we have collected personal data from a child in a way that is inconsistent with this paragraph, please contact us using the information in Section 14 (Contact Us), and we will take appropriate steps to investigate and, if necessary, delete the information.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.6 Summary of This Privacy Policy.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To help you understand this Privacy Policy at a glance:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>We collect personal data from you, your organization, your use of the Platform, and certain third parties.</li>
                <li>We use this data to provide and improve the Services, secure the Platform, support your organization, and operate our business.</li>
                <li>We may share data with trusted service providers and subprocessors (such as hosting, AI model, analytics, and payment providers), and with your organization and its administrators, but we do not sell personal data in the sense of a data broker.</li>
                <li>For AI features, we use prompts and related content to generate outputs and improve the Platform, and we configure third-party AI providers not to use your data to train their general models where technically and contractually feasible.</li>
                <li>You and your organization have choices and, in some jurisdictions, legal rights regarding how we use your personal data.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                The rest of this Privacy Policy provides more detail on each of these points.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect a limited set of information in order to provide, secure, and improve the Services. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Information that Customers and Authorized Users provide directly to us;</li>
                <li>Information we automatically collect about how the Services are accessed and used; and</li>
                <li>Information we receive from third parties, such as service providers and integration partners.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                For purposes of this Privacy Policy, &quot;personal information&quot; (or &quot;personal data&quot;) means information that identifies or relates to an identified or identifiable individual. The specific categories we collect depend on how you use the Services (for example, whether you are an Authorized User, a billing contact, or a website visitor).
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Information You Provide to Us</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect personal information that Customers and Authorized Users provide directly to us when they:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Create and manage an account or Organization Workspace.</strong> This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Name and contact details (e.g., email address, job title, organization name);</li>
                <li>Authentication details (e.g., password or SSO identifier, if applicable);</li>
                <li>Role and profile information within the Workspace (e.g., Owner, Admin, Member).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Use the Services.</strong> This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Content entered into the Services, such as prompts, notes, comments, and task assignments;</li>
                <li>Uploaded files and source documents (e.g., grant applications, narratives, budgets, NOFOs/RFPs, strategic plans, spreadsheets);</li>
                <li>Project and workflow information related to funding opportunities and applications.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Communicate with us.</strong> When you contact us by email, in-product chat, support tickets, or participate in user research, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Contact details and any information you choose to provide;</li>
                <li>Feedback, survey responses, and information about your experience with the Services.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Billing and procurement.</strong> For Customers that purchase paid subscriptions, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Billing contact information (name, email, organization, department);</li>
                <li>Purchase order or procurement details;</li>
                <li>Limited payment-related information (for example, last four digits of a payment card) as needed for invoicing and records.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Full payment card details are processed by our third-party payment processor and are not stored by GrantWare AI.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.3 Information We Collect Automatically</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you access or use the Services, we automatically collect certain information about your device and usage (&quot;Usage Data&quot;), which may include personal information. This typically includes:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Device and technical information.</strong> Such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>IP address and approximate geolocation (at the city or region level);</li>
                <li>Browser type and version, operating system, device identifiers;</li>
                <li>Language and time zone settings.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Usage and activity information.</strong> Such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Log data about how you access and use the Services (e.g., pages viewed, features used, buttons clicked, date and time of access);</li>
                <li>Workspace and account identifiers associated with your actions;</li>
                <li>Performance and error information (e.g., crashes, loading times, error messages).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Cookies and similar technologies.</strong> We and our service providers may use cookies, web beacons, local storage, and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Keep you signed in and maintain session security;</li>
                <li>Remember your preferences and settings;</li>
                <li>Understand how the Services are used and improve performance and design;</li>
                <li>Measure the effectiveness of communications and outreach.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where required by applicable law, we will obtain any necessary consent for the use of non-essential cookies and provide options to manage your cookie preferences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We generally use Usage Data in de-identified or aggregated form for analytics, security, and service improvement purposes. When Usage Data is linked to an identifiable individual, we treat it as personal information.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.4 Information We Receive from Third Parties</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may receive personal information about Customers and Authorized Users from:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Single sign-on (SSO) and identity providers.</strong> If your organization enables SSO (e.g., Google Workspace, Microsoft Entra ID), we may receive:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Your name, email address, unique identifier, and any attributes configured by your organization&apos;s identity administrator.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Integration partners and Third-Party Services.</strong> If you enable an integration or connect a Third-Party Service (for example, a data source or productivity tool) to the Services, we may receive the categories of data that you or your organization authorize that service to share with us. The scope and type of information depend on the integration and your organization&apos;s configuration.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Service providers and analytics partners.</strong> We may receive limited information from vendors that provide us with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Fraud prevention, security, and abuse-detection services;</li>
                <li>Analytics and measurement about how users interact with our website or product;</li>
                <li>Customer support or communications tools (e.g., email service providers).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Referrals and outreach.</strong> We may receive contact information and related details if someone at your organization or a partner refers you to us, or if your information is publicly available in the context of your role at an organization (for example, district grants office contact information on a public website).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In all such cases, the information we receive is governed by this Privacy Policy once it is in our possession. The third parties&apos; own privacy policies govern their separate use of information.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.5 Customer Content and AI Outputs</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As described in the Terms of Service:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Customer Content</strong> includes the data, documents, files, and other materials that Customers and Authorized Users upload or input into the Services (for example, grant narratives, budgets, NOFOs/RFPs, internal plans, and prompts). Customer Content may contain personal information about employees, partners, or other individuals, depending on what the Customer chooses to submit.</li>
                <li><strong>AI Outputs</strong> are the draft content, summaries, recommendations, and other materials generated by the AI features in response to Customer prompts and interactions. AI Outputs may incorporate or reflect elements of Customer Content and may also contain personal information depending on how the Services are used.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI processes Customer Content and AI Outputs solely in accordance with the Customer&apos;s instructions and our Terms of Service, this Privacy Policy, and any applicable data protection agreement. Customers are responsible for ensuring that Customer Content and AI Outputs they submit or generate through the Services comply with applicable laws and internal policies.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.6 Aggregated and De-Identified Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may create aggregated, anonymized, or de-identified datasets derived from Customer Content, AI Outputs, and Usage Data. When we do so, we take reasonable steps to remove or modify personal identifiers so that individuals are not reasonably identifiable. We may use and share such aggregated or de-identified information for purposes such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Improving and developing the Services and AI features;</li>
                <li>Benchmarking and analytics about funding workflows and platform usage;</li>
                <li>Publishing insights about trends in funding opportunities and workflow efficiency (for example, typical timelines or common bottlenecks), without identifying specific Customers or individuals.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not attempt to re-identify individuals from aggregated or de-identified information, and we contractually restrict our service providers from doing so.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.7 Special Considerations for Student and Other Regulated Data</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Services are not designed by default to store or process highly sensitive or regulated personal data such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>K–12 student education records governed by FERPA or similar state laws;</li>
                <li>Protected health information under HIPAA;</li>
                <li>Payment card data regulated under PCI-DSS; or</li>
                <li>Government-issued identifiers and other highly sensitive personal identifiers, except as strictly necessary for billing or account security.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                If a Customer enters into a separate student data privacy agreement, data processing agreement, or similar contract with us that expressly permits the processing of specific categories of regulated data, that agreement will govern how we handle such data, including any additional security, retention, and deletion commitments. Customers are responsible for avoiding the upload of regulated data to the Services unless such an agreement is in place and for complying with applicable legal requirements for that data.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Personal Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the personal information we collect for the purposes described below. In many cases, we use the information because it is necessary to provide the Services to your organization; in others, because it supports our legitimate business interests (such as improving and securing the Platform) or because we are required to do so by law.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 To Provide and Operate the Services</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use personal information to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Create and manage accounts, Organization Workspaces, roles, and permissions;</li>
                <li>Authenticate users, maintain sessions, and enable single sign-on where configured;</li>
                <li>Process and store Customer Content and AI Outputs so that your organization can manage funding workflows, collaborate, and keep records; and</li>
                <li>Provide core product functionality, including search, opportunity tracking, workflows, and AI-assisted drafting and analysis.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Without this processing, we would not be able to deliver the Services you or your organization request.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 To Provide Support and Communicate With You</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use contact, account, and usage information to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Respond to support tickets, technical issues, and other requests;</li>
                <li>Communicate about changes to the Services, planned maintenance, and security or incident notices; and</li>
                <li>Collect feedback, run surveys, and conduct user research to understand how we can improve the Platform.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                These communications are typically transactional or service-related and are not promotional in nature.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 To Secure the Platform and Prevent Abuse</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use personal information and Usage Data to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Monitor for, detect, and prevent fraud, abuse, or security incidents;</li>
                <li>Protect the integrity and availability of the Services and our infrastructure;</li>
                <li>Enforce our Terms of Service, Acceptable Use rules, and other policies; and</li>
                <li>Investigate and respond to suspicious activity or alleged violations.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                This includes analyzing logs, IP addresses, and usage patterns to help identify potential misuse or threats.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.4 To Improve and Develop the Services and AI Features</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use personal information, Customer Content, AI Outputs, and Usage Data—often in aggregated or de-identified form—to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Understand how features are used and where users struggle, so we can improve usability and performance;</li>
                <li>Develop new features, workflows, and integrations that better support funding teams;</li>
                <li>Train, evaluate, and refine AI models and heuristics used within the Platform, where permitted by law and by our agreements with Customers; and</li>
                <li>Generate non-identifying analytics and benchmarks about funding workflows (for example, typical application timelines or common bottlenecks), without naming specific organizations or individuals.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where we rely on third-party AI providers, we configure those providers, where contractually and technically feasible, not to use Customer data submitted through our Services to train their general-purpose models, and instead to use it only to provide the requested outputs and maintain their services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.5 For Business Operations, Billing, and Administration</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use personal and organizational information to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Manage subscriptions, invoicing, purchase orders, and collections;</li>
                <li>Maintain business and financial records, including for audits and tax purposes;</li>
                <li>Plan and forecast capacity, including infrastructure usage and support staffing; and</li>
                <li>Manage our relationships with customers, prospects, partners, and vendors.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                This processing is necessary to operate GrantWare AI as a business and to honor our contractual commitments.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.6 For Marketing, Outreach, and Engagement (Not K–12 Student-Level)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use contact and usage information about adult users (e.g., district staff, university staff, nonprofit staff) to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Send product updates, feature announcements, and invitations to demos, webinars, or events;</li>
                <li>Share resources and case studies relevant to grant and funding teams; and</li>
                <li>Tailor outreach based on role, organization type, or high-level usage patterns (for example, whether an organization is actively using certain modules).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can opt out of non-essential marketing emails by using the unsubscribe link in those emails or by contacting us as described in this Privacy Policy. We do not use K–12 student-level personal data, where processed on behalf of a school or district, for our own independent marketing or advertising purposes.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.7 To Comply With Law and Enforce Our Rights</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use personal information as we reasonably believe necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Comply with applicable laws, regulations, and legal processes (such as responding to subpoenas, court orders, or lawful requests from authorities);</li>
                <li>Address compliance obligations specific to public-sector or education customers (for example, record-keeping or audit requirements);</li>
                <li>Protect our rights, property, and safety, and those of our users, customers, or the public; and</li>
                <li>Establish, exercise, or defend legal claims.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.8 Legal Bases for Processing (Where Applicable)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where required by certain laws (such as GDPR-like frameworks), we rely on different legal bases to process personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Contract performance</strong> – when processing is necessary to provide the Services under our agreement with your organization;</li>
                <li><strong>Legitimate interests</strong> – such as operating, improving, and securing the Platform, communicating with adult users about relevant updates, and defending our legal rights, provided those interests are not overridden by your rights and interests;</li>
                <li><strong>Consent</strong> – where we ask for it explicitly (for example, certain cookies or optional communications, where required by law); and</li>
                <li><strong>Legal obligations</strong> – when we must retain or disclose information to comply with applicable law.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                When your organization serves as the controller of your personal information (for example, a school district or university using GrantWare AI), we act as a processor/service provider and rely on that organization to determine and communicate the applicable legal bases and notices to its end users.
              </p>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Cookies and Similar Technologies
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 What Are Cookies and Similar Technologies?</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We and our service providers use cookies and similar technologies to operate and improve the Sites and Services. &quot;Cookies&quot; are small text files placed on your device that store information about your visit. We may also use pixel tags, local storage, and similar technologies that help us recognize your browser or device and understand how you interact with the Platform.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Types of Cookies We Use</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We generally use the following categories of cookies and similar technologies:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Strictly necessary cookies.</strong> These are essential for the Platform to function properly and cannot be switched off in our systems. They are typically set in response to actions you take, such as logging in, setting preferences, or filling in forms. Without these cookies, some parts of the Services may not work correctly.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Functional cookies.</strong> These help us remember your preferences and settings (such as language, organization, or last used workspace) so that the Services are more tailored and convenient when you return.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Analytics and performance cookies.</strong> These collect information about how the Platform is used—for example, which pages or features are accessed most often, how long users spend in certain views, and how they navigate the product. We use this information in aggregated form to understand usage patterns, diagnose issues, and improve the design and performance of the Services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Optional / marketing cookies (limited).</strong> On our marketing Sites (not in the core app), we may use cookies or similar technologies to understand which content is most useful and to measure the effectiveness of outreach and campaigns (for example, whether someone visited our site after clicking a link in an email). We do not use cookies to serve targeted ads to K–12 students or to build advertising profiles around student-level data.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The specific cookies and providers we use may change over time as we improve and update the Platform.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.3 How We Use Information from Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Information collected through cookies and similar technologies may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Device and browser information (such as IP address, operating system, browser type);</li>
                <li>Usage data (such as pages viewed, links clicked, time spent, and feature usage);</li>
                <li>Session identifiers and authentication tokens (to keep you signed in and secure your account).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use this information to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Operate and secure the Sites and Services;</li>
                <li>Maintain your login session and keep your Workspace functioning as expected;</li>
                <li>Understand usage trends and improve functionality, performance, and user experience; and</li>
                <li>Measure and improve the effectiveness of our communications and outreach.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                When we use analytics tools, we typically configure them to focus on aggregated usage patterns rather than tracking individual behavior across unrelated sites.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.4 Your Choices and Controls</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have several options for managing cookies and similar technologies:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Browser settings.</strong> Most web browsers allow you to control cookies through their settings (for example, to block or delete cookies). If you choose to block all cookies, some features of the Services may not function properly.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>In-product or site controls (where available).</strong> Where required by law, we may present a cookie banner or preferences tool on our Sites that allows you to accept or reject certain categories of cookies (such as analytics cookies) while allowing strictly necessary cookies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Email tracking.</strong> We may use standard industry techniques to know if an email was opened or a link was clicked. You can opt out of marketing emails by using the unsubscribe link in those emails or contacting us as described in this Privacy Policy.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.5 Do Not Track and Global Privacy Controls</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Some browsers offer &quot;Do Not Track&quot; (&quot;DNT&quot;) or similar signals or settings that are intended to indicate a user&apos;s preference regarding tracking. Our Sites do not currently respond to DNT signals. Where required by law, we will treat browser- or device-level signals that constitute valid opt-out preferences (such as certain Global Privacy Control signals) in accordance with applicable regulations.
              </p>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. How We Share Personal Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell personal information in the sense of a data broker, and we do not share personal information with third parties for their own independent advertising or commercial purposes, as those terms are defined under laws like the CCPA/CPRA.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We share personal information only in the limited circumstances described below.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Service Providers and Subprocessors</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We share personal information with trusted third parties that perform services on our behalf (&quot;Service Providers&quot; or &quot;Subprocessors&quot;), such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Cloud hosting and infrastructure providers;</li>
                <li>Database, authentication, and backup providers (e.g., managed Postgres / Supabase-style services);</li>
                <li>AI model providers that process prompts and related content to generate AI Outputs;</li>
                <li>Email, notification, and in-product messaging tools;</li>
                <li>Logging, monitoring, and analytics vendors;</li>
                <li>Payment processors and billing tools;</li>
                <li>Customer support and CRM tools.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Service Providers are permitted to access personal information only as needed to provide their services to us, must protect it appropriately, and are contractually restricted from using it for their own independent purposes (beyond limited, lawful exceptions such as fraud prevention or legal compliance).
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Sharing Within Your Organization</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Because GrantWare AI is a B2B platform, information is shared within each customer&apos;s own Organization Workspace:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Authorized Users in your Workspace (e.g., district grants staff, central office, development team members) may see Customer Content, AI Outputs, and related metadata consistent with the roles and permissions configured by your organization (Owner/Admin/Member).</li>
                <li>Workspace owners and admins may have additional visibility and control, such as access to configuration, usage data, logs, and user management.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your organization controls who is invited to a Workspace and how access and roles are assigned.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.3 AI Model and Infrastructure Providers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you use AI features, we send prompts and relevant context (which may include limited portions of Customer Content) to AI model and infrastructure providers to generate AI Outputs. These providers act as Service Providers / processors for us and are contractually required to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Use the data only to provide the requested outputs and maintain or secure their services; and</li>
                <li>Protect the data with appropriate technical and organizational measures.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where contractually and technically feasible, we configure third-party AI APIs so that Customer data sent through our Services is not used to train or improve their general-purpose models, and instead is processed only to deliver outputs and maintain their services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.4 Business Transfers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share or transfer personal information in connection with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>A merger, acquisition, consolidation, reorganization, sale of assets, financing, or similar transaction involving GrantWare AI; or</li>
                <li>Steps in contemplation of such transactions (e.g., due diligence).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                If a transaction occurs, the successor entity will be bound by obligations that are materially consistent with this Privacy Policy with respect to previously collected personal information, or we will notify you and your organization of any material changes and choices you may have.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.5 Legal, Safety, and Compliance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may disclose personal information to third parties (including public authorities) if we reasonably believe that such disclosure is:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Required by law, regulation, or legal process (such as a subpoena, court order, or government request);</li>
                <li>Necessary to protect the rights, property, or safety of GrantWare AI, our users, customers, or the public;</li>
                <li>Necessary to detect, prevent, or investigate fraud, abuse, security incidents, or other harmful activity; or</li>
                <li>Appropriate to enforce our agreements and policies, including our Terms of Service.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where legally permitted and reasonably practicable, we will provide notice to the affected customer before disclosing Customer Content or other organizational data in response to a legal request so that they may seek to limit or challenge the request.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.6 Student Data and Public-Sector Customers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When we work with K–12 school districts or other education institutions and receive student-level or other regulated education records, we do so only under the direction of the institution and, where required, under a separate contract that treats us as a &quot;school official&quot; / service provider with a legitimate educational interest under FERPA or similar state laws.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In those cases:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>We do not use student education records for our own independent marketing or advertising;</li>
                <li>We do not sell or &quot;share&quot; student education records with third parties for their own purposes; and</li>
                <li>We do not re-disclose student education records except as permitted by the applicable agreement or law (for example, to approved subprocessors bound by FERPA-aligned confidentiality obligations).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                If there is any conflict between this Privacy Policy and a signed student data privacy agreement or data processing agreement with an institution, the terms of that agreement will control for student and other covered data.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.7 Aggregated and De-Identified Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share aggregated, anonymized, or de-identified information (for example, statistics about overall usage patterns, typical grant timelines, or commonly used workflow steps) with third parties such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Customers and prospective customers;</li>
                <li>Research or policy organizations;</li>
                <li>Partners and service providers.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                When we do so, the information is designed not to identify any specific individual or organization, and we prohibit third parties from attempting to re-identify individuals from such datasets.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.8 With Your Direction or Consent</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share personal information with other third parties when:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>You or your organization explicitly ask us to do so (for example, enabling a particular integration or sending data to a specified vendor); or</li>
                <li>You otherwise provide consent in the context of a specific feature or workflow.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Any such sharing will be limited to what is reasonably necessary to fulfill the requested action.
              </p>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Data Retention
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 How Long We Keep Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain personal information for as long as reasonably necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Provide the Services to your organization and maintain your Organization Workspace;</li>
                <li>Comply with our legal, regulatory, and audit obligations;</li>
                <li>Resolve disputes, enforce our agreements, and protect our rights; and</li>
                <li>Support the legitimate business purposes described in this Privacy Policy.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                The specific retention period can vary depending on the type of data and the context in which it was collected (for example, whether it is account-level information, Customer Content in an active Workspace, or log/analytics data).
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Customer Accounts and Workspace Data</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For data associated with an active customer account (such as account profiles, Workspace configuration, and Customer Content):
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>We generally retain this data for the duration of the subscription or pilot term, so that your organization and Authorized Users can continue using the Services.</li>
                <li>When a subscription or pilot ends, we provide an export window (as described in our Terms of Service) during which your organization may export or download eligible Customer Content. After that window, we have no obligation to continue storing or providing access to Customer Content, and we may delete or anonymize it from active systems within a commercially reasonable timeframe, subject to Sections 6.3 and 6.4 below.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your organization is responsible for maintaining its own copies of records it needs to retain under applicable laws, grantor rules, or internal policies.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.3 Logs, Analytics, and Usage Data</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain log files, analytics data, and similar Usage Data for a period that is appropriate for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Operating and improving the Services;</li>
                <li>Monitoring performance and diagnosing technical issues;</li>
                <li>Detecting and investigating security incidents and abuse; and</li>
                <li>Producing aggregated, de-identified metrics about platform usage and funding workflows.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where possible, we de-identify or aggregate this information so that individuals are no longer reasonably identifiable, and we may retain and use such de-identified or aggregated data for longer periods for analytics, benchmarking, and product improvement.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.4 Backups and Business Continuity</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer Content and other personal information may continue to exist for a limited time in backup and archival systems after it has been deleted or anonymized from our active systems. These backups are maintained for business continuity and disaster recovery purposes and are automatically overwritten on a rolling basis. During the backup retention period, we protect this data with the same security controls described in this Privacy Policy and do not use it for active product features or analytics.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.5 Retention for Legal, Regulatory, and Contractual Obligations</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may retain certain records for longer periods where necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Comply with applicable laws and regulations (for example, tax, accounting, or public-sector record-keeping requirements);</li>
                <li>Respond to subpoenas, court orders, or other legal processes;</li>
                <li>Cooperate with audits or investigations; or</li>
                <li>Establish, exercise, or defend legal claims.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                When we retain data for these purposes, we limit access to those who have a need to know and use the data only for the purposes for which it was retained.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.6 Retention of Student and Other Regulated Data</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where we process student education records or other regulated data on behalf of a school district or other institution under a separate data processing agreement or student data privacy agreement, our retention and deletion of that data will follow the terms of that agreement. Typically, this means we retain such data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Only for as long as necessary to provide the Services as instructed by the institution; and</li>
                <li>For any additional retention period specified in the applicable agreement or required by law.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                When the agreement ends or the institution requests deletion, we will delete or anonymize covered student or regulated data from our active systems in accordance with that agreement, subject to any retention required for legal or audit reasons and the backup considerations described above.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.7 Deletion Requests</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your organization (as the customer) may request deletion of certain data via the in-product controls or by contacting us using the information in this Privacy Policy. We will respond to such requests within a reasonable time and in accordance with our legal and contractual obligations. In some cases, we may be unable to fully delete specific records because:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>The data is required to maintain the functionality or integrity of the Services for other users in your Workspace;</li>
                <li>We are required by law or regulation to retain it; or</li>
                <li>It resides in backup or archival systems that will be overwritten in the ordinary course of business.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where we cannot fully delete data, we will limit its use to the purposes that justify its continued retention (for example, legal compliance or security).
              </p>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. AI Features, Model Providers, and Data Use for Training
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.1 How AI Features Work</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Services include AI-powered features (&quot;AI Features&quot;) that generate, transform, summarize, and analyze content to assist your organization with funding workflows (for example, drafting grant narratives, summarizing RFPs, or suggesting checklists). When you or your Authorized Users use AI Features:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>We process the prompts and instructions you provide;</li>
                <li>We may include relevant portions of Customer Content (such as grant documents, notes, or uploaded files) as context; and</li>
                <li>We send that information to AI models to generate AI Outputs, which are then returned to your Workspace.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                The specific inputs and outputs depend on how you configure and use the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.2 Information Sent to AI Model Providers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To provide AI Features, we may send the following types of information to AI model and infrastructure providers, acting as our service providers / subprocessors:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Prompts, questions, and other text that you or your Authorized Users enter into AI Features;</li>
                <li>Selected portions of Customer Content that are reasonably necessary to provide relevant context (for example, sections of an RFP or a prior grant narrative);</li>
                <li>Limited technical and usage metadata (such as timestamps, request IDs, or model parameters) needed to operate and secure the AI Features.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not intentionally send entire Workspaces or unnecessary data to AI model providers. We design our integrations to send the minimum amount of information needed to generate useful outputs.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.3 Third-Party AI Providers as Service Providers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We rely on third-party AI model providers and related infrastructure vendors to run AI Features. These providers act as service providers / processors on our behalf. We require them, via contract, to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Use the data we send only to provide the requested outputs, maintain or secure their services, and comply with applicable law;</li>
                <li>Implement appropriate technical and organizational measures to protect the data; and</li>
                <li>Not use the data for their own independent advertising or marketing.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where contractually and technically feasible, we configure third-party AI APIs so that Customer data sent through our Services is not used to train or improve their general-purpose models that are offered to other customers.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.4 How We Use Data to Improve AI Features</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use information generated through the AI Features to improve the Platform and our models, in ways that respect organizational control and privacy:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>We may analyze prompts, AI Outputs, error patterns, and usage metrics to debug issues, reduce hallucinations, and improve quality and reliability.</li>
                <li>We primarily do this using aggregated or de-identified data so that individual users and organizations are not reasonably identifiable.</li>
                <li>We may use internal models or heuristics (for example, ranking or routing logic) that are trained or tuned using such aggregated or de-identified information.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not use K–12 student education records, where processed under a separate student data privacy agreement, to train general-purpose models for our own benefit beyond what is permitted by that agreement and applicable law.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.5 Organization Controls and Configuration</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your subscription and product configuration, your organization may have controls related to AI Features, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Enabling or disabling certain AI Features for specific Workspaces or roles;</li>
                <li>Selecting among supported AI model providers, where multiple options are available;</li>
                <li>Setting internal policies about which types of information may be used with AI Features (for example, restricting certain sensitive documents from being used as prompts).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your organization is responsible for configuring these options in line with its own legal, procurement, and data governance requirements, and for training Authorized Users on appropriate use of AI Features.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.6 AI Limitations and User Responsibilities</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI Features may sometimes generate outputs that are inaccurate, incomplete, or biased, or that reflect limitations of training data or model behavior. As described in our Terms of Service:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>AI Outputs are intended as drafting aids and decision-support tools, not final or authoritative content;</li>
                <li>Your organization and its Authorized Users are responsible for reviewing, verifying, and approving AI Outputs before using them in grant applications, reports, or other communications; and</li>
                <li>You should avoid entering highly sensitive or regulated personal data into AI prompts unless your organization has determined that doing so is appropriate and consistent with its legal and contractual obligations.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                For additional information about AI limitations and risk allocation, please see the &quot;AI Features, AI Outputs, and No Advice / No Funding Guarantees&quot; and &quot;Limitation of Liability&quot; sections of our Terms of Service.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.7 Relation to Customer Content and Ownership</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As described in the Terms of Service:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Your organization retains ownership of Customer Content and may choose to use, modify, or incorporate AI Outputs into its own work product.</li>
                <li>We retain ownership of the underlying models, algorithms, and AI Features used to generate AI Outputs.</li>
                <li>We may continue to use aggregated or de-identified information derived from Customer Content, AI Outputs, and usage patterns to improve the Services, even after an account is closed, provided that this information does not reasonably identify your organization or individual users.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about how AI Features interact with your organization&apos;s data, or if you need district- or institution-specific commitments around AI data use, please contact us using the information in Section 14 (Contact Us).
              </p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. International Data Transfers
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.1 Primary Processing Locations</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI is based in the United States, and the personal information we collect is generally processed and stored in the United States and in other countries where our Service Providers and Subprocessors operate. These locations may have privacy and data protection laws that differ from those in your jurisdiction.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.2 Transfers by Organizational Customers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Because GrantWare AI is a B2B platform, our primary relationship is with your organization (for example, a school district, university, or nonprofit). When your organization chooses to use the Services, it is directing us to process personal information in the United States and in other countries where our infrastructure and vendors are located. Your organization is responsible for ensuring that its use of the Services and any related data transfers comply with applicable laws in its jurisdiction.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.3 Safeguards for International Transfers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Where we transfer personal information from one country to another, we take steps designed to protect the information in accordance with this Privacy Policy and applicable law, which may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Using contracts with our Service Providers and Subprocessors that require appropriate protections for personal information;</li>
                <li>Implementing standard contractual clauses or similar approved transfer mechanisms for transfers from certain jurisdictions (such as the EU/EEA, the UK, or Switzerland), where applicable; and</li>
                <li>Evaluating the privacy and security practices of key vendors before onboarding them as Subprocessors.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you would like more information about the specific safeguards we use for a particular transfer, your organization may contact us using the information in Section 14 (Contact Us).
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.4 Regional-Specific Provisions (EU/UK/Other Jurisdictions)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If we offer the Services to organizations established in the European Economic Area (EEA), the United Kingdom (UK), or Switzerland, and we act as a processor/service provider on their behalf, we will enter into appropriate data processing and transfer agreements with those organizations and their relevant affiliates, which may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Standard contractual clauses or their UK/Swiss equivalents; and</li>
                <li>Additional technical, contractual, or organizational measures, as appropriate.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Those agreements will govern our processing and transfer of personal data on behalf of those organizations to the extent they conflict with this Section.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.5 Cross-Border Transfers Within Your Organization</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In some cases, your own organization may access or export data from the Services across borders (for example, if staff in different countries share access to the same Workspace). In those cases, your organization is responsible for ensuring such cross-border access and transfers comply with its own policies and applicable law, including any notice and consent requirements that apply to the individuals whose personal information is involved.
              </p>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Security
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Our Approach to Security</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use a combination of technical, organizational, and administrative measures designed to protect personal information and Customer Content against unauthorized access, loss, misuse, alteration, or destruction. These measures are tailored to the nature of the information we process and the risks associated with our Platform.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.2 Technical and Organizational Measures</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                While our specific measures may evolve over time, they generally include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Encryption in transit over public networks using industry-standard protocols (such as HTTPS/TLS);</li>
                <li>Access controls and authentication, including role-based access to production systems and the Services, and limiting access to personnel with a business need to know;</li>
                <li>Segregation of environments (for example, separating production from testing and development);</li>
                <li>Logging and monitoring of access to systems and services that store or process personal information and Customer Content; and</li>
                <li>Internal policies and training for staff regarding security, privacy, and acceptable use of customer data.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We periodically review our security practices and may update or enhance them as technology and threats evolve, provided that such changes do not materially reduce the overall level of protection for personal information and Customer Content.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.3 Your Responsibilities</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Security is a shared responsibility. Your organization and Authorized Users are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Keeping account credentials, SSO configurations, and API keys secure and not sharing them with unauthorized individuals;</li>
                <li>Configuring roles, permissions, and Workspace settings appropriately for your team;</li>
                <li>Promptly disabling or adjusting access for users who change roles or leave your organization; and</li>
                <li>Maintaining appropriate security controls on your own systems, networks, and devices that access the Services.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are not responsible for security issues arising from your failure to implement reasonable safeguards on your side or to follow best practices described in our documentation.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.4 Security Incidents</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If we become aware of a confirmed Security Incident involving personal information or Customer Content in our possession or control, we will:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Investigate the incident and take reasonable steps to contain, mitigate, and remediate its effects; and</li>
                <li>Notify the affected customer organization without undue delay, consistent with applicable law and any contractual commitments (for example, in a data processing or student data privacy agreement).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our notification will include information we are reasonably able to share at the time (such as the nature of the incident and steps taken), and we may provide additional updates as our investigation continues. Your organization is responsible for determining whether to notify individuals, regulators, or other third parties about the incident and for meeting any such obligations, except to the extent otherwise agreed in writing.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.5 No Guarantee of Perfect Security</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we work hard to protect the Platform, no method of transmission over the internet or method of electronic storage is 100% secure. Accordingly, we cannot guarantee absolute security of any information transmitted to or stored in the Services. If you believe that your account or interaction with us is no longer secure (for example, if you suspect that your password or account has been compromised), please contact us immediately using the information in Section 14 (Contact Us).
              </p>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Student Data, K–12, and Public-Sector Customers
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.1 GrantWare AI&apos;s Role with Education Customers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Many of our organizational customers are K–12 school districts, higher education institutions, and other public- and mission-driven entities that may handle regulated personal data as part of their funding activities. When those customers use the Services, they may be subject to federal and state education privacy laws, including the Family Educational Rights and Privacy Act (FERPA), state student data privacy laws, and state procurement requirements.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                When we process personal data on behalf of these customers, we do so under the direction of the customer organization (typically as a &quot;school official&quot; under FERPA or as a service provider/processor under contract), consistent with any data processing or student data privacy agreement we have entered into with that customer.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.2 What Is Student Data?</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In this context, &quot;Student Data&quot; generally refers to personal information from education records that is provided by or on behalf of a K–12 school district, higher education institution, or other educational agency, and that is regulated under FERPA or similar state laws. Depending on the state, this may include student names, demographic information, academic records, and other data elements defined by state student data privacy statutes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not require customers to provide Student Data to use the Platform, and we do not design the Services to be a primary system of record for such data. However, customers may choose to include limited aggregate or de-identified student-related information (for example, demographic summaries or program outcome statistics) in grant applications or related materials, and we process such content as Customer Content under the terms of our agreements.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.3 Student Data Privacy Agreements and State Compliance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If your organization is a K–12 school district, educational agency, or state education entity that requires a separate student data privacy agreement, state-specific data protection addendum, or compliance attestation (for example, an agreement under the California Student Privacy Pledge, Colorado CDE data privacy requirements, or other state-specific frameworks), please contact us at the address in Section 14 (Contact Us).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are committed to working with education customers to execute the agreements and complete the vendor review processes required by your jurisdiction.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.4 Limitations on Use of Student Data</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the extent we process Student Data (as defined above) on behalf of a customer under a separate student data privacy agreement:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>We will process such Student Data only in accordance with the written instructions of the customer and the terms of that agreement, consistent with our obligations under FERPA and applicable state law;</li>
                <li>We will not use Student Data for targeted advertising, profiling, or to build profiles for non-educational purposes;</li>
                <li>We will not sell, rent, or disclose Student Data to third parties except as permitted by the agreement, required by law, or directed by the customer; and</li>
                <li>We will provide customer with reasonable access to Student Data and support for requests to correct, delete, or export that data, as described in the agreement and our ToS.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                These commitments apply specifically to information regulated as &quot;education records&quot; under FERPA or as &quot;student data&quot; under state student privacy laws and subject to a governing student data privacy agreement between GrantWare AI and the customer.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.5 Public-Sector and Procurement Customers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In addition to schools and school districts, we work with other public-sector customers (such as municipal governments, state agencies, and nonprofit organizations) that may be subject to procurement rules, public records laws, and specific data protection requirements. We are happy to work with such customers to address applicable legal and contractual requirements, including executing vendor registration, security questionnaires, and supplemental contract terms where reasonable and necessary.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.6 Parental Rights and Access</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under FERPA, eligible students and parents have certain rights to inspect, correct, and request deletion of education records maintained by schools and their service providers. Because GrantWare AI processes Student Data on behalf of customer organizations (such as school districts), not on our own behalf:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>We direct parents and students to contact the relevant school or district, rather than GrantWare AI, to exercise their rights under FERPA or state law.</li>
                <li>If we receive a request directly from a parent, student, or other individual, we will, where practicable and legally appropriate, direct the requestor to the relevant school or district and provide reasonable cooperation to the customer in responding to such requests, in accordance with our agreements with the customer.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Privacy Policy is not intended to modify or limit any rights that parents and students have under FERPA or applicable state student privacy laws. Those rights are exercised through the school or district that maintains the student&apos;s education records.
              </p>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Your Privacy Rights and Choices
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.1 Organizational Control</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Because GrantWare AI is a B2B platform, most personal data processed in the Services belongs to or is controlled by your organization. If you have questions about how your personal data is processed in a particular Workspace, or if you want to exercise privacy rights with respect to Customer Content (such as access, correction, or deletion), you should first contact your organization&apos;s administrator (for example, your employer, school, or district).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are an individual whose data is included in Customer Content and you are not an Authorized User of your own organization&apos;s Workspace, please contact your organization directly. GrantWare AI will cooperate with customer organizations to support reasonable requests from data subjects and data owners, but we are not in a position to respond to such requests without authorization from, or on behalf of, the relevant customer.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.2 Rights Available Under Applicable Law</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location and the applicable data protection law, you may have certain rights with respect to personal information that we collect about you as an individual visitor, contact, or user (as distinct from data about end-users or students that we process solely on behalf of your organization). These rights may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Access: The right to request information about what personal data we hold about you and to receive a copy of that data;</li>
                <li>Correction / Rectification: The right to request correction of inaccurate or incomplete personal data;</li>
                <li>Deletion / Erasure: The right to request deletion of personal data in certain circumstances (for example, where the data is no longer necessary for the original purpose);</li>
                <li>Data Portability: The right, in some cases, to receive your personal data in a structured, commonly used format;</li>
                <li>Restriction / Objection: The right to object to or restrict certain processing (for example, direct marketing or processing based on legitimate interests); and</li>
                <li>Withdrawal of Consent: Where we rely on consent to process your data, the right to withdraw consent at any time (without affecting the lawfulness of processing before withdrawal).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Not all of these rights apply in all circumstances, and some rights may be limited by other legal requirements or exceptions.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.3 How to Exercise Your Rights</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you wish to exercise any of these rights with respect to personal data we control (as opposed to Customer Content we process on behalf of your organization), you may:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Contact us using the information provided in Section 14 (Contact Us); or</li>
                <li>Use account settings or self-service features, where available, to access or update your information.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may ask you to verify your identity before we respond to your request, and we will respond within the timeframe required by applicable law. In some cases, we may not be able to comply fully with your request (for example, if it is unreasonable or if the data is subject to legal holds or retention requirements), but we will explain any limitations or exceptions that apply.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.4 Marketing Communications and Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can opt out of receiving promotional emails from us by following the &quot;unsubscribe&quot; instructions in those emails or by contacting us using the information in Section 14. Please note that even if you opt out of promotional emails, we may still send you non-promotional, transactional, or service-related communications (for example, account notices, security alerts, or billing information).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may also be able to manage cookie and tracking preferences through your browser settings. For more information, see Section 3.5 (Cookies and Similar Technologies).
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.5 Do Not Track Signals</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unless otherwise required by applicable law, we do not currently respond to browser-based &quot;Do Not Track&quot; (DNT) signals or similar mechanisms. This is because there is no universally accepted standard for how online services should respond to such signals.
              </p>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Third-Party Sites, Services, and Links
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.1 Links to Third-Party Websites</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Platform may contain links to third-party websites, services, or applications that are not owned or operated by GrantWare AI (such as grant databases, public government portals, or funding aggregators). These links are provided for convenience only and do not signify our endorsement of those sites or services. This Privacy Policy does not apply to third-party websites, and we are not responsible for their content, privacy practices, or terms of use.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We encourage you to review the privacy policies and terms of any third-party sites you visit or connect to through the Platform.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.2 Third-Party Integrations and SSO</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If your organization chooses to connect the Services with third-party applications or services (for example, via SSO integration with your identity provider), some personal data may be shared between those services and the Platform. Your organization is responsible for determining whether to enable such integrations and for reviewing the privacy practices of those third parties.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI does not control the data practices of third-party applications or services integrated with the Platform, and their use of your personal data is governed by their own privacy policies and terms.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.3 Social Media and Other Platforms</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Sites may include social media icons or features (such as links to our LinkedIn page). Your interactions with these features may be subject to the privacy policies of the social media platforms involved, and are not covered by this Privacy Policy.
              </p>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Changes to This Privacy Policy
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.1 When We May Update This Policy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time in response to changing legal, technical, or business developments. When we update this Privacy Policy, we will revise the &quot;Last Updated&quot; date at the top of this document.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.2 How We Notify You of Changes</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If we make changes to this Privacy Policy that materially affect how we handle personal information (for example, if we change the purposes for which we process personal data or begin sharing data with new categories of third parties):
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>We will provide notice by posting the updated Privacy Policy on our Sites and updating the &quot;Last Updated&quot; date;</li>
                <li>We may also notify you by email, in-product notice, or other means; and</li>
                <li>If required by applicable law, we will obtain your consent before processing your personal data in a materially different way.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.3 Your Continued Use</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your continued use of the Platform after the effective date of any revised Privacy Policy means that you accept the changes (to the extent consent is not otherwise required by applicable law). If you do not agree to the changes, you should stop using the Platform. If you are an Authorized User of your organization&apos;s Workspace, you should also notify your organization&apos;s administrator.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.4 Archived Versions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may retain archived versions of prior Privacy Policies for your reference. If you would like to see a prior version of this Privacy Policy, please contact us using the information in Section 14 (Contact Us).
              </p>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy, our data practices, or your personal data, please contact us at:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>GrantWare AI, Inc.</strong>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Email: privacy@grantware.ai
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For school districts, higher education institutions, and public-sector customers who need to execute student data privacy agreements, data processing agreements, or vendor compliance documents, please contact: privacy@grantware.ai.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We will respond to your inquiry within a reasonable time and in accordance with applicable law.
              </p>
            </section>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </article>

      <FooterSection />
    </main>
  )
}
