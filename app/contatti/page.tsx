'use client'

import React, { useState, useRef } from 'react'
import { PageHeader } from '@/components/page-header'
import { Send, Mail, CheckCircle, Loader2, AlertCircle, MessageSquare, Clock, Zap } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContattiPage() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const templateParams = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
    }

    emailjs.send(
      'service_sdf5v7r',
      'template_wjtougp',
      templateParams,
      'qZ_1lRdMAu5yNsOKq'
    )
    .then(() => {
      setStatus('success')
      formRef.current.reset()
    })
    .catch((err) => {
      console.error('EmailJS Error:', err)
      setStatus('error')
    })
  }

  return (
    <>
      <PageHeader 
        title="Contattaci" 
        description="Siamo qui per rispondere a ogni tua domanda sulla sicurezza digitale." 
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 bg-azure/10 border border-azure/20 px-4 py-2 rounded-full text-azure font-bold text-sm uppercase">
              <Zap className="h-4 w-4 fill-current" />
              Risposta garantita entro 24 ore
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black mb-6 tracking-tight text-foreground">Mettiti in contatto</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Hai domande sui nostri servizi? Il nostro team prenderà in carico la tua richiesta e ti fornirà una <strong>risposta completa entro 24 ore</strong>.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-5 bg-card p-8 rounded-3xl border border-border">
                  <div className="bg-azure text-white p-4 rounded-2xl shadow-lg">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase">Email</p>
                    <p className="text-xl font-bold text-foreground">info@keysafehub.eu</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-card/50 p-8 rounded-3xl border border-border border-dashed">
                  <div className="bg-muted text-muted-foreground p-4 rounded-2xl">
                    <Clock className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase">Orari</p>
                    <p className="text-lg font-bold text-foreground">Lun - Ven | 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-[2.5rem] border border-border p-10 shadow-2xl">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Inviato!</h3>
                  <p className="text-muted-foreground mb-8">Ti risponderemo entro 24 ore via email.</p>
                  <button onClick={() => setStatus('idle')} className="text-azure font-bold hover:underline uppercase">Nuovo messaggio</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="user_name" required placeholder="Nome e Cognome" className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:border-azure" />
                    <input name="user_email" type="email" required placeholder="Tua Email" className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:border-azure" />
                  </div>

                  <input name="subject" required placeholder="Oggetto" className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:border-azure" />

                  <textarea name="message" required rows={5} placeholder="Come possiamo aiutarti?" className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:border-azure" />

                  <button type="submit" disabled={status === 'loading'} className="w-full py-5 bg-azure text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:opacity-90 disabled:opacity-50 transition-all uppercase tracking-widest">
                    {status === 'loading' ? <Loader2 className="animate-spin h-5 w-5" /> : <><Send className="h-5 w-5" /> Invia Richiesta</>}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-500 text-center font-bold">Errore durante l'invio. Riprova.</p>
                  )}
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
