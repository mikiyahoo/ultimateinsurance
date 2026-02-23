import Link from 'next/link'
import Image from 'next/image' // Added for optimization
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Motor Insurance', href: '/insurance-services/motor-insurance-ethiopia' },
    { name: '3rd Party Insurance', href: '/insurance-services/motor-insurance-ethiopia/3rd-party-insurance-ethiopia' },
    { name: 'Health Insurance', href: '/insurance-services/health-insurance-ethiopia' },
    { name: 'Life Insurance', href: '/insurance-services/life-insurance-ethiopia' },
    { name: 'Property Insurance', href: '/insurance-services/property-fire-insurance' },
  ],
  company: [
    { name: 'About Us', href: '/about-uib' },
    { name: 'Why Choose Us', href: '/why-ultimate' },
    { name: 'Our Partners', href: '/partners-insurers' },
    { name: 'Claims Assistance', href: '/claims-assistance' },
    { name: 'Careers', href: '/careers' },
  ],
  resources: [
    { name: 'Insurance Cost Guides', href: '/resources/insurance-cost-guides' },
    { name: 'FAQs', href: '/resources/insurance-faqs-ethiopia' },
    { name: 'Blog', href: '/blog' },
    { name: 'Glossary', href: '/resources/glossary' },
    { name: 'Legal Documents', href: '/resources/legal' },
  ],
  contact: [
    { name: 'Get a Quote', href: '/contact-get-quote' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Claims Support', href: '/claims' },
    { name: 'Customer Support', href: '/support' },
  ]
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/theultimateinsurance', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/UIBEthiopia', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/theultimateinsurance', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/theultimateinsurance', label: 'Instagram' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12 border-b border-neutral-700">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* REPLACED PLACEHOLDER WITH YOUR IMAGE */}
              <div className="relative w-12 h-12">
                <Image 
                  src="/images/uib color logo.png" 
                  alt="Ultimate Insurance Brokers Logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Ultimate Insurance Brokers</h3>
                <p className="text-neutral-400 text-sm">Trusted Across Ethiopia</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Ethiopia&apos;s leading insurance brokerage providing comprehensive, affordable, 
              and reliable insurance solutions for individuals and businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-primary p-2 rounded-lg transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Columns */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-neutral-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-300 hover:text-primary-light transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-neutral-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-300 hover:text-primary-light transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-neutral-white">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-300 hover:text-primary-light transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-neutral-700">
          <div className="flex items-center space-x-3">
            <div className="bg-neutral-800 p-3 rounded-lg">
              <Phone size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-neutral-400 text-sm">Call Us</p>
              <a href="tel:+251911234567" className="font-semibold hover:text-primary-light">
                +251 911 234 567
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-neutral-800 p-3 rounded-lg">
              <Mail size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-neutral-400 text-sm">Email Us</p>
              <a href="mailto:info@theultimateinsurance.com" className="font-semibold hover:text-primary-light">
                info@theultimateinsurance.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-neutral-800 p-3 rounded-lg">
              <MapPin size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-neutral-400 text-sm">Location</p>
              <p className="font-semibold">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {currentYear} Ultimate Insurance Brokers. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-neutral-400 hover:text-primary-light text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-neutral-400 hover:text-primary-light text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-neutral-400 hover:text-primary-light text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}