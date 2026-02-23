import Link from 'next/link'
import {
  Car,
  Stethoscope,
  Heart,
  Home,
  Ship,
  Tractor,
  ChevronRight,
} from 'lucide-react'

const insuranceServices = [
  {
    title: 'Motor Insurance',
    description:
      '3rd party and comprehensive motor insurance solutions for private and commercial vehicles.',
    icon: Car,
    href: '/insurance-services/motor-insurance-ethiopia',
  },
  {
    title: 'Health & Medical Insurance',
    description:
      'Private and group health insurance plans providing financial protection against medical expenses.',
    icon: Stethoscope,
    href: '/insurance-services/health-insurance-ethiopia',
  },
  {
    title: 'Life Insurance',
    description:
      'Life assurance solutions that protect your family while supporting long-term financial planning.',
    icon: Heart,
    href: '/insurance-services/life-insurance-ethiopia',
  },
  {
    title: 'Property & Fire Insurance',
    description:
      'Coverage for residential, commercial, and industrial properties against fire and related risks.',
    icon: Home,
    href: '/insurance-services/property-fire-insurance',
  },
  {
    title: 'Marine & Cargo Insurance',
    description:
      'Protection for goods transported by sea and inland routes for importers and exporters.',
    icon: Ship,
    href: '/insurance-services/marine-insurance',
  },
  {
    title: 'Agricultural Insurance',
    description:
      "Crop and livestock insurance solutions designed for Ethiopia's agricultural sector.",
    icon: Tractor,
    href: '/insurance-services/agricultural-insurance',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-secondary mb-4 inline-block bg-white/10 text-white">
            Our Services
          </span>
          <h2 className="text-white mb-6">
            Insurance Solutions That Protect What Matters
          </h2>
          <p className="text-lg text-white/80">
            Comprehensive insurance brokerage services across all major insurance
            categories in Ethiopia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-neutral-200 bg-white
                  p-8 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                "
              >
                {/* Soft glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-semibold text-neutral-black mb-3">
                  {service.title}
                </h3>

                <p className="relative text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="relative inline-flex items-center font-semibold text-primary hover:text-primary-light transition-colors"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/insurance-services"
            className="btn-outline border-white text-white hover:bg-white hover:text-primary"
          >
            Explore All Insurance Services
          </Link>
        </div>
      </div>
    </section>
  )
}
