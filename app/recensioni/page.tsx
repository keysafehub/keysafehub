'use client'

import React, { useState, useRef } from 'react'
import { PageHeader } from '@/components/page-header'
import { Star, CheckCircle, Send, MessageSquare, Loader2, Quote, Users } from 'lucide-react'
import emailjs from '@emailjs/browser'

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

    emailjs.send('service_sdf5v7r', 'template_n4jq6o9', templateParams, 'qZ_1lRdMAu5yNsOKq')
    .then(() => setStatus('success'))
    .catch(() => setStatus('error'))
  }

  return (
    <>
      <PageHeader title="Recensioni Clienti" description="La trasparenza è alla base del nostro successo" />

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          
          {/* STATISTICHE IN CIMA - MEDIA ABBASSATA A 4.8 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-azure/5 border border-azure/20 rounded-3xl p-8 flex items-center gap-6">
              <div className="bg-azure text-white p-4 rounded-2xl shadow-lg shadow-azure/30">
                <Star className="h-8 w-8 fill-current" />
              </div>
              <div>
                <p className="text-4xl font-black text-foreground">4.8 / 5</p>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Valutazione Media</p>
              </div>
            </div>

            <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-8 flex items-center gap-6">
              <div className="bg-green-500 text-white p-4 rounded-2xl shadow-lg shadow-green-500/30">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <p className="text-4xl font-black text-foreground">+10.000</p>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Clienti Soddisfatti</p>
              </div>
            </div>
          </div>

          {/* GRIGLIA RECENSIONI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {reviews.map((r) => (
              <div key={r.id} className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-azure/30 transition-all relative group">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < r.rating ? 'fill-azure text-azure' : 'text-muted/20'}`} />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-azure/5 absolute top-4 right-4" />
                <p className="text-sm italic mb-6 leading-relaxed text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-4 border-t border-border/50 text-xs font-bold">
                  <div className="w-6 h-6 rounded-full bg-azure/10 flex items-center justify-center text-azure text-[10px]">{r.author.charAt(0)}</div>
                  {r.author} <CheckCircle className="h-3 w-3 text-azure" />
                </div>
              </div>
            ))}
          </div>

          <hr className="border-border/50 mb-20" />

          {/* FORM DI INVIO CON STELLE VISIBILI */}
          <div className="max-w-xl mx-auto bg-card rounded-[2.5rem] border border-border p-10 shadow-2xl relative overflow-hidden">
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold">Inviata con successo!</h2>
                <button onClick={() => {setStatus('idle'); setRating(0)}} className="mt-4 text-azure font-bold hover:underline">Scrivine un'altra</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={sendReview} className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                    <MessageSquare className="text-azure h-6 w-6" /> Lascia il tuo Feedback
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <input name="user_name" required className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-azure/20" placeholder="Nome e Cognome" />
                  <input name="user_email" type="email" required className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-azure/20" placeholder="Tua Email" />
                </div>

                <div className="py-8 bg-secondary/20 rounded-3xl text-center border border-border/60 shadow-inner">
                  <p className="text-xs font-black mb-4 uppercase tracking-widest text-muted-foreground">La tua Valutazione</p>
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button key={s} type="button" onClick={() => setRating(s)} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)} className="transition-transform active:scale-90 hover:scale-110">
                        <Star 
                          className={`h-10 w-10 transition-all duration-200 ${
                            (hover || rating) >= s 
                            ? 'fill-azure text-azure' 
                            : 'text-azure/30 stroke-azure stroke-[2px] bg-azure/5 rounded-full p-1' 
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && <p className="text-azure text-xs font-bold mt-3 animate-pulse">Hai selezionato {rating} stelle</p>}
                </div>

                <textarea name="message" required rows={4} className="w-full p-4 rounded-xl border border-border bg-background resize-none outline-none focus:ring-2 focus:ring-azure/20" placeholder="Cosa ne pensi del nostro servizio?" />

                <button type="submit" disabled={status === 'loading'} className="w-full py-5 bg-azure text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-azure/20 hover:opacity-90 disabled:opacity-50 transition-all uppercase tracking-widest text-sm">
                  {status === 'loading' ? <Loader2 className="animate-spin" /> : <><Send className="h-5 w-5" /> Pubblica Recensione</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
