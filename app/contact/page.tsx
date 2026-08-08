import { PageHeader, Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"
import { ParticleField } from "@/components/particle-field"
import { Mail, MapPin, Clock } from "lucide-react"
import { XIcon, LinkedInIcon, GitHubIcon } from "@/components/brand-icons"

export const metadata = {
  title: "Contact — Greek Root AI",
  description:
    "Get in touch with Greek Root AI to start automating and scaling your business with artificial intelligence.",
}

const details = [
  { icon: Mail, label: "Email", value: "contact@greekroot.org", href: "mailto:contact@greekroot.org" },
 
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
]

const socials = [
  { icon: XIcon, label: "Twitter", href: "https://twitter.com" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com" },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-36 pb-12 sm:pt-44">
        <ParticleField className="absolute inset-0 -z-10 h-full w-full opacity-50" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--color-primary)_14%,transparent),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <PageHeader
            eyebrow="Contact"
            title={
              <>
                Let's build your{" "}
                <span className="text-gradient glow-text">AI advantage</span>
              </>
            }
            subtitle="Tell us about your business and goals. We'll get back to you within 24 hours with a tailored plan."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="space-y-5 lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg text-foreground font-semibold tracking-tight">
                  Get in touch
                </h3>
                <div className="mt-6 space-y-5">
                  {details.map((d) => (
                    <div key={d.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                        <d.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">
                          {d.label}
                        </p>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="text-sm font-medium transition-colors hover:text-primary"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{d.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-border pt-6">
                  <p className="text-xs text-primary uppercase tracking-widest text-muted-foreground">
                    Follow us
                  </p>
                  <div className="mt-3 flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-all hover:text-primary hover:glow-border"
                      >
                        <s.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

        
          </div>
        </div>
      </section>
    </>
  )
}
