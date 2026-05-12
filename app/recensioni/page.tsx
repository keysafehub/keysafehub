'use client'

import React, { useState } from 'react'
import { PageHeader } from '@/components/page-header'
import { Star, Quote, CheckCircle, Send, MessageSquare, Loader2 } from 'lucide-react'

// Recensioni di esempio che appariranno sulla pagina
const reviews = [
  { id: 1, text: "Servizio rapido, licenza arrivata in pochi secondi. Tutto perfetto.", author: "Marco R.", rating: 5 },
  { id: 2, text: "Prezzi ottimi e attivazione immediata. Consigliatissimo.", author: "Laura P.", rating: 5 },
  { id: 3, text: "Supporto clienti molto disponibile e veloce nelle risposte.", author: "Giuseppe M.", rating: 4 },
]

export default function RecensioniPage() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [status, setStatus] = useState('idle') // idle, sending, success, error

  async function handleSubmit(e) {
    e.preventDefault()
    if (rating === 0) {
      alert("Per favore, seleziona una valutazione con le stelle!")
      return
    }
    
    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    
    // Questi sono i dati che il tuo server riceverà
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: `VALUTAZIONE: ${rating}/5 STELLE\n\nMessaggio: ${formData.get('message')}`,
      subject: 'Nuova Recensione dal Sito'
    }

    try {
      // Usiamo lo stesso identico indirizzo del tuo form contatti
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        setRating(0)
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader title="Recensioni Clienti" description="Cosa pensano di noi i nostri clienti" />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          
          {/* Griglia dove si vedono le recensioni */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {reviews.map((r) => (
              <div key={r.id} className="p-6 rounded-xl bg-card border border-border shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < r.rating ? 'fill-azure text-azure' : 'text-muted/20'}`} />
                  ))}
                </div>
                <p className="text-sm italic mb-4">"{r.text}"</p>
                <div className="flex items-center gap-2 pt-3 border-t border-border/50 text-xs font-bold uppercase">
                  {r.author} <CheckCircle className="h-3 w-3 text-azure" />
                </div>
              </div>
            ))}
          </div>

          {/* Form per inviare la nuova recensione */}
          <div className="max-w-xl mx-auto bg-card rounded-2xl border border-border p-8 shadow-xl">
            {status === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Inviata!</h2>
                <p className="text-muted-foreground">Grazie, la tua recensione è stata ricevuta.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-azure font-bold hover:underline italic">Scrivine un'altra</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="text-azure h-6 w-6" />
                  <h2 className="text-xl font-bold text-foreground">Lascia la tua recensione</h2>
                </div>

                <input name="name" required className="w-full p-3 rounded-lg border border-border bg-background outline-none" placeholder="Nome" />
                <input name="email" type="email" required className="w-full p-3 rounded-lg border border-border bg-background outline-none" placeholder="Email" />

                <div className="py-4 bg-secondary/30 rounded-xl text-center border border-border/50">
                  <p className="text-[10px] font-bold uppercase mb-2 tracking-widest text-muted-foreground">La tua valutazione</p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button key={s} type="button" onClick={() => setRating(s)} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)} className="focus:outline-none transition-transform hover:scale-110">
                        <Star className={`h-10 w-10 ${(hover || rating) >= s ? 'fill-azure text-azure' : 'text-muted/20 stroke-[1px]'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <textarea name="message" required rows={4} className="w-full p-3 rounded-lg border border-border bg-background resize-none outline-none" placeholder="Scrivi qui la tua esperienza..." />

                <button type="submit" disabled={status === 'sending'} className="w-full py-4 bg-azure text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-azure/90 transition-all disabled:opacity-50">
                  {status === 'sending' ? <Loader2 className="h-5 w-5 animate-spin" /> : <><Send className="h-4 w-4" /> INVIA RECENSIONE</>}
                </button>
                {status === 'error' && <p className="text-red-500 text-center text-xs font-bold">Errore nell'invio. Riprova tra poco.</p>}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
