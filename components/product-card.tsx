'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, ChevronDown, ChevronUp, BookOpen } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [showGuide, setShowGuide] = useState(false)

  return (
    <Card className="group relative overflow-hidden bg-card border-border/50 hover:border-azure/30 hover:shadow-xl transition-all duration-300">
      {/* Discount Badge */}
      <Badge className="absolute top-4 right-4 z-10 bg-azure text-azure-foreground font-semibold">
        -{product.discountPercent}%
      </Badge>

      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-secondary to-muted overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {product.title}
        </h3>
        {product.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        
        {/* Pricing */}
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-2xl font-bold text-foreground">
            {product.salePrice.toFixed(2).replace('.', ',')}€
          </span>
          <span className="text-sm text-muted-foreground line-through">
            {product.originalPrice.toFixed(2).replace('.', ',')}€
          </span>
        </div>

        {/* Mini Guide Toggle */}
        {product.guide && product.guide.length > 0 && (
          <div className="border-t border-border pt-4">
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="flex items-center gap-2 text-sm font-medium text-azure hover:text-azure/80 transition-colors w-full"
            >
              <BookOpen className="h-4 w-4" />
              <span>Guida all&apos;installazione</span>
              {showGuide ? (
                <ChevronUp className="h-4 w-4 ml-auto" />
              ) : (
                <ChevronDown className="h-4 w-4 ml-auto" />
              )}
            </button>

            {showGuide && (
              <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
                {product.guide.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-azure/10 text-azure text-xs flex items-center justify-center font-medium">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          asChild 
          className="w-full bg-azure hover:bg-azure/90 text-white font-medium"
        >
          <a href={product.stripeLink} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Acquista con Stripe
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
