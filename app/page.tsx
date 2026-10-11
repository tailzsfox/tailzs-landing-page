"use client"

import { useState, useEffect } from "react"
import { TrendingUp, ShieldCheck, Bell, Sparkles } from "lucide-react"
import { LegalModal } from "@/components/legal-modal"
import { PrivacyContent, TermsContent } from "@/components/legal-content"
import { StoreBadges } from "@/components/store-badges"

const features = [
  {
    icon: TrendingUp,
    title: "Quantitative Edge Tracking",
    body: "Track normalized Z-score momentum, platoon splits, and variance data that sportsbooks react to late.",
  },
  {
    icon: ShieldCheck,
    title: "Daily Match Dossiers",
    body: "Cut through the noise with model-backed matchup breakdowns, 4-pitch arsenal ratings, and weather factors.",
  },
  {
    icon: Bell,
    title: "Multi-League Coverage",
    body: "Follow College Football (NCAAF) and MLB side by side with custom insignia and line movement alerts.",
  },
]

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="text-orange-500 font-extrabold">TAIL</span>
      <span className="text-blue-500 font-extrabold">ZS</span>
    </span>
  )
}

export default function Home() {
  const [legalModalOpen, setLegalModalOpen] = useState(false)
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms">("privacy")

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash === "#privacy") {
        setLegalModalType("privacy")
        setLegalModalOpen(true)
      } else if (hash === "#terms") {
        setLegalModalType("terms")
        setLegalModalOpen(true)
      }
    }
    handleHash()
    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <Wordmark className="text-2xl tracking-tight" />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-orange-400">
              Features
            </a>
            <a href="#download" className="transition hover:text-orange-400">
              Download
            </a>
            <a href="#support" className="transition hover:text-orange-400">
              Support
            </a>
          </nav>

          <a
            href="#download"
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            Claim 14 Days Free
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main id="top" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-6 text-center md:py-32">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-400 mb-6">
              <Sparkles className="h-3.5 w-3.5" /> Outfox the League
            </span>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
              Multi-League Analytics & Model Dossiers
            </h1>
            <p className="mt-6 text-lg text-slate-400 sm:text-xl max-w-2xl mx-auto">
              Track normalized momentum, model projections, and line variations across NCAAF and MLB in one streamlined interface.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#download"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition shadow-lg shadow-orange-500/20"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="border-t border-slate-900 bg-slate-900/50 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Engineered for Your Edge</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-sm">
                    <div className="inline-flex items-center justify-center rounded-xl bg-orange-500/10 p-3 text-orange-400 mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 px-6 text-center border-t border-slate-900">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Download Tailzs</h2>
            <p className="text-slate-400 mb-8">Available on iOS and Android. Start your 14-day free trial today.</p>
            <StoreBadges variant="dark" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="support" className="border-t border-slate-900 bg-slate-950 py-12 px-6 text-sm text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Tailzs. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={() => {
                setLegalModalType("privacy")
                setLegalModalOpen(true)
              }}
              className="hover:text-slate-300 transition"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                setLegalModalType("terms")
                setLegalModalOpen(true)
              }}
              className="hover:text-slate-300 transition"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        title={legalModalType === "privacy" ? "Privacy Policy" : "Terms of Service"}
      >
        {legalModalType === "privacy" ? <PrivacyContent /> : <TermsContent />}
      </LegalModal>
    </div>
  )
}
