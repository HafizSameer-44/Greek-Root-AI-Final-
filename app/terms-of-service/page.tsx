'use client';

import React, { useState } from 'react';

interface TermSection {
  id: string;
  greekTitle: string;
  title: string;
  content: React.ReactNode;
}

const termsData: TermSection[] = [
  {
    id: 'definitions',
    greekTitle: 'Lexicon (Λεξικόν)',
    title: '1. Acceptance & Definitions',
    content: (
      <>
        <p className="mb-4 text-slate-600 leading-relaxed">
          Welcome to <strong className="text-slate-900">Greek Root AI</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). 
          Our platform operates on classical principles of <em>Cybernetics</em> (from Greek <strong>Kybernetes</strong> — <em>Steersman/Governor</em>) 
          and <em>Sophia</em> (<strong>Σοφία</strong> — <em>Wisdom</em>). By using our artificial intelligence infrastructure, neural tools, and APIs, 
          you agree to these Terms.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li><strong>&quot;Platform&quot;:</strong> Our proprietary AI models, neural interfaces, and API ecosystems.</li>
          <li><strong>&quot;User&quot; / &quot;You&quot;:</strong> The entity accessing or directing compute resources.</li>
          <li><strong>&quot;Outputs&quot;:</strong> Algorithmic text, vision, code, or synthesis returned by the models.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'accounts',
    greekTitle: 'Kratos (Κράτος)',
    title: '2. Account Credentials & Authority',
    content: (
      <p className="text-slate-600 leading-relaxed">
        To access computational resources, you must establish an authenticated account. You maintain full 
        responsibility for securing access keys, API tokens, and credentials. Any algorithmic action 
        dispatched under your access credentials will be attributed directly to your entity.
      </p>
    ),
  },
  {
    id: 'acceptable-use',
    greekTitle: 'Nomos (Νόμος)',
    title: '3. Acceptable Use Policy',
    content: (
      <>
        <p className="mb-4 text-slate-600 leading-relaxed">
          Our systems are designed for benevolent innovation. You expressly agree <strong>not</strong> to utilize 
          our infrastructure to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Reverse engineer, decompile, or extract proprietary neural weights and model architectures.</li>
          <li>Synthesize automated disinformation, deceptive deepfakes, or malicious code.</li>
          <li>Bypass rate limits, perform model extraction attacks, or launch DDoS vectors against our servers.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ip-rights',
    greekTitle: 'Ktema (Κτῆμα)',
    title: '4. Intellectual Property & Ownership',
    content: (
      <>
        <p className="mb-4 text-slate-600 leading-relaxed">
          <strong>Your Data:</strong> You retain ownership of all original data, prompts, and contextual assets (&quot;Inputs&quot;) 
          submitted to the platform, as well as the generated &quot;Outputs&quot; produced specifically for you.
        </p>
        <p className="text-slate-600 leading-relaxed">
          <strong>Our Platform:</strong> All baseline models, fine-tuned weights, UI components, algorithms, and 
          trademarks remain the exclusive property of Greek Root AI.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    greekTitle: 'Apatheia (Ἀπάθεια)',
    title: '5. Disclaimers & Limitation of Liability',
    content: (
      <p className="text-slate-600 leading-relaxed">
        Neural networks produce probabilistic outputs. Services are provided on an <strong>&quot;AS IS&quot;</strong> and 
        <strong>&quot;AS AVAILABLE&quot;</strong> basis without warranties of non-hallucination or 100% precision. 
        Greek Root AI shall not be held liable for indirect, incidental, or operational damages resulting 
        from algorithmic recommendations or service downtime.
      </p>
    ),
  },
];

export default function TermsOfService() {
  const [activeTab, setActiveTab] = useState<string>(termsData[0].id);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Header Section */}
        <div className="bg-slate-900 text-white p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <span>Greek Root AI Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms of Service</h1>
          <p className="mt-2 text-slate-400 text-sm">
            Effective Date: November 9, 2026 &bull; Version 2.4
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
          
          {/* Sidebar Navigation */}
          <nav className="md:col-span-4 bg-slate-50 border-r border-slate-200 p-4 space-y-1">
            {termsData.map((section) => {
              const isActive = activeTab === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 flex flex-col ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-700 hover:bg-slate-200/60'
                  }`}
                >
                  <span className={`text-xs font-semibold ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>
                    {section.greekTitle}
                  </span>
                  <span className="truncate">{section.title}</span>
                </button>
              );
            })}
          </nav>

          {/* Active Section Content */}
          <main className="md:col-span-8 p-6 sm:p-8">
            {termsData.map((section) => {
              if (section.id !== activeTab) return null;
              return (
                <div key={section.id} className="animate-fadeIn">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
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
              Need legal clarifications? Contact us at{' '}
              <a href="mailto:contact@greekroot.org" className="text-blue-600 underline font-medium">
                contact@greekroot.org
              </a>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}