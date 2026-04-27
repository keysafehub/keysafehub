import { Button } from '@/components/ui/button'
import { Shield, Lock, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-azure/20 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <Shield className="h-4 w-4 text-azure" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Licenze 100% Originali e Garantite
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight mb-6 animate-fade-in text-balance">
              Licenze Digitali Originali
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-primary-foreground/80 leading-relaxed mb-10 animate-fade-in-delay-1 text-pretty">
              Windows, Office e Antivirus con attivazione immediata.
              <br className="hidden sm:block" />
              Pagamenti sicuri con Stripe.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-delay-2">
              <Button 
                asChild 
                size="lg" 
                className="bg-azure hover:bg-azure/90 text-white font-semibold px-8 h-12"
              >
                <a href="#prodotti">
                  Scopri le offerte
                </a>
              </Button>
              <Button 
                asChild 
                size="lg"
                className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 font-semibold px-8 h-12 backdrop-blur-sm"
              >
                <Link href="/faq">
                  Come funziona
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 animate-fade-in-delay-3">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Lock className="h-5 w-5 text-azure" />
                <span className="text-sm font-medium">Pagamenti Sicuri</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Zap className="h-5 w-5 text-azure" />
                <span className="text-sm font-medium">Consegna Immediata</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="h-5 w-5 text-azure" />
                <span className="text-sm font-medium">Garanzia Inclusa</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hidden lg:flex justify-center animate-fade-in-delay-2">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homepage%20-i6VUZtJs1FtcGYE3bzwDtNEm7qld8y.png"
                alt="Windows 11 Pro, Office e McAfee - Licenze Digitali"
                width={500}
                height={500}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
