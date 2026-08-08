import { ServicesGrid } from "@/components/card-grids"
import { PageHeader, Reveal } from "@/components/reveal"
import { ParticleField } from "@/components/particle-field"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Services — Greek Root AI",
  description:
    "AI chatbots, automation, agents, web development, lead generation, and custom AI tools built to scale your business.",
}

const process = [
  {
    step: "01",
    title: "Discover",
    description: "We audit your workflows and pinpoint the highest-impact automation opportunities.",
  },
  {
    step: "02",
    title: "Design",
    description: "We architect a tailored AI system mapped precisely to your goals and data.",
  },
  {
    step: "03",
    title: "Deploy",
    description: "We ship production-ready systems fast, with rigorous testing and monitoring.",
  },
  {
    step: "04",
    title: "Scale",
    description: "We optimize and expand your systems as your business grows.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-36 pb-16 sm:pt-44">
        <ParticleField className="absolute inset-0 -z-10 h-full w-full opacity-50" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--color-primary)_14%,transparent),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <PageHeader
            eyebrow="Services"
            title={
              <>
                Intelligent systems for{" "}
                <span className="text-gradient glow-text">every layer</span> of
                your business
              </>
            }
            subtitle="From conversational AI to fully autonomous agents, we design and deploy the tools that put your operations on autopilot."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <ServicesGrid />
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              How we work
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A proven path from idea to impact
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl glass p-6">
                <span className="text-4xl font-semibold text-primary/30">
                  {p.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass px-6 py-14 text-center sm:px-12">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Not sure which solution fits?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Book a free consultation and we'll recommend the right AI stack for your business.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_36px_var(--color-primary)]"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
