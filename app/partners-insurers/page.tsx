import { Metadata } from 'next'
import PartnersShowcase from '@/components/ui/PartnersShowcase'
import { Shield, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partners & Insurers | Ultimate Insurance Brokers',
  description: 'Meet our trusted network of corporate partners and licensed insurance companies in Ethiopia.',
}

export default function PartnersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-dark text-neutral-white">
        <div className="container-custom py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Trusted Network
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Partnering with Ethiopia&apos;s leading organizations and licensed insurance providers to deliver exceptional coverage and service.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary-light" />
                <span className="font-semibold">Licensed & Regulated</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary-light" />
                <span className="font-semibold">40+ Corporate Partners</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary-light" />
                <span className="font-semibold">17 Insurance Providers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Showcase */}
      <PartnersShowcase />

      {/* Partnership CTA */}
      <section className="bg-gradient-primary py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-6">
            Want to Become a Partner?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
            Join our network of trusted organizations and benefit from our comprehensive insurance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partnerships@theultimateinsurance.com"
              className="btn-secondary bg-neutral-white text-neutral-black hover:bg-neutral-100"
            >
              Email Our Partnerships Team
            </a>
            <a
              href="tel:+251911234567"
              className="btn-outline border-2 border-neutral-white text-neutral-white hover:bg-neutral-white hover:text-neutral-black"
            >
              Call +251 911 234 567
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}