import { Metadata } from 'next'
import HeroSection from '@/components/home/herosection'
import SearchBox from '@/components/home/search-box' // Add this import
import TrustMetricsSection from '@/components/home/trustmetricssection'
import WhyChooseUsSection from '@/components/home/whychooseussection'
import ServicesSection from '@/components/home/servicessection'
import HowItWorksSection from '@/components/home/howitworkssection'
import PartnersPreviewSection from '@/components/home/partnerspreviewsection'
import TestimonialsSection from '@/components/home/testimonialssection'
import FAQSection from '@/components/home/faqsection'
import CTASection from '@/components/home/ctasection'

export const metadata: Metadata = {
  title: 'Ultimate Insurance Brokers Ethiopia | Compare & Buy Insurance',
  description: 'Compare insurance companies in Ethiopia and get the right coverage at the best price. Licensed insurance broker since 2006.',
  keywords: [
    'insurance Ethiopia',
    '3rd party insurance Ethiopia cost',
    'private health insurance Ethiopia',
    'motor insurance Ethiopia',
    'insurance broker Ethiopia'
  ],
}

export default function Home() {
  const partners = [
    { name: 'Habesha Breweries', image: 'habesha-breweries.webp', type: 'partner' as const },
    { name: 'CARE', image: 'care.webp', type: 'partner' as const },
    { name: 'Heineken', image: 'heineken.webp', type: 'partner' as const },
    { name: 'Marie Stopes Ethiopia', image: 'marie-stopes-ethiopia.webp', type: 'partner' as const },
    { name: 'Cambridge Academy', image: 'cambridge-academy.webp', type: 'partner' as const },
    { name: 'Plan International', image: 'plan-international.webp', type: 'partner' as const },
  ]

  const insurers = [
    { name: 'Awash Insurance', image: 'awash-insurance.webp', type: 'insurer' as const },
    { name: 'Ethiopian Insurance Corporation', image: 'ethiopian-insurance-corporation.webp', type: 'insurer' as const },
    { name: 'United Insurance', image: 'united-insurance.webp', type: 'insurer' as const },
    { name: 'Nile Insurance', image: 'nile-insurance.webp', type: 'insurer' as const },
    { name: 'Zemen Insurance', image: 'zemen-insurance.webp', type: 'insurer' as const },
    { name: 'Lucy Insurance', image: 'lucy-insurance.webp', type: 'insurer' as const },
  ]

  return (
    <>
      {/* HERO + SEARCH OVERLAY */}
      <div className="relative">
        <HeroSection />

        {/* Overlay SearchBox */}
        <div className="relative z-20 -mt-24 md:-mt-40">
          <SearchBox />
        </div>
      </div>
      <TrustMetricsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <HowItWorksSection />
      <PartnersPreviewSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}