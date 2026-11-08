"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, CalendarDays, ArrowRight, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is Greek Root AI and what services do you provide?",
    answer: "Greek Root AI is a specialized software and automation agency founded in 2026 by Hafiz Sameer. We build custom AI chatbots, end-to-end business automations, autonomous AI agents, lightning-fast web applications, and AI-driven lead generation systems tailored to scale your business."
  },
  {
    question: "How does the AI automation process work for my business?",
    answer: "We start with a thorough workflow audit during our discovery call to identify where manual tasks are slowing you down. Then, we design a custom AI architecture, test it rigorously for production-grade reliability, deploy it seamlessly, and continuously optimize it as your business grows."
  },
  {
    question: "Are your AI systems secure and compliant with data privacy?",
    answer: "Yes, absolutely. We prioritize enterprise-grade security and data privacy. All custom AI integrations, workflows, and data handling protocols are built with strict encryption and secure API architectures to protect your proprietary business data."
  },
  {
    question: "How long does it typically take to deploy an AI solution or web app?",
    answer: "Deployment timelines depend on the complexity of the project. Standard AI chatbots and automation pipelines can often be deployed within days, while bespoke multi-agent workflows or full-stack web applications typically range from 2 to 4 weeks."
  },
  {
    question: "Do I need technical expertise to manage the AI tools you build?",
    answer: "Not at all. We engineer our systems to be completely user-friendly and autonomous. Once deployed, they run in the background with minimal supervision, and we provide full documentation and ongoing support if needed."
  },
  {
    question: "How do we get started with Greek Root AI?",
    answer: "Getting started is simple! Just click the 'Book a Free Discovery Call' button anywhere on our website, pick a time that works best for you on our Calendly calendar, and we'll discuss your workflows and automation roadmap."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const CALENDLY_URL = "https://calendly.com/hafizsameer220/30min"

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-neutral-50 via-[#f4fbf7] to-neutral-50 pt-28 pb-24 text-neutral-900">
      
      {/* Professional Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[350px] sm:h-[500px] w-[320px] sm:w-[800px] rounded-full bg-[#a7f3c0]/25 blur-[120px] sm:blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#effcf3] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#18864b] border border-[#a7f3c0]/40">
            Frequently Asked Questions
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Got questions? We&apos;ve got <span className="text-[#18864b]">answers</span>
          </h1>
          <p className="mt-4 text-pretty text-sm sm:text-base lg:text-lg text-neutral-600 px-2 sm:px-0">
            Everything you need to know about working with Greek Root AI, our development process, security, and AI automation solutions.
          </p>
        </div>

        {/* FAQ Accordion Boxes */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-[22px] border border-neutral-200/90 bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-300 hover:border-[#218c50]/40 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-neutral-950 pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#effcf3] text-[#18864b] transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#18864b] text-white" : ""}`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-neutral-100 pt-4">
                      <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="mt-20">
          <div className="rounded-[24px] sm:rounded-[32px] border border-neutral-200/95 bg-white/80 p-8 sm:p-12 shadow-xl backdrop-blur-2xl text-center relative overflow-hidden">
            
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#a7f3c0]/20 blur-3xl pointer-events-none" />

            <span className="inline-block rounded-full bg-[#effcf3] px-3.5 py-1 text-xs font-semibold text-[#18864b] border border-[#a7f3c0]/40">
              Still Have Questions?
            </span>
            
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
              Let&apos;s discuss your project directly
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
              Book a free discovery call with Hafiz Sameer and our team. We&apos;ll answer all your technical and operational questions.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-neutral-800 hover:shadow-[0_5px_20px_rgba(0,0,0,0.2)]"
              >
                <CalendarDays className="h-4 w-4 shrink-0" />
                <span>Book a Free Discovery Call</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}