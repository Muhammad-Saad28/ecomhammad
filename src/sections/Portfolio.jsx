import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const memberPortfolios = [
  {
    id: 'hammad',
    name: 'Hammad Ahmad',
    role: 'UI/UX & Graphic Design',
    intro:
      'Designs clean, conversion-focused interfaces, brand visuals, and logos that make stores feel premium and easy to use.',
    highlights: [
      'Website and landing page designs with clear visual hierarchy.',
      'Logo and brand systems built for digital-first brands.',
      'Polished graphics and ad creatives prepared in Canva.'
    ],
    images: ['/Sales/2.png']
  },
  {
    id: 'saad',
    name: 'Muhammad Saad',
    role: 'Tech & Development',
    intro:
      'Builds and maintains the technical side: websites, web apps, and integrations that are fast, stable, and ready to scale.',
    highlights: [
      'End-to-end website builds and technical setup.',
      'Application and software development tailored to business needs.',
      'Experience with Angular.js frontends and .NET framework backends.'
    ],
    images: ['/Sales/3.png', '/Sales/1.png']
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
              <div className="flex-1 p-4 flex flex-col gap-2">
                {member.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="group/item rounded-lg border border-slate-800/80 bg-slate-950/80 px-3 py-2 text-[11px] text-slate-200 transition-colors hover:border-accent.blue/80 hover:bg-slate-950"
                  >
                    {highlight}
                  </div>
                ))}
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
