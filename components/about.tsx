import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

export function About() {
  const highlights = [
    'Real-time supply chain visibility across all channels',
    'AI-powered predictive analytics and demand forecasting',
    'Automated routing and vehicle optimization',
    'End-to-end integration with existing systems',
  ]

  return (
    <section id="about" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about-image.jpg"
                alt="Supply chain automation technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-8 -right-8 bg-background rounded-lg shadow-lg p-6 border border-border max-w-xs">
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm text-foreground/70">Delivery Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">45%</p>
                  <p className="text-sm text-foreground/70">Cost Reduction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">About ACS</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Leading Supply Chain Innovation
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                For over two decades, Advanced Computing Solutions has been transforming how enterprises manage their supply chains. Our intelligent automation platform combines cutting-edge AI, real-time analytics, and seamless integrations to deliver unprecedented operational efficiency.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-semibold hover:underline gap-2 group"
              >
                Learn more about our approach
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
