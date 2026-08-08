import { PageHeader, Reveal } from "@/components/reveal"
import { FaqAccordion } from "@/components/faq-accordion"
import { ParticleField } from "@/components/particle-field"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "FAQ — Greek Root AI",
  description:
    "Answers to the most common questions about Greek Root AI's services, timelines, support, and custom AI systems.",
}

export default function FaqPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-36 pb-16 sm:pt-44">
        <ParticleField className="absolute inset-0 -z-10 h-full w-full opacity-50" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--color-primary)_14%,transparent),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <PageHeader
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="text-gradient glow-text">answered</span>
              </>
            }
            subtitle="Everything you need to know about working with Greek Root AI. Can't find what you're looking for? Reach out anytime."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 pb-16 lg:px-8">
        <FaqAccordion />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 pb-24 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass px-6 py-12 text-center sm:px-12">
            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
            <div className="relative">
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Still have questions?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
                Our team is ready to help you find the right AI solution.
              </p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_36px_var(--color-primary)]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
