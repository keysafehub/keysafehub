import { HeroSection } from '@/components/hero-section'
import { CategoryIcons } from '@/components/category-icons'
import { FeaturedProducts } from '@/components/featured-products'
import { WhyChooseUs } from '@/components/why-choose-us'
import { ReviewsPreview } from '@/components/reviews-preview'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryIcons />
      <FeaturedProducts />
      <WhyChooseUs />
      <ReviewsPreview />
    </>
  )
}
