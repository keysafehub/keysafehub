import { Metadata } from 'next'
import { ProductCard } from '@/components/product-card'
import { getProductsByCategory } from '@/lib/products'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Licenze Microsoft Office',
  description: 'Acquista licenze Microsoft Office 2021 e 2024 Professional Plus originali. Word, Excel, PowerPoint e tutti gli strumenti di produttività.',
  openGraph: {
    title: 'Licenze Microsoft Office | KeySafeHub',
    description: 'Office 2021 e 2024 Professional Plus con sconti fino al 72%. Attivazione immediata.',
  }
}

export default function OfficePage() {
  const officeProducts = getProductsByCategory('office')

  return (
    <>
      <PageHeader
        title="Licenze Office"
        description="Microsoft Office Professional Plus con Word, Excel, PowerPoint, Outlook e molto altro. Licenze perpetue senza abbonamento."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {officeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
