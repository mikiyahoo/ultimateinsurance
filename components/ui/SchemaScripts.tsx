import Script from 'next/script' // Use Next.js Script component for better performance

export default function SchemaScripts() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Ultimate Insurance Brokers",
    "description": "Ethiopia's leading insurance broker offering motor, health, life, marine, and property insurance services.",
    "url": "https://www.theultimateinsurance.com",
    // UPDATED: Pointing to your actual logo file in the public folder
    "logo": "https://www.theultimateinsurance.com/images/uib color logo.png", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bole Road",
      "addressLocality": "Addis Ababa",
      "addressRegion": "Addis Ababa",
      "postalCode": "1000",
      "addressCountry": "ET"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+251-911-234-567",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Amharic"]
    },
    "sameAs": [
      "https://facebook.com/ultimateinsurance",
      "https://twitter.com/ultimateinset",
      "https://linkedin.com/company/ultimateinsurance"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Ethiopia"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ultimate Insurance Brokers Ethiopia",
    "url": "https://www.theultimateinsurance.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.theultimateinsurance.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ultimate Insurance Brokers",
    // Ensure this image exists in your public/images folder or update the name
    "image": "https://www.theultimateinsurance.com/images/office.jpg",
    "priceRange": "$$",
    "telephone": "+251-911-234-567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bole Road",
      "addressLocality": "Addis Ababa",
      "addressRegion": "Addis Ababa",
      "postalCode": "1000",
      "addressCountry": "ET"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.0227",
      "longitude": "38.7468"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "17:30"
    }
  }

  return (
    <>
      {/* Using Next.js <Script /> with strategy="afterInteractive" 
        ensures SEO bots find the data without slowing down your initial page load.
      */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}