import { ProductCard } from '@/components/product-card'
import { getFeaturedProducts } from '@/lib/products'

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section id="prodotti" className="py-16 lg:py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Prodotti in Evidenza
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri le nostre licenze digitali più vendute con sconti fino al 82%
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
