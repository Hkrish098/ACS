import Image from 'next/image'
import { Target, Eye } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about-image.jpg"
                alt="Ascent Control System automation solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">About Us</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Advanced Automation Solutions
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Ascent Control System is a leading provider of advanced automation solutions for industrial and process industries. We help businesses improve productivity, quality, safety, and efficiency through smart automation and digital transformation.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                With a team of experienced engineers and domain experts, we deliver customized solutions using cutting-edge technologies and industry best practices.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/20">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
                  <p className="text-foreground/80 text-sm">
                    To deliver reliable and innovative automation solutions that empower industries to achieve operational excellence and sustainable growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-lg bg-primary/5 border border-primary/20">
                <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Vision</h3>
                  <p className="text-foreground/80 text-sm">
                    To be a global leader in automation by delivering intelligent, sustainable, and future-ready solutions.
                  </p>
                </div>
              </div>
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
