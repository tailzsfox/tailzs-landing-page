"use client"

import { useState, useEffect } from "react"
import { TrendingUp, ShieldCheck, Bell, Mail, X, Sparkles, CheckCircle2 } from "lucide-react"
import { LegalModal } from "@/components/legal-modal"
import { PrivacyContent } from "@/components/legal-content"

const LOGO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-EpCIMxJR02iHdWvk2DUBspQd9h7nU2.jpg"
const BANNER = "/tailzs-logo-slogan.jpg"

const features = [
  {
    icon: TrendingUp,
    title: "Quantitative Edge Tracking",
    body: "Track normalized Z-score momentum, platoon splits, and variance data that reveal who is truly running hot or cold.",
    tone: "fox" as const,
  },
  {
    icon: ShieldCheck,
    title: "Daily Match Dossiers",
    body: "Cut through the noise with model-backed matchup breakdowns, 4-pitch arsenal disruptors, and instant line alerts.",
    tone: "wave" as const,
  },
  {
    icon: Bell,
    title: "Multi-League Coverage",
    body: "Follow College Football (NCAAF) and MLB side by side with custom insignia alerts—with NFL and NHL coming soon.",
    tone: "fox" as const,
  },
]

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="text-fox-500">TAIL</span>
      <span className="text-wave-500">ZS</span>
    </span>
  )
}

function ResponsiveBadges({
  isCentered = false,
  onOpenPreSubscribe,
}: {
  isCentered?: boolean
  onOpenPreSubscribe: (platform: "ios" | "android") => void
}) {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full ${isCentered ? "" : "md:justify-start"}`}>
      <button
        type="button"
        onClick={() => onOpenPreSubscribe("ios")}
        aria-label="Claim 14-Day Trial on App Store"
        className="w-full sm:w-auto min-w-[170px] inline-flex items-center justify-center gap-3 rounded-xl bg-wave-700 px-5 py-3 text-white shadow-md transition hover:bg-wave-800 focus:outline-none focus:ring-2 focus:ring-fox-500"
      >
        <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 2.98-.84.94-2.2 1.66-3.32 1.57-.14-1.11.44-2.29 1.09-3.02.76-.86 2.14-1.5 3.35-1.53zM20.9 17.02c-.55 1.27-.82 1.84-1.53 2.96-.99 1.57-2.39 3.52-4.12 3.53-1.54.02-1.94-1-4.03-.99-2.09.01-2.53 1.01-4.07.99-1.73-.01-3.05-1.77-4.04-3.34C.7 15.7.4 10.13 2.17 7.36c1.24-1.97 3.2-3.12 5.04-3.12 1.88 0 3.06 1.03 4.62 1.03 1.51 0 2.43-1.03 4.6-1.03 1.64 0 3.38.89 4.62 2.44-4.06 2.22-3.4 8.02.85 10.34z"/>
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-medium opacity-80 uppercase tracking-wider">CLAIM 14-DAY TRIAL</span>
          <span className="block text-base font-semibold -mt-0.5">App Store</span>
        </span>
      </button>

      <button
        type="button"
        onClick={() => onOpenPreSubscribe("android")}
        aria-label="Claim 14-Day Trial on Google Play"
        className="w-full sm:w-auto min-w-[170px] inline-flex items-center justify-center gap-3 rounded-xl bg-wave-700 px-5 py-3 text-white shadow-md transition hover:bg-wave-800 focus:outline-none focus:ring-2 focus:ring-fox-500"
      >
        <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24">
          <path fill="#EA4335" d="M3.6 2.1C3.3 2.4 3.1 2.9 3.1 3.5v17c0 .6.2 1.1.5 1.4l.1.1L13 12.6v-.2L3.6 2.1z"/>
          <path fill="#FBBC04" d="M16.3 15.9l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2z"/>
          <path fill="#34A853" d="M16.4 15.8L13 12.5 3.6 21.9c.4.4 1 .4 1.7.1l11.1-6.2z"/>
          <path fill="#4285F4" d="M16.4 9.2L5.3 3C4.6 2.6 4 2.7 3.6 3.1L13 12.5l3.4-3.3z"/>
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-medium opacity-80 uppercase tracking-wider">CLAIM 14-DAY TRIAL</span>
          <span className="block text-base font-semibold -mt-0.5">Google Play</span>
        </span>
      </button>
    </div>
  )
}

function CustomTermsContent() {
  return (
    <div className="prose prose-sm max-w-none space-y-4 text-wave-600">
      <p>These Terms of Service and End User License Agreement (&quot;Terms&quot;) govern your access to and use of the Tailzs mobile application and related services (the &quot;Service&quot;). By downloading, installing, or using the Service, you agree to be bound by these Terms.</p>

      <h3 className="text-base font-bold text-wave-700">1. License Grant</h3>
      <p>Subject to your compliance with these Terms, Tailzs LLC grants you a limited, non-exclusive, non-transferable, revocable license to download and use the Service for your personal, non-commercial use on any device that you own or control.</p>

      <h3 className="text-base font-bold text-wave-700">2. Account Registration &amp; Responsibilities</h3>
      <p>You may need to create an account to use certain features. You are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account.</p>

      <h3 className="text-base font-bold text-wave-700">3. Account Deletion</h3>
      <p>You may delete your account at any time through the in-app settings or by contacting <a href="mailto:support@tailzs.com" className="font-semibold text-fox-500 underline">support@tailzs.com</a>.</p>

      <h3 className="text-base font-bold text-wave-700">4. Acceptable Use</h3>
