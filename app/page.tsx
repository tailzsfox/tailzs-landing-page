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
      <p>You agree not to misuse the Service, including but not limited to: violating any applicable laws; infringing intellectual property rights; uploading harmful content; scraping data; or attempting unauthorized access.</p>

      <h3 className="text-base font-bold text-wave-700">5. User Content</h3>
      <p>You retain ownership of content you submit, but grant us a worldwide, royalty-free license to host, store, and display such content solely to operate and provide the Service.</p>

      <h3 className="text-base font-bold text-wave-700">6. Intellectual Property</h3>
      <p>The Service, including its design, proprietary visual tags, vector algorithms, and software, is owned by Tailzs LLC and protected by corporate intellectual property frameworks. Unauthorized distribution, extraction, or scraping of dossier files is strictly prohibited.</p>

      <h3 className="text-base font-bold text-wave-700">7. Subscriptions, Payment Terms &amp; Digital Content Delivery</h3>
      <p><strong>7.1 Subscription Services:</strong> Tailzs LLC provides access to proprietary sports analytics, automated data slices, and compiled research dossiers (&quot;Content&quot;) via recurring subscription plans. By subscribing, you authorize Tailzs LLC to charge your designated payment method on a recurring basis until canceled.</p>
      <p><strong>7.2 Digital Product Delivery &amp; Integrity:</strong> Master game dossiers, analytics compilations, and statistical reports are delivered electronically via direct application access or downloadable compressed archives (.zip / .pdf). Once a digital dossier or analytics report has been generated and made available for view or download, the digital product is deemed fully delivered.</p>
      <p><strong>7.3 No Refunds on Delivered Digital Goods:</strong> Due to the real-time, quantitative nature of sports analytics and immediate access to proprietary data, all subscription payments and digital dossier purchases are non-refundable once content has been accessed or downloaded, except where required by applicable law or platform policies (Apple App Store / Google Play Store).</p>
      <p><strong>7.4 Cancellation:</strong> You may cancel your subscription at any time through your account settings or the respective App Store platform.</p>

      <h3 className="text-base font-bold text-wave-700">8. Disclaimers &amp; Model Classifications</h3>
      <p>Tailzs LLC provides sports analytics, statistical modeling, and quantitative dossiers for informational, educational, and entertainment purposes only. Tailzs is not a sportsbook, bookmaker, or gambling operator and does not accept, broker, or process real-money wagers.</p>
      <p>All insignia tokens, clash equations, confidence ratings, and trajectory vectors (e.g., &quot;Gas Can&quot;, &quot;Volcanic Eruption&quot;, &quot;High Conviction&quot;) represent algorithmic statistical outputs generated by engine calculations. They do not constitute financial advice, betting advice, or guarantees of actual game outcomes. Past model performance does not guarantee future results.</p>

      <h3 className="text-base font-bold text-wave-700">9. Limitation of Liability</h3>
      <p>To the maximum extent permitted by law, Tailzs LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from or related to your use of the Service.</p>

      <h3 className="text-base font-bold text-wave-700">10. Third-Party App Stores</h3>
      <p>You acknowledge that these Terms are between you and Tailzs LLC, not with Apple, Google, or any app store provider. Such providers are not responsible for the Service or its support.</p>

      <h3 className="text-base font-bold text-wave-700">11. Governing Law &amp; Changes</h3>
      <p>These Terms are governed by the laws of the State of Utah without regard to conflict-of-law principles. We may modify these Terms from time to time, and continued use of the Service constitutes acceptance of updated Terms.</p>

      <h3 className="text-base font-bold text-wave-700">12. Contact</h3>
      <p>Questions about these Terms can be sent to <a href="mailto:support@tailzs.com" className="font-semibold text-fox-500 underline">support@tailzs.com</a>.</p>
    </div>
  )
}

export default function Page() {
  const [modal, setModal] = useState<null | "privacy" | "terms" | "presubscribe">(null)
  const [email, setEmail] = useState("")
  const [platform, setPlatform] = useState<"ios" | "android">("ios")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash === "#privacy") {
        setModal("privacy")
      } else if (hash === "#terms") {
        setModal("terms")
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const handleOpenPreSubscribe = (targetPlatform: "ios" | "android") => {
    setPlatform(targetPlatform)
    setModal("presubscribe")
  }

  const handleCloseModal = () => {
    setModal(null)
    setIsSubmitted(false)
    setEmail("")
    if (window.location.hash === "#privacy" || window.location.hash === "#terms") {
      history.pushState("", document.title, window.location.pathname + window.location.search)
    }
  }

  const handlePreSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) return

    setIsSubmitting(true)
    try {
      const response = await fetch("https://formspree.io/f/mkjoboep", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: email,
          platform: platform,
          coverage: "NCAAF & MLB",
          source: "Tailzs 14-Day Free Trial Pre-Subscription",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("Submission failed. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("Network error. Please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen scroll-smooth bg-cream font-sans text-wave-700 antialiased selection:bg-fox-100 selection:text-fox-700">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-fox-100/60 bg-cream/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Primary">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={LOGO || "/placeholder.svg"}
              alt="Tailzs logo"
              className="h-10 w-10 rounded-xl object-cover shadow-sm ring-1 ring-fox-100"
            />
            <Wordmark className="text-xl font-extrabold tracking-tight" />
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-wave-600 md:flex">
            <a href="#features" className="transition hover:text-fox-500">
              Features
            </a>
            <a href="#download" className="transition hover:text-fox-500">
              Download
            </a>
            <a href="#support" className="transition hover:text-fox-500">
              Support
            </a>
          </div>

          <button
            type="button"
            onClick={() => handleOpenPreSubscribe("ios")}
            className="rounded-full bg-fox-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-fox-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-fox-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Claim 14 Days Free
          </button>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-fox-100/70 blur-3xl" />
            <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-wave-100/70 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-fox-100 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fox-600">
                <span className="h-2 w-2 rounded-full bg-wave-500 animate-pulse" />
