import { Metadata } from 'next'
import { ProductCard } from '@/components/product-card'
import { getProductsByCategory } from '@/lib/products'
import { PageHeader } from '@/components/page-header'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bundle Windows + Office',
  description: 'Risparmia con i nostri bundle: Windows 11 Pro + Office insieme a prezzi imbattibili. Fino al 82% di sconto.',
  openGraph: {
    title: 'Bundle Windows + Office | KeySafeHub',
    description: 'I migliori bundle Windows 11 Pro + Office con sconti fino al 82%. Massimo risparmio garantito.',
  }
}

const bundleFeatures = [
  'Windows 11 Pro incluso',
  'Office Professional Plus incluso',
  'Attivazione immediata',
  'Licenze perpetue',
  'Supporto dedicato',
  'Garanzia sostituzione',
]

export default function BundlePage() {
  const bundleProducts = getProductsByCategory('bundle')

  return (
    <>
      <PageHeader
        title="Bundle Windows + Office"
        description="Massimizza il risparmio con i nostri bundle esclusivi. Windows 11 Pro e Office insieme a prezzi imbattibili."
      />

      {/* Bundle Benefits */}
      <section className="py-12 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {bundleFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-azure flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bundleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
