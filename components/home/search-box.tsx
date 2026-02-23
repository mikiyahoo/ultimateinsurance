'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

const searchKeywords = [
  '3rd party insurance Ethiopia cost',
  'private health insurance Ethiopia',
  'comprehensive motor insurance',
  'life insurance Ethiopia',
  'property fire insurance',
  'marine insurance Ethiopia',
  'agricultural insurance',
  'liability insurance'
]

export default function SearchBox() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="container-custom py-8 md:py-12">
<div className="w-full bg-neutral-white rounded-2xl p-6 md:p-8 shadow-2xl border border-neutral-200">
        <div className="flex items-center gap-3 mb-6">
          <Search className="h-7 w-7 text-primary" />
          <h3 className="text-2xl font-bold text-neutral-black">Find Your Insurance Solution</h3>
        </div>
        
        <div className="relative mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for insurance services (e.g., '3rd party insurance', 'health insurance', 'motor insurance')..."
            className="w-full px-6 py-4 text-lg border-2 border-neutral-200 rounded-xl focus:border-primary focus:outline-none pr-40"
          />
          <Link 
            href={`/insurance-services?search=${encodeURIComponent(searchQuery)}`}
            className="absolute right-2 top-2 btn-primary px-6 py-3 hover:bg-primary-dark transition-colors text-lg"
          >
            Search
          </Link>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-neutral-600 mb-3">Popular searches:</p>
          <div className="flex flex-wrap gap-3">
            {searchKeywords.map((keyword, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(keyword)}
                className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-sm rounded-lg transition-colors hover:shadow-sm"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}