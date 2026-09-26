"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check, Loader2 } from "lucide-react"

const fields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Jane Doe",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "jane@company.com",
  },
  {
    name: "business",
    label: "Business",
    type: "text",
    placeholder: "Acme Inc.",
  },
] as const

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setStatus("loading")

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      business: String(formData.get("business") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.")
      }

      setStatus("done")
      form.reset()

      setTimeout(() => {
        setStatus("idle")
      }, 4200)
    } catch (error) {
      console.error("Contact form error:", error)

      setStatus("idle")

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-5"
    >
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label
            htmlFor={field.name}
            className="text-sm font-medium text-black dark:text-white"
          >
            {field.label}
          </label>

          <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required
            disabled={status === "loading"}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-green-500 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35"
          />
        </div>
      ))}

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-black dark:text-white"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          required
          disabled={status === "loading"}
          rows={6}
          className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-green-500 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "done"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : status === "done" ? (
          <>
            <Check className="h-4 w-4" />
            Message Sent
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </motion.form>
  )
}