"use client"

import Image from "next/image"
import { Target, Eye, Sparkles, ArrowRight } from "lucide-react"

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const teamMembers = [
  {
    name: "Hafiz Sameer",
    role: "Founder & CEO",
    image: "/hafiz-sameer.jpg",
    bio: "AI Systems Architect and founder obsessed with building scalable autonomous AI workflows, agents, and full-stack solutions.",
    linkedin: "https://www.linkedin.com/in/hafiz-sameer-848949430/",
  },
  {
    name: "Kashan Khalid",
    role: "Co-Founder",
    image: "/kashif-khalid.jpg",
    bio: "Tech strategist and entrepreneur leveraging cutting-edge AI tools and engineering to automate complex business operations.",
    linkedin: "https://www.linkedin.com/in/kashankhalid123/",
  },
]

export default function TeamPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-neutral-50 via-[#f4fbf7] to-neutral-50 pt-28 pb-24 text-neutral-900">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[350px] sm:h-[450px] w-[320px] sm:w-[700px] rounded-full bg-[#a7f3c0]/20 blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#effcf3] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#18864b] border border-[#a7f3c0]/40">
            Meet the Team
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            The people behind <span className="text-[#18864b]">Greek Root AI</span>
          </h1>
          <p className="mt-4 text-pretty text-sm sm:text-base lg:text-lg text-neutral-600 px-2 sm:px-0">
            Founded in 2026 — driven by the mission to make enterprise-grade AI automation accessible and effortless for growing businesses.
          </p>
        </div>

        {/* 2 Centered Team Cards with Profile Pictures */}
        <div className="mt-12 sm:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="w-full md:w-1/2">
              <div className="flex flex-col justify-between h-full rounded-[24px] sm:rounded-[28px] border border-neutral-200/90 bg-white/80 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-[#218c50]/40 hover:shadow-[0_20px_40px_rgba(33,140,80,0.08)] text-center items-center">
                
                {/* Profile Image & Role Tag */}
                <div className="flex flex-col items-center w-full">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-2 border-[#18864b]/30 p-1 bg-gradient-to-tr from-[#a7f3c0]/40 to-transparent shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>

                  <span className="mt-4 inline-block rounded-full bg-[#effcf3] px-3.5 py-1 text-xs font-semibold text-[#18864b]">
                    {member.role}
                  </span>

                  <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600 px-1">
                    {member.bio}
                  </p>
                </div>

                {/* Light Minimal LinkedIn Button */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-neutral-100 w-full flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50/80 px-5 py-2.5 text-xs font-semibold text-neutral-700 transition-all hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/5 hover:text-[#0a66c2]"
                  >
                    <LinkedinIcon className="h-4 w-4 text-[#0a66c2]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story & Mission Section */}
        <div className="mt-16 sm:mt-24 mx-auto max-w-4xl">
          <div className="rounded-[24px] sm:rounded-[32px] border border-neutral-200/90 bg-white/70 p-6 sm:p-12 shadow-lg backdrop-blur-xl">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl text-center sm:text-left">
              Built on a simple belief
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed text-sm sm:text-base lg:text-lg">
              Founded in 2026, Greek Root AI was built on a straightforward belief: the best AI tools shouldn&apos;t be locked behind enterprise budgets and six-month consulting engagements.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed text-sm sm:text-base lg:text-lg">
              We saw businesses of all sizes spending too much time on manual processes that could be automated. Meanwhile, AI was advancing faster than most teams could keep up with. We built Greek Root AI to bridge that gap, giving companies the AI infrastructure they need to work smarter, move faster, and focus on growth.
            </p>

            {/* Grid for Mission, Vision, Approach */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#effcf3]/60 border border-[#a7f3c0]/50 p-5 text-center sm:text-left">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#18864b] text-white mb-3 mx-auto sm:mx-0">
                  <Target className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">Our Mission</h4>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  To make powerful AI automation accessible to every ambitious business to scale operations.
                </p>
              </div>

              <div className="rounded-2xl bg-[#effcf3]/60 border border-[#a7f3c0]/50 p-5 text-center sm:text-left">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#18864b] text-white mb-3 mx-auto sm:mx-0">
                  <Eye className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">Our Vision</h4>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  A world where teams focus on strategy and growth instead of repetitive manual tasks.
                </p>
              </div>

              <div className="rounded-2xl bg-[#effcf3]/60 border border-[#a7f3c0]/50 p-5 text-center sm:text-left">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#18864b] text-white mb-3 mx-auto sm:mx-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">Our Approach</h4>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  We listen first, build second. Every system is tailored to deliver measurable ROI from day one.
                </p>
              </div>
            </div>

            {/* Bottom Follow CTA */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-sm sm:text-base font-semibold text-neutral-900">Follow us on LinkedIn</h4>
                <p className="text-xs text-neutral-500">Stay updated with our latest AI systems and announcements.</p>
              </div>
              <a
                href="https://www.linkedin.com/company/greekroot-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-neutral-800 hover:shadow-md"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>Follow Greek Root AI</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}