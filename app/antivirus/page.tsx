import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ProductCard } from '@/components/product-card'
import { getProductsByCategory } from '@/lib/products'
import { Shield, Check, Zap, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Antivirus McAfee | Licenze Originali | KeySafeHub',
  description: 'Acquista licenze originali McAfee Total Protection e AntiVirus Plus. Protezione completa per PC, Mac e dispositivi mobili. Consegna immediata via email.',
  keywords: 'McAfee, antivirus, Total Protection, AntiVirus Plus, licenza originale, protezione virus, sicurezza PC',
  openGraph: {
    title: 'Antivirus McAfee | Licenze Originali | KeySafeHub',
    description: 'Proteggi i tuoi dispositivi con McAfee. Licenze originali a prezzi imbattibili.',
    type: 'website',
  },
}

const features = [
  {
    icon: Shield,
    title: 'Protezione Totale',
    description: 'Difesa completa contro virus, malware, ransomware e minacce online'
  },
  {
    icon: Zap,
    title: 'Scansione in Tempo Reale',
    description: 'Monitoraggio continuo del sistema per rilevare le minacce istantaneamente'
  },
  {
    icon: Globe,
    title: 'Navigazione Sicura',
    description: 'Protezione durante la navigazione web e blocco dei siti pericolosi'
  },
]

export default function AntivirusPage() {
  const antivirusProducts = getProductsByCategory('antivirus')

  return (
    <>
      <PageHeader
        title="Antivirus McAfee"
        description="Proteggi i tuoi dispositivi con McAfee Total Protection. Licenze originali con attivazione immediata."
      />

      {/* Features Section */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-red-500/10 rounded-xl">
                  <feature.icon className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16" id="prodotti">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {antivirusProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why McAfee Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Perche scegliere McAfee?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              'Protezione premiata da laboratori indipendenti',
              'Aggiornamenti automatici delle definizioni virus',
              'Supporto tecnico 24/7 incluso',
              'Compatibile con Windows, Mac, iOS e Android',
              'Firewall integrato per protezione di rete',
              'Password manager incluso',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="flex-shrink-0 p-1 bg-azure/20 rounded-full">
                  <Check className="h-4 w-4 text-azure" />
                </div>
                <span className="text-primary-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
