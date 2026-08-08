"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"

function useCounter(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return value
}

const stats = [
  { value: 240, suffix: "+", label: "AI Systems Deployed" },
  { value: 99, suffix: "%", label: "Automation Uptime" },
  { value: 18, suffix: "M+", label: "Tasks Automated" },
  { value: 65, suffix: "%", label: "Avg. Cost Reduction" },
]

function Stat({
  value,
  suffix,
  label,
  active,
  delay,
}: {
  value: number
  suffix: string
  label: string
  active: boolean
  delay: number
}) {
  const count = useCounter(value, active)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl p-6 text-center"
    >
      <div className="text-4xl font-semibold tracking-tight text-primary glow-text sm:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}

export function StatsCounter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s, i) => (
        <Stat key={s.label} {...s} active={inView} delay={i * 0.1} />
      ))}
    </div>
  )
}
