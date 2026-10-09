
"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const news = [
  {
    category: "AI MODELS",
    title: "The Next Generation of AI Models",
    description:
      "Explore developments in AI capabilities, reasoning, and intelligent tools.",
    source: "OpenAI",
    url: "https://openai.com/news/",
  },
  {
    category: "RESEARCH",
    title: "Breakthroughs in Artificial Intelligence",
    description:
      "Discover research advancing machine learning and the future of intelligent systems.",
    source: "Google DeepMind",
    url: "https://deepmind.google/discover/blog/",
  },
  {
    category: "AI ASSISTANTS",
    title: "Building More Capable AI Assistants",
    description:
      "Follow updates in AI assistants designed to support complex everyday tasks.",
    source: "Anthropic",
    url: "https://www.anthropic.com/news",
  },
  {
    category: "BUSINESS",
    title: "How AI Is Changing Modern Businesses",
    description:
      "Explore how companies are integrating AI into operations, services, and decision-making.",
    source: "TechCrunch",
    url: "https://techcrunch.com/category/artificial-intelligence/",
  },
  {
    category: "AI AGENTS",
    title: "The Evolution of Autonomous AI Agents",
    description:
      "Understand how AI agents connect tools, execute tasks, and automate workflows.",
    source: "Google Cloud",
    url: "https://cloud.google.com/discover/what-are-ai-agents",
  },
  {
    category: "GENERATIVE AI",
    title: "New Directions in Generative AI",
    description:
      "Explore emerging applications of AI in content creation and digital experiences.",
    source: "MIT Technology Review",
    url: "https://www.technologyreview.com/",
  },
  {
    category: "STARTUPS",
    title: "The Startups Building AI's Future",
    description:
      "Discover AI products and emerging companies addressing real-world challenges.",
    source: "TechCrunch",
    url: "https://techcrunch.com/category/artificial-intelligence/",
  },
  {
    category: "AUTOMATION",
    title: "The Shift Toward Intelligent Automation",
    description:
      "See how AI-powered workflows are changing repetitive tasks and business processes.",
    source: "Microsoft",
    url: "https://blogs.microsoft.com/",
  },
  {
    category: "INDUSTRY",
    title: "What's Next for Artificial Intelligence?",
    description:
      "Follow industry developments, emerging technologies, and ideas shaping AI's future.",
    source: "NVIDIA",
    url: "https://blogs.nvidia.com/",
  },
]

export default function AINewsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Minimal centered heading */}
      <section className="px-5 pb-12 pt-28 sm:pt-36 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            GREEK ROOT AI / NEWSROOM
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            The Latest{" "}
            <span className="text-primary">AI News</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            The latest developments in artificial intelligence,
            research, automation, and technology shaping the future.
          </p>

          <div className="mx-auto mt-9 h-px w-20 bg-primary/60" />
        </motion.div>
      </section>

      {/* Exactly nine news cards */}
      <section
        id="latest-news"
        className="px-5 pb-24 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-7 flex items-center justify-between border-b border-border pb-4"
          >
            <h2 className="text-sm font-semibold tracking-tight sm:text-base">
              Latest AI News
            </h2>

            <span className="text-xs text-muted-foreground">
              09 STORIES
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.06,
                  ease: "easeOut",
                }}
                className="group flex min-w-0 flex-col rounded-xl border border-border bg-card/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/70 sm:p-6"
              >
                <div className="mb-8 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-primary">
                    {item.category}
                  </span>

                  <span className="text-xs tabular-nums text-muted-foreground/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-semibold leading-7 tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="truncate text-xs text-muted-foreground">
                    {item.source}
                  </span>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read more: ${item.title}`}
                    className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold transition-colors hover:text-primary"
                  >
                    Read more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Simple footer */}
          <div className="mt-12 border-t border-border pt-6 text-center">
            <Link
              href="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Building with AI? Talk to Greek Root AI
              <ArrowUpRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}