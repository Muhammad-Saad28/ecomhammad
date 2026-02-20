import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="top" className="pt-4 sm:pt-6">
      <div className="relative rounded-[2.5rem] border border-slate-800/80 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.22),_transparent_55%)] px-5 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 shadow-soft max-w-xl mx-auto lg:max-w-none">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/10 to-slate-950/80" aria-hidden="true" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] items-center relative z-10">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 shadow-soft"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400" />
              For ecommerce brands & launches
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.55 }}
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-semibold tracking-tight text-slate-50"
            >
              EcomHammad&apos;s{' '}
              <span className="text-sky-300">performance portfolio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300"
            >
              We customize and speed up Shopify stores, wire the stack (tracking, apps, integrations), design the
              visuals, and run Meta ads. A tight design-plus-engineering duo delivers everything end to end, so you get
              fast builds and consistent creative without juggling freelancers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-950 shadow-soft border border-sky-300/80 transition transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                See more about us
              </a>
              <a
                href="#results"
                className="inline-flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-slate-800 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-50 shadow-soft border border-slate-600/80 transition transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                View results
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 text-xs text-slate-300"
            >
              <div>
                <dt className="text-slate-400">Projects shipped</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-50">20+ stores & sites</dd>
              </div>
              <div>
                <dt className="text-slate-400">Core specialties</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-50">Shopify customization • UX/design • Tech</dd>
              </div>
              <div>
                <dt className="text-slate-400">Response time</dt>
                <dd className="mt-1 text-lg font-semibold text-emerald-400">&lt; 24 hours</dd>
              </div>
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-900/80 shadow-[0_22px_90px_rgba(15,23,42,0.95)]">
              <img
                src="/main.png"
                alt="Screens from ecommerce stores, dashboards, and creative work"
                className="w-full h-auto max-h-[360px] sm:max-h-[420px] object-contain sm:object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between text-[11px] text-slate-100">
                <span className="rounded-full bg-slate-950/80 px-3 py-1">
                  Shopify dashboard
                </span>
                <span className="hidden sm:inline-flex rounded-full bg-sky-500/15 px-3 py-1 text-sky-200">
                  Pulled from real client work
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-300"
        >
          <div>
            <p className="uppercase tracking-[0.2em] text-slate-400 text-[10px]">Our services</p>
            <p className="mt-1 text-sm text-slate-100">Shopify customization, Meta ads, integrations, and clean ecommerce design.</p>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-slate-400">
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
