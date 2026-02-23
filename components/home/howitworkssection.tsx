import {
  MessageCircle,
  Search,
  ThumbsUp,
  Shield,
} from 'lucide-react'

const processSteps = [
  {
    step: '01',
    title: 'Tell Us Your Insurance Need',
    description:
      'We start by understanding your personal or business risks, goals, and budget.',
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'We Compare Insurance Companies',
    description:
      'Our experts analyze policies from multiple licensed insurers in Ethiopia.',
    icon: Search,
  },
  {
    step: '03',
    title: 'You Choose the Best Coverage & Price',
    description:
      'We explain coverage, exclusions, and pricing clearly so you decide confidently.',
    icon: ThumbsUp,
  },
  {
    step: '04',
    title: 'Ongoing Support & Claims Assistance',
    description:
      'Our relationship continues with renewals, claims support, and advice.',
    icon: Shield,
  },
]

export default function HowItWorksSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-white to-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-4 inline-block">
            Simple & Transparent
          </span>
          <h2 className="mb-6">How It Works</h2>
          <p className="text-lg text-neutral-600">
            Getting insured with Ultimate Insurance Brokers is simple,
            transparent, and client-focused.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === processSteps.length - 1

            return (
              <div key={index} className="relative group flex">
                {/* Connector line */}
                {/* Curved connector */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-[92px] right-[-3rem] w-24 h-12 pointer-events-none">
                    {/* Horizontal */}
                    <div className="absolute left-0 top-1/2 w-12 h-2 bg-primary" />

                    {/* Curve */}
                    <div className="absolute left-10 top-1/2 w-14 h-12 border-r-4 border-t-4 border-primary rounded-tr-[999px]" />
                  </div>
                )}


                {/* Card */}
                <div
                  className="
                    flex flex-col h-full w-full
                    relative overflow-hidden rounded-2xl
                    border border-neutral-200 bg-white
                    p-8 text-center
                    shadow-sm transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  {/* Soft glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                  </div>

                  {/* Step */}
                  <span className="relative text-sm font-semibold tracking-widest text-primary mb-4">
                    STEP {step.step}
                  </span>

                  {/* Icon */}
                  <div className="relative flex justify-center mb-6">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="relative text-lg font-semibold text-neutral-black mb-3">
                    {step.title}
                  </h3>

                  <p className="relative text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Spacer keeps equal height */}
                  <div className="flex-grow" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
