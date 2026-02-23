import { CheckCircle } from 'lucide-react'

const valuePropositions = [
  {
    title: 'Risk Analysis & Contract Design',
    description: "Tailored to each client’s specific needs and risk profile.",
  },
  {
    title: 'Professional Contract Negotiation',
    description: 'Expert negotiation with insurance companies for optimal terms.',
  },
  {
    title: 'Direct Claim Reimbursement',
    description: 'Fast processing for eligible life and medical insurance claims.',
  },
  {
    title: '24/7 Claims Support',
    description: 'Always available to assist with your insurance claims.',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-neutral-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-4 inline-block">
            Why Ultimate Insurance Brokers
          </span>
          <h2 className="mb-6">
            Built on Trust. Designed for Protection.
          </h2>
          <p className="text-lg text-neutral-600">
            We work exclusively for our clients — not insurance companies.
            Our mission is to protect the health, wealth, and future of
            Ethiopians through world-class risk management.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePropositions.map((prop, index) => (
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
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              </div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-semibold text-neutral-black mb-3">
                {prop.title}
              </h3>
              <p className="relative text-neutral-600 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
