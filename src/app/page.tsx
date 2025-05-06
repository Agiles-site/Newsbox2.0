import HeroSection from "@/components/home/hero-section"
import NewsSection from "@/components/home/news-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <NewsSection />
    </div>
  )
}
