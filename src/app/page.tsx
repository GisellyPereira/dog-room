import SmoothScroll from '@/presentation/components/providers/SmoothScroll'
import Nav from '@/presentation/components/chrome/Nav'
import Footer from '@/presentation/components/chrome/Footer'
import Hero from '@/presentation/components/sections/Hero'
import Story from '@/presentation/components/sections/Story'
import Services from '@/presentation/components/sections/Services'
import Gallery from '@/presentation/components/sections/Gallery'
import Booking from '@/presentation/components/sections/Booking'
import Billboard from '@/presentation/components/sections/Billboard'

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Services />
        <Gallery />
        <Booking />
        <Billboard />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
