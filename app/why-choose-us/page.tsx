import { ReasonsGrid } from "@/components/card-grids"
import { PageHeader, Reveal } from "@/components/reveal"
import { ParticleField } from "@/components/particle-field"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Clock, Gauge } from "lucide-react"

export const metadata = {
  title: "Why Choose Us — Greek Root AI",
  description:
    "Discover why leading teams trust Greek Root AI for intelligent automation, scalable systems, and 24/7 AI support.",
}

const highlights = [
  { icon: ShieldCheck, label: "Enterprise-grade security" },
  { icon: Clock, label: "Weeks to deployment" },
  { icon: Gauge, label: "99% uptime guarantee" },
]

export default function WhyChooseUsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-36 pb-16 sm:pt-44">
        <ParticleField className="absolute inset-0 -z-10 h-full w-full opacity-50" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--color-primary)_14%,transparent),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <PageHeader
            eyebrow="Why Choose Us"
            title={
              <>
                Built for teams that refuse to{" "}
                <span className="text-gradient glow-text">stand still</span>
              </>
            }
            subtitle="We don't just deliver AI—we deliver outcomes. Every system we build is engineered for reliability, scale, and measurable business impact."
          />
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted-foreground"
                >
                  <h.icon className="h-4 w-4 text-primary" />
                  {h.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <ReasonsGrid />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass px-6 py-14 text-center sm:px-12">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Let's build something intelligent together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us about your goals and we'll map out the fastest path to AI-driven growth.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_36px_var(--color-primary)]"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
