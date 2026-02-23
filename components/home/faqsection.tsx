'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, FileText } from 'lucide-react'

const faqItems = [
  {
    question: 'What makes Ultimate Insurance Brokers different from insurance companies?',
    answer: 'We work exclusively for our clients, not for insurance companies. As independent brokers, we compare policies from multiple insurers to find you the best coverage at competitive prices.'
  },
  {
    question: 'How do I get the cheapest 3rd party insurance in Ethiopia?',
    answer: 'We have access to all licensed insurers in Ethiopia and can compare their 3rd party insurance rates. Our brokers negotiate on your behalf to secure the most competitive premiums while maintaining adequate coverage.'
  },
  {
    question: 'What is your claims process for motor insurance?',
    answer: 'We offer direct claim reimbursement and unique services like replacement vehicle ("ምትክ") and claim representation ("ሎሌ") for complex cases. Our team handles the entire process to ensure fast, fair settlement.'
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-gradient-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="h2-seo mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral-600">
            Get answers to common questions about insurance in Ethiopia.
        </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div 
                className="group bg-neutral-white rounded-xl p-6 shadow-trust-card cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-neutral-black">{item.question}</h3>
                  <span className={`text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronRight className="h-5 w-5" />
                  </span>
                </div>
                
                <div className={`mt-4 pt-4 border-t border-neutral-200 transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`}>
                  <p className="text-neutral-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/resources/insurance-faqs-ethiopia" 
            className="inline-flex items-center text-primary hover:text-primary-light font-semibold"
          >
            <FileText className="mr-2 h-5 w-5" />
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  )
}