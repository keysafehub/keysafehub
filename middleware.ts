'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/page-header'
import { Star, Quote, CheckCircle, Send, MessageSquare } from 'lucide-react'
// IMPORTANTE: Questa è la funzione che invia le mail nel tuo sito. 
// Il percorso potrebbe essere diverso, controlla dove si trova 'sendEmail' o 'contactAction'
import { sendEmail } from '@/lib/actions' 

const reviews = [
  { id: 1, text: "Servizio rapido, licenza arrivata in pochi secondi. Ho attivato Windows 11 Pro senza problemi. Consigliatissimo!", author: "Marco R.", rating: 5 },
  { id: 2, text: "Prezzi ottimi e attivazione immediata. Ero scettico inizialmente ma tutto ha funzionato perfettamente.", author: "Laura P.", rating: 5 },
  { id: 3, text: "Supporto clienti molto disponibile. Ho avuto un problema minore con l&apos;installazione e mi hanno risposto subito.", author: "Giuseppe M.", rating: 4 },
  { id: 4, text: "Ottimo rapporto qualità prezzo. Licenza originale e funzionante. La uso da mesi senza alcun tipo di errore.", author: "Francesca L.", rating: 5 },
  { id: 5, text: "Acquisto semplice. L&apos;email con la chiave è arrivata subito, anche se inizialmente era finita nella cartella spam.", author: "Alessandro T.", rating: 4 },
  { id: 6, text: "Secondo acquisto su questo sito. Sempre affidabili e con prezzi competitivi rispetto alla concorrenza.", author: "Chiara B.", rating: 5 },
  { id: 7, text: "Tutto bene, licenza Home attivata subito. Avrei preferito una guida leggermente più dettagliata, ma il supporto ha chiarito.", author: "Roberto C.", rating: 4 },
  { id: 8, text: "Finalmente un sito serio per le licenze software. Prezzi onesti e assistenza realmente disponibile via chat.", author: "Valentina G.", rating: 5 },
  { id: 9, text: "Attivazione riuscita al primo tentativo. Molto soddisfatto dell&apos;acquisto, risparmio notevole.", author: "Stefano N.", rating: 5 },
  { id: 10, text: "Chiave di licenza ricevuta istantaneamente. Il link di download era corretto e l&apos;installazione è andata liscia.", author: "Daniele V.", rating: 5 },
  { id: 11, text: "Procedura di acquisto chiara. Ho dovuto attendere qualche minuto in più per l&apos;email, ma il codice era perfetto.", author: "Elena S.", rating: 4 },
  { id: 12, text: "Sito affidabile. Licenza valida a vita come promesso. Ho aggiornato da Windows 10 a 11 senza formattare.", author: "Matteo F.", rating: 5 }
]

export default function RecensioniPage() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleAction(formData: FormData) {
    setStatus('sending')
    
    // Aggiungiamo il voto al messaggio prima di inviare
    const originalMessage = formData.get('message')
    formData.set('message', `VOTO: ${rating}/5 STELLE\n\n${originalMessage}`)
    formData.set('subject', 'Nuova Recensione da KeySafeHub')

    try {
      // Chiamiamo la stessa funzione del form contatti
      const result = await sendEmail(formData)
      
      if (result?.success || result) {
        setStatus('success')
        setRating(0)
      } else {
        setStatus('error')
      }
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader title="Recensioni Clienti" description="Cosa dicono i nostri clienti" />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          
          {/* Griglia Recensioni */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {reviews.map((r) => (
              <div key={r.id} className="p-6 rounded-xl bg-card border border-border shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (<Star key={i} className={`h-4 w-4 ${i < r.rating ? 'fill-azure text-azure' : 'text-muted/20'}`} />))}
                </div>
                <p className="text-sm italic mb-4 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-3 border-t border-border/50 text-xs font-bold">
                  {r.author} <CheckCircle className="h-3 w-3 text-azure" />
                </div>
              </div>
            ))}
          </div>

          {/* Form Identico al modulo contatti */}
          <div className="max-w-xl mx-auto bg-card rounded-2xl border border-border p-8 shadow-xl">
            {status === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold">Inviata!</h2>
                <button onClick={() => setStatus('idle')} className="mt-4 text-azure underline">Scrivine un&apos;altra</button>
              </div>
            ) : (
              <form action={handleAction} className="space-y-4">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                   <MessageSquare className="text-azure h-5 w-5" /> Lascia la tua recensione
                </h2>
                
                <input name="name" required className="w-full p-3 rounded-lg border border-border bg-background outline-none" placeholder="Nome e Cognome" />
                <input name="email" type="email" required className="w-full p-3 rounded-lg border border-border bg-background outline-none" placeholder="Tua Email" />

                <div className="py-4 text-center">
                  <p className="text-xs font-bold mb-3 uppercase tracking-widest">Valutazione</p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button key={s} type="button" onClick={() => setRating(s)} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)}>
                        <Star className={`h-10 w-10 ${(hover || rating) >= s ? 'fill-azure text-azure' : 'text-muted/20 stroke-[1.5px]'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <textarea name="message" required rows={4} className="w-full p-3 rounded-lg border border-border bg-background resize-none outline-none" placeholder="La tua recensione..." />

                <button type="submit" disabled={!rating || status === 'sending'} className="w-full py-4 bg-azure text-white font-bold rounded-xl flex items-center justify-center gap-2">
                  {status === 'sending' ? 'Invio in corso...' : <><Send className="h-4 w-4" /> INVIA ORA</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}