import {
  Users,
  Building2,
  Calendar,
  CheckCircle2,
} from 'lucide-react'

import { SplitFlapCounter, RollingCounter, FlipCounter } from '@/components/ui/modern-counters'

export default function TrustMetricsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-white to-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-4 inline-block">
            Trust & Experience
          </span>
          <h2 className="mb-6">Trusted Across Ethiopia</h2>
          <p className="text-lg text-neutral-600">
            15+ years connecting people and businesses with reliable insurance
            protection.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Metric
            icon={<Users className="h-6 w-6" />}
            number={<RollingCounter to={1000} suffix="+" startOnView />}
            label="Satisfied Clients"
            desc="Individuals & businesses insured"
          />

          <Metric
            icon={<Building2 className="h-6 w-6" />}
            number={<SplitFlapCounter to={17} startOnView />}
            label="Insurance Partners"
            desc="Leading providers in Ethiopia"
          />

          <Metric
            icon={<Calendar className="h-6 w-6" />}
            number={<FlipCounter to={15} suffix="+" startOnView />}
            label="Years of Experience"
            desc="Trusted since 2006"
          />

          <Metric
            icon={<CheckCircle2 className="h-6 w-6" />}
            number={<RollingCounter to={98} suffix="%" startOnView />}
            label="Claims Success Rate"
            desc="Successful claims processed"
          />
        </div>
      </div>
    </section>
  )
}

function Metric({
  icon,
  number,
  label,
  desc,
}: {
  icon: React.ReactNode
  number: React.ReactNode
  label: string
  desc: string
}) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-neutral-200 bg-white
        p-8 text-center
        shadow-sm transition-all duration-500
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10
      "
    >
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Icon */}
      <div className="relative flex justify-center mb-6">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Number - Main focus with enhanced styling */}
      <div className="relative mb-4 counter-section">
        <div className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight">
          {number}
        </div>
      </div>

      {/* Label */}
      <div className="relative text-lg font-semibold text-neutral-900 mb-2">
        {label}
      </div>

      {/* Description */}
      <div className="relative text-sm text-neutral-600">
        {desc}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}
