import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Assessment & Planning',
    description: 'We audit your current supply chain operations, identify bottlenecks, and create a customized implementation roadmap aligned with your business goals.',
  },
  {
    number: '02',
    title: 'System Integration',
    description: 'Our expert team seamlessly integrates ACS with your existing ERP, WMS, and logistics systems ensuring minimal disruption to operations.',
  },
  {
    number: '03',
    title: 'Training & Deployment',
    description: 'Comprehensive training programs for your team, followed by a phased rollout to ensure smooth adoption and immediate value realization.',
  },
  {
    number: '04',
    title: 'Optimization & Support',
    description: 'Continuous monitoring, optimization, and 24/7 dedicated support to maximize ROI and keep your supply chain running at peak performance.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Our Methodology</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Proven Implementation Approach
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            A structured, phased approach that ensures successful adoption and rapid value delivery.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex gap-8">
                {/* Left side - Number and connector */}
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-primary to-muted my-4" />
                  )}
                </div>

                {/* Right side - Content */}
                <div className="flex-1 pt-4 pb-8">
                  <div className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center text-primary font-medium hover:underline gap-1"
                    >
                      Get started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
