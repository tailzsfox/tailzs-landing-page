"use client"

import { useEffect, type ReactNode } from "react"
import { X } from "lucide-react"

export function LegalModal({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(20,14,10,0.55)] p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white text-wave-700 shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-fox-100 px-6 py-4">
          <h2 className="text-lg font-bold text-wave-700">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${title}`}
            className="rounded-full p-2 text-wave-400 transition hover:bg-cream hover:text-fox-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-5">{children}</div>

        <div className="flex justify-end border-t border-fox-100 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-fox-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-fox-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
