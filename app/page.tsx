import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Approach } from '@/components/approach'
import { Industries } from '@/components/industries'
import { Clients } from '@/components/clients'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Approach />
      <Industries />
      <Clients />
      <Footer />
    </main>
  )
}
