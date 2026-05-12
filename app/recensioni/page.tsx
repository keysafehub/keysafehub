'use client'

import React, { useState } from 'react'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form' // Usiamo il modulo che FUNZIONA
import { Star, MessageSquare, CheckCircle } from 'lucide-react'

export default function RecensioniPage() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <>
      <PageHeader 
        title="Recensioni Clienti" 
        description="La tua opinione è importante per noi" 
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-2xl px-4">
          <div className="bg-card rounded-3xl border border-border p-8 shadow-2xl">
            
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-azure h-6 w-6" />
              <h2 className="text-2xl font-bold">Lascia una recensione</h2>
            </div>

            {/* Parte delle stelle (Estetica) */}
            <div className="mb-8 p-6 bg-secondary/30 rounded-2xl text-center border border-border/50">
              <p className="text-xs font-bold uppercase mb-3 tracking-widest">Valutazione</p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button 
                    key={s} 
                    type="button" 
                    onClick={() => setRating(s)} 
                    onMouseEnter={() => setHover(s)} 
                    onMouseLeave={() => setHover(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star 
                      className={`h-10 w-10 ${(hover || rating) >= s ? 'fill-azure text-azure' : 'text-muted/20 stroke-[1px]'}`} 
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="mt-3 text-azure font-bold text-sm animate-pulse">
                  Hai selezionato {rating} stelle
                </p>
              )}
            </div>

            {/* IL VERO MODULO CONTATTI */}
            <div className="border-t border-border/50 pt-8">
              <p className="text-sm text-muted-foreground mb-6">
                Compila i campi qui sotto. Scrivi il tuo feedback nel messaggio, lo riceveremo immediatamente.
              </p>
              
              {/* Qui inseriamo il componente originale del tuo sito */}
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
