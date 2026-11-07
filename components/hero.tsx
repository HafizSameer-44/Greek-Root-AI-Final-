"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CalendarCheck, ArrowRight } from "lucide-react"
import type { IconType } from "react-icons"
import {
  SiGooglesheets,
  SiGmail,
  SiNotion,
  SiHubspot,
  SiWhatsapp,
  SiStripe,
  SiGooglecalendar,
} from "react-icons/si"

// TODO: apna WhatsApp number country code ke saath daalo (bina + ya spaces ke)
const WHATSAPP_NUMBER = "+923252655079"
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Greek Root AI team, I'd like to know more about your AI solutions."
)

// Navbar ke neeche se icons shuru hon. Navbar ooncha ho to is number ko badha do.
const NAV_SAFE_TOP = 112

type ToolIcon = {
  icon: IconType
  color: string
  x: number // px offset of the icon centre from the horizontal centre of the page
  top?: string
  bottom?: string
  size: number
  delay: number
  duration: number
}

// 7 icons, scattered freely. None sits behind the text and none goes under the navbar.
const tools: ToolIcon[] = [
  { icon: SiGooglesheets, color: "#0F9D58", x: -330, top: `${NAV_SAFE_TOP}px`, size: 48, delay: 0.0, duration: 6.5 },
  { icon: SiHubspot, color: "#FF7A59", x: 300, top: `${NAV_SAFE_TOP - 4}px`, size: 46, delay: 0.5, duration: 7.2 },
  { icon: SiNotion, color: "#111111", x: -520, top: "calc(50% - 150px)", size: 46, delay: 1.0, duration: 6.8 },
  { icon: SiStripe, color: "#635BFF", x: 565, top: "calc(50% - 70px)", size: 48, delay: 1.5, duration: 7.4 },
  { icon: SiGmail, color: "#EA4335", x: -450, top: "calc(50% + 95px)", size: 48, delay: 2.0, duration: 7.0 },
  { icon: SiWhatsapp, color: "#25D366", x: 470, top: "calc(50% + 150px)", size: 46, delay: 2.5, duration: 7.6 },
  { icon: SiGooglecalendar, color: "#4285F4", x: 230, bottom: "36px", size: 46, delay: 3.0, duration: 6.6 },
]

// Light green grid cells (64px boxes) that gently pulse, only at the sides.
// k = column offset from the centre of the page, j = row from the top of the section.
const GRID = 64
const cells = [
  { k: -8, j: 1, delay: 0.0, duration: 6 },
  { k: -9, j: 6, delay: 1.5, duration: 7 },
  { k: -8, j: 9, delay: 3.0, duration: 6.5 },
  { k: 8, j: 4, delay: 0.8, duration: 7 },
  { k: 9, j: 7, delay: 2.2, duration: 6 },
  { k: 8, j: 10, delay: 3.6, duration: 7.5 },
]

function ToolTile({ tool, index }: { tool: ToolIcon; index: number }) {
  const Icon = tool.icon
  return (
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${tool.x - tool.size / 2}px)`,
        top: tool.top,
        bottom: tool.bottom,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 4, 0, -4, 0] }}
          transition={{ duration: tool.duration, repeat: Infinity, delay: tool.delay, ease: "easeInOut" }}
          className="relative flex items-center justify-center rounded-2xl border border-gray-200/80 bg-white shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
          style={{ width: tool.size, height: tool.size }}
        >
          {/* Pulsing brand-colour glow behind the tile */}
          <motion.span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-2xl blur-xl"
            style={{ backgroundColor: tool.color }}
            animate={{ opacity: [0.1, 0.28, 0.1], scale: [1, 1.25, 1] }}
            transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: tool.delay }}
          />
          <Icon style={{ color: tool.color }} size={tool.size * 0.5} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-32 pb-24 sm:pt-36 sm:pb-28 md:flex md:min-h-[min(100svh,800px)] md:items-center">
      {/* ===== Background layers ===== */}

      {/* Soft green gradient on white: light from the top, fading to white */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(134,232,163,0.22),transparent_70%)]"
      />

      {/* Soft animated glows */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[480px] w-[480px] -translate-x-[95%] rounded-full bg-[#86E8A3]/20 blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-1/2 top-16 -z-10 h-[440px] w-[440px] translate-x-[110%] rounded-full bg-emerald-200/25 blur-[120px]"
        animate={{ x: [0, -44, 0], y: [0, 34, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Very faint box grid. It fades out completely behind the text so reading stays easy. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-position:50%_0] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_55%_60%_at_50%_50%,transparent_40%,black_100%)] [-webkit-mask-image:radial-gradient(ellipse_55%_60%_at_50%_50%,transparent_40%,black_100%)]"
      />

      {/* A few light green boxes on the grid (xl screens and up, sides only) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden xl:block">
        {cells.map((c, i) => (
          <motion.div
            key={i}
            className="absolute rounded-[3px] border border-emerald-200/60 bg-emerald-100/70"
            style={{
              width: GRID,
              height: GRID,
              left: `calc(50% + ${-GRID / 2 + GRID * c.k}px)`,
              top: GRID * c.j,
            }}
            animate={{ opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: c.duration, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
          />
        ))}
      </div>

      {/* Tool icons (xl screens and up). They sit behind the text layer and never overlap it. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden xl:block">
        {tools.map((t, i) => (
          <ToolTile key={i} tool={t} index={i} />
        ))}
      </div>

      {/* Fade to white at the bottom so the next section blends in */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-white"
      />

      {/* ===== Centre content: text only ===== */}
      <div className="relative mx-auto w-full max-w-5xl px-5 text-center lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          AI Transformation Partner
        </motion.div>

        {/* Headline (tagline unchanged) */}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-7 max-w-4xl text-balance text-5xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl md:text-7xl"
        >
          AI That Runs Your Business{" "}
          <motion.span
            className="bg-gradient-to-r from-emerald-700 via-emerald-400 to-emerald-700 bg-[length:200%_100%] bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            While You Sleep
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-gray-600 sm:text-xl md:text-[22px]"
        >
          Greek Root AI builds custom chatbots, voice agents and automation
          that answer your customers, follow up on leads and handle repetitive
          work 24/7, so your team can focus on growth.
        </motion.p>

        {/* Buttons (big, black & white) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-black bg-black px-9 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-gray-900 sm:w-auto sm:min-w-[300px]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <CalendarCheck className="relative h-5 w-5" />
              <span className="relative">Book a Free Discovery Call</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-black bg-white px-9 py-4 text-base font-semibold text-black shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-colors duration-300 hover:bg-gray-100 sm:w-auto sm:min-w-[300px]"
            >
              <SiWhatsapp className="h-5 w-5" />
              Message on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Reassurance line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-xs text-gray-500"
        >
          Free consultation · No obligation · Tailored to your business
        </motion.p>
      </div>
    </section>
  )
}