import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const teamMembers = [
  {
    id: 'hammad',
    name: 'Hammad Ahmad',
    role: 'Shopify customizer & graphic designer',
    specialty: 'Shopify themes, UI/UX, logo design, brand assets',
    bio: 'Shopify customizations paired with brand-led visuals—storefront tweaks, localized layouts, and cohesive brand assets.',
    portfolioHref: '/portfolio/hammad',
    imageSrc: '/Hammad.jpeg'
  },
  {
    id: 'saad',
    name: 'Muhammad Saad',
    role: 'Shopify and tech',
    specialty: 'Shopify performance, reusable systems, integrations',
    bio: 'Shopify engineer focused on speed, reliability, and reusable systems: mobile-first PDPs, drop-ready flows, and integrations that keep the stack stable.',
    portfolioHref: '/portfolio/saad',
    imageSrc: '/Saad.jpeg'
  }
];

const Team = () => {
  const { ref, isInView } = useInViewMotion();

  return (
    <section id="team" ref={ref} aria-label="Meet the team" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Team</h2>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">
              The people behind EcomHammad
            </p>
          </div>
          <p className="hidden sm:block max-w-sm text-xs text-slate-400">
            A small team covering marketing, design, and development so every project has a specialist for each part of
            the funnel.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/70/ backdrop-blur-sm p-5 sm:p-6 shadow-[0_18px_60px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:border-sky-500/60"
            >
              <div className="relative flex items-center gap-3">
                <div className="h-14 w-14 rounded-full border border-slate-700/80 bg-slate-900/90 shadow-lg shadow-slate-900/70 overflow-hidden flex items-center justify-center">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">{member.name}</h3>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-slate-400">{member.role}</p>
                </div>
              </div>

              <p className="mt-4 text-[12px] sm:text-sm text-slate-300 leading-relaxed flex-1">{member.bio}</p>
              <p className="mt-3 text-[11px] text-slate-400">Speciality: {member.specialty}</p>

              <div className="mt-4">
                <a
                  href={member.portfolioHref}
                  className="inline-flex items-center justify-center rounded-full border border-sky-500/70 bg-slate-950/70 px-4 py-2 text-xs sm:text-sm font-semibold text-sky-100 shadow-soft transition transform hover:-translate-y-0.5 hover:bg-sky-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  View portfolio
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
