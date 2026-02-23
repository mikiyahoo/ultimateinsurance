import LogoGrid from './LogoGrid'

const partnerLogos = [
  { name: 'Habesha Breweries', image: 'habesha-breweries.webp' },
  { name: 'CARE', image: 'care.webp' },
  { name: 'Heineken', image: 'heineken.webp' },
  { name: 'Marie Stopes Ethiopia', image: 'marie-stopes-ethiopia.webp' },
  { name: 'Waryt', image: 'waryt.webp' },
  { name: 'Plan International', image: 'plan-international.webp' },
  { name: 'Splash', image: 'splash.webp' },
  { name: 'TechnoServe', image: 'technoserve.webp' },
  { name: 'Royal Group', image: 'royal-group.webp' },
  { name: 'Cambridge Academy', image: 'cambridge-academy.webp' },
  { name: 'Metaferia Consulting Engineers Plc (MCE)', image: 'metaferia-consulting.webp' },
  { name: 'School of Tomorrow', image: 'school-of-tomorrow.webp' }
]

const insurerLogos = [
  { name: 'Awash Insurance', image: 'awash-insurance.webp' },
  { name: 'Ethiopian Insurance Corporation', image: 'ethiopian-insurance-corporation.webp' },
  { name: 'Ethio Life & General Insurance S.C.', image: 'ethio-life-general.webp' },
  { name: 'The United Insurance Company S.C.', image: 'united-insurance.webp' },
  { name: 'Zemen Insurance S.Co.', image: 'zemen-insurance.webp' },
  { name: 'Lucy Insurance S.C.', image: 'lucy-insurance.webp' },
  { name: 'Nile Insurance Company S.C.', image: 'nile-insurance.webp' },
  { name: 'Oromia Insurance', image: 'oromia-insurance.webp' },
  { name: 'Tsehay Insurance S.C.', image: 'tsehay-insurance.webp' },
  { name: 'Bunna Insurance S.C.', image: 'bunna-insurance.webp' },
  { name: 'Africa Insurance Company S.C.', image: 'africa-insurance.webp' },
  { name: 'Berhan Insurance S.C.', image: 'berhan-insurance.webp' },
  { name: 'Global Insurance Company (S.C.)', image: 'global-insurance.webp' },
  { name: 'National Insurance Company of Ethiopia (NICE)', image: 'national-insurance-nice.webp' },
  { name: 'Nyala Insurance S.C.', image: 'nyala-insurance.webp' },
  { name: 'Abay Insurance S.C.', image: 'abay-insurance.webp' },
  { name: 'Lion Insurance Company (S.C.)', image: 'lion-insurance.webp' }
]

export default function PartnersShowcase() {
  return (
    <section className="bg-gradient-light">
      <LogoGrid
        title="Trusted by Leading Organizations"
        logos={partnerLogos}
        type="partner"
        columns={{ base: 2, sm: 3, md: 4, lg: 6, xl: 6 }}
      />
      
      <div className="border-t border-neutral-200">
        <LogoGrid
          title="Our Licensed Insurance Partners"
          logos={insurerLogos}
          type="insurer"
          columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 5 }}
        />
      </div>
    </section>
  )
}