"use client"

import { GlowCard } from "@/components/glow-card"
import { services, reasons } from "@/lib/site-data"

export function ServicesGrid({ count }: { count?: number }) {
  const items = count ? services.slice(0, count) : services
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <GlowCard key={s.title} {...s} index={i} />
      ))}
    </div>
  )
}

export function ReasonsGrid({ count }: { count?: number }) {
  const items = count ? reasons.slice(0, count) : reasons
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((r, i) => (
        <GlowCard key={r.title} {...r} index={i} />
      ))}
    </div>
  )
}