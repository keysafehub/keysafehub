'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Send } from 'lucide-react'

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl bg-card border border-azure/30 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-azure/10 mb-4">
          <CheckCircle className="h-8 w-8 text-azure" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Messaggio inviato!
        </h3>
        <p className="text-muted-foreground">
          Ti risponderemo entro 24 ore all&apos;indirizzo email indicato.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Nome completo
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Il tuo nome"
          className="h-12"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="la-tua@email.com"
          className="h-12"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Messaggio
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Descrivi la tua richiesta..."
          rows={6}
          className="resize-none"
        />
      </div>

      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full h-12 bg-azure hover:bg-azure/90 text-white font-medium"
      >
        {isLoading ? (
          'Invio in corso...'
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Invia messaggio
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Inviando questo form accetti la nostra{' '}
        <a href="/privacy-policy" className="text-azure hover:underline">
          Privacy Policy
        </a>
      </p>
    </form>
  )
}
