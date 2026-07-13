'use client'

import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-4xl bg-card border border-border shadow-2xl rounded-2xl p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="w-9 h-9 rounded-xl bg-azure/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Cookie className="w-4 h-4 text-azure" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground font-medium mb-1">
              Questo sito utilizza i cookie
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Utilizziamo cookie tecnici necessari al funzionamento del sito. Per maggiori informazioni consulta la nostra{' '}
              <Link href="/privacy-policy" className="text-azure hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <button
            onClick={reject}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 mt-0.5"
            aria-label="Chiudi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:justify-end">
          <Button variant="outline" size="sm" onClick={reject} className="text-xs h-8">
            Solo necessari
          </Button>
          <Button size="sm" onClick={accept} className="bg-azure hover:bg-azure/90 text-white text-xs h-8">
            Accetta tutti
          </Button>
        </div>
      </div>
    </div>
  )
}
