import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const services = [
  {
    id: 'shopify',
    label: 'Shopify store setup & customization',
    description:
      'We set up or rebuild your Shopify store end‑to‑end: theme selection or custom theme, sections, navigation, product architecture, and apps. The result is a storefront that loads fast, looks on‑brand, and is simple for your team to update without touching code.',
    bullets: [
      'Custom themes, product templates, and flexible content sections',
      'App selection and configuration for reviews, bundles, and upsells',
      'Performance basics: image optimization, navigation, and clean structure'
    ],
    icon: '🛒'
  },
  {
    id: 'integration',
    label: 'Shopify integrations & light custom builds',
    description:
      'We keep Shopify as the core and handle the glue: payments, CRM, email, analytics, and tracking. When needed, we add light custom code (React/Next components, .NET endpoints) to keep data flowing without bloating the stack.',
    bullets: [
      'Payment gateways, checkout flows, and subscription logic on Shopify',
      'CRM, email platform, and webhook integrations that keep data clean',
      'Analytics, tracking pixels, and event schemas mapped to your funnel'
    ],
    icon: '🔗'
  },
  {
    id: 'meta-ads',
    label: 'Meta ads & performance marketing',
    description:
      'We build and manage Meta campaigns with clear structure, creative testing plans, and weekly insight reports. Instead of random boosts, you get a predictable testing engine that steadily finds winning audiences, creatives, and offers for your brand.',
    bullets: [
      'Account and campaign structure built for testing, not chaos',
      'Ad creative direction and templates for static, carousel, and Reels',
      'Weekly performance reviews with clear next steps, not just dashboards'
    ],
    icon: '📈'
  },
  {
    id: 'design',
    label: 'UI/UX & brand design',
    description:
      'We design landing pages, store layouts, and social creatives that feel modern and premium, backed by UX best practices. Typography, spacing, and color systems are handled for you so every touchpoint—from ads to checkout—feels like one coherent, conversion focused brand.',
    bullets: [
      'High‑converting landing pages and offer pages for campaigns',
      'Ecommerce UI patterns for product detail, collection, and cart',
      'Brand kits: typography, color, and component styles you can reuse everywhere'
    ],
    icon: '🎨'
  }
];

const Services = () => {
  const { ref, isInView } = useInViewMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" ref={ref} aria-label="EcomHammad services" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Our services</h2>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">
              Shopify-first builds, integrations, Meta ads, and design
            </p>
          </div>
            <p className="hidden sm:block max-w-sm text-xs text-slate-400">
              Shopify-first offers so your store, funnels, and ads stay cohesive without a bloated stack.
            </p>
        </div>

        <div className="grid gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-2 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-3 sm:p-5 backdrop-blur-sm shadow-[0_18px_60px_rgba(15,23,42,0.9)]"
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Service menu</p>
              <p className="hidden sm:block text-[11px] text-slate-500">Hover to preview each service.</p>
            </div>

            <div className="space-y-1.5">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left rounded-2xl border px-3 py-2.5 sm:px-3.5 sm:py-3 flex items-center justify-between gap-3 text-[11px] transition-all duration-200 ${
                      isActive
                        ? 'bg-slate-900/90 border-sky-500/70 shadow-[0_14px_38px_rgba(15,23,42,0.95)] text-slate-50'
                        : 'bg-slate-950/70 border-slate-800/80 text-slate-300 hover:border-slate-600/80 hover:bg-slate-900/70'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-[11px] text-slate-500 w-6 flex-shrink-0">{String(index + 1).padStart(2, '0')}</span>
                      <span className="truncate max-w-[9rem] sm:max-w-[11rem]">{service.label}</span>
                    </div>
                    <span className="hidden sm:inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-[12px]">
                      {service.icon}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, x: 22 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-sm shadow-[0_18px_60px_rgba(15,23,42,0.9)] mt-4 md:mt-0"
          >
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">0{activeIndex + 1}</p>
                  <h3 className="mt-1 text-sm sm:text-base font-semibold text-slate-50">
                    {services[activeIndex].label}
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80 text-lg shadow-lg shadow-slate-900/70">
                  <span aria-hidden="true">{services[activeIndex].icon}</span>
                </div>
              </div>

              <p className="mt-4 text-[12px] sm:text-xs text-slate-300 leading-relaxed">
                {services[activeIndex].description}
              </p>

              <ul className="mt-3 space-y-1.5 text-[11px] sm:text-xs text-slate-300">
                {services[activeIndex].bullets?.map((point) => (
                  <li key={point} className="flex gap-1.5">
                    <span className="mt-[5px] h-1 w-1 rounded-full bg-sky-400" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Services;
