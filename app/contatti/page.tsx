'use client'

import React, { useState, useRef } from 'react'
import { PageHeader } from '@/components/page-header'
import { Send, Mail, Phone, CheckCircle, Loader2, AlertCircle, MessageSquare } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContattiPage() {
  const formRef = useRef()
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
      'service_sdf5v7r',                // Service ID
      'template_wjtougp',               // Il tuo Template ID Contatti
      templateParams,
      'qZ_1lRdMAu5yNsOKq'               // Public Key
    )
    .then(() => {
      setStatus('success')
      formRef.current.reset()
    })
    .catch((err) => {
      console.error('FAILED...', err)
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Info di sinistra */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black mb-6 text-foreground tracking-tight">Mettiti in contatto con noi</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Hai bisogno di assistenza o vuoi maggiori informazioni sui nostri servizi di protezione? Il nostro team è pronto ad aiutarti.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-5 bg-card p-6 rounded-3 border border-border shadow-sm">
                  <div className="bg-azure text-white p-4 rounded-2xl shadow-lg shadow-azure/20">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Email Ufficiale</p>
                    <p className="text-lg font-bold text-foreground">info@keysafehub.eu</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-card p-6 rounded-3xl border border-border shadow-sm">
                  <div className="bg-green-500 text-white p-4 rounded-2xl shadow-lg shadow-green-500/20">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Supporto Clienti</p>
                    <p className="text-lg font-bold text-foreground">Disponibile Lun - Ven</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form di destra */}
            <div className="bg-card rounded-[2.5rem] border border-border p-10 shadow-2xl relative overflow-hidden">
              {status === 'success' ? (
                <div className="text-center py-12 animate-in fade-in zoom-in">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-black mb-2 text-foreground">Inviato!</h3>
                  <p className="text-muted-foreground mb-8">Ti risponderemo entro 24 ore lavorative.</p>
                  <button onClick={() => setStatus('idle')} className="text-azure font-bold hover:underline">Invia un altro messaggio</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="text-azure h-6 w-6" />
                    <h3 className="text-xl font-bold">Scrivici un messaggio</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="user_name" required placeholder="Nome e Cognome" className="w-full p-4 rounded-2xl border border-border bg-background outline-none focus:ring-2 focus:ring-azure/20 focus:border-azure transition-all" />
                    <input name="user_email" type="email" required placeholder="Email" className="w-full p-4 rounded-2xl border border-border bg-background outline-none focus:ring-2 focus:ring-azure/20 focus:border-azure transition-all" />
                  </div>

                  <input name="subject" required placeholder="Oggetto della richiesta" className="w-full p-4 rounded-2xl border border-border bg-background outline-none focus:ring-2 focus:ring-azure/20 focus:border-azure transition-all" />

                  <textarea name="message" required rows={5} placeholder="Come possiamo aiutarti?" className="w-full p-4 rounded-2xl border border-border bg-background resize-none outline-none focus:ring-2 focus:ring-azure/20 focus:border-azure transition-all" />

                  <button type="submit" disabled={status === 'loading'} className="w-full py-5 bg-azure text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-azure/20 hover:opacity-90 disabled:opacity-50 transition-all uppercase tracking-widest text-sm">
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin h-5 w-5" />
                    ) : (
                      <>
                        <Send className="h-5 w-5" /> Invia Richiesta
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 justify-center text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                      <AlertCircle className="h-4 w-4" />
                      <p className="text-xs font-bold uppercase">Errore. Riprova più tardi.</p>
                    </div>
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
