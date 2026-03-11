import { Hero } from '@/components/sections/Hero'
import { Marquee, Metrics } from '@/components/sections/MarqueeMetrics'
import { Mission } from '@/components/sections/Mission'
import { Solutions, Services } from '@/components/sections/SolutionsServices'
import { Realisations } from '@/components/sections/Realisations'
import { Partners } from '@/components/sections/Partners'
import { Compliance, Features, Testimonials, Manifesto, Community } from '@/components/sections/OtherSections'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Metrics />
      <Mission />
      <Solutions />
      <Services />
      <Realisations />
      <Partners />
      <Compliance />
      <Features />
      <Testimonials />
      <Manifesto />
      <Community />
    </>
  )
}
