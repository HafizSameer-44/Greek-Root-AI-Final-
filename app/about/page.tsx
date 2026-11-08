"use client"

import Link from "next/link"
import Image from "next/image"
import { Target, Eye, Sparkles, ArrowRight, CalendarDays, ShieldCheck, Cpu, Zap, Award } from "lucide-react"

const coreValues = [
  {
    icon: Zap,
    title: "Speed to Execution",
    description: "Under the leadership of Hafiz Sameer, we build and deploy robust AI solutions rapidly without compromising quality."
  },
  {
    icon: ShieldCheck,
    title: "Production-Grade Reliability",
    description: "Every automated pipeline, AI agent, and web architecture we build is rigorously tested for secure, long-term scalability."
  },
  {
    icon: Cpu,
    title: "Tailored AI Systems",
    description: "We don't do generic templates. Every solution is custom-engineered specifically for your unique business workflows."
  }
]

export default function AboutPage() {
  const CALENDLY_URL = "https://calendly.com/hafizsameer220/30min"

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-neutral-50 via-[#f4fbf7] to-neutral-50 pt-28 pb-24 text-neutral-900">
      
      {/* Professional Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[350px] sm:h-[500px] w-[320px] sm:w-[800px] rounded-full bg-[#a7f3c0]/25 blur-[120px] sm:blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#effcf3] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#18864b] border border-[#a7f3c0]/40">
            About Greek Root AI
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Pioneering the future of <span className="text-[#18864b]">Autonomous Business</span>
          </h1>
          <p className="mt-4 text-pretty text-sm sm:text-base lg:text-lg text-neutral-600 px-2 sm:px-0">
            Founded in 2026 by AI Systems Architect Hafiz Sameer, Greek Root AI is a premier software and automation agency engineered to bridge the gap between advanced artificial intelligence and growing enterprises.
          </p>
        </div>

        {/* Founder & Story Section */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-[24px] sm:rounded-[32px] border border-neutral-200/90 bg-white/80 p-8 sm:p-12 shadow-xl backdrop-blur-xl">
            
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b border-neutral-100">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-[#18864b]/30 p-1 bg-gradient-to-tr from-[#a7f3c0]/40 to-transparent shadow-md">
                <Image
                  src="/hafiz-sameer.jpg"
                  alt="Hafiz Sameer - Founder & CEO"
                  width={128}
                  height={128}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <span className="inline-block rounded-full bg-[#effcf3] px-3 py-1 text-xs font-semibold text-[#18864b] mb-2">
                  Founder & CEO
                </span>
                <h3 className="text-2xl font-bold text-neutral-950">Hafiz Sameer</h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  As an AI Systems Architect and full-stack developer, Hafiz Sameer established Greek Root AI with a singular vision: to empower businesses globally with autonomous multi-agent workflows, lightning-fast web apps, and intelligent automation that drive measurable ROI.
                </p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
              Our Vision & Mission
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              We observed that while artificial intelligence was advancing at a staggering pace, most businesses were left dealing with tedious manual workflows, disconnected tools, and rigid legacy software. Greek Root AI was built in 2026 to change that.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              We integrate enterprise-grade AI chatbots, automated lead pipelines, and autonomous agents directly into your existing ecosystem—turning complex operations into seamless, self-running systems.
            </p>

            {/* Mission, Vision, Approach Grid */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#effcf3]/60 border border-[#a7f3c0]/50 p-6 text-center sm:text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#18864b] text-white mb-4 mx-auto sm:mx-0 shadow-sm">
                  <Target className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-neutral-950 text-base">Our Mission</h4>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  To make high-performance AI automation accessible and effortless for ambitious companies worldwide.
                </p>
              </div>

              <div className="rounded-2xl bg-[#effcf3]/60 border border-[#a7f3c0]/50 p-6 text-center sm:text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#18864b] text-white mb-4 mx-auto sm:mx-0 shadow-sm">
                  <Eye className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-neutral-950 text-base">Our Vision</h4>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  A business landscape where manual operations are obsolete and teams operate entirely at strategic peak capacity.
                </p>
              </div>

              <div className="rounded-2xl bg-[#effcf3]/60 border border-[#a7f3c0]/50 p-6 text-center sm:text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#18864b] text-white mb-4 mx-auto sm:mx-0 shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-neutral-950 text-base">Our Approach</h4>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  We audit deeply, architect custom solutions, and ship production-ready systems engineered for immediate growth.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-20 mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#effcf3] px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#18864b] border border-[#a7f3c0]/40">
              Why Greek Root AI
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              Engineered on principles that drive results
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {coreValues.map((val) => {
              const ValueIcon = val.icon
              return (
                <div 
                  key={val.title}
                  className="rounded-[24px] border border-neutral-200/90 bg-white/80 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:border-[#218c50]/50 hover:shadow-[0_20px_40px_rgba(33,140,80,0.08)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#effcf3] border border-[#a7f3c0]/60 text-[#18864b] mb-5">
                      <ValueIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-neutral-950">
                      {val.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600">
                      {val.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-[24px] sm:rounded-[32px] border border-neutral-200/95 bg-white/80 p-8 sm:p-12 shadow-xl backdrop-blur-2xl text-center relative overflow-hidden">
            
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#a7f3c0]/20 blur-3xl pointer-events-none" />

            <span className="inline-block rounded-full bg-[#effcf3] px-3.5 py-1 text-xs font-semibold text-[#18864b] border border-[#a7f3c0]/40">
              Let&apos;s Build Together
            </span>
            
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
              Ready to scale your business with custom AI?
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
              Book a direct discovery call with Hafiz Sameer and our engineering team. Let&apos;s map out your automation roadmap.
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