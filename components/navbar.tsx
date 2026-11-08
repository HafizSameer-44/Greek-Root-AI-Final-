"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, CalendarDays } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navigation = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Meet the Team" },
  { href: "/faq", label: "FAQ" },
]

export function Navbar() {
  const pathname = usePathname()

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  // آپ کا Calendly لنک
  const CALENDLY_URL = "https://calendly.com/hafizsameer220/30min"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`)

  const servicesActive =
    pathname === "/services" || pathname.startsWith("/services/")

  const closeMenus = () => {
    setOpen(false)
  }

  const navLinkClass = (href: string) =>
    cn(
      "whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200",
      isActive(href)
        ? "bg-[#effcf3] text-[#18864b]"
        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
    )

  const ctaClass =
    "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-4.5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-neutral-800 hover:shadow-[0_5px_20px_rgba(0,0,0,0.18)] cursor-pointer"

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-5 sm:pt-3 lg:px-8">
        <div
          className={cn(
            "mx-auto max-w-[1380px] rounded-[24px] border border-neutral-300/90 bg-white/85 backdrop-blur-md transition-all duration-300 sm:rounded-[30px]",
            scrolled
              ? "border-neutral-300 bg-white/95 shadow-[0_10px_32px_rgba(0,0,0,0.10)]"
              : "shadow-[0_6px_24px_rgba(0,0,0,0.07)]"
          )}
        >
          <nav className="flex min-h-[64px] items-center justify-between gap-3 px-4 py-2.5 sm:min-h-[72px] sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenus}
              className="group flex min-w-0 shrink items-center gap-2.5"
            >
              <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-[#a7f3c0]/50 opacity-60 blur-lg transition-opacity group-hover:opacity-100" />
                <Image
                  src="/icon.png"
                  alt="Greek Root AI logo"
                  width={36}
                  height={36}
                  className="relative z-10 h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-[20%]"
                  priority
                />
              </span>

              <span className="whitespace-nowrap text-sm sm:text-base font-semibold tracking-tight text-neutral-900">
                Greek Root{" "}
                <span className="text-[#218c50]">AI</span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-1 xl:flex">
              <Link
                href="/services"
                aria-current={servicesActive ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200",
                  servicesActive
                    ? "bg-[#effcf3] text-[#18864b]"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
                )}
              >
                Services
              </Link>

              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={navLinkClass(item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right side actions: Discovery Call Button */}
            <div className="hidden items-center gap-3 xl:flex">
              <button
                type="button"
                onClick={() => setIsCalendlyOpen(true)}
                className={ctaClass}
              >
                <CalendarDays className="h-4 w-4 shrink-0" />
                <span>Book a Free Discovery Call</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white/90 text-neutral-900 transition-colors hover:bg-neutral-100 xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile navigation panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="mx-auto mt-2.5 max-h-[calc(100vh-100px)] max-w-[1380px] overflow-y-auto overscroll-contain rounded-[24px] border border-neutral-300 bg-white/95 p-4 shadow-[0_16px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl xl:hidden"
            >
              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-1.5">
                <Link
                  href="/services"
                  onClick={closeMenus}
                  aria-current={servicesActive ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    servicesActive
                      ? "bg-[#effcf3] text-[#18864b]"
                      : "text-neutral-700 hover:bg-neutral-100"
                  )}
                >
                  Services
                </Link>

                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenus}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-[#effcf3] text-[#18864b]"
                        : "text-neutral-700 hover:bg-neutral-100"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile discovery call CTA */}
              <div className="mt-4 pt-3 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => {
                    closeMenus()
                    setIsCalendlyOpen(true)
                  }}
                  className={`${ctaClass} w-full rounded-xl py-3`}
                >
                  <CalendarDays className="h-4 w-4 shrink-0" />
                  <span>Book a Free Discovery Call</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Custom Calendly Popup Modal */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCalendlyOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl h-[90vh] max-h-[750px] overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl flex flex-col z-10">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 bg-neutral-50">
              <div>
                <h3 className="text-base font-semibold text-neutral-900">
                  Greek Root AI – Strategy & Automation Call
                </h3>
                <p className="text-xs text-neutral-500">
                  Pick a date and time that works best for you
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCalendlyOpen(false)}
                className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Embedded Calendly iFrame */}
            <div className="w-full flex-1 bg-white">
              <iframe
                src={CALENDLY_URL}
                className="h-full w-full border-0"
                title="Schedule Strategy Call"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}