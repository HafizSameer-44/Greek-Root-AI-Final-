import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Hero } from "@/components/hero"
import { TestimonialsMarquee } from "@/components/stats-counter"
import { ReasonsGrid, ServicesGrid } from "@/components/card-grids"
import { Reveal } from "@/components/reveal"

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Testimonials Marquee */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <TestimonialsMarquee />
      </section>

      {/* Calendly Booking Section (Fully Expanded & Fitted) */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Schedule A Call
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Book Your Free AI Strategy Call
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-pretty text-muted-foreground">
              On this call, we&apos;ll map out exactly how to implement an AI Setup/System/Solution for your business needs.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 glass bg-card/60 shadow-2xl backdrop-blur-xl">
            <div className="p-2 sm:p-4">
              <iframe
                src="https://calendly.com/hafizsameer220/30min"
                className="w-full h-[850px] sm:h-[900px] rounded-2xl border-0"
                title="Greek Root AI Strategy Call"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Why choose us preview */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Why Greek Root AI
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              The intelligent edge your business has been missing
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-pretty text-muted-foreground">
              We combine cutting-edge AI with elegant engineering to deliver
              systems that are reliable, scalable, and built for growth.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <ReasonsGrid count={6} />
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div className="max-w-xl">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                What we build
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                End-to-end AI solutions for modern teams
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold transition-all hover:glow-border"
            >
              Explore all services
              <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12">
          <ServicesGrid count={4} />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-28 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass px-6 py-16 text-center sm:px-12">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to let AI run the heavy lifting?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
                Book a free strategy call and discover exactly how Greek Root AI
                can automate, scale, and grow your business.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex w-full border border-gray items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_36px_var(--color-primary)] sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex w-full items-center justify-center rounded-full glass px-7 py-3.5 text-sm font-semibold transition-all hover:glow-border sm:w-auto"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}