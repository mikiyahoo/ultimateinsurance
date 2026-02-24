"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  XCircle,
  Car,
  Users,
  Truck,
  Building2,
  ChevronDown,
  ArrowRight,
  Phone,
  FileText,
  CreditCard,
  BadgeCheck,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: string;
}

interface StepItem {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
}

interface CoverageItem {
  text: string;
  covered: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const coverageItems: CoverageItem[] = [
  { text: "Death or bodily injury to third parties", covered: true },
  { text: "Damage to third-party property", covered: true },
  { text: "Legal liability arising from accidents", covered: true },
  { text: "Damage to your own vehicle", covered: false },
  { text: "Theft of your vehicle", covered: false },
  { text: "Fire damage to your vehicle", covered: false },
  { text: "Mechanical breakdown", covered: false },
];

const whoNeedsList = [
  { icon: <Car className="w-5 h-5" />, label: "Private Car Owners" },
  { icon: <Truck className="w-5 h-5" />, label: "Commercial Operators" },
  { icon: <Users className="w-5 h-5" />, label: "Taxi Drivers" },
  { icon: <Building2 className="w-5 h-5" />, label: "Fleet Owners" },
  { icon: <BadgeCheck className="w-5 h-5" />, label: "Government & NGO Vehicles" },
];

const steps: StepItem[] = [
  {
    icon: <FileText className="w-6 h-6" />,
    step: "01",
    title: "Provide Vehicle Details",
    description:
      "Share your vehicle type, engine capacity, and registration information with our team.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    step: "02",
    title: "Receive Premium Quotation",
    description:
      "We compare quotes from leading Ethiopian insurers and present you the best options.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    step: "03",
    title: "Confirm Payment",
    description:
      "Choose your preferred insurer, confirm your premium, and complete the payment.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    step: "04",
    title: "Receive Certificate",
    description:
      "Get your official insurance certificate fast — ready for the road.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Is third party insurance mandatory in Ethiopia?",
    answer:
      "Yes. Motor Third Party Insurance is legally required for all vehicles operating on Ethiopian roads. Failure to maintain valid coverage can result in fines and penalties from traffic authorities.",
  },
  {
    question: "Can I drive without third party insurance?",
    answer:
      "No. Driving without valid insurance is illegal in Ethiopia. Your vehicle will not pass the mandatory roadworthiness inspection, and you may face penalties if stopped by authorities.",
  },
  {
    question: "Does third party insurance cover my car damage?",
    answer:
      "No. Third party insurance only covers injury or property damage caused to others. If you want protection for your own vehicle, you should consider upgrading to Comprehensive Motor Insurance.",
  },
  {
    question: "How long is the policy valid?",
    answer:
      "Most third party policies are issued annually and must be renewed every year. UIB will send you timely renewal reminders so you never lapse in coverage.",
  },
  {
    question: "How does UIB determine the best price for me?",
    answer:
      "As a licensed broker, UIB compares premiums across all major Ethiopian insurance companies. Prices are regulated but may vary slightly between insurers — we ensure you get proper documentation and the most competitive rate available.",
  },
];

const uibBenefits = [
  "Licensed insurance broker in Ethiopia",
  "Compare multiple insurance companies",
  "Transparent, competitive pricing",
  "Fast processing & certificate issuance",
  "Dedicated claims follow-up support",
];

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-soft hover:shadow-md transition-shadow duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left group"
          >
            <span className="font-semibold text-neutral-900 text-base pr-4 group-hover:text-primary transition-colors duration-200">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <motion.div
            initial={false}
            animate={
              openIndex === i
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            id={`faq-panel-${i}`}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-neutral-600 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ThirdPartyInsurancePage() {
  return (
    <main className="bg-white">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 text-white">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="container-custom relative z-10 py-24 md:py-32 lg:py-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <motion.nav variants={fadeUp} className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/insurance-services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <Link href="/insurance-services/motor-insurance-ethiopia" className="hover:text-white transition-colors">Motor Insurance</Link>
              <span>/</span>
              <span className="text-white font-medium">Third Party</span>
            </motion.nav>

            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="badge-primary text-xs tracking-wide uppercase">
                <Shield className="w-3.5 h-3.5" />
                Legally Required Coverage
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUp} className="text-white mb-6">
              Motor Third Party Insurance{" "}
              <span className="text-primary">in Ethiopia</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 max-w-2xl"
            >
              The minimum legal requirement for every vehicle owner in Ethiopia.
              Ultimate Insurance Brokers compares policies from all leading
              insurers so you stay compliant at the best possible price.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/contact-get-quote" className="btn-primary gap-2 text-base">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+251911000000" className="btn-outline border-white/30 text-white hover:bg-white hover:text-neutral-900 gap-2 text-base">
                <Phone className="w-4 h-4" />
                Call an Advisor
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── What Is It? ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="badge-secondary mb-4">
                What Is It?
              </motion.span>
              <motion.h2 variants={fadeUp} className="mb-5">
                Understanding Third Party Insurance
              </motion.h2>
              <motion.p variants={fadeUp} className="text-neutral-600 text-lg leading-relaxed mb-8">
                Motor Third Party (TP) Insurance is the{" "}
                <strong className="text-neutral-900">minimum legal insurance</strong>{" "}
                required to operate any vehicle in Ethiopia. It protects you from
                financial and legal consequences if you cause harm to another
                person or their property while driving.
              </motion.p>

              {/* Alert */}
              <motion.div
                variants={fadeUp}
                className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-5"
              >
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>Important:</strong> Without valid Third Party Insurance, your
                  vehicle cannot legally operate on Ethiopian roads. Don&apos;t risk
                  penalties or fines.
                </p>
              </motion.div>
            </motion.div>

            {/* Coverage Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="bg-white rounded-3xl border border-neutral-200 shadow-strong p-8"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                What Does It Cover?
              </h3>
              <ul className="space-y-4">
                {coverageItems.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    {item.covered ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-sm leading-relaxed ${
                        item.covered
                          ? "text-neutral-800 font-medium"
                          : "text-neutral-400 line-through"
                      }`}
                    >
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="divider my-6" />

              <p className="text-sm text-neutral-500 leading-relaxed">
                Want to protect your own vehicle too?{" "}
                <Link
                  href="/insurance-services/motor-insurance-ethiopia/comprehensive-motor-insurance"
                  className="text-primary font-semibold hover:underline"
                >
                  Explore Comprehensive Insurance →
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who Needs It ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="badge-secondary mb-4">
              Who Needs It?
            </motion.span>
            <motion.h2 variants={fadeUp} className="mb-4">
              Required for All Vehicle Owners
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Third party insurance is legally required across all vehicle
              categories in Ethiopia.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5"
          >
            {whoNeedsList.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="trust-card flex flex-col items-center text-center gap-4 py-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl">
                  {item.icon}
                </span>
                <span className="text-sm font-semibold text-neutral-800">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Cost Section ──────────────────────────────────────────────────── */}
      <section className="section-padding gradient-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Vehicle Type", desc: "Private, taxi, truck, bus" },
                  { label: "Engine Capacity", desc: "Based on CC rating" },
                  { label: "Vehicle Class", desc: "Regulatory classification" },
                  { label: "Premium Scale", desc: "Regulated by authorities" },
                ].map((factor, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-soft"
                  >
                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">
                      {factor.label}
                    </p>
                    <p className="text-sm text-neutral-600">{factor.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="order-1 lg:order-2"
            >
              <motion.span variants={fadeUp} className="badge-secondary mb-4">
                Pricing
              </motion.span>
              <motion.h2 variants={fadeUp} className="mb-5">
                How Much Does It Cost?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-neutral-600 text-lg leading-relaxed mb-6">
                Premiums in Ethiopia are{" "}
                <strong className="text-neutral-900">government-regulated</strong> but
                may vary slightly between insurers depending on your vehicle
                classification and engine capacity.
              </motion.p>
              <motion.p variants={fadeUp} className="text-neutral-600 leading-relaxed mb-8">
                UIB compares all leading insurance companies to ensure you get
                the most competitive rate, proper documentation, and fast
                certificate issuance — all in one place.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/contact-get-quote" className="btn-primary gap-2">
                  View Cost Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why UIB ───────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="badge-secondary mb-4">
              Why UIB?
            </motion.span>
            <motion.h2 variants={fadeUp} className="mb-4">
              Why Buy Through Ultimate Insurance Brokers?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Insurance companies issue the policy — we make sure you get the
              right one.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {uibBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 bg-neutral-50 border border-neutral-200 rounded-2xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-neutral-800 leading-relaxed">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Upgrade CTA ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span variants={fadeUp} className="badge-primary mb-6">
              <TrendingUp className="w-3.5 h-3.5" />
              Consider Upgrading
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-white mb-5">
              Does Your Vehicle Need More Protection?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-300 text-lg leading-relaxed mb-10">
              Third party insurance only protects others — not your own car.
              Consider Comprehensive Insurance if your vehicle has high value,
              you want theft or accident protection, or you rely on it daily for
              business.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link
                href="/insurance-services/motor-insurance-ethiopia/comprehensive-motor-insurance"
                className="btn-primary gap-2"
              >
                Compare Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/insurance-services/motor-insurance-ethiopia"
                className="btn-outline border-white/30 text-white hover:bg-white hover:text-neutral-900 gap-2"
              >
                View All Motor Insurance
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── How to Apply ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="badge-secondary mb-4">
              How It Works
            </motion.span>
            <motion.h2 variants={fadeUp} className="mb-4">
              Apply in 4 Simple Steps
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-600 text-lg max-w-xl mx-auto">
              The process is simple, fast, and guided by our team at every step.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}

                {/* Icon bubble */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-soft">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="badge-secondary mb-4">
              FAQ
            </motion.span>
            <motion.h2 variants={fadeUp} className="mb-4">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-600 text-lg max-w-xl mx-auto">
              Everything you need to know about Third Party Insurance in
              Ethiopia.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <FAQAccordion faqs={faqs} />
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-3xl px-8 py-16 md:px-16 text-center"
          >
            <motion.div
              variants={fadeUp}
              className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6"
            >
              <Shield className="w-8 h-8" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="mb-4">
              Get Covered Today
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-600 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Stay legally compliant and protect yourself from financial
              liability. Get your certificate fast — UIB handles the rest.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact-get-quote" className="btn-primary gap-2 text-base">
                Get Third Party Insurance Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+251911000000" className="btn-secondary gap-2 text-base">
                <Phone className="w-4 h-4" />
                Call an Insurance Advisor
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
