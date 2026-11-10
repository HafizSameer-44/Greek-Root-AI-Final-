import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Greek Root AI',
  description: 'Privacy Policy and data protection framework for Greek Root AI.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <span>Greek Root AI Privacy Framework</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-slate-600 text-sm">
            Last Updated: November 9, 2026 &bull; Version 1.8
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Section 1 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Gnosis (Γνῶσις)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In alignment with <strong>Gnosis</strong> (the Greek concept of knowledge and sensory discovery), 
              we only process data essential to delivering optimal AI services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Prompts &amp; Inputs:</strong> Text, code, files, or imagery you submit to our AI interfaces.</li>
              <li><strong>Account Identifiers:</strong> Name, email address, billing information, and authentication credentials.</li>
              <li><strong>Telemetry &amp; Usage Data:</strong> IP addresses, browser types, API latency, and interaction logs.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Kryptos (Κρυπτός)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              2. Data Security &amp; Encryption
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Rooted in <strong>Kryptos</strong> (<em>hidden or concealed</em>), all data transmitted between your device 
              and our neural servers is protected using enterprise-grade TLS 1.3 encryption. Data at rest is stored using 
              AES-256 encryption standards. We restrict backend access using strict zero-trust access controls.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Eidos (Εἶδος)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              3. Model Training &amp; Data Isolation
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We honor the integrity of your intellectual output (<em>Eidos &mdash; shape and form</em>):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Zero Default Training:</strong> Enterprise and API user prompts are <strong>never</strong> used to train or fine-tune our foundation models without explicit opt-in consent.</li>
              <li><strong>Prompt Isolation:</strong> Inputs are isolated in temporary memory buffers and purged according to your workspace retention policies.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Koinonia (Κοινωνία)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              4. Third-Party Sharing &amp; Disclosure
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We do not sell, rent, or trade your personal data. We only share data with essential infrastructure providers 
              (such as cloud hosts and payment processors) under strict data processing agreements (DPAs), or when legally 
              compelled by valid court orders.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Autonomia (Αὐτονομία)
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
              5. Your Rights &amp; Data Control
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You retain full self-governance (<strong>Autonomia</strong>) over your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Access &amp; Export:</strong> Request a complete archive of your stored data and conversation histories.</li>
              <li><strong>Right to Erasure:</strong> Delete your account and purge all associated prompts from our active databases.</li>
              <li><strong>Opt-Out Options:</strong> Control data analytics and telemetry sharing via your account settings.</li>
            </ul>
          </section>

        </div>

        {/* Footer Contact */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-sm text-slate-600">
          Data protection inquiries or privacy rights requests:{' '}
          <a href="mailto:contact@greekroot.org" className="text-emerald-600 underline font-semibold hover:text-emerald-700">
            contact@greekroot.org
          </a>
        </div>

      </div>
    </div>
  );
}