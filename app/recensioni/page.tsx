'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/page-header'
import { Star, Quote, CheckCircle, MessageSquare } from 'lucide-react'
import { ReviewForm } from '@/components/review-form' // Ecco il tuo nuovo componente

const reviews = [
  { id: 1, text: "Servizio rapido, licenza arrivata in pochi secondi. Ho attivato Windows 11 Pro senza problemi. Consigliatissimo!", author: "Marco R.", rating: 5 },
  { id: 2, text: "Prezzi ottimi e attivazione immediata. Ero scettico inizialmente ma tutto ha funzionato perfettamente.", author: "Laura P.", rating: 5 },
  { id: 3, text: "Supporto clienti molto disponibile. Ho avuto un problema minore con l&apos;installazione e mi hanno risposto subito.", author: "Giuseppe M.", rating: 4 },
  { id: 4, text: "Ottimo rapporto qualità prezzo. Licenza originale e funzionante. La uso da mesi senza alcun tipo di errore.", author: "Francesca L.", rating: 5 },
  { id: 5, text: "Acquisto semplice. L&apos;email con la chiave è arrivata subito, anche se inizialmente era finita nella cartella spam.", author: "Alessandro T.", rating: 4 },
  { id: 6, text: "Secondo acquisto su questo sito. Sempre affidabili e con prezzi competitivi rispetto alla concorrenza.", author: "Chiara B.", rating: 5 },
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

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Grid Recensioni Esistenti */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {reviews.map((r) => (
              <div key={r.id} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < r.rating ? 'fill-azure text-azure' : 'text-muted/20'}`} />
                  ))}
                </div>
                <p className="text-foreground/90 italic mb-4 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-4 border-t border-border/30">
                  <span className="text-sm font-bold">{r.author}</span>
                  <CheckCircle className="h-4 w-4 text-azure" />
                </div>
              </div>
            ))}
          </div>

          {/* Sezione Form Recensione */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl border-2 border-azure/10 p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-azure/10 rounded-2xl">
                  <MessageSquare className="h-6 w-6 text-azure" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Lascia la tua recensione</h2>
              </div>

              {/* Selettore Stelle Visivo */}
              <div className="mb-8 p-6 bg-secondary/50 rounded-2xl text-center border border-border/50">
                <p className="text-sm font-bold mb-3 uppercase tracking-widest text-muted-foreground">Valutazione *</p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button 
                      key={s} 
                      type="button" 
                      onClick={() => setRating(s)} 
                      onMouseEnter={() => setHover(s)} 
                      onMouseLeave={() => setHover(0)}
                      className="transition-transform hover:scale-110 focus:outline-none"
                    >
                      <Star className={`h-10 w-10 ${(hover || rating) >= s ? 'fill-azure text-azure' : 'text-muted/30 stroke-[1.5px]'}`} />
                    </button>
                  ))}
                </div>
                {rating > 0 && <p className="mt-2 text-xs text-azure font-bold">Hai selezionato {rating} stelle</p>}
              </div>

              {/* IL TUO NUOVO FORM */}
              <ReviewForm />
              
              <p className="text-[10px] text-center text-muted-foreground mt-6 italic">
                Inviando il modulo, accetti che la tua recensione venga elaborata dal nostro sistema.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
