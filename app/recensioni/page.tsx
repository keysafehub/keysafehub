'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/page-header'
import { Star, Quote, CheckCircle, Send, MessageSquare } from 'lucide-react'

// Array completo delle 12 recensioni originali
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

export default function RecensioniPage() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [nome, setNome] = useState('')
  const [messaggio, setMessaggio] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Qui va inserita la tua logica di invio (es. fetch('/api/reviews'))
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setNome(''); setMessaggio(''); setRating(0)
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader 
        title="Recensioni Clienti" 
        description="Scopri cosa pensano di noi i nostri clienti soddisfatti" 
      />

      {/* Sezione Statistiche */}
      <section className="py-12 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-center gap-1 mb-2">
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

      {/* Griglia Recensioni */}
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

          {/* --- MODULO LASCIA LA TUA RECENSIONE --- */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl border-2 border-azure/10 p-8 md:p-10 shadow-2xl">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">Grazie per la tua recensione!</h2>
                  <p className="text-muted-foreground">Il tuo feedback è stato inviato correttamente e verrà aggiunto alla pagina recensioni a breve.</p>
                  <button onClick={() => setStatus('idle')} className="mt-8 text-azure font-semibold hover:underline">Inviane un&apos;altra</button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-azure/10 rounded-2xl">
                      <MessageSquare className="h-6 w-6 text-azure" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Lascia la tua recensione</h2>
                      <p className="text-sm text-muted-foreground">La tua recensione verrà aggiunta a questa pagina dopo l&apos;approvazione.</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Nome e Cognome *</label>
                      <input
                        required
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Es: Mario Rossi"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-azure/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">Valutazione *</label>
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
                              className={`h-9 w-9 transition-colors ${
                                (hover || rating) >= star 
                                  ? 'fill-azure text-azure' 
                                  : 'text-muted-foreground/30 stroke-[2px]' 
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-bold text-foreground">Il tuo messaggio *</label>
                        <span className={`text-xs ${messaggio.length >= 200 ? 'text-red-500 font-bold' : 'text-muted-foreground'}`}>
                          {messaggio.length}/200
                        </span>
                      </div>
                      <textarea
                        required
                        maxLength={200}
                        value={messaggio}
                        onChange={(e) => setMessaggio(e.target.value)}
                        rows={4}
                        placeholder="Raccontaci com&apos;è andato il tuo acquisto..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-azure/20 outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending' || !rating || !nome || !messaggio}
                      className="w-full py-4 bg-azure text-white font-bold rounded-xl shadow-lg shadow-azure/20 hover:bg-azure/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Invio in corso...' : (
                        <>Invia Recensione <Send className="h-4 w-4" /></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
