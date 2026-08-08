import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Greek Root AI",
  description:
    "Terms of Service governing the use of Greek Root AI products and services.",
};

export default function TermsOfServicePage() {
  return (
<main className="relative min-h-screen overflow-hidden bg-white text-black">
      
      

      <div className="relative mx-auto max-w-5xl px-6 py-20">

        <Link
          href="/"
         className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm transition hover:border-green-600 hover:text-green-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-12">

          <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-green-700">
            Legal
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight">
            Terms of Service
          </h1>

          <p className="mt-4 text-gray-600">
            <span className="font-semibold text-black">
              Last Updated:
            </span>{" "}
             Aug 1, 2026
          </p>

          <div className="mt-12 space-y-12">

            {/* ===================================================== */}
            {/* 1. ACCEPTANCE OF TERMS */}
            {/* ===================================================== */}

            <section>
              <h2 className="text-2xl font-bold text-black">
                1. Acceptance of Terms
              </h2>

              <p className="mt-5 leading-8 text-gray-900">
                Access to or use of Greek Root AI services constitutes
                acceptance of these Terms of Service. Where a user acts
                on behalf of a company, organization, or other legal
                entity, they represent and warrant that they possess
                the authority to legally bind that entity to these
                Terms. These Terms shall be governed by the applicable
                laws specified within the governing service agreement,
                and any disputes shall be subject to the jurisdiction
                of the competent courts identified therein.
              </p>
            </section>

            {/* ===================================================== */}
            {/* 2. SCOPE OF SERVICES */}
            {/* ===================================================== */}

            <section>
              <h2 className="text-2xl font-bold text-black">
                2. Scope of Services
              </h2>

              <p className="mt-5 leading-8 text-gray-900">
                Greek Root AI provides artificial intelligence
                development, AI agents, workflow automation, custom
                software engineering, website development, business
                applications, API integrations, cloud solutions, and
                related consulting services. Deliverables, technical
                specifications, timelines, and project requirements
                shall be defined within the applicable proposal,
                quotation, Statement of Work, or Service Agreement.
                Certain services rely upon third-party platforms,
                infrastructure providers, and AI models; therefore,
                specific performance outcomes or platform behavior
                cannot be contractually guaranteed.
              </p>
            </section>
                        {/* ===================================================== */}
            {/* 3. PRICING & PAYMENTS */}
            {/* ===================================================== */}

            <section>
              <h2 className="text-2xl font-bold text-black">
                3. Pricing & Payments
              </h2>

              <p className="mt-5 leading-8 text-gray-900">
                Service fees shall be specified within the applicable
                proposal, quotation, subscription plan, or Service
                Agreement. Unless otherwise agreed in writing, invoices
                shall be issued in the agreed billing currency and are
                payable within the payment period stated on the invoice.
              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-900">
                <li>
                  Billing may be monthly, annually, or project-based,
                  depending on the agreed engagement.
                </li>

                <li>
                  Payment shall be made on or before the invoice due
                  date using an approved payment method.
                </li>

                <li>
                  Greek Root AI reserves the right to suspend or
                  terminate services where payment remains overdue.
                </li>

                <li>
                  Any taxes, duties, bank charges, or governmental fees
                  applicable to the transaction shall be the
                  responsibility of the client unless otherwise stated.
                </li>
              </ul>
            </section>

            {/* ===================================================== */}
            {/* 4. INTELLECTUAL PROPERTY & DATA */}
            {/* ===================================================== */}

            <section>
              <h2 className="text-2xl font-bold text-black">
                4. Intellectual Property & Data
              </h2>

              <p className="mt-5 leading-8 text-gray-900">
                Clients retain ownership of all trademarks, logos,
                proprietary content, business information, and other
                materials supplied to Greek Root AI for the purpose of
                delivering the agreed services.
              </p>

              <p className="mt-5 leading-8 text-gray-900">
                Greek Root AI retains all rights, title, and interest
                in its proprietary software, source code, artificial
                intelligence systems, automation frameworks,
                methodologies, templates, documentation, internal
                tools, technical know-how, and related intellectual
                property developed independently of the client project.
              </p>

              <p className="mt-5 leading-8 text-gray-900">
                Unless expressly assigned through a separate written
                agreement, no ownership rights in Greek Root AI
                intellectual property are transferred to the client.
                Upon full payment, the client receives only the
                applicable usage rights expressly granted under the
                relevant Service Agreement.
              </p>
            </section>
                        {/* ===================================================== */}
            {/* 5. LIMITATION OF LIABILITY */}
            {/* ===================================================== */}

            <section>
              <h2 className="text-2xl font-bold text-black">
                5. Limitation of Liability
              </h2>

              <p className="mt-5 leading-8 text-gray-900">
                To the fullest extent permitted by applicable law,
                Greek Root AI shall not be liable for any indirect,
                incidental, consequential, special, or punitive damages
                arising from the use of its services, including losses
                resulting from third-party platform changes, artificial
                intelligence model updates, API modifications, hosting
                interruptions, cybersecurity incidents beyond our
                reasonable control, or other external service
                disruptions.
              </p>

              <p className="mt-5 leading-8 text-gray-900">
                Any direct liability of Greek Root AI arising from or
                relating to the services shall be limited to the total
                amount of fees paid by the client during the three (3)
                months immediately preceding the event giving rise to
                the claim, except where a greater limitation is
                prohibited by applicable law.
              </p>
            </section>

            {/* ===================================================== */}
            {/* CONTACT INFORMATION */}
            {/* ===================================================== */}

   

          </div>
        </div>
      </div>
    </main>
  );
}
          