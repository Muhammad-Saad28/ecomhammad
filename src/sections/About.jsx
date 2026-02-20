import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const About = () => {
  const { ref, isInView } = useInViewMotion();

  return (
    <section id="about" ref={ref} aria-label="About EcomHammad" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] items-start">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">About</h2>

            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.45 }}
              className="mt-3 text-xl sm:text-2xl font-semibold text-slate-50"
            >
              A Shopify-first studio blending design and tech
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.16, duration: 0.45 }}
              className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl"
            >
              EcomHammad is a two-person Shopify studio pairing design and engineering. We build stores and funnels that
              look premium, load fast, and stay stable.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.24, duration: 0.45 }}
              className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl"
            >
              Together we cover the full funnel: theme and layout customizations, localized PDPs and flows, brand
              visuals, Meta ads, and the technical wiring that keeps tracking and data clean. Your stack stays simple
              and experiments stay focused on what actually moves revenue.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.34, duration: 0.4 }}
              className="mt-4 grid gap-2 text-xs text-slate-300 sm:grid-cols-2"
            >
              <li>• Clear communication and weekly update check‑ins with the team</li>
              <li>• Transparent reporting and dashboards you actually use</li>
              <li>• Clean builds, minimal bloat, and fast load times</li>
              <li>• Long‑term partnerships, not one‑off projects</li>
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.42, duration: 0.4 }}
              className="mt-5 flex flex-wrap gap-3 text-[11px] text-slate-200"
            >
              <span className="inline-flex items-center rounded-full border border-emerald-500/70 bg-emerald-500/10 px-3 py-1 shadow-[0_12px_30px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-emerald-400/80">
                <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Timezone‑friendly for US, UK & Gulf</span>
              </span>
              <span className="inline-flex items-center rounded-full border border-sky-500/70 bg-sky-500/10 px-3 py-1 shadow-[0_12px_30px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-sky-400/80">
                <span className="mr-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>20+ projects shipped across niches</span>
              </span>
              <span className="inline-flex items-center rounded-full border border-slate-600/80 bg-slate-900/70 px-3 py-1 shadow-[0_12px_30px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-slate-400/80">
                <span className="mr-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>Hands‑on founders, no account managers</span>
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 26, y: 6 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ delay: 0.28, duration: 0.55 }}
            className="mt-4 lg:mt-6 group rounded-3xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 shadow-[0_18px_60px_rgba(15,23,42,0.9)] relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-sky-500/60"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.22),_transparent_60%)] opacity-70" />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                How projects move with us
              </p>
              <p className="mt-1 text-xs text-slate-400">
                A simple four‑step path from first call to ongoing optimization.
              </p>

              <ol className="mt-4 space-y-3 text-[11px] text-slate-200">
                <li className="flex gap-3">
                  <div className="mt-0.5 flex flex-col items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border border-sky-500/70 text-[10px] font-semibold text-sky-200">
                      1
                    </span>
                    <span className="mt-1 h-7 w-px bg-slate-700/70" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-50">Discovery & fit call</p>
                    <p className="text-[11px] text-slate-300">
                      We audit your store, numbers, and goals together over a short call.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 flex flex-col items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border border-sky-500/70 text-[10px] font-semibold text-sky-200">
                      2
                    </span>
                    <span className="mt-1 h-7 w-px bg-slate-700/70" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-50">Roadmap & proposal</p>
                    <p className="text-[11px] text-slate-300">
                      You get a scoped plan with priorities, timelines, and pricing—no fluff.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 flex flex-col items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border border-sky-500/70 text-[10px] font-semibold text-sky-200">
                      3
                    </span>
                    <span className="mt-1 h-7 w-px bg-slate-700/70" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-50">Build, launch & report</p>
                    <p className="text-[11px] text-slate-300">
                      We execute the build, tracking, and campaigns with weekly Loom or call updates.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 flex flex-col items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border border-emerald-500/80 text-[10px] font-semibold text-emerald-300">
                      4
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-50">Optimize & scale</p>
                    <p className="text-[11px] text-slate-300">
                      Ongoing CRO, creative testing, and funnel tweaks based on real data—not guesses.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
