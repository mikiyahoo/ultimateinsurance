import Link from 'next/link'
import { ThumbsUp } from 'lucide-react'

const testimonials = [
  {
    quote: `Best insurance service in Ethiopia. UIB helped us find comprehensive coverage at 30% less than what we were paying. Their claims support is exceptional!`,
    author: 'Habesha Breweries',
    role: 'Corporate Client'
  },
  {
    quote: `As a small business owner, navigating insurance was overwhelming. UIB simplified everything, provided clear comparisons, and now I have peace of mind knowing my business is properly protected.`,
    author: 'Meron Abebe',
    role: 'Small Business Owner'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-neutral-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="h2-seo mb-6">What Our Clients Say</h2>
          <p className="text-lg text-neutral-600">
            For nearly two decades, we&apos;ve built long-term relationships with individuals, SMEs, and large organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="trust-card">
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-yellow-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral-700 italic text-lg">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              </div>
              <div className="border-t border-neutral-200 pt-4">
                <div className="font-bold text-neutral-black">{testimonial.author}</div>
                <div className="text-sm text-neutral-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/why-ultimate" 
            className="inline-flex items-center text-primary hover:text-primary-light font-semibold"
          >
            <ThumbsUp className="mr-2 h-5 w-5" />
            Read More Success Stories
          </Link>
        </div>
      </div>
    </section>
  )
}