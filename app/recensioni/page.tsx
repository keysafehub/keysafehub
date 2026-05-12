'use client'

import React, { useState, useRef } from 'react'
import { PageHeader } from '@/components/page-header'
import { Star, CheckCircle, Send, MessageSquare, Loader2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function RecensioniPage() {
  const formRef = useRef()
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const sendReview = async (e) => {
    e.preventDefault()
    
    if (rating === 0) {
      alert("Per favore, seleziona una valutazione cliccando sulle stelle!")
      return
    }
    
    setStatus('loading')

    // Parametri per il template EmailJS
    const templateParams = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      message: formRef.current.message.value,
      rating: rating,
    }

    emailjs.send(
      'service_sdf5v7r',                // Il tuo Service ID
      'template_n4jq6o9',               // Il tuo Template ID
      templateParams,
      'qZ_1lRdMAu5yNsOKq'               // La tua Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      setStatus('success')
    })
    .catch((err) => {
      console.error('FAILED...', err)
      setStatus('error')
    })
  }

  return (
    <>
      <PageHeader 
        title="Recensioni" 
        description="La tua opinione è fondamentale per migliorare i nostri servizi di sicurezza." 
      />
      
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-xl px-4">
          <div className="bg-card rounded-3xl border border-border p-8 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-azure/5 rounded-full -mr-16 -mt-16" />

            {status === 'success' ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Recensione Inviata!</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Grazie per aver condiviso la tua esperienza con KeySafeHub.
                </p>
                <button 
                  onClick={() => {setStatus('idle'); setRating(0)}} 
                  className="text-azure font-semibold hover:underline flex items-center gap-2 mx-auto"
                >
                  Scrivine un'altra
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={sendReview} className="space-y-6 relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-azure/10 rounded-lg">
                    <MessageSquare className="text-azure h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Inviaci il tuo feedback</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome Completo</label>
                    <input 
                      name="user_name" 
                      required 
                      placeholder="Esempio: Mario Rossi" 
                      className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-azure/20 focus:border-azure transition-all" 
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Indirizzo Email</label>
                    <input 
                      name="user_email" 
                      type="email" 
                      required 
                      placeholder="mario@esempio.it" 
                      className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-azure/20 focus:border-azure transition-all" 
                    />
                  </div>
                </div>

                <div className="py-8 bg-secondary/20 rounded-2xl text-center border border-border/50">
                  <p className="text-xs font-bold uppercase mb-4 text-muted-foreground tracking-widest">
                    Quante stelle ci dai?
                  </p>
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button 
                        key={s} 
                        type="button" 
                        onClick={() => setRating(s)} 
                        onMouseEnter={() => setHover(s)} 
                        onMouseLeave={() => setHover(0)}
                        className="transition-transform active:scale-90 hover:scale-110"
                      >
                        <Star 
                          className={`h-10 w-10 transition-colors ${
                            (hover || rating) >= s 
                            ? 'fill-azure text-azure' 
                            : 'text-muted/20 stroke-[1.5px]'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="mt-4 text-azure font-bold animate-pulse text-sm">
                      Hai selezionato {rating} {rating === 1 ? 'stella' : 'stelle'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">La tua opinione</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={4} 
                    placeholder="Raccontaci come ti sei trovato..." 
                    className="w-full p-4 rounded-xl border border-border bg-background resize-none outline-none focus:ring-2 focus:ring-azure/20 focus:border-azure transition-all" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="w-full py-4 bg-azure text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:opacity-90 disabled:opacity-50 transition-all shadow-xl shadow-azure/20"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" />
                      INVIO IN CORSO...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      PUBBLICA RECENSIONE
                    </>
                  )}
                </button>
                
                {status === 'error' && (
                  <div className="flex items-center gap-2 justify-center text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle className="h-4 w-4" />
                    <p className="text-xs font-bold uppercase text-center">
                      Errore Tecnico: Controlla le chiavi su EmailJS
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
