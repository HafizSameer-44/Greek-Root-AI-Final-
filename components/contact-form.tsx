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
      name: formData.get("name"),
      email: formData.get("email"),
      business: formData.get("business"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setStatus("done")
      form.reset()

      setTimeout(() => {
        setStatus("idle")
      }, 4200)
    } catch (error) {
      console.error(error)

      setStatus("idle")

      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-3xl p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div
            key={f.name}
            className={
              f.name === "business"
                ? "sm:col-span-2"
                : ""
            }
          >
            <label
              htmlFor={f.name}
              className="mb-2 block text-sm font-medium text-foreground"
            >
              {f.label}
            </label>

            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.name !== "business"}
              placeholder={f.placeholder}
              className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklch,var(--color-primary)_18%,transparent),0_0_24px_color-mix(in_oklch,var(--color-primary)_22%,transparent)]"
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your project and goals..."
            className="w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklch,var(--color-primary)_18%,transparent),0_0_24px_color-mix(in_oklch,var(--color-primary)_22%,transparent)]"
          />
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={status !== "idle"}
        whileHover={{
          scale: status === "idle" ? 1.02 : 1,
        }}
        whileTap={{
          scale: status === "idle" ? 0.98 : 1,
        }}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[0_0_36px_var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "idle" && (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}

        {status === "loading" && (
          <>
            Sending
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        )}

        {status === "done" && (
          <>
            Message Sent
            <Check className="h-4 w-4" />
          </>
        )}
      </motion.button>
    </motion.form>
  )
}