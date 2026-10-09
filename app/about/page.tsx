
"use client"

import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { motion } from "framer-motion"

const principles = [
  "Built around real business needs",
  "Designed for usability and reliability",
  "Focused on practical outcomes",
  "Created with room to scale",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="px-5 pb-16 pt-28 sm:pt-36 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            ABOUT GREEK ROOT AI
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Technology with a{" "}
            <span className="text-primary">purpose.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            We build AI solutions, intelligent automation, websites,
            and custom software that help businesses turn ideas into
            practical digital experiences.
          </p>

          <div className="mx-auto mt-14 h-px max-w-3xl bg-border" />
        </motion.div>
      </section>

      {/* Company Introduction */}
      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              WHO WE ARE
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Building useful technology for a changing world.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
          >
            <p>
              Greek Root AI is a technology company focused on helping
              businesses make better use of modern software and
              artificial intelligence.
            </p>

            <p>
              From business websites to AI-powered agents and custom
              applications, we work to turn complex technical ideas
              into useful, accessible solutions.
            </p>

            <p>
              Our focus is simple: understand the problem, build the
              right solution, and keep the real needs of the business
              at the center of the process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-border bg-card/30 p-7 sm:p-9"
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              OUR MISSION
            </p>

            <h3 className="text-2xl font-semibold tracking-tight">
              Make technology work for people.
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Our mission is to create useful digital products and
              intelligent solutions that help businesses improve
              workflows, serve customers, and move forward with
              confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-border bg-card/30 p-7 sm:p-9"
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              OUR VISION
            </p>

            <h3 className="text-2xl font-semibold tracking-tight">
              Build what comes next.
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              We envision a future where intelligent technology
              makes ambitious ideas more accessible and helps
              businesses build better ways of working.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section
        id="our-approach"
        className="px-5 py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              OUR APPROACH
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Less complexity.
              <br />
              More meaningful work.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
              Good technology starts with understanding. We focus on
              clear communication, thoughtful development, and
              solutions designed for real-world use.
            </p>
          </motion.div>

          <div className="space-y-0">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                }}
                className="flex items-center gap-4 border-b border-border py-5 first:border-t"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/25 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>

                <p className="text-sm font-medium">
                  {principle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-5 pb-20 pt-10 lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-6xl rounded-2xl border border-border bg-card/30 px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            LET'S BUILD SOMETHING USEFUL
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Have an idea worth building?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Tell us what you are working on. Let's explore how
            technology can help move your business forward.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}