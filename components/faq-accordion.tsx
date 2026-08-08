"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"

const faqs = [
  {
    q: "What is Greek Root AI?",
    a: "Greek Root AI is an AI automation company that designs, builds, and deploys intelligent systems—chatbots, autonomous agents, and end-to-end automation—that help businesses operate around the clock, cut costs, and scale faster.",
  },
  {
    q: "What AI services do you provide?",
    a: "We offer AI chatbots, AI automation, AI agents, website development, lead generation systems, business automation, social media AI solutions, and fully custom AI tools tailored to your unique workflows.",
  },
  {
    q: "How long does a project take?",
    a: "Most projects move from kickoff to production in just a few weeks. Timelines depend on complexity, but our rapid-deployment process is designed to deliver value as quickly as possible.",
  },
  {
    q: "Do you provide support after delivery?",
    a: "Absolutely. We offer 24/7 AI-powered monitoring and ongoing support to ensure your systems run flawlessly. We also continuously optimize and scale your solutions as your business grows.",
  },
  {
    q: "Can AI automate my business?",
    a: "Yes. From customer support and lead generation to internal operations, we identify the highest-impact areas and build intelligent automation that runs reliably without constant supervision.",
  },
  {
    q: "Do you build custom AI systems?",
    a: "We specialize in bespoke AI products engineered precisely around your data, tools, and competitive edge—so you get a solution that fits your business perfectly, not a one-size-fits-all template.",
  },
]

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((item, i) => {
        const isOpen = open === i
        return (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`overflow-hidden rounded-2xl glass transition-shadow ${isOpen ? "glow-border" : ""}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium tracking-tight">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary"
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
