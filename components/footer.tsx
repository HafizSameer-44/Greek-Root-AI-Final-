"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Bot,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
   <footer className="relative overflow-hidden bg-white border-t border-gray-200">

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Top */}

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <div className=" items-center justify-center bg-emerald-500/15 ring-1 ring-emerald-500/20">
                
              </div>
              <Image
                src="/icon.png"
                alt="Greek Root AI logo"
                width={46}
                height={46}
                className="rounded-lg"
                
              />
              <div>
                <h3 className="text-xl font-bold text-black">
                  Greek Root AI
                </h3>

                <p className="text-xs uppercase tracking-[0.3em] text-green-600">
                  AI Company
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-sm leading-7 text-gray-600">
              Building intelligent AI agents, business automation,
              custom software, and modern digital solutions for
              ambitious companies worldwide.
            </p>

            <div className="mt-8 flex items-center gap-3">

              <a
                href="https://www.linkedin.com/company/greekroot-ai/home/"
                target="_blank"
                className="rounded-xl border border-gray-200 bg-white p-3 text-gray-700 transition hover:border-green-600 hover:bg-green-600 hover:text-white shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4v13h-4v-13zM8.5 8.5h3.84v1.78h.05c.54-1.02 1.86-2.09 3.83-2.09 4.1 0 4.86 2.7 4.86 6.21v7.1h-4v-6.29c0-1.5-.03-3.43-2.09-3.43-2.09 0-2.41 1.63-2.41 3.32v6.4h-4v-13z" />
                </svg>
              </a>

        

              <a
                href="mailto:contact@greekroot.org"
                className="rounded-xl border border-gray-200 bg-white p-3 text-gray-700 transition hover:border-green-600 hover:bg-green-600 hover:text-white shadow-sm"
              >
                <Mail className="h-5 w-5" />
              </a>

            </div>

          </div>

          {/* Company Links */}

          <div>

            <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-gray-700">
              Company
            </h4>

            <div className="mt-6 space-y-4">              <Link
                href="/"
                className="group flex items-center justify-between text-gray-700 transition hover:text-green-600"
              >
                Home
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

      <Link
  href="/why-choose-us"
  className="group flex items-center justify-between text-gray-700 transition hover:text-green-600"
>
  Why Choose Us
  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
</Link>

              <Link
                href="/services"
                className="group flex items-center justify-between text-gray-700 transition hover:text-green-600"
              >
                Services
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center justify-between text-gray-700 transition hover:text-green-600"
              >
                Contact
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-gray-700">
              Resources
            </h4>

            <div className="mt-6 space-y-4">

              <Link
                href="/faq"
                className="group flex items-center justify-between text-gray-700 transition hover:text-green-600"
              >
                FAQ
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

              <Link
                href="/terms-of-service"
                className="group flex items-center justify-between text-gray-700 transition hover:text-green-600"
              >
                Terms of Service
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

              <Link
                href="/privacy-policy"
                className="group flex items-center justify-between text-gray-700 transition hover:text-green-600"
              >
                Privacy Policy
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-gray-700">
              Connect
            </h4>

            <div className="mt-6 space-y-5">              <a
                href="mailto:contact@greekroot.org"
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-900/30 hover:bg-white/10"
              >
                <Mail className="mt-1 h-5 w-5 text-emerald-600" />

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-700">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    contact@greekroot.org
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
       
                <div>
                  

                 
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">          <div>
            <p>
              © {new Date().getFullYear()} Greek Root AI. All rights
              reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">

            <Link
              href="/faq"
              className="transition hover:text-emerald-300"
            >
              FAQ
            </Link>

            <Link
              href="/terms-of-service"
              className="transition hover:text-emerald-300"
            >
              Terms of Service
            </Link>

            <Link
              href="/privacy-policy"
              className="transition hover:text-emerald-300"
            >
              Privacy Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}