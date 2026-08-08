"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Play, Sparkles, Bot, Workflow, Zap } from "lucide-react"
import { ParticleField } from "@/components/particle-field"

const floaters = [
  { icon: Bot, top: "18%", left: "8%", delay: 0 },
  { icon: Workflow, top: "62%", left: "12%", delay: 1.2 },
  { icon: Zap, top: "24%", left: "86%", delay: 0.6 },
  { icon: Sparkles, top: "70%", left: "82%", delay: 1.8 },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Background layers */}
      <ParticleField className="absolute inset-0 -z-10 h-full w-full opacity-70" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--color-primary)_18%,transparent),transparent_60%)]" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

      {/* Floating AI icons */}
      {floaters.map((f, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden lg:block"
          style={{ top: f.top, left: f.left }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: f.delay, ease: "easeInOut" }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl glass glow-border">
            <f.icon className="h-6 w-6 text-primary" />
          </div>
        </motion.div>
      ))}

      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Next-generation AI automation platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Building AI That Works{" "}
          <span className="text-gradient glow-text">While You Sleep</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Greek Root AI designs intelligent automation, autonomous agents, and
          smart business systems that run around the clock—so your company scales
          effortlessly, cuts costs, and never misses an opportunity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_36px_var(--color-primary)] sm:w-auto"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:glow-border sm:w-auto"
          >
            <Play className="h-4 w-4 text-primary" />
            Book a Demo
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14"
        />
      </div>
    </section>
  )
}
