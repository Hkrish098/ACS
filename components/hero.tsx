import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/hero-pattern.jpg)',
          opacity: 0.15,
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">Supply Chain Innovation</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              Intelligent Logistics Automation
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/70 leading-relaxed">
            Unlock unprecedented efficiency with our supply chain automation platform. Real-time insights, intelligent routing, and predictive analytics for enterprises worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-foreground/50 pt-4">
            Trusted by 500+ enterprises across 50 countries
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
    </section>
  )
}
