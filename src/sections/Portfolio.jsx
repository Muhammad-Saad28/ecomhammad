import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const memberPortfolios = [
  {
    id: 'hammad',
    name: 'Hammad Ahmad',
    role: 'UX, localization, conversion design',
    intro:
      'Designs quiz flows, localized experiences, and conversion-forward layouts that keep shoppers confident.',
    highlights: [
      'Quiz-to-cart personalization and bundle strategy for higher AOV.',
      'Compatibility, localization, and PDP bounce-down work for hardware.',
      'Navigation and search tuning for larger catalogs and bundles.'
    ],
    projects: [
      {
        brand: 'HUM Nutrition',
        url: 'https://www.humnutrition.com/',
        focus: 'Quiz-led wellness DTC',
        role: 'Mapped quiz to cart, tuned bundles, and ran checkout split-tests.',
      },
      {
        brand: 'Hasbro Pulse',
        url: 'https://www.hasbropulse.com/',
        focus: 'Collector drops at scale',
        role: 'Preorder status comms, drop stability guardrails, conversion analytics.',
      },
      {
        brand: 'Polaroid',
        url: 'https://www.polaroid.com/en_pk',
        focus: 'Photo hardware localization',
        role: 'Compatibility finder, accessory attach uplift, EN_PK localization.',
      },
      {
        brand: 'Chronicle Books',
        url: 'https://www.chroniclebooks.com/',
        focus: 'Gifting-first catalog UX',
        role: 'Nav re-architecture, giftable bundles, and search facet tuning.',
      }
    ],
    images: ['/Sales/2.webp']
  },
  {
    id: 'saad',
    name: 'Muhammad Saad',
    role: 'Tech, speed, drop readiness',
    intro:
      'Builds fast, resilient Shopify experiences: mobile-first PDPs, drop stability, and reusable landing systems.',
    highlights: [
      'Performance-first builds with clean handoff-ready code.',
      'Cart/checkout UX tuning with cross-sells and returns clarity.',
      'Reusable landing templates for influencer and seasonal traffic.'
    ],
    projects: [
      {
        brand: 'American Girl',
        url: 'https://www.americangirl.com/',
        focus: 'Collectible gifting UX',
        role: 'IA + accessibility, guided gifting flow, cart upsell placement.',
      },
      {
        brand: 'Death Wish Coffee',
        url: 'https://www.deathwishcoffee.com/',
        focus: 'High-caffeine DTC speed',
        role: 'Mobile PDP rewrite, merch cross-sells, asset strategy for speed.',
      },
      {
        brand: 'Scuffers',
        url: 'https://scuffers.com/',
        focus: 'Streetwear drops',
        role: 'Drop pages, size/fit helper, cart drawer with quick edits.',
      },
      {
        brand: 'Fashion Nova',
        url: 'https://www.fashionnova.com/',
        focus: 'Influencer landing system',
        role: 'Landing templates, rapid seasonal theming, returns/fit FAQ placement.',
      }
    ],
    images: ['/Sales/3.webp', '/Sales/1.webp']
  }
];

const Portfolio = () => {
  const { ref, isInView } = useInViewMotion();

  return (
    <section id="work" ref={ref} aria-label="Selected projects" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Portfolio</h2>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">
              Portfolios for each specialist
            </p>
          </div>
          <p className="hidden sm:block max-w-sm text-xs text-slate-400">
            Explore the work of each team member separately: marketing campaigns, design systems, and technical builds,
            all under the EcomHammad brand.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {memberPortfolios.map((member, index) => (
            <motion.article
              key={member.id}
              id={`portfolio-${member.id}`}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/60 shadow-soft hover:border-accent.blue/70 transition-colors"
            >
              <div className="p-4 border-b border-slate-800/70">
                <h3 className="text-sm font-semibold text-slate-50">{member.name}</h3>
                <p className="text-[11px] text-slate-400">{member.role}</p>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">{member.intro}</p>
              </div>
              <div className="flex-1 p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  {member.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="group/item rounded-lg border border-slate-800/80 bg-slate-950/80 px-3 py-2 text-[11px] text-slate-200 transition-colors hover:border-accent.blue/80 hover:bg-slate-950"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                {member.projects?.length ? (
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Case slices</p>
                    <div className="grid gap-2">
                      {member.projects.map((project) => (
                        <a
                          key={project.brand}
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group/case rounded-xl border border-slate-800/80 bg-slate-950/80 px-3 py-3 text-left transition-colors hover:border-accent.blue/80 hover:bg-slate-950"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0 space-y-1">
                              <p className="text-xs font-semibold text-slate-50 leading-snug">{project.brand}</p>
                              <p className="text-[11px] text-slate-400 leading-snug line-clamp-1">{project.focus}</p>
                              <p className="text-[11px] text-slate-300 leading-relaxed">{project.role}</p>
                            </div>
                            <span className="text-[11px] text-accent.blue/90 shrink-0">-&gt;</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
              {member.images?.length ? (
                <div className="px-4 pb-4 grid gap-2">
                  {member.images.map((src) => (
                    <div
                      key={src}
                      className="overflow-hidden rounded-lg border border-slate-800/80 bg-slate-950/80"
                    >
                      <img
                        src={src}
                        alt={`${member.name} portfolio result`}
                        className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
