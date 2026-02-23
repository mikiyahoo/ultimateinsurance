'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Phone, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/images/insrance-header1.jpeg',
    title: 'Ultimate Insurance Broker',
    description: 'Compare insurance companies in Ethiopia & get the right coverage at the best price.'
  },
  {
    id: 2,
    image: '/images/insrance-header2.jpeg',
    title: 'Trusted Insurance Partner',
    description: 'Over 17 years of experience connecting Ethiopians with the best insurance coverage.'
  },
  {
    id: 3,
    image: '/images/insrance-header3.jpeg',
    title: 'Comprehensive Insurance Solutions',
    description: 'From motor and health to business and agricultural insurance – we cover all your protection needs.'
  },
  {
    id: 4,
    image: '/images/insrance-header4.jpeg',
    title: 'Fast, Reliable Claims Support',
    description: '24/7 claims assistance to ensure you get the support you need when it matters most.'
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={`Insurance header ${slide.id}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Slide navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary font-semibold px-4 py-2 rounded-full mb-6">
            <Shield className="h-4 w-4" />
            <span>Licensed Insurance Broker Since 2006</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-white mb-6">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-xl text-neutral-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-get-quote" 
              className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform"
            >
              Get a Free Insurance Quote
            </Link>
            <a 
              href="tel:+251911234567" 
              className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-transform"
            >
              <Phone className="inline-block mr-2 h-5 w-5" />
              Talk to an Insurance Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}