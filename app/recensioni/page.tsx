'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/page-header'
import { Star, Quote, CheckCircle, Send, MessageSquare } from 'lucide-react'

// --- DATI RECENSIONI ---
const reviews = [
  { id: 1, text: "Servizio rapido, licenza arrivata in pochi secondi. Ho attivato Windows 11 Pro senza problemi. Consigliatissimo!", author: "Marco R.", rating: 5, product: "Windows 11 Pro", verified: true },
  { id: 2, text: "Prezzi ottimi e attivazione immediata. Ero scettico inizialmente ma tutto ha funzionato perfettamente.", author: "Laura P.", rating: 5, product: "Office 2021 Professional Plus", verified: true },
  { id: 3, text: "Supporto clienti molto disponibile. Ho avuto un problema minore con l&apos;installazione e mi hanno risposto in un paio d&apos;ore risolvendo tutto.", author: "Giuseppe M.", rating: 4, product: "Bundle Windows + Office", verified: true },
  { id: 4, text: "Ottimo rapporto qualità prezzo. Licenza originale e funzionante. La uso da mesi senza alcun tipo di errore.", author: "Francesca L.", rating: 5, product: "Windows 11 Pro", verified: true },
  { id: 5, text: "Acquisto semplice. L&apos;email con la chiave è arrivata subito, anche se inizialmente era finita nella cartella spam.", author: "Alessandro T.", rating: 4, product: "Office 2024 Professional Plus", verified: true },
  { id: 6, text: "Secondo acquisto su questo sito. Sempre affidabili e con prezzi competitivi rispetto alla concorrenza.", author: "Chiara B.", rating: 5, product: "Bundle Windows + Office", verified: true },
  { id: 7, text: "Tutto bene, licenza Home attivata subito. Avrei preferito una guida leggermente più dettagliata per il download, ma il supporto ha chiarito i dubbi.", author: "Roberto C.", rating: 4, product: "Windows 11 Home", verified: true },
  { id: 8, text: "Finalmente un sito serio per le licenze software. Prezzi onesti e assistenza realmente disponibile via chat.", author: "Valentina G.", rating: 5, product: "Office 2021 Professional Plus", verified: true },
  { id: 9, text: "Attivazione riuscita al primo tentativo. Molto soddisfatto dell&apos;acquisto, risparmio notevole.", author: "Stefano N.", rating: 5, product: "Windows 11 Pro", verified: true },
  { id: 10, text: "Chiave di licenza ricevuta istantaneamente. Il link di download era corretto e l&apos;installazione di Office è andata liscia.", author: "Daniele V.", rating: 5, product: "Office 2021 Professional Plus", verified: true },
  { id: 11, text: "Procedura di acquisto chiara. Ho dovuto attendere qualche minuto in più per l&apos;email, ma il codice era perfettamente funzionante.", author: "Elena S.", rating: 4, product: "Windows 11 Home", verified: true },
  { id: 12, text: "Sito affidabile. Licenza valida a vita come promesso. Ho aggiornato da Windows 10 a 11 senza formattare.", author: "Matteo F.", rating: 5, product: "Windows 11 Pro", verified: true }
]

// --- COMPONENTE DELLA PAGINA ---
export default function RecensioniPage() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.currentTarget)
    const data = {
      nome: formData.get('nome'),
      valutazione: rating,
      messaggio: formData.get('messaggio'),
      destinatario: 'recensioni@keysafehub.eu' // Indica al backend dove mandare questa specifica mail
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader 
        title="Recensioni Clienti" 
        description="Scopri cosa pensano di noi i nostri clienti soddisfatti" 
      />

      {/* Stats */}
      <section className="py-12 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (<Star key={i} className="h-6 w-6 fill-azure text-azure" />))}
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

      {/* Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {reviews.map((review) => (
              <div key={review.id} className="relative p-6 rounded-2xl bg-card border border-border/50 shadow-sm transition-all hover:shadow-md">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-azure/10" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-azure text-azure' : 'text-muted/20'}`} />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-border/30 pt-4">
                  <p className="text-sm font-medium text-foreground">{review.author}</p>
                  {review.verified && <CheckCircle className="h-4 w-4 text-azure" />}
                </div>
              </div>
            ))}
          </div>

          {/* Form Integrato */}
          <div className="max-w-2xl mx-auto">
            {status === 'success' ? (
              <div className="text-center py-12 bg-card rounded-3xl border-2 border-green-500/20 shadow-xl">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-foreground mb-2">Recensione Inviata!</h2>
                <p className="text-muted-foreground px-6">Grazie. Verrà aggiunta alla pagina dopo l&apos;approvazione.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-azure font-semibold hover:underline">Inviane un&apos;altra</button>
              </div>
            ) : (
              <div className="bg-card rounded-3xl border-2 border-azure/10 p-8 md:p-10 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-azure/10 rounded-2xl">
                    <MessageSquare className="h-6 w-6 text-azure" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Lascia la tua recensione</h2>
                    <p className="text-sm text-muted-foreground">La tua recensione verrà pubblicata dopo la verifica.</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Nome e Cognome *</label>
                    <input name="nome" required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-azure/20 transition-all" placeholder="Es: Mario Rossi" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Valutazione *</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button key={s} type="button" onClick={() => setRating(s)} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)} className="focus:outline-none transition-transform hover:scale-110">
                          <Star className={`h-9 w-9 transition-all ${(hover || rating) >= s ? 'fill-azure text-azure' : 'text-muted-foreground/30 stroke-[1.5px]'}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Messaggio (max 200 caratteri) *</label>
                    <textarea name="messaggio" required maxLength={200} rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background resize-none outline-none focus:ring-2 focus:ring-azure/20 transition-all" placeholder="Raccontaci la tua esperienza..." />
                  </div>
                  <button type="submit" disabled={!rating || status === 'sending'} className="w-full py-4 bg-azure text-white font-bold rounded-xl shadow-lg hover:bg-azure/90 transition-all disabled:opacity-50 flex items-center justify-center gap-3">
                    {status === 'sending' ? 'Invio...' : <><Send className="h-4 w-4" /> Invia Recensione</>}
                  </button>
                  {status === 'error' && <p className="text-red-500 text-sm text-center">Errore nell&apos;invio. Riprova.</p>}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
