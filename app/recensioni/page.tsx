'use client' // Necessario per gestire lo stato delle stelle e del form

import { useState } from 'react'
import { PageHeader } from '@/components/page-header'
import { Star, Quote, CheckCircle, Mail, Send } from 'lucide-react'

// ... (Array reviews costante rimane uguale a prima, lo ometto per brevità ma va tenuto)

export default function RecensioniPage() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [nome, setNome] = useState('')
  const [messaggio, setMessaggio] = useState('')

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Nuova Recensione da ${nome}`)
    const body = encodeURIComponent(
      `Nome e Cognome: ${nome}\n` +
      `Valutazione: ${rating}/5 stelle\n\n` +
      `Recensione:\n${messaggio}`
    )
    window.location.href = `mailto:recensioni@keysafehub.eu?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHeader
        title="Recensioni Clienti"
        description="Scopri cosa pensano di noi i nostri clienti soddisfatti"
      />

      {/* Stats Section (Valori fissi per stabilità build) */}
      <section className="py-12 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-azure text-azure" />
                ))}
              </div>
              <p className="text-3xl font-bold text-foreground">4.8/5</p>
              <p className="text-sm text-muted-foreground">Valutazione media</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground mb-2">10.000+</p>
              <p className="text-sm text-muted-foreground">Clienti soddisfatti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid (Tieni qui la tua lista originale di recensioni) */}

      {/* --- NUOVO MODULO RECENSIONE AUTOMATICO --- */}
      <section className="py-16 bg-background border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-azure/10 mb-4">
                <Send className="h-6 w-6 text-azure" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Lascia la tua recensione</h2>
              <p className="text-muted-foreground mt-2">Compila il modulo e invia il report via email</p>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-6">
              {/* Nome e Cognome */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nome e Cognome *</label>
                <input
                  required
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-azure/20 focus:border-azure outline-none transition-all"
                  placeholder="Inserisci il tuo nome completo"
                />
              </div>

              {/* Stelle Selezionabili */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tua valutazione *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${(hover || rating) >= star ? 'fill-azure text-azure' : 'text-muted-foreground/30'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Messaggio con limite 200 caratteri */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">Il tuo messaggio *</label>
                  <span className={`text-xs ${messaggio.length > 200 ? 'text-red-500' : 'text-muted-foreground'}`}>
                    {messaggio.length}/200
                  </span>
                </div>
                <textarea
                  required
                  maxLength={200}
                  value={messaggio}
                  onChange={(e) => setMessaggio(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-azure/20 focus:border-azure outline-none transition-all resize-none"
                  placeholder="Raccontaci la tua esperienza..."
                />
              </div>

              <button
                type="submit"
                disabled={!rating || !nome || !messaggio}
                className="w-full py-4 bg-azure text-white font-bold rounded-xl hover:bg-azure/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-azure/20 flex items-center justify-center gap-2"
              >
                Invia Report a recensioni@keysafehub.eu
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
