"use client"

import React from "react"
import { motion } from "framer-motion"

const reviews = [
  {
    name: "Michael Roberts",
    role: "Operations Director",
    location: "Austin, TX",
    flag: "🇺🇸",
    content: "Greek Root AI completely streamlined our customer intake pipeline. It saves our team 20+ hours every week and response times are instant.",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "SaaS Founder",
    location: "San Francisco, CA",
    flag: "🇺🇸",
    content: "Their team built our custom Next.js web application exceptionally fast. The UI is clean, lightning-fast, and code quality is top-notch.",
    rating: 5,
  },
  {
    name: "David Larson",
    role: "CTO",
    location: "New York, NY",
    flag: "🇺🇸",
    content: "The AI agent architecture they integrated into our platform blew our expectations away. Extremely sharp developers and great communication.",
    rating: 5,
  },
  {
    name: "Jessica Moore",
    role: "Product Lead",
    location: "Miami, FL",
    flag: "🇺🇸",
    content: "We needed a high-performance analytics dashboard delivered quickly. They hit every milestone ahead of schedule with brilliant design.",
    rating: 5,
  },
]

export function TestimonialsMarquee() {
  // ڈپلیکیٹ رے (Array) تاکہ اینیمیشن میں کوئی جھٹکا یا گیپ نہ آئے اور لامتناہی لوپ چلے
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* لیفٹ اور رائٹ سائیڈ پر خوبصورت فیدنگ گریڈینٹس */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        <motion.div
          className="flex gap-6 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedReviews.map((review, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 w-[360px] sm:w-[420px] flex flex-col justify-between border border-white/10 bg-card/50 backdrop-blur-md shadow-xl"
            >
              <div>
                {/* اسٹارز اور یو ایس اے لوکیشن بیج */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, idx) => (
                      <svg
                        key={idx}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
                    <span>{review.flag}</span>
                    <span>{review.location}</span>
                  </div>
                </div>

                {/* ریویو کا اصل متن */}
                <p className="text-sm text-foreground/90 leading-relaxed font-normal">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              {/* کلائنٹ کی پروفائل اور نام */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                  {review.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {review.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}