import { HeroSection } from "@/components/hero-section"
import { ConceptSection } from "@/components/concept-section"
import { GallerySection } from "@/components/gallery-section"
import { FeaturesSection } from "@/components/features-section"
import { ProgramSection } from "@/components/program-section"
import { PricingSection } from "@/components/pricing-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] overflow-hidden">
      <HeroSection />
      <ConceptSection />
      <GallerySection />
      <FeaturesSection />
      <ProgramSection />
      <PricingSection />
      <FooterSection />
    </main>
  )
}
