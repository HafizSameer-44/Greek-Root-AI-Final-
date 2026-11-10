'use client';

import React, { useState } from 'react';

interface PrivacySection {
  id: string;
  greekTitle: string;
  title: string;
  content: React.ReactNode;
}

const privacyData: PrivacySection[] = [
  {
    id: 'collection',
    greekTitle: 'Gnosis (Γνῶσις)',
    title: '1. Information We Collect',
    content: (
      <>
        <p className="mb-4 text-slate-600 leading-relaxed">
          In alignment with <strong>Gnosis</strong> (the Greek concept of knowledge and sensory discovery), 
          we only process data essential to delivering optimal AI services:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li><strong>Prompts &amp; Inputs:</strong> Text, code, files, or imagery you submit to our AI interfaces.</li>
          <li><strong>Account Identifiers:</strong> Name, email address, billing information, and authentication credentials.</li>
          <li><strong>Telemetry &amp; Usage Data:</strong> IP addresses, browser types, API latency, and interaction logs.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'encryption',
    greekTitle: 'Kryptos (Κρυπτός)',
    title: '2. Data Security & Encryption',
    content: (
      <p className="text-slate-600 leading-relaxed">
        Rooted in <strong>Kryptos</strong> (<em>hidden or concealed</em>), all data transmitted between your device 
        and our neural servers is protected using enterprise-grade TLS 1.3 encryption. Data at rest is stored using 
        AES-256 encryption standards. We restrict backend access using strict zero-trust access controls.
      </p>
    ),
  },
  {
    id: 'ai-training',
    greekTitle: 'Eidos (Εἶδος)',
    title: '3. Model Training & Data Isolation',
    content: (
      <>
        <p className="mb-4 text-slate-600 leading-relaxed">
          We honor the integrity of your intellectual output (<em>Eidos — shape and form</em>):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li><strong>Zero Default Training:</strong> Enterprise and API user prompts are <strong>never</strong> used to train or fine-tune our foundation models without explicit opt-in consent.</li>
          <li><strong>Prompt Isolation:</strong> Inputs are isolated in temporary memory buffers and purged according to your workspace retention policies.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sharing',
    greekTitle: 'Koinonia (Κοινωνία)',
    title: '4. Third-Party Sharing & Disclosure',
    content: (
      <p className="text-slate-600 leading-relaxed">
        We do not sell, rent, or trade your personal data. We only share data with essential infrastructure providers 
        (such as cloud hosts and payment processors) under strict data processing agreements (DPAs), or when legally 
        compelled by valid court orders.
      </p>
    ),
  },
  {
    id: 'rights',
    greekTitle: 'Autonomia (Αὐτονομία)',
    title: '5. Your Rights & Data Control',
    content: (
      <>
        <p className="mb-4 text-slate-600 leading-relaxed">
          You retain full self-governance (<strong>Autonomia</strong>) over your personal data:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li><strong>Access &amp; Export:</strong> Request a complete archive of your stored data and conversation histories.</li>
          <li><strong>Right to Erasure:</strong> Delete your account and purge all associated prompts from our active databases.</li>
          <li><strong>Opt-Out Options:</strong> Control data analytics and telemetry sharing via your account settings.</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState<string>(privacyData[0].id);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Header Section */}
        <div className="bg-slate-900 text-white p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <span>Greek Root AI Privacy Framework</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-slate-400 text-sm">
            Last Updated: November 9, 2026 &bull; Version 1.8
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
          
          {/* Sidebar Navigation */}
          <nav className="md:col-span-4 bg-slate-50 border-r border-slate-200 p-4 space-y-1">
            {privacyData.map((section) => {
              const isActive = activeTab === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 flex flex-col ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-700 hover:bg-slate-200/60'
                  }`}
                >
                  <span className={`text-xs font-semibold ${isActive ? 'text-emerald-200' : 'text-slate-400'}`}>
                    {section.greekTitle}
                  </span>
                  <span className="truncate">{section.title}</span>
                </button>
              );
            })}
          </nav>

          {/* Active Section Content */}
          <main className="md:col-span-8 p-6 sm:p-8">
            {privacyData.map((section) => {
              if (section.id !== activeTab) return null;
              return (
                <div key={section.id} className="animate-fadeIn">
                  <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                    {section.greekTitle}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-1">
                    {section.title}
                  </h2>
                  <div className="prose prose-slate">
                    {section.content}
                  </div>
                </div>
              );
            })}

            {/* Footer Contact */}
            <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500">
              Data protection inquiries or privacy rights requests:{' '}
              <a href="mailto:contact@greekroot.org" className="text-emerald-600 underline font-medium">
                contact@greekroot.org
              </a>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}