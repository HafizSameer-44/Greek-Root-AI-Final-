"use client"

import Link from "next/link"
import { 
  MessageSquareText, 
  Workflow, 
  Bot, 
  Code2, 
  Filter, 
  Cpu, 
  Share2, 
  Wrench, 
  ArrowRight, 
  CalendarDays,
  CheckCircle2
} from "lucide-react"

const services = [
  {
    icon: MessageSquareText,
    title: "AI Chatbots",
    description: "Conversational assistants that handle support, sales, and onboarding 24/7 with human-like understanding.",
    features: ["Instant 24/7 Response", "Multi-platform Integration", "Custom Knowledge Base Training"]
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description: "Automate repetitive workflows end-to-end and free your team to focus on high-value work.",
    features: ["Zero Manual Data Entry", "Cross-app Synchronization", "Error-free Execution"]
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous agents that reason, plan, and take action across your tools without supervision.",
    features: ["Multi-step Reasoning", "Tool & API Execution", "Autonomous Task Handling"]
  },
  {
    icon: Code2,
    title: "Website Development",
    description: "Lightning-fast, conversion-optimized websites engineered with modern, scalable architecture.",
    features: ["Next.js & React Powered", "Blazing Fast Speed", "SEO & Conversion Optimized"]
  },
  {
    icon: Filter,
    title: "Lead Generation Systems",
    description: "AI-driven pipelines that find, qualify, and nurture leads while you sleep.",
    features: ["Automated Outreach", "Smart Lead Scoring", "Instant CRM Sync"]
  },
  {
    icon: Cpu,
    title: "Business Automation",
    description: "Connect your entire operation into one intelligent system that runs itself.",
    features: ["Unified Operations", "Real-time Analytics", "Scalable Infrastructure"]
  },
  {
    icon: Share2,
    title: "Social Media AI Solutions",
    description: "Generate, schedule, and optimize content across channels with on-brand AI creativity.",
    features: ["Automated Scheduling", "On-brand Tone Generation", "Multi-channel Reach"]
  },
  {
    icon: Wrench,
    title: "Custom AI Tools",
    description: "Bespoke AI products built precisely for your data, workflows, and competitive edge.",
    features: ["100% Tailored Architecture", "Secure Data Handling", "Proprietary Workflow Logic"]
  },
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-neutral-50 via-[#f4fbf7] to-neutral-50 pt-28 pb-24 text-neutral-900">
      
      {/* Professional Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[350px] sm:h-[500px] w-[320px] sm:w-[800px] rounded-full bg-[#a7f3c0]/25 blur-[120px] sm:blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#effcf3] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#18864b] border border-[#a7f3c0]/40">
            Our Services & Expertise
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Engineered for growth, powered by <span className="text-[#18864b]">Advanced AI</span>
          </h1>
          <p className="mt-4 text-pretty text-sm sm:text-base lg:text-lg text-neutral-600 px-2 sm:px-0">
            We build high-performance AI agents, intelligent workflows, and custom web architecture tailored to scale your business effortlessly.
          </p>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div 
                key={service.title}
                className="flex flex-col justify-between h-full rounded-[24px] sm:rounded-[28px] border border-neutral-200/90 bg-white/80 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:border-[#218c50]/50 hover:shadow-[0_20px_40px_rgba(33,140,80,0.08)] group"
              >
                <div>
                  {/* Service Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#effcf3] border border-[#a7f3c0]/60 text-[#18864b] transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#18864b] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="mt-6 space-y-2 border-t border-neutral-100 pt-5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                        <CheckCircle2 className="h-4 w-4 text-[#18864b] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="mt-8 pt-4">
                  <Link
                    href="https://calendly.com/hafizsameer220/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#18864b] transition-colors hover:text-[#115e33]"
                  >
                    <span>Discuss this solution</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="mt-16 sm:mt-24 mx-auto max-w-4xl">
          <div className="rounded-[24px] sm:rounded-[32px] border border-neutral-200/95 bg-white/80 p-8 sm:p-12 shadow-xl backdrop-blur-2xl text-center relative overflow-hidden">
            
            {/* Subtle inner accent */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#a7f3c0]/20 blur-3xl pointer-events-none" />

            <span className="inline-block rounded-full bg-[#effcf3] px-3.5 py-1 text-xs font-semibold text-[#18864b] border border-[#a7f3c0]/40">
              Ready to Scale?
            </span>
            
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
              Let&apos;s build your custom AI automation pipeline
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
              Book a free discovery call with our team. We&apos;ll analyze your current workflows and show you exactly where AI can save hours of manual work.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="https://calendly.com/hafizsameer220/30min"
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