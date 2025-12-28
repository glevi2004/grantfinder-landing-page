import type { Metadata } from "next"
import Link from "next/link"
import { HeaderPill } from "@/components/header-pill"
import { FooterSection } from "@/components/footer-section"
import { LegalOutlineRail } from "@/components/legal-outline-rail"
import { LegalOutlineSheet } from "@/components/legal-outline-sheet"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for GrantWare AI. Understand your rights and responsibilities when using our platform.",
  openGraph: {
    title: "Terms of Service | GrantWare AI",
    description:
      "Read the Terms of Service for GrantWare AI. Understand your rights and responsibilities when using our platform.",
  },
  alternates: {
    canonical: "https://www.grantware.ai/terms",
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderPill />
      <LegalOutlineRail />
      <LegalOutlineSheet />

      <article className="pt-32 pb-16 px-6" data-legal-doc="terms">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <p className="text-gray-500 text-sm mb-2">GrantWare AI</p>
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-gray-900 mb-4">
              Terms of Service
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
                1. Introduction; Agreement to Terms
              </h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">1.1 Who We Are.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms of Service (the &quot;Terms&quot;) govern access to and use of the GrantWare AI services provided by GrantWare AI, Inc., a Delaware corporation (&quot;GrantWare AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Our services include our web application, application programming interfaces (APIs), related mobile or desktop applications (if any), documentation, and any other products or services that link to or reference these Terms (collectively, the &quot;Services&quot;).
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.2 Who You Are.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms are a legally binding agreement between GrantWare AI and the organization or entity that you represent (&quot;Customer&quot;) and govern Customer&apos;s and its Authorized Users&apos; access to and use of the Services. &quot;Authorized Users&quot; means individuals who are authorized by Customer to access and use the Services on Customer&apos;s behalf, including owners, administrators, members, employees, contractors, and other personnel.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.3 Authority to Bind Customer.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are accessing or using the Services or clicking &quot;I agree,&quot; &quot;Sign up,&quot; or similar, you represent and warrant that: (a) you are at least 18 years old; (b) you have full power and authority to enter into these Terms on behalf of Customer; and (c) you have read, understand, and agree to be bound by these Terms. If you do not have such authority, or if you do not agree to these Terms, you must not access or use the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.4 Acceptance Methods.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer agrees to these Terms by any of the following:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) clicking to accept or agree to these Terms where this option is made available to you;</li>
                <li>(b) creating an account for the Services;</li>
                <li>(c) accessing or using the Services after being presented with these Terms; or</li>
                <li>(d) executing an order form, statement of work, pilot agreement, or other written agreement that references these Terms (each, an &quot;Order Form&quot;).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                If an Authorized User accesses or uses the Services on behalf of Customer, such access or use is deemed Customer&apos;s acceptance of and agreement to these Terms.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.5 Relationship to Order Forms and Separate Agreements.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms are supplemented by any applicable Order Form(s) between GrantWare AI and Customer (including any online subscription selection, pilot enrollment, or similar process). If there is a conflict between these Terms and an Order Form signed by both parties, the Order Form will control to the extent of the conflict. If GrantWare AI and Customer enter into a separate, signed master services agreement expressly governing the Services (an &quot;MSA&quot;), that MSA will control and supersede these Terms to the extent of any conflict.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.6 Business Use Only.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Services are intended for use by organizations and their Authorized Users in a professional capacity and are not intended for personal or consumer use. By using the Services, you acknowledge that you are doing so on behalf of Customer in connection with Customer&apos;s business or institutional activities.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.7 Privacy Policy.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Please review our Privacy Policy (the &quot;Privacy Policy&quot;), which describes how we collect, use, and disclose information about Customer and Authorized Users. The Privacy Policy is incorporated into these Terms by reference. By using the Services, Customer and its Authorized Users acknowledge that they have read and understood the Privacy Policy.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">1.8 Effective Date; Updates to Terms.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The &quot;Effective Date&quot; of these Terms is the date indicated at the top of this document. We may update these Terms from time to time as described in Section [Changes to Terms] below. Customer&apos;s continued use of the Services after the effective date of any updated Terms constitutes Customer&apos;s acceptance of the updated Terms.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Definitions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For purposes of these Terms, the following capitalized terms have the meanings set forth below. Other capitalized terms are defined where they first appear.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 &quot;Account&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means the registered account that GrantWare AI creates for Customer to access and use the Services, including any associated Organization Workspaces and Authorized User profiles.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 &quot;AI Features&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means any features of the Services that use machine learning, large language models, or other artificial intelligence techniques (including through third-party model providers) to generate, transform, or analyze text or other content, such as summaries, eligibility assessments, task lists, or draft proposal language.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.3 &quot;AI Outputs&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means any content, text, summaries, recommendations, or other materials generated or suggested by the AI Features in response to prompts, inputs, or other Customer activity.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.4 &quot;Authorized User&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means an individual who is authorized by Customer to access and use the Services under Customer&apos;s Account and who is given a unique login or is provisioned access via SSO. Authorized Users include Customer&apos;s employees, contractors, consultants, and other personnel, and may have different roles (such as Owner, Admin, or Member) with different permissions within the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.5 &quot;Beta Services&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means any Services, features, products, or functionality that are identified as &quot;beta,&quot; &quot;pilot,&quot; &quot;early access,&quot; &quot;preview,&quot; &quot;experimental,&quot; or similar, or that GrantWare AI otherwise makes available to Customer on a trial, test, or design-partner basis.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.6 &quot;Customer&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means the organization or entity that enters into these Terms with GrantWare AI (for example, a school district, higher education institution, nonprofit organization, or other public- or mission-driven entity) and on whose behalf an Account is created and maintained.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.7 &quot;Customer Content&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means all data, information, documents, files, text, prompts, messages, comments, and other content that Customer or its Authorized Users submit to, upload to, or otherwise make available in the Services, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) organization and profile data;</li>
                <li>(b) grant and funding materials (such as applications, narratives, budgets, and attachments);</li>
                <li>(c) uploaded files and source documents (such as NOFOs/RFPs, spreadsheets, and plans);</li>
                <li>(d) prompts, inputs, and interactions with AI Features; and</li>
                <li>(e) collaboration and activity data (such as notes, tasks, and status updates).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                For clarity, Customer Content does not include AI Outputs, Usage Data, or any software, tools, models, or other technology owned by GrantWare AI.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.8 &quot;Documentation&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means the online help, training materials, user guides, and other documentation that GrantWare AI makes generally available to its customers regarding the operation and use of the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.9 &quot;Effective Date&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means the effective date of these Terms set forth at the top of this document, or, if earlier, the date on which Customer first accepts these Terms or first accesses or uses the Services, whichever occurs first.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.10 &quot;Fees&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means the amounts payable by Customer for access to and use of the Services, as set forth in the applicable Order Form or online subscription selection (including any amounts for subscriptions, seats, usage, and any professional or onboarding services, if applicable).
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.11 &quot;Order Form&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means any ordering document, online subscription page, quote, statement of work, pilot agreement, or other written instrument (including any document executed electronically) that references these Terms and sets forth the specific Services, subscription tier, term, and applicable Fees for Customer.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.12 &quot;Organization Workspace&quot; or &quot;Workspace&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means the collaborative environment within the Services associated with a particular Customer, within which Customer&apos;s Authorized Users can store, view, and manage Customer Content, configure settings, and use the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.13 &quot;Owner&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means an Authorized User designated by Customer with the highest level of administrative permissions for a Workspace, typically responsible for accepting these Terms on behalf of Customer, managing billing and subscription settings, and inviting and managing other Authorized Users.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.14 &quot;Admin&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means an Authorized User with elevated permissions (relative to a Member) who can manage certain Workspace settings, invite and manage Members, and access organization-level data and reporting, but who may have limited or no access to certain billing and high-level controls reserved for the Owner.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.15 &quot;Member&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means an Authorized User with standard permissions in a Workspace who can access applicable Customer Content, use AI Features, and collaborate on grants and funding activities, but who does not have Owner-level or Admin-level permissions.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.16 &quot;Pilot&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means a time-limited deployment of the Services (which may include Beta Services) made available to Customer on a free, discounted, or otherwise non-standard basis for evaluation, design-partner, or early-access purposes.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.17 &quot;Privacy Policy&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means GrantWare AI&apos;s then-current privacy policy describing its practices regarding the collection, use, and disclosure of personal data in connection with the Services, as updated from time to time and made available at the URL specified by GrantWare AI.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.18 &quot;Services&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means the hosted software-as-a-service platform branded as &quot;GrantWare AI&quot; (or any successor name) that GrantWare AI makes available to Customer under these Terms, including the web application, any related mobile or desktop applications, AI Features, Beta Services (if enabled), Organization Workspaces, and any related websites, APIs, and Documentation.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.19 &quot;Subprocessor&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means any third-party service provider engaged by GrantWare AI to process Customer Content or personal data on GrantWare AI&apos;s behalf in connection with providing the Services, such as hosting providers, database providers, AI model providers, and email or analytics providers.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.20 &quot;Third-Party Services&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means any products, services, applications, or integrations that are provided by a third party (including Subprocessors) and that interoperate with or are used in connection with the Services, but are not themselves part of the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.21 &quot;Usage Data&quot;</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                means data and information generated or collected by or on behalf of GrantWare AI relating to Customer&apos;s and Authorized Users&apos; use of the Services, such as log data, performance metrics, feature usage statistics, timestamps, device and browser information, and other technical or operational data, provided that such data is used in aggregated or de-identified form so that it does not reasonably identify Customer or any individual.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Eligibility; Accounts; Roles and Responsibilities
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Eligibility; Business Use Only.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Services are intended solely for use by organizations and their Authorized Users in a professional capacity. The Services are not intended for personal, consumer, or household use. By accessing or using the Services, you represent and warrant that you (a) are at least 18 years of age, and (b) are using the Services on behalf of a Customer in connection with Customer&apos;s organizational activities.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Authority to Bind Customer.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Any individual who creates an Account, establishes an Organization Workspace, or otherwise accepts these Terms on behalf of a Customer represents and warrants that they have the full right, power, and authority to bind that Customer to these Terms and to manage the Account and Organization Workspace as an Owner. GrantWare AI may rely on such representation without further investigation. If Customer later determines that an individual was not authorized, Customer remains responsible for any use of the Services that occurred under its Account prior to revoking such access.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 Account Registration.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To access and use the Services, Customer must create an Account and at least one Organization Workspace, either directly through GrantWare AI&apos;s registration flow or via a supported single sign-on (&quot;SSO&quot;) provider. Customer agrees to provide accurate, current, and complete information during registration and to keep such information up to date. GrantWare AI may reject or require changes to any Account, Workspace, or organization name that it believes, in its discretion, is misleading, infringing, or otherwise inappropriate.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.4 Account Security.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer is responsible for maintaining the confidentiality and security of all login credentials associated with its Account and Organization Workspaces, including any credentials used with SSO providers. Customer must promptly notify GrantWare AI at the contact address specified in the Documentation if it becomes aware of any unauthorized access to or use of its Account or any compromise of its credentials. GrantWare AI is not responsible for any loss or damage resulting from unauthorized use of credentials that occurs prior to GrantWare AI&apos;s receipt of such notice.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.5 Responsibility for Authorized Users.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer is responsible for all activities that occur under its Account and within its Organization Workspaces, whether or not such activities were authorized by Customer, and whether performed by employees, contractors, or any other Authorized Users. Customer will ensure that all Authorized Users comply with these Terms and any applicable policies referenced in these Terms. Any act or omission by an Authorized User that would constitute a breach of these Terms if taken by Customer will be deemed a breach by Customer.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.6 Roles and Permissions.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Services may allow Customer to designate different roles for Authorized Users within a Workspace, which may include, without limitation, Owners, Admins, and Members:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(a) Owners.</strong> An Owner is an Authorized User with the highest level of administrative permissions for a Workspace. Owners may accept these Terms on behalf of Customer, manage billing and subscription settings, designate and remove other Owners, Admins, and Members, manage integrations and security settings, and request export or deletion of Customer Content where such options are available.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(b) Admins.</strong> An Admin is an Authorized User with elevated permissions (relative to a Member) who may, as configured by Customer, invite and remove Members, manage certain Workspace settings and configurations, and access organization-level views and reports. Admins typically do not have all billing and high-level controls reserved for Owners.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(c) Members.</strong> A Member is an Authorized User with standard permissions who can access and use the Services within the scope granted by Customer and the applicable Workspace settings, including accessing applicable Customer Content, using AI Features, and collaborating on grants and funding activities. Members generally do not have administrative or billing permissions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may modify the available roles, names of roles, and associated permissions from time to time, provided that such changes do not materially reduce the core functionality of the Services purchased by Customer.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.7 Customer Configuration and Internal Policies.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer is solely responsible for (a) configuring its Workspaces, roles, and permissions in a manner appropriate for its organization; (b) determining which individuals are granted Owner, Admin, or Member access; and (c) establishing and enforcing its own internal policies regarding access, approvals, and use of AI Outputs in grant applications and related activities. GrantWare AI has no responsibility for how Customer chooses to structure or manage its Authorized Users or Workspaces.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.8 Single Sign-On (SSO).</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If Customer enables SSO for its Account, Customer is responsible for (a) maintaining its SSO configuration, (b) managing which individuals are able to authenticate via Customer&apos;s identity provider, and (c) promptly disabling access for individuals who should no longer be Authorized Users. GrantWare AI is not responsible for identity provider configuration errors or for continuing access by individuals whom Customer fails to remove from its identity provider or Workspace.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.9 Prohibited Registration and Use by Certain Parties.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer and Authorized Users may not access or use the Services if (a) they are located in a jurisdiction where use of the Services is prohibited under applicable law or export controls, or (b) they are subject to any sanctions or restrictions under United States or other applicable sanctions regimes that would prohibit their use of the Services. GrantWare AI may suspend or terminate access to the Services where required by law or regulatory authorities.
              </p>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Services; License Grant
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Provision of the Services.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Subject to these Terms and Customer&apos;s payment of all applicable Fees, GrantWare AI will make the Services available to Customer and its Authorized Users during the applicable subscription term set forth in the relevant Order Form. GrantWare AI will provide the Services in a professional and workmanlike manner and will use commercially reasonable efforts to make the Services available in accordance with any uptime or support commitments specified in the applicable Order Form or Documentation.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 License Grant to Customer.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Subject to these Terms and the applicable Order Form, GrantWare AI grants to Customer a limited, non-exclusive, non-transferable (except as permitted in Section [Assignment]), non-sublicensable right during the applicable subscription term to access and use the Services and Documentation solely: (a) for Customer&apos;s internal business or institutional purposes; (b) in accordance with these Terms and the Documentation; and (c) in the quantities and for the scope (such as number of Authorized Users, Workspaces, or features) specified in the applicable Order Form.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.3 Authorized Users.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer may permit its Authorized Users to access and use the Services on Customer&apos;s behalf, up to any limits set forth in the applicable Order Form. Customer will ensure that all Authorized Users use the Services only on Customer&apos;s behalf and in compliance with these Terms. Customer acknowledges that GrantWare AI may condition access to certain features or tiers of the Services on the number or type of Authorized Users, Workspaces, or other usage metrics, as described in the applicable Order Form or online subscription page.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.4 Restrictions on Use.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Except as expressly permitted in these Terms or in writing by GrantWare AI, Customer will not, and will not permit any Authorized User or third party to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) copy, modify, translate, adapt, or create derivative works of the Services or Documentation;</li>
                <li>(b) rent, lease, sell, resell, sublicense, distribute, or otherwise make the Services available to any third party (including as a service bureau or managed service) other than Authorized Users acting on Customer&apos;s behalf;</li>
                <li>(c) reverse engineer, decompile, disassemble, or otherwise attempt to derive or gain access to the source code or underlying structure, ideas, or algorithms of the Services (except to the limited extent such restrictions are prohibited by applicable law);</li>
                <li>(d) access or use the Services for the purpose of developing or training a competing product or service, or to build a dataset or model intended to replicate or compete with the Services or any AI Features;</li>
                <li>(e) remove, obscure, or alter any proprietary notices, disclaimers, or other markings of GrantWare AI or its licensors on or within the Services or Documentation; or</li>
                <li>(f) access or use the Services in any manner that violates the Acceptable Use provisions in Section [Acceptable Use] or any applicable laws, regulations, or third-party rights.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.5 Reservation of Rights.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Services are offered on a subscription-access basis, not sold. As between the parties, GrantWare AI and its licensors retain all right, title, and interest (including all intellectual property rights) in and to the Services, AI Features, AI models and prompts, underlying software, Usage Data, Documentation, and all improvements, enhancements, modifications, and derivative works thereof, whether or not created based on suggestions or feedback from Customer or Authorized Users. Except for the limited rights expressly granted in this Section 4, no other rights or licenses are granted to Customer, whether by implication, estoppel, or otherwise.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.6 Service Modifications.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may from time to time make updates, improvements, or other modifications to the Services, including to improve performance, add or remove features, update AI models or third-party providers, or address security or legal requirements. GrantWare AI will use commercially reasonable efforts to ensure that any such modifications do not materially reduce the overall core functionality of the Services purchased by Customer under an active subscription. If GrantWare AI makes a material change that materially and adversely affects Customer&apos;s use of the Services, Customer may notify GrantWare AI, and the parties will work together in good faith to address the impact, which may include adjustments, workarounds, or, if appropriate, a pro-rated refund for any unused, pre-paid Fees for the affected portion of the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.7 Temporary Suspension.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may temporarily suspend Customer&apos;s or any Authorized User&apos;s access to the Services (in whole or in part) if GrantWare AI reasonably determines that: (a) such suspension is necessary to address a security incident or threat to the Services or any third party; (b) Customer or an Authorized User is using the Services in violation of these Terms, including Section [Acceptable Use], and fails to cure such violation following notice; or (c) Customer has failed to pay undisputed Fees when due in accordance with Section [Fees and Payment]. GrantWare AI will use commercially reasonable efforts to (i) notify Customer of any suspension (unless prohibited by law or exigent security circumstances) and (ii) limit the suspension in scope and duration to what is reasonably necessary to address the issue giving rise to the suspension.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.8 Trials and Free Access.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may, in its discretion, make certain Services or features available to Customer on a free, trial, or evaluation basis (including certain Pilots or Beta Services). Any such free or trial access is provided solely for evaluation purposes, may be subject to additional terms presented at the time of enrollment, and may be suspended, limited, or terminated by GrantWare AI at any time and for any reason. Sections [Warranties and Disclaimers] and [Limitation of Liability] will apply in full to any such free, trial, or evaluation use.
              </p>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Subscriptions, Pilots, and Fees
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Subscription Terms.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unless otherwise stated in the applicable Order Form, access to the Services is purchased on a subscription basis. Each subscription will begin on the start date specified in the applicable Order Form (the &quot;Subscription Start Date&quot;) and continue for the initial subscription term set forth therein (the &quot;Initial Term&quot;). Unless the Order Form expressly provides otherwise, subscriptions will automatically renew for successive periods equal in length to the Initial Term (each, a &quot;Renewal Term&quot; and, together with the Initial Term, the &quot;Subscription Term&quot;) unless either party provides written notice of non-renewal at least thirty (30) days prior to the end of the then-current Subscription Term.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Scope of Subscription.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The scope of Customer&apos;s subscription (including the edition or tier of the Services, enabled features, number or type of Authorized Users, and other usage limits) will be as set forth in the applicable Order Form or online subscription selection. Customer will ensure that its use of the Services does not exceed the scope of its subscription. If Customer&apos;s usage exceeds the subscribed scope, GrantWare AI may (a) invoice Customer for the excess use at the then-current rates, and/or (b) require Customer to upgrade to an appropriate subscription level.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.3 Pilots, Design-Partner Programs, and Trials.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may make certain deployments of the Services available to Customer on a pilot, design-partner, or other limited evaluation basis (each, a &quot;Pilot&quot;), which may be free, discounted, or otherwise subject to non-standard commercial terms. The specific duration, scope, and any special conditions of a Pilot will be described in the applicable Order Form, pilot agreement, or enrollment documentation. Unless otherwise expressly stated, Pilots are provided solely for evaluation and feedback purposes, may include Beta Services, and may be modified, limited, or discontinued at any time in GrantWare AI&apos;s discretion. GrantWare AI will have no obligation to continue any Pilot or to offer any Pilot features as generally available Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.4 Transition from Pilot to Paid Subscription.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If Customer wishes to transition from a Pilot to a paid subscription, the parties will execute an Order Form (or Customer will complete an online subscription flow) specifying the applicable Services, scope, Fees, and Subscription Term. Unless otherwise agreed in writing, any data and configuration created during a Pilot may be retained and used in the paid subscription, subject to these Terms. If Customer does not enter into a paid subscription at the end of a Pilot and the Pilot is not extended, GrantWare AI may deactivate Customer&apos;s access to the Services and, after any applicable export period described in Section [Data Export, Retention, and Deletion], delete or anonymize Customer Content associated with the Pilot.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.5 Fees and Invoicing.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer will pay all Fees specified in the applicable Order Form or online subscription page in accordance with the payment terms set forth therein and in this Section 5. Unless otherwise stated in an Order Form: (a) subscription Fees are billed in advance, either annually or on another agreed cadence; (b) any usage-based Fees are billed in arrears; and (c) GrantWare AI may invoice Customer electronically. Customer will provide complete and accurate billing and contact information and will promptly notify GrantWare AI of any changes to such information.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.6 Payment Methods.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may accept payment via credit card, ACH, wire transfer, check, or other methods as described in the applicable Order Form or online checkout flow. If Customer pays by credit card or other electronic means, Customer authorizes GrantWare AI (or its payment processor) to charge all applicable Fees to the payment method on file on or after the due date. If Customer&apos;s organization requires purchase orders, vendor registration, or other procurement formalities, Customer will promptly complete such steps so that invoices can be processed and paid in a timely manner.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.7 Taxes.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fees are exclusive of all taxes, levies, duties, or similar governmental assessments of any nature (collectively, &quot;Taxes&quot;), other than taxes based on GrantWare AI&apos;s net income. Customer is responsible for all Taxes associated with its purchases hereunder, and will pay or reimburse GrantWare AI for such Taxes if GrantWare AI is required to collect them. If Customer is exempt from certain Taxes, it will provide GrantWare AI with a valid tax exemption certificate or other required documentation.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.8 Non-Refundability.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Except as expressly provided otherwise in these Terms or in an applicable Order Form, all Fees and other amounts paid or payable by Customer under these Terms are non-refundable and non-cancelable, and Subscription Terms cannot be terminated early by Customer for convenience.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.9 Late Payments.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If any undisputed Fees are not received by GrantWare AI by the due date, GrantWare AI may, without limiting its other rights and remedies: (a) charge interest on the past due amount at the rate of one and one-half percent (1.5%) per month (or the maximum rate permitted by law, if less), calculated from the date such amount was due until the date paid; and/or (b) suspend Customer&apos;s access to the Services in accordance with Section 4.7, following reasonable prior notice. GrantWare AI will not exercise its suspension rights if Customer is reasonably and in good faith disputing the applicable Fees and is cooperating diligently to resolve the dispute.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.10 Changes to Fees at Renewal.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may modify its pricing for the Services from time to time. Any changes to Fees will become effective at the start of the next Renewal Term, provided that (a) GrantWare AI provides Customer with reasonable advance notice of such changes (which may be by email or in-product notification), and (b) Customer may choose not to renew its subscription if it does not agree to the updated Fees. Changes to Fees will not apply retroactively to the then-current Subscription Term unless agreed by the parties in writing.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.11 No Contingency on Funding or Results.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer acknowledges and agrees that Fees are based on the provision of access to the Services and are not contingent on Customer securing any particular grant, award, or funding outcome, or on the achievement of any specific results, and that GrantWare AI does not guarantee that Customer will receive funding or any other outcome through use of the Services.
              </p>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Customer Responsibilities and Acceptable Use
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Responsibility for Customer Content and Use.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer is solely responsible for (a) all Customer Content submitted to or processed through the Services; (b) how Customer and its Authorized Users use the Services and AI Outputs; and (c) ensuring that its use of the Services (including the use of any AI Features and AI Outputs) complies with all applicable laws, regulations, grantor and funder rules, procurement requirements, and Customer&apos;s own internal policies. GrantWare AI does not control or monitor Customer Content and is not responsible for reviewing, verifying, or approving any Customer Content or AI Outputs before they are used or submitted by Customer.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Compliance with Laws and Grantor Requirements.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer will not use the Services in any manner that violates applicable law or regulation, including without limitation laws relating to data protection, privacy, export controls, sanctions, and public-sector or education procurement. Without limiting the foregoing, Customer is solely responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) reviewing and complying with the eligibility criteria, application requirements, deadlines, and other rules established by any grantor, funder, or contracting entity in connection with any opportunity that Customer pursues using the Services;</li>
                <li>(b) ensuring that any applications, proposals, budgets, narratives, and other materials submitted to grantors or funders are complete, accurate, and compliant with all applicable requirements; and</li>
                <li>(c) obtaining and maintaining any required consents, approvals, or authorities from boards, administrators, governing bodies, or other internal stakeholders before relying on AI Outputs or submitting materials generated using the Services.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI does not guarantee that use of the Services will satisfy any grantor, funder, or regulatory requirements, or that any application or proposal will be successful.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.3 Restrictions on Sensitive and Regulated Data.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Services are not designed to serve as a system of record for highly sensitive or regulated personal data by default. Unless the parties have entered into a separate written data protection agreement or student data privacy agreement that expressly permits such use, Customer will not submit to or process through the Services any of the following:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) &quot;education records&quot; or other student-level information regulated under the Family Educational Rights and Privacy Act (FERPA) or similar state student privacy laws, except in de-identified or aggregated form;</li>
                <li>(b) protected health information subject to the Health Insurance Portability and Accountability Act (HIPAA);</li>
                <li>(c) payment card data subject to PCI-DSS (other than limited billing information processed through GrantWare AI&apos;s authorized payment processor); or</li>
                <li>(d) other categories of highly sensitive personal data (such as Social Security numbers, government IDs, or biometric identifiers) that are not reasonably necessary for Customer&apos;s use of the Services.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                If Customer submits any such data in violation of this Section 6.3, Customer will be solely responsible for any resulting obligations, and GrantWare AI may, in its discretion, delete such data and/or suspend access to the affected portions of the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.4 Use of AI Features and AI Outputs.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer acknowledges that AI Features generate AI Outputs automatically based on patterns in data and models and may produce incorrect, incomplete, biased, or otherwise unsuitable content. Customer agrees that it will:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) carefully review, verify, and edit AI Outputs before relying on them or including them in any application, proposal, communication, or decision;</li>
                <li>(b) not treat AI Outputs as legal, financial, tax, compliance, or procurement advice; and</li>
                <li>(c) ensure that any AI Outputs used in submissions to grantors, funders, or other third parties accurately reflect Customer&apos;s actual programs, data, and intentions and comply with applicable rules and ethical standards.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer is solely responsible for any decisions made, actions taken, or omissions based on AI Outputs or other use of the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.5 Acceptable Use – Prohibited Activities.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer will not, and will not permit any Authorized User or third party to, access or use the Services in any manner that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>(a) Violates Law or Rights.</strong> Violates any applicable law or regulation or infringes, misappropriates, or otherwise violates any intellectual property, privacy, or other rights of any person or entity;</li>
                <li><strong>(b) Security Violations.</strong> Attempts to gain unauthorized access to the Services or any related systems or networks, or circumvents, disables, or otherwise interferes with security-related features or access controls;</li>
                <li><strong>(c) Malware and Harmful Code.</strong> Introduces any viruses, worms, Trojan horses, corrupted files, or other malicious code into the Services or any systems or networks;</li>
                <li><strong>(d) Service Integrity.</strong> Interferes with or disrupts the integrity or performance of the Services or related systems, including by overloading, flooding, spamming, or conducting denial-of-service attacks;</li>
                <li><strong>(e) Misrepresentation and Fraud.</strong> Uses the Services to create, submit, or disseminate fraudulent, deceptive, or misleading grant applications, reports, or communications, including misrepresenting eligibility, programmatic activities, budgets, or outcomes;</li>
                <li><strong>(f) Competing Products and Model Training.</strong> Uses the Services to develop, train, or improve a competing product or service, or to build a dataset or model intended to replicate or compete with the Services or any AI Features, or accesses the Services for purposes of benchmarking or competitive analysis other than as permitted by law;</li>
                <li><strong>(g) Unauthorized Sharing or Resale.</strong> Resells, rents, leases, sublicenses, or otherwise makes the Services available to any third party (other than Authorized Users) without GrantWare AI&apos;s prior written consent, including by offering the Services as part of a managed service or outsourcing arrangement;</li>
                <li><strong>(h) Unapproved Data Sources.</strong> Uses automated means (including bots, crawlers, or scrapers) through the Services to access or extract data from third-party websites or services in a manner that violates the terms of those third parties or applicable law;</li>
                <li><strong>(i) Harassing or Harmful Content.</strong> Uses the Services to transmit or store content that is harassing, threatening, hateful, discriminatory, obscene, or otherwise objectionable, or that advocates or incites violence or harm; or</li>
                <li><strong>(j) Other Misuse.</strong> Otherwise attempts to interfere with the proper working of the Services or uses the Services in a way that GrantWare AI reasonably believes poses a risk of harm to the Services, GrantWare AI, other customers, or any third party.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.6 Internal Policies and Access Controls.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer is solely responsible for establishing and enforcing any internal policies regarding Authorized Users&apos; access to and use of the Services and AI Outputs, including policies relating to approvals, supervisory review, and record-keeping. Customer will use the role- and permission-management features of the Services (where available) to implement appropriate access controls and will promptly disable access for individuals who should no longer be Authorized Users.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.7 Notifications and Cooperation.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer will promptly notify GrantWare AI if it becomes aware of (a) any unauthorized access to or use of the Services or Customer&apos;s Account, (b) any security incident or data breach involving the Services or Customer Content, or (c) any governmental or legal request relating to Customer Content stored in the Services that could reasonably affect GrantWare AI. Customer will cooperate with GrantWare AI in good faith to investigate and remediate any such incidents.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.8 Enforcement.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI reserves the right, but does not undertake any obligation, to monitor use of the Services for violations of these Terms. If GrantWare AI reasonably believes that Customer or an Authorized User has violated this Section 6, or that such use may expose GrantWare AI or any third party to liability or harm, GrantWare AI may, without limiting its other rights or remedies, (a) remove or disable access to any Customer Content that violates these Terms, and/or (b) suspend or terminate access to the Services in accordance with Section [Suspension, Termination, and Effect of Termination].
              </p>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Customer Content and Data Ownership
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.1 Ownership of Customer Content.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As between Customer and GrantWare AI, Customer retains all right, title, and interest (including all intellectual property and proprietary rights) in and to Customer Content. GrantWare AI does not claim ownership of Customer Content, and nothing in these Terms will be construed to grant GrantWare AI any rights in or to Customer Content except for the limited rights expressly set forth in this Section 7.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.2 License to Customer Content.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer hereby grants to GrantWare AI and its Affiliates a non-exclusive, worldwide, royalty-free, fully paid-up license during the Subscription Term to host, store, reproduce, display, perform, transmit, adapt, and otherwise use Customer Content solely as necessary to: (a) provide, maintain, secure, and support the Services; (b) prevent or address technical or security issues and resolve support requests; (c) comply with law, regulation, or a valid legal process, consistent with Section [Security, Privacy, and Data Protection]; and (d) exercise GrantWare AI&apos;s rights and perform its obligations under these Terms and any applicable Order Form.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.3 Use of Aggregated and De-Identified Data.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may collect, generate, and derive Usage Data in connection with the operation and use of the Services. GrantWare AI may use Usage Data and Customer Content in aggregated and/or de-identified form, such that it does not reasonably identify Customer or any individual, for the following purposes: (a) operating, maintaining, and improving the Services and AI Features; (b) developing new features, products, and services; (c) benchmarking, analytics, and statistical reporting; and (d) publishing or otherwise sharing insights about funding trends and platform usage, provided that Customer and its Authorized Users are not identified as the source of such insights without Customer&apos;s prior consent.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For clarity, GrantWare AI will not use Customer Content in a manner that directly identifies Customer or any individual in public-facing materials without Customer&apos;s prior written consent, except where such identification is required by law.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.4 AI Training and Model Improvement.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may use Usage Data and Customer Content in aggregated and/or de-identified form, as described in Section 7.3, to train, fine-tune, and improve AI models and AI Features used in the Services, consistent with applicable law and any data protection obligations. Where GrantWare AI relies on third-party AI providers (such as model APIs), GrantWare AI will configure such providers, where technically and contractually feasible, so that Customer Content and AI Outputs submitted through those providers are not used by them to train or improve their generalized models, unless Customer expressly opts in or such use occurs only on a de-identified and aggregated basis in line with industry practices.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.5 Customer Representations Regarding Customer Content.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer represents and warrants that it has obtained and will maintain all rights, consents, and permissions necessary to grant the rights set forth in these Terms and to submit and use Customer Content in connection with the Services, including any consents required from employees, contractors, partners, or other third parties whose information may be included in Customer Content. Customer further represents and warrants that (a) Customer Content does not and will not infringe, misappropriate, or otherwise violate any intellectual property, privacy, or other rights of any third party, and (b) Customer Content and Customer&apos;s use of the Services comply with Section 6 and all applicable laws and regulations.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.6 No Responsibility for Customer Content.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI is not responsible for (a) any loss, damage, or liability arising from Customer&apos;s decisions regarding what Customer Content to upload, store, or process in the Services; or (b) the accuracy, completeness, quality, or legality of Customer Content. GrantWare AI does not undertake to review or screen Customer Content prior to its use in the Services, although GrantWare AI reserves the right (but has no obligation) to remove or disable access to any Customer Content that GrantWare AI reasonably believes violates these Terms or applicable law, or that may expose GrantWare AI or any third party to liability or harm, in accordance with Section 6.8.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.7 Feedback.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer and Authorized Users may from time to time provide GrantWare AI with suggestions, comments, ideas, or other feedback about the Services or AI Features (&quot;Feedback&quot;). GrantWare AI may freely use, disclose, reproduce, license, and otherwise exploit such Feedback without restriction or any obligation to Customer or any Authorized User, provided that GrantWare AI will not identify Customer or any individual Authorized User as the source of such Feedback without consent. For the avoidance of doubt, Feedback is not considered Customer Content.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.8 Usage Data Ownership.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As between the parties, GrantWare AI owns all right, title, and interest in and to the Usage Data and any derivatives, analyses, and insights derived therefrom, subject to GrantWare AI&apos;s obligations under these Terms and applicable law. Nothing in these Terms is intended to limit Customer&apos;s rights to use its own internal metrics or analytics that Customer independently generates about its use of the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.9 Data Location and Transfers.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer acknowledges that GrantWare AI and its Subprocessors may process Customer Content and personal data in locations other than the jurisdiction where Customer is located, including in the United States, subject to applicable data protection laws and any data processing or transfer mechanisms that may be agreed by the parties in a separate data processing agreement or addendum.
              </p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. AI Features, AI Outputs, and No Advice / No Funding Guarantees
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.1 Nature of AI Features.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer acknowledges that the Services include AI Features that use machine learning, large language models, and other algorithmic techniques to generate, transform, and analyze content. AI Features operate by identifying patterns in data and are inherently probabilistic. As a result, AI Outputs may be incomplete, incorrect, out of date, biased, or otherwise unsuitable for Customer&apos;s needs. AI Features do not involve any human review by GrantWare AI prior to output being displayed to Customer or its Authorized Users.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.2 AI Outputs May Be Non-Unique and Repetitive.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer understands that similar or identical AI Outputs may be generated for multiple customers or users, and that AI Outputs are not guaranteed to be unique to Customer. Customer should not rely on AI Outputs as confidential or proprietary information and should independently determine whether and how to use any AI Output in its own work product.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.3 Customer Responsibility for AI Outputs.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI Outputs are generated based on Customer Content, prompts, and other inputs and are provided solely as drafting aids and decision-support tools. Customer remains solely responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) reviewing, verifying, and validating all AI Outputs for accuracy, completeness, compliance, and appropriateness before using them in any grant application, report, communication, or decision;</li>
                <li>(b) ensuring that any AI Outputs used in submissions to grantors, funders, or other third parties accurately reflect Customer&apos;s actual programs, data, and intentions; and</li>
                <li>(c) ensuring that its use of AI Outputs complies with all applicable laws, regulations, ethical standards, and grantor or funder rules.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI is not responsible for any decisions made or actions taken by Customer or its Authorized Users based on AI Outputs or any other use of the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.4 No Legal, Financial, Tax, or Compliance Advice.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Services, including all AI Features, AI Outputs, Documentation, recommendations, and any other information provided by GrantWare AI, are for informational and drafting purposes only. GrantWare AI does not provide, and nothing in the Services or these Terms should be construed as providing, legal, financial, tax, procurement, or compliance advice. Customer is solely responsible for obtaining advice from its own legal counsel, financial advisors, compliance officers, or other qualified professionals regarding any legal, financial, tax, procurement, or regulatory questions or obligations.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.5 No Guarantee of Funding or Outcomes.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer acknowledges and agrees that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) The Services are tools to assist with identifying, organizing, and drafting materials related to grants and funding opportunities, but GrantWare AI does not and cannot control the decisions of any grantor, funder, or awarding agency.</li>
                <li>(b) GrantWare AI does not guarantee that Customer will receive any particular grant, award, contract, or funding, or that any application, proposal, or submission created or assisted by the Services will be selected, approved, funded, or scored in any particular way.</li>
                <li>(c) Any examples, case studies, or success stories referenced by GrantWare AI are illustrative only and do not constitute a promise or guarantee of future results.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer agrees that it will not represent to any third party that GrantWare AI has guaranteed, endorsed, or approved any application, proposal, or funding decision.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.6 Sources, Third-Party Content, and Public Information.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Certain AI Outputs may summarize, reference, or be influenced by third-party content, public information, or grant notices retrieved or processed via the Services. GrantWare AI does not warrant that any such information is complete, accurate, current, or free of errors, and Customer is responsible for consulting the official grantor or funder materials and other authoritative sources to confirm all requirements, deadlines, and terms. If there is any discrepancy between AI Outputs or other information provided by the Services and official grantor or funder documentation, the official documentation will control.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.7 Use of AI Outputs in Customer Content.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Subject to Customer&apos;s compliance with these Terms and any applicable grantor or funder rules, Customer may use, modify, and incorporate AI Outputs into its own work product, including grant applications and related materials. As between the parties and to the extent permitted by applicable law and any third-party terms, Customer may treat AI Outputs that it chooses to use as part of Customer Content. However, nothing in this Section 8 will be construed as granting Customer any rights to the underlying models, algorithms, or AI Features used to generate such outputs.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.8 Risk Allocation for AI Features.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The parties acknowledge that AI Features are experimental and may generate unexpected or undesirable outputs. The limitations of liability and disclaimers set forth in Sections [Warranties and Disclaimers] and [Limitation of Liability] apply fully to Customer&apos;s use of AI Features and AI Outputs. Without limiting the foregoing, GrantWare AI will have no liability arising out of or relating to (a) Customer&apos;s reliance on any AI Output, (b) any error, omission, or inaccuracy in AI Outputs, or (c) any missed opportunity, lost funding, adverse evaluation, or other outcome related to grants, contracts, or funding decisions, even if such outcome is alleged to have been caused in whole or in part by the Services or AI Outputs.
              </p>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Third-Party Services and Subprocessors
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Use of Subprocessors.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer acknowledges and agrees that GrantWare AI may use Subprocessors to host, store, process, or transmit Customer Content and personal data in connection with providing the Services. Such Subprocessors may include, without limitation, cloud infrastructure providers, database and authentication providers, AI model providers, email and notification providers, analytics tools, and payment processors. GrantWare AI will remain responsible for the acts and omissions of its Subprocessors to the same extent GrantWare AI would be responsible if performing the relevant services directly, except as otherwise stated in these Terms.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.2 Third-Party Services Not Under GrantWare AI&apos;s Control.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Services may enable or rely on integrations, connections, or interoperability with Third-Party Services (for example, identity providers, productivity tools, or data sources) that are not operated or controlled by GrantWare AI. If Customer chooses to enable, access, or use any Third-Party Services with the Services, Customer&apos;s access and use of such Third-Party Services is governed solely by the terms and privacy policies of the applicable third party, and GrantWare AI does not endorse, is not a party to, and has no responsibility or liability for, any Third-Party Services or the acts or omissions of any third-party provider.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.3 Customer&apos;s Use of Third-Party Services.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer is solely responsible for (a) determining whether to enable or use any Third-Party Services with the Services; (b) maintaining any accounts or credentials required to access such Third-Party Services; and (c) any data or information that Customer chooses to share with or send to such Third-Party Services. GrantWare AI is not responsible for any disclosure, modification, deletion, or other processing of Customer Content or personal data by Third-Party Services or their providers.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.4 AI Model Providers and Configuration.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Certain AI Features rely on third-party AI model providers (such as hosted large language models accessed via API) to generate AI Outputs. GrantWare AI will configure such providers, where technically and contractually feasible, so that Customer Content submitted to those providers through the Services is not used by such providers to train or improve their generalized models, except (a) to the extent Customer expressly opts in to such use, or (b) where such use occurs only on an aggregated and de-identified basis consistent with industry practices and applicable law. Customer acknowledges that these third-party AI providers are independent services and that GrantWare AI&apos;s obligations with respect to them are limited to the configuration and contractual commitments described in these Terms and any applicable data processing agreement.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.5 Payment Processing.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If Customer pays Fees by credit card or other electronic payment method, such payments may be processed by a third-party payment processor (such as Stripe or a similar provider). In such cases, Customer&apos;s payment information will be transmitted directly to the payment processor and will not be stored by GrantWare AI except for limited billing metadata (such as the last four digits of a card, expiration date, or billing contact information) as necessary for invoicing, record-keeping, and fraud prevention. Customer&apos;s use of the payment processor&apos;s services may be subject to the payment processor&apos;s own terms and privacy policy.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.6 No Guarantee of Third-Party Services.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI does not warrant or guarantee the availability, performance, security, or continued integration of any Third-Party Services, including any AI model providers, infrastructure providers, or payment processors. Third-Party Services may be modified, suspended, or discontinued by their providers without notice. If a Third-Party Service used in connection with the Services becomes unavailable or materially degrades in a way that affects the Services, GrantWare AI will use commercially reasonable efforts to (a) identify and implement a reasonable alternative, or (b) adjust the Services to mitigate the impact. However, GrantWare AI will not be liable for any unavailability or malfunction of Third-Party Services that is outside of GrantWare AI&apos;s reasonable control.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.7 Changes to Subprocessors and Third-Party Services.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may add, replace, or remove Subprocessors and Third-Party Services from time to time. Where required by applicable data protection law or a separate data processing agreement between the parties, GrantWare AI will provide Customer with notice of material changes to Subprocessors (which may be provided by updating a publicly available list or via in-product or email notice). If Customer reasonably objects to a new Subprocessor on data protection grounds, the parties will work together in good faith to address the objection, which may include revising configurations, disabling certain features, or, if no reasonable alternative is available, allowing Customer to terminate the affected portion of the Services as its sole and exclusive remedy.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.8 Priority of Conflicting Terms.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If there is any conflict between (a) the terms of a third-party provider applicable to Third-Party Services and (b) these Terms, the third-party terms will govern solely with respect to that Third-Party Service and solely to the extent of the conflict, and these Terms will continue to govern the relationship between Customer and GrantWare AI.
              </p>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Security, Privacy, and Data Protection
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.1 Security Measures.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI implements commercially reasonable technical and organizational measures designed to protect the security, confidentiality, and integrity of the Services and Customer Content, including measures such as (a) encryption of data in transit over public networks using industry-standard protocols, (b) access controls limiting access to production systems to authorized personnel with a business need, (c) use of role-based access and authentication controls within the Services, and (d) monitoring and logging of access to systems where Customer Content is stored, in each case as further described in the Documentation or on GrantWare AI&apos;s website. Customer acknowledges that GrantWare AI&apos;s security measures may evolve over time to address new threats and technologies, provided that such changes do not materially reduce the overall level of protection for Customer Content.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.2 Customer&apos;s Security Responsibilities.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer is responsible for (a) configuring the Services in a manner appropriate for its risk tolerance and compliance requirements; (b) managing and protecting login credentials, SSO configurations, and devices used to access the Services; (c) promptly disabling access for individuals who should no longer be Authorized Users; and (d) implementing appropriate technical and organizational measures within its own systems and processes to protect Customer Content exported from or otherwise used in connection with the Services. GrantWare AI is not responsible for security issues arising from Customer&apos;s networks, devices, or failure to follow security practices described in the Documentation.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.3 Privacy Policy.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI&apos;s collection, use, and disclosure of personal data in connection with the Services are described in its Privacy Policy, which is incorporated into these Terms by reference. Customer is responsible for ensuring that it has provided all notices and obtained all consents required under applicable data protection and privacy laws before submitting personal data to the Services or otherwise permitting GrantWare AI to process personal data on Customer&apos;s behalf.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.4 Data Processing as a Service Provider / Processor.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the extent GrantWare AI processes personal data on behalf of Customer in connection with providing the Services, the parties acknowledge that, for purposes of applicable data protection laws, Customer is the controller (or equivalent term) and GrantWare AI is the processor or service provider (or equivalent term). GrantWare AI will process such personal data solely (a) to provide, maintain, and support the Services in accordance with these Terms and Customer&apos;s documented instructions, and (b) as required by applicable law. If applicable data protection laws require the parties to enter into a separate data processing agreement, student data privacy agreement, or similar instrument, the parties will negotiate in good faith any such additional terms, which, once executed, will be deemed incorporated into these Terms.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.5 Data Location and Cross-Border Transfers.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer acknowledges that GrantWare AI and its Subprocessors may process Customer Content and personal data in jurisdictions other than the one where Customer is located, including in the United States. GrantWare AI will ensure that any such cross-border transfers of personal data occur in compliance with applicable data protection laws and, where required, will use appropriate safeguards or transfer mechanisms (such as standard contractual clauses or their equivalent) with its relevant Subprocessors.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.6 Security Incidents.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In the event GrantWare AI becomes aware of a confirmed unauthorized access to or disclosure of Customer Content in its possession or control that results in a compromise of the security, confidentiality, or integrity of such Customer Content (a &quot;Security Incident&quot;), GrantWare AI will (a) notify Customer without undue delay after confirming the Security Incident, (b) provide Customer with information reasonably available to GrantWare AI about the nature and scope of the Security Incident, and (c) take commercially reasonable steps to contain, mitigate, and remediate the Security Incident. Customer is responsible for determining whether to notify regulators, affected individuals, or other third parties of the Security Incident and for fulfilling any such notification obligations, except to the extent otherwise agreed in a separate data processing agreement.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.7 Data Subject Requests and Governmental Demands.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If GrantWare AI receives a request from an individual seeking to exercise rights with respect to personal data that GrantWare AI processes on Customer&apos;s behalf (such as access, correction, or deletion), GrantWare AI will, where reasonably practicable and legally permitted, direct the individual to submit the request to Customer and will reasonably cooperate with Customer to help Customer respond to such request, at Customer&apos;s cost if such cooperation requires material effort. If GrantWare AI receives a subpoena, court order, or other governmental or legal demand seeking disclosure of Customer Content, GrantWare AI will, to the extent legally permitted and reasonably practicable, notify Customer before producing any such information so that Customer may seek to limit or challenge the demand; provided that GrantWare AI may disclose Customer Content to the extent it reasonably believes such disclosure is required by law.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.8 Data Retention and Deletion.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI will retain Customer Content for the duration of the Subscription Term and for any additional period described in Section [Data Export, Retention, and Deletion] or in an applicable Order Form. Following expiration or termination of the Subscription Term, GrantWare AI will retain, delete, or anonymize Customer Content in accordance with Section [Data Export, Retention, and Deletion], subject to any longer retention required by law or necessary for GrantWare AI to establish, exercise, or defend legal claims. Customer acknowledges that Customer Content may continue to exist in routine backups for a limited period after deletion from active systems, after which it will be overwritten in the ordinary course of business.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.9 Do Not Track and Similar Signals.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unless otherwise described in the Privacy Policy or required by applicable law, the Services do not respond to &quot;Do Not Track&quot; signals or similar mechanisms from browsers or devices. Customer and Authorized Users may manage certain cookie and tracking preferences through browser settings or in-product controls where available, as further described in the Privacy Policy.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.10 Additional Data Protection Terms.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In the event of any conflict between this Section 10 and the terms of a separately executed data processing agreement, student data privacy agreement, or similar instrument between the parties, such additional agreement will control solely with respect to the subject matter of that agreement, and these Terms will continue to govern in all other respects.
              </p>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Data Export, Retention, and Deletion
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.1 Data Export During Subscription Term.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                During the Subscription Term, Customer may export certain Customer Content from the Services using the export or download capabilities made available by GrantWare AI from time to time (which may include, for example, exports of applications, narratives, or other records in common formats such as CSV, JSON, or text). GrantWare AI does not guarantee that all types of Customer Content will be exportable in all cases, but will use commercially reasonable efforts to provide Customer with a means to obtain a usable copy of key records if requested in writing.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.2 Export Rights Upon Termination or Non-Renewal.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Following expiration or termination of the Subscription Term for any reason, GrantWare AI will, upon Customer&apos;s written request received within thirty (30) days after the effective date of expiration or termination (the &quot;Export Period&quot;), make available to Customer a commercially reasonable means to export or download a copy of Customer&apos;s then-available Customer Content from the Services. After the Export Period, GrantWare AI will have no obligation to maintain or provide access to Customer Content, except as required by law or as expressly set forth in this Section 11.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.3 Deletion or Anonymization After Export Period.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                After the Export Period, GrantWare AI will, subject to Section 11.4, delete or anonymize Customer Content from active systems in a commercially reasonable manner and within a commercially reasonable timeframe, such that Customer Content is no longer reasonably identifiable in the ordinary course of business. Customer acknowledges that certain copies of Customer Content may be retained in GrantWare AI&apos;s backup or archival systems for a limited period after deletion from active systems, after which such data will be overwritten in the normal course of operations.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.4 Retention for Legal and Operational Purposes.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Notwithstanding anything to the contrary in these Terms, GrantWare AI may retain Customer Content (a) as required by applicable law, regulation, or legal process; (b) as reasonably necessary to comply with its legal, tax, or audit obligations; or (c) as reasonably necessary to establish, exercise, or defend legal claims. GrantWare AI may also retain and continue to use Usage Data and aggregated or de-identified information derived from Customer Content in accordance with Section 7.3, even after deletion of Customer Content from active systems, provided that such information does not reasonably identify Customer or any individual.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.5 Customer&apos;s Copies and Record-Keeping.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer is responsible for maintaining its own copies of Customer Content, records, and submissions as required by its internal policies and by applicable laws, grantor rules, or record-retention requirements. GrantWare AI has no obligation to store or retain Customer Content beyond the periods expressly set forth in these Terms or in an applicable Order Form, and the Services are not intended to serve as Customer&apos;s sole system of record for regulatory or archival purposes.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.6 Effect of Termination on Access.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upon expiration or termination of the Subscription Term, Customer&apos;s and all Authorized Users&apos; access to the Services will cease, except as necessary during the Export Period solely to export Customer Content as described in this Section 11. Customer will not have access to the Services for active use, new data entry, or AI Features after the effective date of expiration or termination, unless the parties agree in writing to reinstate or extend the subscription.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.7 Deletion Requests from Customer.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                During the Subscription Term, Customer may request deletion of specific Customer Content or categories of Customer Content via the mechanisms provided in the Services or through written request to GrantWare AI&apos;s support contact. GrantWare AI will implement such requests in a commercially reasonable timeframe, subject to (a) Customer&apos;s responsibility for ensuring that such deletion is consistent with Customer&apos;s own legal and record-keeping obligations, and (b) GrantWare AI&apos;s right to retain copies as described in Sections 7.3, 7.8, 10.8, and 11.4.
              </p>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Beta Services, Pilots, and Trials
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.1 Beta Services.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                From time to time, GrantWare AI may make certain features, functionality, or services available to Customer as Beta Services, which may be identified as &quot;beta,&quot; &quot;pilot,&quot; &quot;early access,&quot; &quot;experimental,&quot; &quot;labs,&quot; or similar. Beta Services may be provided as part of a paid subscription or as part of a Pilot or trial. Customer acknowledges that Beta Services are made available for testing and evaluation purposes only, may be subject to additional terms presented at the time of enrollment, and may not be fully tested or documented.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.2 Pilots and Design-Partner Programs.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may make the Services, or specific configurations of the Services, available to Customer under a Pilot or design-partner program, which may be free, discounted, or otherwise subject to non-standard commercial terms. The duration, scope, and any special conditions of a Pilot or design-partner program will be described in the applicable Order Form, pilot agreement, or enrollment documentation. Unless otherwise expressly stated, Pilots are for evaluation, feedback, and co-design purposes and are not intended to be relied upon as a fully production-ready deployment.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.3 Trials and Free Access.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may offer limited free or trial access to certain Services or features (including Beta Services or Pilots) for a defined period or usage limit (&quot;Trial&quot;). The specific terms of any Trial (including duration, scope, and any limitations) will be described at the time Customer signs up for the Trial or in the applicable Order Form or enrollment flow. GrantWare AI may modify or terminate any Trial at any time without notice, unless otherwise expressly agreed in writing.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.4 Feedback and Collaboration.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In connection with any Beta Services, Pilot, or Trial, Customer may provide Feedback and may participate in meetings, interviews, or workshops with GrantWare AI&apos;s team to share observations, workflows, and suggestions. Customer agrees that GrantWare AI may use such Feedback in accordance with Section 7.7, including to improve and refine the Services, and that GrantWare AI has no obligation to implement any particular features or changes suggested by Customer.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.5 No Performance or Availability Commitments.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beta Services, Pilots, and Trials may not be subject to the same performance, availability, security, support, documentation, or testing standards as generally available (GA) Services. Accordingly, GrantWare AI does not make any uptime, support, or feature-availability commitments with respect to Beta Services, Pilots, or Trials, and they are excluded from any service-level commitments or credits that may apply to GA Services, unless expressly stated otherwise in an Order Form.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.6 &quot;AS IS&quot; Disclaimer for Beta Services, Pilots, and Trials.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THESE TERMS, BETA SERVICES, PILOTS, AND TRIALS ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;, WITH ALL FAULTS AND WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THEY WILL BE ERROR-FREE OR MEET CUSTOMER&apos;S REQUIREMENTS. Sections [Warranties and Disclaimers] and [Limitation of Liability] apply in full to Customer&apos;s use of Beta Services, Pilots, and Trials.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.7 Early Termination of Beta Services, Pilots, and Trials.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may suspend, limit, or terminate Customer&apos;s access to any Beta Service, Pilot, or Trial (in whole or in part) at any time and for any reason, including without limitation if GrantWare AI determines that (a) continued operation of the Beta Service, Pilot, or Trial is not commercially viable; (b) there is a security, privacy, or legal risk; or (c) Customer has violated these Terms. Unless otherwise specified in an Order Form, GrantWare AI will have no obligation to continue, replace, or provide a GA equivalent of any Beta Service, Pilot, or Trial after such termination.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.8 Transition to Generally Available Services.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may choose, in its discretion, to make certain Beta Services or Pilot features generally available as part of the Services. Any such GA release may be subject to separate Fees, additional or different terms, or changes in functionality compared to the Beta or Pilot version. Unless otherwise agreed in writing, continued use of a feature after it becomes GA is subject to the then-current version of these Terms and any applicable Order Form, including any updated Fees.
              </p>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Warranties and Disclaimers
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.1 Limited Service Warranty (Paid Subscriptions Only).</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For paid, generally available (GA) subscriptions to the Services (and excluding any Beta Services, Pilots, or Trials, which are covered separately in Section 12), GrantWare AI warrants to Customer that, during the applicable Subscription Term, the core GA Services will operate in material conformity with the Documentation, when used by Customer in accordance with these Terms and the Documentation.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.2 Exclusive Remedy for Breach of Limited Warranty.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If the Services fail to conform to the warranty in Section 13.1 in a material respect and Customer notifies GrantWare AI in writing within thirty (30) days after discovering the non-conformity, then, as Customer&apos;s sole and exclusive remedy and GrantWare AI&apos;s entire liability for such breach, GrantWare AI will, at its option and expense: (a) use commercially reasonable efforts to correct the non-conformity; or (b) if GrantWare AI determines that it is unable to correct the non-conformity in a commercially reasonable timeframe, allow Customer to terminate the affected portion of the Services and receive a pro-rated refund of any pre-paid, unused Fees for the remainder of the applicable Subscription Term for that portion of the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.3 Exclusions from Limited Warranty.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The limited warranty in Section 13.1 does not apply to any issues or failures resulting from: (a) use of the Services not in accordance with these Terms or the Documentation; (b) modifications to the Services made by anyone other than GrantWare AI; (c) use of the Services in combination with non-GrantWare AI products, services, hardware, or data not specified in the Documentation as supported; (d) any Beta Services, Pilots, or Trials (which are provided &quot;AS IS&quot; under Section 12.6); (e) failures or downtime of Third-Party Services, the public internet, or Customer&apos;s own systems or networks; or (f) Customer&apos;s misuse of the Services, including violations of Section 6.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.4 No Warranty on AI Outputs, Funding Outcomes, or Third-Party Content.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                WITHOUT LIMITING ANY OTHER DISCLAIMER IN THESE TERMS, GRANTWARE AI MAKES NO WARRANTY OR REPRESENTATION OF ANY KIND THAT:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) ANY AI OUTPUTS OR OTHER CONTENT GENERATED OR PROVIDED BY THE SERVICES WILL BE ACCURATE, COMPLETE, CURRENT, ERROR-FREE, OR FREE FROM BIAS OR OFFENSIVE MATERIAL;</li>
                <li>(b) CUSTOMER WILL OBTAIN ANY PARTICULAR GRANT, AWARD, CONTRACT, FUNDING, SCORE, OR OTHER OUTCOME AS A RESULT OF USING THE SERVICES; OR</li>
                <li>(c) ANY THIRD-PARTY CONTENT, PUBLIC INFORMATION, OR GRANT NOTICES ACCESSED OR SUMMARIZED THROUGH THE SERVICES ARE COMPLETE, ACCURATE, CURRENT, OR FREE OF ERRORS.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                CUSTOMER IS SOLELY RESPONSIBLE FOR REVIEWING, VERIFYING, AND APPROVING ALL AI OUTPUTS AND OTHER CONTENT BEFORE USING OR SUBMITTING THEM.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.5 No Legal, Financial, Tax, or Compliance Advice.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                CUSTOMER ACKNOWLEDGES THAT GRANTWARE AI DOES NOT PROVIDE LEGAL, FINANCIAL, TAX, PROCUREMENT, OR COMPLIANCE ADVICE, AND THAT NO COMMUNICATION OR INFORMATION OBTAINED FROM THE SERVICES, AI OUTPUTS, DOCUMENTATION, OR GRANTWARE AI PERSONNEL SHOULD BE CONSTRUED AS SUCH ADVICE. CUSTOMER IS SOLELY RESPONSIBLE FOR OBTAINING ADVICE FROM ITS OWN LEGAL COUNSEL, FINANCIAL ADVISORS, COMPLIANCE OFFICERS, OR OTHER QUALIFIED PROFESSIONALS REGARDING ANY LEGAL, FINANCIAL, TAX, PROCUREMENT, OR REGULATORY MATTERS.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.6 General Disclaimers.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                EXCEPT FOR THE LIMITED WARRANTY EXPRESSLY SET FORTH IN SECTION 13.1, AND TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES (INCLUDING ALL AI FEATURES, AI OUTPUTS, BETA SERVICES, PILOTS, TRIALS, DOCUMENTATION, AND ANY OTHER INFORMATION OR MATERIALS PROVIDED BY GRANTWARE AI) ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITH ALL FAULTS, AND GRANTWARE AI AND ITS LICENSORS AND SUBPROCESSORS EXPRESSLY DISCLAIM ALL OTHER WARRANTIES, REPRESENTATIONS, AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE PRACTICE.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.7 No Warranties Regarding Uptime or Error-Free Operation.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                EXCEPT TO THE EXTENT EXPRESSLY PROVIDED IN AN ORDER FORM OR SERVICE-LEVEL AGREEMENT SIGNED BY BOTH PARTIES, GRANTWARE AI DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED. CUSTOMER ACKNOWLEDGES THAT THE SERVICES MAY BE SUBJECT TO LIMITATIONS, DELAYS, AND OTHER PROBLEMS INHERENT IN THE USE OF THE INTERNET, AI MODELS, AND ELECTRONIC COMMUNICATIONS, AND THAT GRANTWARE AI IS NOT RESPONSIBLE FOR ANY DELAYS, DELIVERY FAILURES, OR OTHER DAMAGES RESULTING FROM SUCH PROBLEMS.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.8 Jurisdiction-Specific Rights.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Some jurisdictions do not allow the exclusion of certain warranties or conditions, or the limitation of liability for certain types of damages. To the extent that applicable law does not permit the exclusion of certain warranties or conditions, some of the exclusions in this Section 13 may not apply to Customer. In such cases, the warranties will be limited to the minimum extent required by applicable law.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.9 Risk Allocation.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The parties agree that the disclaimers and limitations set forth in this Section 13 and in Section 14 are an essential basis of the bargain between the parties and have been taken into account in setting the Fees and allocating risk under these Terms. Without these disclaimers and limitations, GrantWare AI would not be able to provide the Services on the agreed pricing and terms.
              </p>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. Limitation of Liability
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">14.1 Exclusion of Certain Damages.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL GRANTWARE AI OR ITS AFFILIATES, LICENSORS, OR SUBPROCESSORS BE LIABLE TO CUSTOMER OR ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, GOODWILL, DATA, OR BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATING TO THESE TERMS OR THE USE OF OR INABILITY TO USE THE SERVICES, WHETHER BASED ON CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, EVEN IF GRANTWARE AI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR SUCH DAMAGES WERE OTHERWISE FORESEEABLE.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Without limiting the foregoing, GrantWare AI will have no liability for any missed deadlines, unsuccessful grant or funding applications, adverse funding decisions, or other lost opportunities, even if allegedly caused in whole or in part by the Services, AI Features, or AI Outputs.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">14.2 Aggregate Liability Cap.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AND SUBJECT TO SECTION 14.4, THE AGGREGATE LIABILITY OF GRANTWARE AI AND ITS AFFILIATES, LICENSORS, AND SUBPROCESSORS ARISING OUT OF OR RELATING TO THESE TERMS, ANY ORDER FORM, OR THE SERVICES, WILL NOT EXCEED, IN THE AGGREGATE, AN AMOUNT EQUAL TO THE TOTAL FEES PAID BY CUSTOMER TO GRANTWARE AI UNDER THE APPLICABLE ORDER FORM FOR THE SERVICES GIVING RISE TO THE CLAIM DURING THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO SUCH LIABILITY. If the Services are provided without charge (for example, during a Pilot or Trial), GrantWare AI&apos;s aggregate liability for such Services will not exceed one thousand U.S. dollars (US $1,000).
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">14.3 Application of Exclusions and Cap.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The exclusions and limitations in this Section 14 apply (a) to all causes of action and theories of liability, regardless of the form or nature of the claim (whether in contract, tort, strict liability, or otherwise); (b) whether or not GrantWare AI has been advised of the possibility of such damages or such damages were otherwise foreseeable; and (c) even if any remedy provided in these Terms fails of its essential purpose. Multiple claims will not expand the limitations set forth in this Section 14.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">14.4 Exceptions to Limitations.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The limitations in this Section 14 will not apply to: (a) Customer&apos;s payment obligations under these Terms; or (b) Customer&apos;s liability for breach of Section 4.4 (Restrictions on Use) or Section 6 (Customer Responsibilities and Acceptable Use). To the extent applicable law prohibits the limitation of liability for gross negligence, willful misconduct, or certain other categories of damages, the limitations in this Section 14 will apply to the maximum extent permitted, but will not limit liability to the extent such limitation is prohibited by applicable law.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">14.5 Jurisdiction-Specific Limitations.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Some jurisdictions do not allow the exclusion of certain types of damages or the limitation of liability for certain claims. To the extent that applicable law does not permit the exclusion of certain damages or the limitation of liability as set forth in this Section 14, the exclusions and limitations will apply only to the extent permitted by applicable law, and will not limit liability that cannot be limited under such law.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">14.6 Risk Allocation.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The parties acknowledge that the Fees reflect the allocation of risk set forth in these Terms, and that GrantWare AI would not enter into these Terms without the limitations of liability and disclaimers set forth in Sections 13 and 14. These limitations will apply notwithstanding any failure of essential purpose of any limited remedy provided herein.
              </p>
            </section>

            {/* Section 15 */}
            <section id="section-15" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                15. Indemnification
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">15.1 Definitions.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For purposes of this Section 15:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>A &quot;Claim&quot; is any action, allegation, demand, suit, investigation, or proceeding brought by a third party (including any government, regulator, or grantor/funder).</li>
                <li>&quot;Losses&quot; means all damages, settlement amounts, judgments, awards, penalties, fines, costs, and reasonable attorneys&apos; fees and expenses incurred in connection with a Claim.</li>
                <li>&quot;GrantWare AI Indemnitees&quot; means GrantWare AI, Inc. and its Affiliates, and their respective officers, directors, employees, and agents.</li>
                <li>&quot;Customer Indemnitees&quot; means Customer and its Affiliates, and their respective officers, directors, employees, and agents.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">15.2 Customer Indemnification.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer will defend, indemnify, and hold harmless GrantWare AI Indemnitees from and against any and all Claims and associated Losses arising out of or relating to:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(a) Customer Content and Data.</strong> Customer Content, Customer Data, or other materials provided or made available by or on behalf of Customer or its Authorized Users, including any Claim alleging that such content or data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(i) infringes, misappropriates, or violates any Intellectual Property Right, privacy right, or other right of any person or entity; or</li>
                <li>(ii) violates any applicable law, regulation, grantor terms, procurement rules, or third-party policy.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(b) Use of the Services.</strong> Customer&apos;s or any Authorized User&apos;s use of the Services in violation of these Terms, the Documentation, or applicable law (including any misuse of AI Outputs, scraping, or prohibited conduct under Section 6).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(c) Regulated and Sensitive Data.</strong> Customer&apos;s decision to upload or process any regulated or sensitive personal data (including any K–12 student data, FERPA-protected information, or similar educational records) in the absence of, or in violation of, an applicable written data protection agreement or other required contract with GrantWare AI.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(d) Funding, Grants, and Third-Party Relationships.</strong> Customer&apos;s relationships with, or obligations to, any grantors, funders, agencies, sub-recipients, vendors, or other third parties, including any Claim alleging misrepresentation, fraud, misuse of funds, non-compliance with grant requirements, or other issues in connection with applications or reports prepared using the Services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(e) Customer&apos;s Other Obligations.</strong> Customer&apos;s or any Authorized User&apos;s:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(i) gross negligence, willful misconduct, or fraud; or</li>
                <li>(ii) breach of any representation, warranty, or covenant under these Terms.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">15.3 GrantWare AI Indemnification (IP Infringement).</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Subject to Sections 14 and 15.4, GrantWare AI will defend Customer Indemnitees against any Claim alleging that the generally available, unmodified Services, when used by Customer in accordance with these Terms and the Documentation, directly infringe a United States patent, copyright, or trademark, or misappropriate a trade secret of a third party (an &quot;IP Claim&quot;), and GrantWare AI will indemnify Customer Indemnitees against any Losses finally awarded in a judgment or agreed in a settlement that are attributable to such IP Claim.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">15.4 Exclusions from GrantWare AI Indemnity.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI&apos;s obligations in Section 15.3 do not apply to any IP Claim to the extent arising from or relating to:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(a) Customer Content and AI Outputs.</strong> Customer Content, Customer Data, or any AI Outputs or other content generated or used by Customer, including any IP Claim based on specific text, prompts, instructions, or data supplied by or on behalf of Customer or its Authorized Users (even if processed by the Services).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(b) Combination or Use with Other Products.</strong> Combination of the Services with any products, services, data, hardware, or software not provided by GrantWare AI, if the IP Claim would not have arisen but for such combination.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(c) Modifications Not Made by GrantWare AI.</strong> Modifications to the Services not made or authorized in writing by GrantWare AI, if the IP Claim would not have arisen but for such modifications.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(d) Use Outside Scope.</strong> Use of the Services in a manner not in accordance with these Terms, the Documentation, or any applicable Order Form, if the IP Claim would not have arisen but for such use.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(e) Compliance with Customer Instructions.</strong> GrantWare AI&apos;s compliance with designs, specifications, or written instructions provided by or on behalf of Customer.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In any of the above cases, Customer will indemnify GrantWare AI Indemnitees for such Claims under Section 15.2, to the extent permitted by applicable law and Section 14.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">15.5 IP Claim Remedies.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If the Services become, or in GrantWare AI&apos;s reasonable opinion are likely to become, the subject of an IP Claim, GrantWare AI may, at its option and expense:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) obtain for Customer the right to continue using the affected Services;</li>
                <li>(b) modify or replace the affected Services (or the applicable portion) so that they are no longer allegedly infringing while providing substantially equivalent functionality; or</li>
                <li>(c) if options (a) and (b) are not commercially reasonable in GrantWare AI&apos;s judgment, terminate the affected portion of the Services and provide Customer with a pro-rated refund of any pre-paid, unused Fees for the terminated portion of the Services for the remainder of the then-current Subscription Term.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                The remedies in this Section 15.5, together with GrantWare AI&apos;s obligations in Section 15.3, constitute Customer&apos;s sole and exclusive remedy and GrantWare AI&apos;s entire liability for any IP Claim relating to the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">15.6 Indemnification Procedure.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The indemnified party must:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) promptly notify the indemnifying party in writing of any Claim for which indemnification is sought (provided that a delay in notice will not relieve the indemnifying party of its obligations except to the extent it is materially prejudiced by the delay);</li>
                <li>(b) grant the indemnifying party sole control over the defense and settlement of the Claim (except that the indemnifying party may not enter into any settlement that imposes an admission of liability on, or requires payment or ongoing obligations from, the indemnified party without the indemnified party&apos;s prior written consent, not to be unreasonably withheld); and</li>
                <li>(c) provide reasonable cooperation and assistance, at the indemnifying party&apos;s expense, in connection with the defense and settlement of the Claim.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">15.7 Interaction with Liability Limits.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Subject to any express exceptions in these Terms, the indemnification obligations in this Section 15 are subject to the limitations of liability in Section 14.
              </p>
            </section>

            {/* Section 16 */}
            <section id="section-16" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                16. Term; Suspension and Termination; Effect of Termination
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">16.1 Term of These Terms.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms become effective on the Effective Date and will continue in effect until the earlier of: (a) the expiration or termination of all Subscription Terms and any Pilots between GrantWare AI and Customer; or (b) termination of these Terms in accordance with this Section 16. For clarity, if Customer has multiple Order Forms or Workspaces, these Terms will remain in effect for so long as at least one Subscription Term or Pilot remains active.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">16.2 Renewal and Non-Renewal.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Subscription Terms, including any Initial Term and Renewal Terms, are governed by Section 5.1. Either party may elect not to renew a Subscription Term by providing notice of non-renewal in accordance with Section 5.1. Non-renewal of a particular Subscription Term will not, by itself, terminate these Terms with respect to any other active Subscription Term or Pilot.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">16.3 Termination for Cause.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Either party may terminate these Terms or any affected Order Form upon written notice to the other party if:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(a) Material Breach.</strong> The other party materially breaches these Terms or the applicable Order Form and fails to cure such breach within thirty (30) days after receiving written notice describing the breach in reasonable detail; or
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(b) Insolvency Events.</strong> The other party (i) becomes insolvent or is generally unable to pay its debts as they become due, (ii) files or has filed against it a petition for bankruptcy or similar proceeding, which is not dismissed within sixty (60) days, (iii) makes an assignment for the benefit of creditors, or (iv) has a receiver, trustee, or similar officer appointed for its property.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For clarity, GrantWare AI may treat repeated or serious violations of Section 4.4 (Restrictions on Use) or Section 6 (Customer Responsibilities and Acceptable Use) as a material breach.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">16.4 Suspension Rights.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Without limiting Section 4.7 or any other provision of these Terms, GrantWare AI may suspend Customer&apos;s or any Authorized User&apos;s access to the Services (in whole or in part) immediately upon notice (where practicable) if:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) Customer fails to pay undisputed Fees when due and does not cure such failure within the cure period specified in GrantWare AI&apos;s notice;</li>
                <li>(b) GrantWare AI reasonably determines that Customer&apos;s or an Authorized User&apos;s use of the Services (i) violates Section 4.4 or Section 6, (ii) poses a security or integrity risk to the Services or any third party, or (iii) could subject GrantWare AI or any third party to liability; or</li>
                <li>(c) GrantWare AI is required to do so by law, regulation, or a governmental or court order.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI will use commercially reasonable efforts to limit any suspension in scope and duration to what is reasonably necessary under the circumstances and to restore access promptly once the underlying issue is resolved. Suspension does not relieve Customer of its obligation to pay all applicable Fees.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">16.5 Termination by GrantWare AI for Convenience (Optional).</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may terminate these Terms or any Order Form for convenience, without cause, by providing at least thirty (30) days&apos; prior written notice to Customer. In such event, GrantWare AI will refund to Customer any pre-paid, unused Fees for the terminated portion of the Services for the remainder of the then-current Subscription Term as Customer&apos;s sole and exclusive remedy for such termination. For clarity, this Section 16.5 does not apply to terminations for cause under Section 16.3.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">16.6 Effect of Termination or Expiration.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upon expiration or termination of these Terms or any applicable Subscription Term:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(a) Cessation of Access.</strong> Customer&apos;s and all Authorized Users&apos; right to access and use the affected Services will immediately cease, except as necessary during any Export Period described in Section 11 solely to export Customer Content.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(b) Fees Due.</strong> All unpaid Fees and other amounts due under these Terms and any applicable Order Form will become immediately due and payable, except that, in the case of GrantWare AI&apos;s termination for convenience under Section 16.5 or Customer&apos;s termination for GrantWare AI&apos;s uncured material breach under Section 16.3, Customer will only be obligated to pay Fees for Services provided up to the effective date of termination, and any pre-paid, unused Fees for the terminated portion of the Subscription Term will be refunded on a pro-rated basis.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(c) Data Export and Deletion.</strong> Data export, retention, and deletion will be handled in accordance with Section 11 (Data Export, Retention, and Deletion).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>(d) Survival.</strong> The following provisions (and any other provisions that by their nature should reasonably survive) will survive expiration or termination of these Terms: Sections 2 (Definitions), 4.4 (Restrictions on Use), 5.5–5.11 (Fees, Taxes, Non-Refundability, Late Payments, No Contingency on Funding), 6 (Customer Responsibilities and Acceptable Use), 7 (Customer Content and Data Ownership), 8 (AI Features, AI Outputs, and No Advice / No Funding Guarantees), 9 (Third-Party Services and Subprocessors), 10 (Security, Privacy, and Data Protection), 11 (Data Export, Retention, and Deletion) to the extent applicable, 12.6–12.8, 13 (Warranties and Disclaimers), 14 (Limitation of Liability), 15 (Indemnification), 16.6, and 17–19, together with any payment obligations accrued before the effective date of termination.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">16.7 No Liability for Lawful Termination or Suspension.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, and subject to Section 14, GrantWare AI will not be liable for any loss, damage, or claims arising solely from a lawful suspension or termination of access to the Services in accordance with these Terms.
              </p>
            </section>

            {/* Section 17 */}
            <section id="section-17" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                17. Confidentiality
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">17.1 Definition of Confidential Information.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                &quot;Confidential Information&quot; means any non-public information disclosed by one party (&quot;Disclosing Party&quot;) to the other party (&quot;Receiving Party&quot;) in connection with these Terms or the Services, whether disclosed in writing, orally, or by other means, that is designated as confidential or that a reasonable person would understand to be confidential under the circumstances. Confidential Information includes, without limitation:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) for Customer: Customer Content (other than any portions that are publicly available through no fault of GrantWare AI), internal processes, and non-public business or funding strategies; and</li>
                <li>(b) for GrantWare AI: the Services (including features, functionality, and non-public Documentation), product roadmaps, security practices, pricing, and other non-public technical or business information.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Confidential Information does not include information that the Receiving Party can demonstrate:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(i) was already known to the Receiving Party without an obligation of confidentiality at the time of disclosure;</li>
                <li>(ii) is or becomes generally known to the public through no act or omission of the Receiving Party in violation of these Terms;</li>
                <li>(iii) is rightfully received from a third party without restriction on use or disclosure; or</li>
                <li>(iv) was independently developed by the Receiving Party without use of or reference to the Disclosing Party&apos;s Confidential Information.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">17.2 Confidentiality Obligations.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Receiving Party will:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) use the Disclosing Party&apos;s Confidential Information solely as necessary to perform its obligations and exercise its rights under these Terms;</li>
                <li>(b) not disclose the Disclosing Party&apos;s Confidential Information to any third party except as expressly permitted in these Terms; and</li>
                <li>(c) protect the confidentiality of the Disclosing Party&apos;s Confidential Information using at least the same degree of care that it uses to protect its own similar information, and in no event less than a reasonable degree of care.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">17.3 Permitted Disclosures.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Receiving Party may disclose Confidential Information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>(a) to its and its Affiliates&apos; employees, contractors, advisors, and Subprocessors who have a legitimate need to know the information for purposes of these Terms and who are bound by confidentiality obligations at least as protective as those in this Section 17; and</li>
                <li>(b) to the extent required by law, regulation, or a valid subpoena, court order, or other governmental demand, provided that (where legally permitted and reasonably practicable) the Receiving Party gives the Disclosing Party prompt notice of the request and reasonably cooperates, at the Disclosing Party&apos;s expense, in any effort by the Disclosing Party to limit or contest the disclosure.</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">17.4 Student and Other Regulated Data.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the extent Customer discloses or makes available any regulated or sensitive data (including any K–12 student data or other education records) to GrantWare AI under a separate data processing agreement, student data privacy agreement, or similar instrument, the terms of such agreement will govern GrantWare AI&apos;s confidentiality and use of that specific data to the extent of any conflict with this Section 17.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">17.5 Return or Destruction.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upon the Disclosing Party&apos;s written request at any time, and in any event upon expiration or termination of these Terms (subject to Sections 10 and 11), the Receiving Party will delete or return the Disclosing Party&apos;s Confidential Information in its possession or control, except that the Receiving Party may retain copies (a) as required by applicable law or professional standards, or (b) in backup or archival systems maintained in the ordinary course of business, in which case the Receiving Party will continue to protect such retained Confidential Information in accordance with this Section 17 until it is deleted in the ordinary course.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">17.6 Equitable Relief.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The parties acknowledge that unauthorized disclosure or use of Confidential Information may cause irreparable harm to the Disclosing Party for which monetary damages may be an inadequate remedy. Accordingly, in addition to any other remedies available at law or in equity, the Disclosing Party will be entitled to seek immediate injunctive or other equitable relief (without the necessity of posting bond or proving actual damages) in the event of any actual or threatened breach of this Section 17 by the Receiving Party.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">17.7 No Limitation on Attorney–Client Communications.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nothing in these Terms is intended to, or will be construed to, prevent either party from sharing the existence or content of these Terms or relevant Confidential Information with its legal counsel for the purpose of obtaining legal advice, provided that such counsel is bound by duties of confidentiality.
              </p>
            </section>

            {/* Section 18 */}
            <section id="section-18" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                18. Governing Law, Venue, and Dispute Resolution
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">18.1 Governing Law.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms, any Order Form, and any dispute, claim, or controversy arising out of or relating to them or the Services (collectively, &quot;Disputes&quot;) will be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without giving effect to any choice or conflict of law rule (whether of Massachusetts or any other jurisdiction) that would require or permit the application of the laws of any jurisdiction other than Massachusetts.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">18.2 Venue and Jurisdiction.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The parties agree that any Dispute that is not resolved in accordance with Section 18.3 must be brought exclusively in the state or federal courts located in Suffolk County, Massachusetts, and each party irrevocably submits to the personal jurisdiction and venue of such courts for that purpose. Each party waives any objection to the venue of such courts, including any objection based on forum non conveniens or similar doctrines.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">18.3 Informal Resolution.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before initiating any formal legal proceeding, the parties agree to attempt in good faith to resolve any Dispute through informal discussions. A party that wishes to initiate this process must provide written notice to the other party describing the nature of the Dispute in reasonable detail. The parties will endeavor to resolve the Dispute through negotiation between individuals with decision-making authority for at least thirty (30) days after such notice is received, unless they mutually agree to a different period. If the parties are unable to resolve the Dispute within this timeframe, either party may pursue its rights under Section 18.2.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">18.4 Injunctive and Equitable Relief.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Notwithstanding Section 18.3, either party may seek temporary, preliminary, or permanent injunctive or other equitable relief at any time, without first engaging in informal resolution, if such relief is reasonably necessary to prevent or stop (a) the unauthorized use, disclosure, or misappropriation of its Confidential Information or intellectual property, or (b) an actual or threatened violation of Sections 4.4 or 6 that could cause irreparable harm.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">18.5 Governmental and Public-Sector Customers.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If Customer is a governmental or public-sector entity that is legally prohibited from agreeing to the governing law or venue specified in Sections 18.1 and 18.2, then, solely to the extent required by applicable law, (a) the governing law will be the laws of the jurisdiction in which Customer is located (without regard to conflicts of law principles), and (b) venue and jurisdiction will be determined by such applicable law. In all other respects, these Terms will be interpreted to give effect to the parties&apos; allocation of risk and responsibilities as reflected herein.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">18.6 Waiver of Jury Trial.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EACH PARTY IRREVOCABLY WAIVES ANY RIGHT IT MAY HAVE TO A TRIAL BY JURY IN ANY LEGAL PROCEEDING ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">18.7 Time Limit for Bringing Claims.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, any Dispute must be filed within one (1) year after the cause of action giving rise to such Dispute accrued, or it will be permanently barred. This Section 18.7 does not shorten any mandatory limitations period that cannot be shortened under applicable law.
              </p>
            </section>

            {/* Section 19 */}
            <section id="section-19" className="mb-10 scroll-mt-28">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                19. General Provisions
              </h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.1 Independent Contractors.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The parties are independent contractors, and nothing in these Terms will be construed to create a partnership, joint venture, agency, fiduciary, or employment relationship between the parties. Neither party has any authority to bind the other party in any respect.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.2 Assignment.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer may not assign or transfer these Terms (by operation of law or otherwise), or any of its rights or obligations hereunder, without GrantWare AI&apos;s prior written consent, which will not be unreasonably withheld. Notwithstanding the foregoing, Customer may assign these Terms in their entirety (including all Order Forms) without GrantWare AI&apos;s consent to an Affiliate or in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of Customer&apos;s assets, provided that (a) the assignee is not a direct competitor of GrantWare AI, and (b) Customer provides GrantWare AI with prompt written notice of the assignment. GrantWare AI may assign these Terms, in whole or in part, without restriction, including to an Affiliate or in connection with a merger, acquisition, corporate reorganization, or sale of assets. Any attempted assignment in violation of this Section 19.2 is void. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties and their respective successors and permitted assigns.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.3 Force Majeure.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Neither party will be liable for any delay or failure to perform its obligations (other than payment obligations) under these Terms to the extent caused by circumstances beyond its reasonable control, including acts of God, natural disasters, war, terrorism, civil unrest, labor disputes, government actions, failures of utilities or telecommunications, widespread internet outages, or other similar events (&quot;Force Majeure Events&quot;). The affected party will use commercially reasonable efforts to mitigate the impact of the Force Majeure Event and to resume performance as soon as reasonably practicable.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.4 Notices.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All notices under these Terms must be in writing and will be deemed given: (a) when delivered personally; (b) when sent by confirmed email; (c) one (1) business day after being sent by a reputable overnight courier; or (d) three (3) business days after being mailed by certified or registered mail, return receipt requested, postage prepaid. Notices to GrantWare AI must be sent to the contact address specified in the Documentation or on GrantWare AI&apos;s website (Attn: Legal) or to such other address as GrantWare AI may designate in writing. Notices to Customer may be sent to the email or physical address associated with Customer&apos;s Account or any address specified in an Order Form. GrantWare AI may also provide routine notices, updates, and communications to Customer or Authorized Users via in-product messages, banners, or other user interface elements.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.5 Entire Agreement; Order of Precedence.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms, together with any applicable Order Forms and any additional agreements expressly incorporated by reference (such as a data processing agreement or student data privacy agreement), constitute the entire agreement between the parties with respect to the subject matter hereof and supersede all prior or contemporaneous agreements, proposals, or representations, written or oral, relating to the same subject matter. In the event of a conflict between the terms of an Order Form and these Terms, the Order Form will control to the extent of the conflict. In the event of a conflict between these Terms and any separately executed data processing agreement, student data privacy agreement, or similar instrument, such additional agreement will control solely with respect to its subject matter.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.6 Amendments; Changes to Terms.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GrantWare AI may update or modify these Terms from time to time. For material changes, GrantWare AI will provide Customer with reasonable advance notice, which may include posting the updated Terms in the Services or on GrantWare AI&apos;s website and/or sending an email notification to Customer&apos;s primary contact or billing contact. The updated Terms will become effective on the date specified in the notice, and Customer&apos;s continued use of the Services after the effective date will constitute acceptance of the updated Terms. If Customer does not agree to the updated Terms, Customer must stop using the Services and may exercise any non-renewal or termination rights available under Section 16. Any changes to these Terms will not apply retroactively to any dispute between the parties arising prior to the effective date of the updated Terms unless the parties expressly agree otherwise in writing.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.7 Waiver.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                No waiver of any provision of these Terms will be effective unless in writing and signed (including electronically) by an authorized representative of the party against whom the waiver is asserted. A waiver of any breach or default will not constitute a waiver of any other or subsequent breach or default.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.8 Severability.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal, or unenforceable, that provision will be enforced to the maximum extent permissible, and the remaining provisions of these Terms will remain in full force and effect.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.9 No Third-Party Beneficiaries.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Except as expressly stated in these Terms, there are no third-party beneficiaries to these Terms, and nothing in these Terms is intended to confer any rights or remedies on any person or entity other than the parties and their permitted successors and assigns.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.10 Headings and Interpretation.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The headings in these Terms are for convenience only and will not affect the interpretation of any provision. The words &quot;include,&quot; &quot;includes,&quot; and &quot;including&quot; will be deemed to be followed by the words &quot;without limitation.&quot; Any reference to &quot;days&quot; means calendar days unless expressly stated otherwise. References to &quot;written&quot; or &quot;in writing&quot; include email, unless the context clearly requires a signed physical document.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.11 Export Compliance.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Customer will comply with all applicable export control and sanctions laws and regulations in connection with its use of the Services. Customer represents and warrants that it is not (a) located in a country or territory that is subject to comprehensive U.S. sanctions, or (b) listed on any U.S. government denied-party list. Customer will not permit Authorized Users to access or use the Services in violation of such laws, or to export, re-export, or transfer the Services to any prohibited destination or party.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">19.12 Counterparts and Electronic Signatures.</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Any Order Form or other document executed in connection with these Terms may be executed in counterparts, each of which will be deemed an original, and all of which together will constitute one and the same instrument. Signatures delivered by electronic means (including PDF, electronic signature platforms, or other electronic methods) will be deemed original signatures and will be valid and binding for all purposes.
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
