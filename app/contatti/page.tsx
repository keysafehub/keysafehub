'use client'

import React, { useState, useRef } from 'react'
import { PageHeader } from '@/components/page-header'
import { Send, Mail, CheckCircle, Loader2, AlertCircle, MessageSquare, Clock, Zap } from 'lucide-react'
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
      'template_wjtougp',               // Template ID Contatti
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
          
          {/* Badge Risposta Rapida in alto */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 bg-azure/10 border border-azure/20 px-4 py-2 rounded-full text-azure font-bold text-sm uppercase tracking-tighter animate-pulse">
              <Zap className="h-4 w-4 fill-current" />
              Garantiamo una risposta entro 24 ore
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Info di sinistra */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black mb-6 text-foreground tracking-tight">Mettiti in contatto con noi</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Hai bisogno di assistenza o vuoi maggiori informazioni sui nostri servizi di protezione? Il nostro team dedicato prenderà in carico la tua richiesta e ti fornirà una <strong>risposta completa entro 24 ore</strong>.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-5 bg-card p-8 rounded-3xl border border-border shadow-sm hover:border-azure/30 transition-all">
                  <div className="bg-azure text-white p-4 rounded-2xl shadow-lg shadow-azure/20">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Email Ufficiale</p>
                    <p className="text-xl font-bold text-foreground">info@keysafehub.eu</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-card/50 p-8 rounded-3xl border border-border border-dashed">
                  <div className="bg-muted text-muted-foreground p-4 rounded-2xl">
                    <Clock className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Orari Operativi</p>
                    <p className="text-lg font-bold text-foreground">Lunedì - Venerdì | 09:00 - 18:00</p>
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
                  <h3 className="text-3xl font-black mb-2 text-foreground">Messaggio Inviato!</h3>
                  <p className="text-muted-foreground mb-8">Grazie per aver scelto KeySafeHub. Riceverai la nostra risposta via email entro le prossime 24 ore.</p>
                  <button onClick={() => setStatus('idle')} className="text-azure font-bold hover:underline uppercase tracking-tighter">Invia un altro messaggio</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="text-azure h-6 w-6" />
                    <h3 className="text-xl font-bold">Scrivici un messaggio</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase ml-1 text-muted-foreground">Nome e Cognome</label>
                      <input name="user_name" required placeholder="Inserisci nome" className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-azure/20 focus:border-azure transition-all" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase ml-1 text-muted-foreground">Tua Email</label>
                      <input name="user_email" type="email" required placeholder="esempio@mail.it" className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-azure/20 focus:border-azure transition-all" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase ml-1 text-muted-foreground">Oggetto</label>
                    <input name="subject" required placeholder="Come possiamo aiutarti?" className="w-full p-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-azure/20 focus:border-azure transition-all" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase ml-1 text-muted-foreground">Messaggio</label>
                    <textarea name="message" required rows={5} placeholder="Scrivi qui i dettagli della tua richiesta..." className="w-full p-4 rounded-xl border border-border bg-background resize-none outline-none focus:ring-2 focus:ring-azure/20 focus:border-azure transition-all" />
                  </div>

                  <button type="submit" disabled={status === 'loading'} className="w-full py-5 bg-azure text-white font-black rounded-2xl flex items-center justify-center gap
