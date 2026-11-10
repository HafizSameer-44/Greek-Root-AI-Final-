import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Greek Root AI',
  description: 'Terms of Service and operational guidelines for Greek Root AI infrastructure.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <span>Greek Root AI Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Terms of Service
          </h1>
          <p className="mt-3 text-slate-600 text-sm">
            Effective Date: November 9, 2026 &bull; Version 2.4
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Section 1 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Lexicon (Λεξικόν)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              1. Acceptance &amp; Definitions
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Welcome to <strong className="text-slate-900">Greek Root AI</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). 
              Our platform operates on classical principles of <em>Cybernetics</em> (from Greek <strong>Kybernetes</strong> &mdash; <em>Steersman/Governor</em>) 
              and <em>Sophia</em> (<strong>Σοφία</strong> &mdash; <em>Wisdom</em>). By using our artificial intelligence infrastructure, neural tools, and APIs, 
              you agree to these Terms.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>&quot;Platform&quot;:</strong> Our proprietary AI models, neural interfaces, and API ecosystems.</li>
              <li><strong>&quot;User&quot; / &quot;You&quot;:</strong> The entity accessing or directing compute resources.</li>
              <li><strong>&quot;Outputs&quot;:</strong> Algorithmic text, vision, code, or synthesis returned by the models.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Kratos (Κράτος)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              2. Account Credentials &amp; Authority
            </h2>
            <p className="text-slate-600 leading-relaxed">
              To access computational resources, you must establish an authenticated account. You maintain full 
              responsibility for securing access keys, API tokens, and credentials. Any algorithmic action 
              dispatched under your access credentials will be attributed directly to your entity.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Nomos (Νόμος)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              3. Acceptable Use Policy
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our systems are designed for benevolent innovation. You expressly agree <strong>not</strong> to utilize 
              our infrastructure to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Reverse engineer, decompile, or extract proprietary neural weights and model architectures.</li>
              <li>Synthesize automated disinformation, deceptive deepfakes, or malicious code.</li>
              <li>Bypass rate limits, perform model extraction attacks, or launch DDoS vectors against our servers.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Ktema (Κτῆμα)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              4. Intellectual Property &amp; Ownership
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Your Data:</strong> You retain ownership of all original data, prompts, and contextual assets (&quot;Inputs&quot;) 
              submitted to the platform, as well as the generated &quot;Outputs&quot; produced specifically for you.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>Our Platform:</strong> All baseline models, fine-tuned weights, UI components, algorithms, and 
              trademarks remain the exclusive property of Greek Root AI.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Apatheia (Ἀπάθεια)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              5. Disclaimers &amp; Limitation of Liability
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Neural networks produce probabilistic outputs. Services are provided on an <strong>&quot;AS IS&quot;</strong> and 
              <strong>&quot;AS AVAILABLE&quot;</strong> basis without warranties of non-hallucination or 100% precision. 
              Greek Root AI shall not be held liable for indirect, incidental, or operational damages resulting 
              from algorithmic recommendations or service downtime.
            </p>
          </section>

        </div>

        {/* Footer Contact */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-sm text-slate-600">
          Need legal clarifications? Contact us at{' '}
          <a href="mailto:contact@greekroot.org" className="text-emerald-600 underline font-semibold hover:text-emerald-700">
            contact@greekroot.org
          </a>
        </div>

      </div>
    </div>
  );
}