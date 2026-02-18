import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const projects = [
  {
    title: 'American Girl — collectible gifting UX',
    role: 'IA, accessibility, guided gifting flow',
    result: 'Parents and collectors move faster through gifting and booking without losing context.',
    tech: ['Shopify', 'Accessibility', 'UX architecture'],
    url: 'https://www.americangirl.com/',
    proof: 'Guided gifting exits down; upsell attach improved with clearer placement.',
    description:
      'Led information architecture and accessibility passes, refined the guided gifting flow, and placed cart upsells where they add value without cluttering the journey.'
  },
  {
    title: 'Death Wish Coffee — high-caffeine DTC speed',
    role: 'Mobile PDP, cross-sells, performance',
    result: 'Faster PDP-to-cart, better merch attach, and leaner assets for mobile shoppers.',
    tech: ['Shopify', 'Performance', 'PDP UX'],
    url: 'https://www.deathwishcoffee.com/',
    proof: 'Mobile PDP LCP down; brewing-gear attach rate up after cross-sell tuning.',
    description:
      'Rebuilt mobile PDPs, added brewing gear cross-sells, and tightened asset strategy to keep page speed high for caffeine-seeking shoppers.'
  },
  {
    title: 'Scuffers — streetwear drops',
    role: 'Drop pages, fit helper, cart drawer',
    result: 'Drop-day clarity with quick edits and fewer size-related returns.',
    tech: ['Shopify', 'Drop UX', 'Cart drawer'],
    url: 'https://scuffers.com/',
    proof: 'Size-related returns down; faster cart edits kept drop sessions moving.',
    description:
      'Built drop-focused landing pages, added a size/fit helper, and a cart drawer with quick edits to keep conversion smooth during new releases.'
  },
  {
    title: 'Fashion Nova — influencer landing system',
    role: 'Landing templates, seasonal themes, returns clarity',
    result: 'Influencer traffic routes to fast-loading templates with clear fit and returns info.',
    tech: ['Shopify', 'Landing systems', 'Performance'],
    url: 'https://www.fashionnova.com/',
    proof: 'Influencer landers converted higher; bounce down with fit/returns clarity up front.',
    description:
      'Created reusable landing templates for influencer campaigns, rapid seasonal theming, and positioned returns/fit FAQs to cut hesitation at checkout.'
  }
];

const saadScreenshots = ['/Saad/1.png', '/Saad/2.png', '/Saad/3.png'];

const PortfolioSaad = () => {
  const [shotIndex, setShotIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlay = true;

  useEffect(() => {
    if (!autoPlay || isPaused) return undefined;

    const timer = setInterval(() => {
      setShotIndex((prev) => (prev + 1) % saadScreenshots.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused]);

  const onPause = () => setIsPaused(true);
  const onResume = () => setIsPaused(false);
  const prev = () => setShotIndex((prev) => (prev - 1 + saadScreenshots.length) % saadScreenshots.length);
  const next = () => setShotIndex((prev) => (prev + 1) % saadScreenshots.length);
  return (
    <Layout>
      <Navbar />
      <div className="space-y-10 sm:space-y-12 lg:space-y-14">
        <section className="scroll-mt-24">
          <div className="section-max-width">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7">
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="h-24 w-24 sm:h-28 sm:w-28 rounded-full border border-slate-700/80 overflow-hidden shadow-soft">
                <img
                  src="/Saad.jpeg"
                  alt="Muhammad Saad"
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div className="text-center sm:text-left">
                <a href="/" className="text-[11px] text-slate-400 hover:text-slate-200 transition">
                  ← Back to EcomHammad
                </a>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Portfolio
                </p>
                <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-50">
                  Muhammad Saad — Tech, speed, drop readiness
                </h1>
                <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
                  Builds fast, resilient Shopify experiences: mobile-first PDPs, launch-day stability, and reusable landing systems for influencer traffic.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24">
          <div className="section-max-width">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Work Details</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/70 p-5 shadow-[0_18px_50px_rgba(10,17,35,0.55)] transition duration-200 hover:-translate-y-1 hover:border-sky-500/70"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.08),transparent_32%)]" aria-hidden="true" />
                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        {project.role}
                      </div>
                      <h3 className="text-base font-semibold text-slate-50 leading-snug">{project.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{project.description}</p>
                      <p className="text-xs font-semibold text-emerald-300">{project.result}</p>
                      <p className="text-[11px] text-slate-200">Proof: {project.proof}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tech.map((stack) => (
                          <span
                            key={stack}
                            className="rounded-full border border-slate-700/80 bg-slate-900/70 px-2.5 py-1 text-[11px] text-slate-200"
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-300 hover:text-sky-200"
                        >
                          View live
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-[11px] font-semibold text-slate-200">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
};

export default PortfolioSaad;
