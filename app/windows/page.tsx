import { Metadata } from 'next'
import { ProductCard } from '@/components/product-card'
import { getProductsByCategory } from '@/lib/products'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Licenze Windows 11',
  description: 'Acquista licenze Windows 11 Pro e Home originali a prezzi scontati. Attivazione immediata e pagamenti sicuri con Stripe.',
  openGraph: {
    title: 'Licenze Windows 11 | KeySafeHub',
    description: 'Licenze Windows 11 Pro e Home originali con sconti fino al 76%. Attivazione immediata.',
  }
}

export default function WindowsPage() {
  const windowsProducts = getProductsByCategory('windows')

  return (
    <>
      <PageHeader
        title="Licenze Windows"
        description="Scegli la versione di Windows 11 più adatta alle tue esigenze. Tutte le licenze sono originali e garantite."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {windowsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
