'use client'

import React, { useState, useRef } from 'react'
import { PageHeader } from '@/components/page-header'
import { Star, CheckCircle, Send, MessageSquare, Loader2, Quote } from 'lucide-react'
import emailjs from '@emailjs/browser'

// LE TUE RECENSIONI
const reviews = [
  { id: 1, text: "Servizio rapido, licenza arrivata in pochi secondi. Ho attivato Windows 11 Pro senza problemi. Consigliatissimo!", author: "Marco R.", rating: 5 },
  { id: 2, text: "Prezzi ottimi e attivazione immediata. Ero scettico inizialmente ma tutto ha funzionato perfettamente.", author: "Laura P.", rating: 5 },
  { id: 3, text: "Supporto clienti molto disponibile. Ho avuto un problema minore con l'installazione e mi hanno risposto subito.", author: "Giuseppe M.", rating: 4 },
  { id: 4, text: "Ottimo rapporto qualità prezzo. Licenza originale e funzionante. La uso da mesi senza alcun tipo di errore.", author: "Francesca L.", rating: 5 },
  { id: 5, text: "Acquisto semplice. L'email con la chiave è arrivata subito, anche se inizialmente era finita nella cartella spam.", author: "Alessandro T.", rating: 4 },
  { id: 6, text: "Secondo acquisto su questo sito. Sempre affidabili e con prezzi competitivi rispetto alla concorrenza.", author: "Chiara B.", rating: 5 },
  { id: 7, text: "Tutto bene, licenza Home attivata subito. Avrei preferito una guida leggermente più dettagliata, ma il supporto ha chiarito.", author: "Roberto C.", rating: 4 },
  { id: 8, text: "Finalmente un sito serio per le licenze software. Prezzi onesti e assistenza realmente disponibile via chat.", author: "Valentina G.", rating: 5 },
  { id: 9, text: "Attivazione riuscita al primo tentativo. Molto soddisfatto dell'acquisto, risparmio notevole.", author: "Stefano N.", rating: 5 },
  { id: 10, text: "Chiave di licenza ricevuta istantaneamente. Il link di download era corretto e l'installazione è andata liscia.", author: "Daniele V.", rating: 5 },
  { id: 11, text: "Procedura di acquisto chiara. Ho dovuto attendere qualche minuto in più per l'email, ma il codice era perfetto.", author: "Elena S.", rating: 4 },
  { id: 12, text: "Sito affidabile. Licenza valida a vita come promesso. Ho aggiornato da Windows 10 a 11 senza formattare.", author: "Matteo F.", rating: 5 }
]

export default function RecensioniPage() {
  const formRef = useRef(null)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [status, setStatus] = useState('idle')

  const sendReview = async (e) => {
    e.preventDefault()
    
    if (rating === 0) {
      alert("Per favore, seleziona una valutazione!")
      return
    }
    
    setStatus('loading')

    const templateParams = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      message: `VOTO: ${rating}/5 STELLE\n\n${formRef.current.message.value}`,
      rating: rating,
    }

    emailjs.send(
      'service_sdf5v7r',
      'template_n4jq6o9',
      templateParams,
      'qZ_1lRdMAu5yNsOKq'
    )
    .then(() => {
      setStatus('success')
    })
    .catch((err) => {
      console.error('FAILED...', err)
      setStatus('error')
    })
  }

  return (
    <>
      <PageHeader title="Recensioni Clienti" description="Cosa dicono i nostri clienti" />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {reviews.map((r) => (
              <div key={r.id} className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-azure/30 transition-all relative overflow-hidden group">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < r.rating ? 'fill-azure text-azure' : 'text-muted/20'}`} />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-azure/5 absolute top-4 right-4" />
                <p className="text-sm italic mb-6 leading-relaxed relative z-10 text-muted-foreground">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-border/50 text-xs font-bold text-foreground">
                  <div className="w-6 h-6 rounded-full bg-azure/10 flex items-center justify-center text-azure text-[10px]">
                    {r.author.charAt(0)}
                  </div>
                  {r.author} <CheckCircle className="h-3 w-3 text-azure" />
                </div>
              </div>
            ))}
          </div>

          <hr className="border-border/50 mb-20" />

          <div className="max-w-xl mx-auto bg-card rounded-[2rem] border border-border p-8 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Inviata!</h2>
                <button onClick={() => {setStatus('idle'); setRating(0)}} className="text-azure font-bold hover:underline">
                  Scrivine un'altra
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={sendReview} className="space-y-5">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                   <MessageSquare className="text-azure h-5 w-5" /> Lascia la tua recensione
                </h2>
                
                <input name="user_name" required className="w-full p-4 rounded-xl border border-border bg-background outline-none" placeholder="Nome e Cognome" />
                <input name="user_email" type="email" required className="w-full p-4 rounded-xl border border-border bg-background outline-none" placeholder="Tua Email" />

                <div className="py-6 bg-secondary/20 rounded-2xl text-center">
                  <p className="text-[10px] font-bold mb-3 uppercase tracking-widest text-muted-foreground">Valutazione</p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button key={s} type="button" onClick={() => setRating(s)} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)}>
                        <Star className={`h-10 w-10 ${(hover || rating) >= s ? 'fill-azure text-azure' : 'text-muted/20 stroke-[1.5px]'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <textarea name="message" required rows={4} className="w-full p-4 rounded-xl border border-border bg-background resize-none outline-none" placeholder="La tua recensione..." />

                <button type="submit" disabled={status === 'loading'} className="w-full py-4 bg-azure text-white font-bold rounded-xl flex items-center justify-center gap-2">
                  {status === 'loading' ? <Loader2 className="animate-spin h-5 w-5" /> : <><Send className="h-4 w-4" /> PUBBLICA ORA</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
