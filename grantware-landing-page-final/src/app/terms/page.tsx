import type { Metadata } from "next"
import Link from "next/link"
import { HeaderPill } from "@/components/header-pill"
import { FooterSection } from "@/components/footer-section"

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

      <article className="pt-32 pb-16 px-6">
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
            <section className="mb-10">
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
            <section className="mb-10">
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
            <section className="mb-10">
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
            <section className="mb-10">
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
            <section className="mb-10">
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
            <section className="mb-10">
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
            <section className="mb-10">
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
            <section className="mb-10">
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
            <section className="mb-10">
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
