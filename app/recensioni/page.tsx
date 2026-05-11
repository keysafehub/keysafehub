'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/page-header'
import { Star, Quote, CheckCircle, MessageSquare } from 'lucide-react'
import { ContactForm } from '@/components/contact-form' // Usiamo il tuo modulo originale

const reviews = [
  { id: 1, text: "Servizio rapido, licenza arrivata in pochi secondi. Ho attivato Windows 11 Pro senza problemi. Consigliatissimo!", author: "Marco R.", rating: 5, verified: true },
  { id: 2, text: "Prezzi ottimi e attivazione immediata. Ero scettico inizialmente ma tutto ha funzionato perfettamente.", author: "Laura P.", rating: 5, verified: true },
  { id: 3, text: "Supporto clienti molto disponibile. Ho avuto un problema minore con l&apos;installazione e mi hanno risposto in un paio d&apos;ore.", author: "Giuseppe M.", rating: 4, verified: true },
  { id: 4, text: "Ottimo rapporto qualità prezzo. Licenza originale e funzionante. La uso da mesi senza alcun tipo di errore.", author: "Francesca L.", rating: 5, verified: true },
  { id: 5, text: "Acquisto semplice. L&apos;email con la chiave è arrivata subito, anche se inizialmente era finita nella cartella spam.", author: "Alessandro T.", rating: 4, verified: true },
  { id: 6, text: "Secondo acquisto su questo sito. Sempre affidabili e con prezzi competitivi rispetto alla concorrenza.", author: "Chiara B.", rating: 5, verified: true },
  { id: 7, text: "Tutto bene, licenza Home attivata subito. Avrei preferito una guida leggermente più dettagliata per il download.", author: "Roberto C.", rating: 4, verified: true },
  { id: 8, text: "Finalmente un sito serio per le licenze software. Prezzi onesti e assistenza realmente disponibile via chat.", author: "Valentina G.", rating: 5, verified: true },
  { id: 9, text: "Attivazione riuscita al primo tentativo. Molto soddisfatto dell&apos;acquisto, risparmio notevole.", author: "Stefano N.", rating: 5, verified: true },
  { id: 10, text: "Chiave di licenza ricevuta istantaneamente. Il link di download era corretto e l&apos;installazione è andata liscia.", author: "Daniele V.", rating: 5, verified: true },
  { id: 11, text: "Procedura di acquisto chiara. Ho dovuto attendere qualche minuto in più per l&apos;email, ma il codice era perfetto.", author: "Elena S.", rating: 4, verified: true },
  { id: 12, text: "Sito affidabile. Licenza valida a vita come promesso. Ho aggiornato da Windows 10 a 11 senza formattare.", author: "Matteo F.", rating: 5, verified: true }
]

export default function RecensioniPage() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <>
      <PageHeader 
        title="Recensioni Clienti" 
        description="Scopri cosa pensano di noi i nostri clienti soddisfatti" 
      />

      {/* Stats Summary */}
      <section className="py-12 bg-secondary/50 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-center">
            <div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (<Star key={i} className="h-6 w-6 fill-azure text-azure" />))}
              </div>
              <p className="text-3xl font-bold text-foreground">4.8/5</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Valutazione Media</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border/50"></div>
            <div>
              <p className="text-3xl font-bold text-foreground mb-2">10.000+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Clienti Soddisfatti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid delle Recensioni */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {reviews.map((review) => (
              <div key={review.id} className="relative p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-azure/10" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-azure text-azure' : 'text-muted/20 stroke-[1.5px]'}`} />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-border/30 pt-4">
                  <p className="text-sm font-semibold text-foreground">{review.author}</p>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-[10px] font-bold text-azure uppercase tracking-tighter bg-azure/5 px-2 py-1 rounded-full">
                      <CheckCircle className="h-3 w-3" /> Verificato
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form Recensione basato sul modulo contatti */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl border-2 border-azure/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <MessageSquare className="h-32 w-32 text-azure" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-foreground mb-2">Lascia il tuo feedback</h2>
                <p className="text-muted-foreground mb-8 text-lg">La tua opinione aiuta altri utenti a scegliere con fiducia.</p>
                
                {/* Visual Rating Selector */}
                <div className="mb-8 p-6 bg-secondary/40 rounded-2xl border border-border/50 text-center">
                  <span className="block text-sm font-bold text-foreground mb-3 uppercase tracking-widest">Quanto sei soddisfatto? *</span>
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button 
                        key={s} 
                        type="button" 
                        onClick={() => setRating(s)} 
                        onMouseEnter={() => setHover(s)} 
                        onMouseLeave={() => setHover(0)}
                        className="transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star 
                          className={`h-11 w-11 transition-all ${
                            (hover || rating) >= s 
                              ? 'fill-azure text-azure drop-shadow-[0_0_8px_rgba(0,123,255,0.3)]' 
                              : 'text-muted-foreground/20 stroke-[1.5px]'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="mt-4 text-azure font-bold animate-in fade-in slide-in-from-top-1">
                      Hai selezionato {rating} su 5 stelle
                    </p>
                  )}
                </div>

                {/* MODULO CONTATTI REALE */}
                <div className="border-t border-border/50 pt-8">
                  <p className="text-sm text-muted-foreground mb-6 text-center italic">
                    Inserisci i tuoi dati qui sotto per inviare la recensione
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
