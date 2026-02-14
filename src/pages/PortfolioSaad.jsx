import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const projects = [
  {
    title: 'EcomHammad – Full Site Build',
    role: 'Frontend & Technical Architecture',
    result: 'Fast, stable portfolio site with smooth navigation and clean code structure.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
    url: 'https://ecomhammad.netlify.app',
    description:
      'Implemented the full front end for the EcomHammad studio site using a modern React + Vite setup with Tailwind and TypeScript, handling routing, layout, and component structure so the marketing team could focus on content.'
  },
  {
    title: 'Nexwear – Clothing Brand Frontend',
    role: 'Frontend Implementation (In Progress)',
    result: 'Under-construction storefront for a clothing brand, focused on a clean grid and product-first layout while the backend is being built.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://nex-wear.netlify.app',
    description:
      'Early-stage build for Nexwear, a clothing brand site: setting up the base layout, responsive product sections, and reusable UI components on the frontend while the backend and integrations are still under construction.'
  }
];

const saadScreenshots = ['/Saad/1.png', '/Saad/2.png', '/Saad/3.png'];

const PortfolioSaad = () => {
  const [shotIndex, setShotIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setShotIndex((prev) => (prev + 1) % saadScreenshots.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);
  return (
    <Layout>
      <Navbar />
      <div className="space-y-10 sm:space-y-12 lg:space-y-14">
        <section className="scroll-mt-24">
          <div className="section-max-width">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7">
              <img
                src="/Saad.jpeg"
                alt="Muhammad Saad"
                className="h-24 w-24 sm:h-28 sm:w-28 rounded-full border border-slate-700/80 object-cover shadow-soft"
              />
              <div className="text-center sm:text-left">
                <a href="/" className="text-[11px] text-slate-400 hover:text-slate-200 transition">
                  ← Back to EcomHammad
                </a>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Portfolio
                </p>
                <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-50">
                  Muhammad Saad — Tech & Development
                </h1>
                <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
                  Focused on website building, software development, and application building. The projects below show
                  how modern React/Vite frontends and clean technical structure turn designs into stable, fast products.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24">
          <div className="section-max-width">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Work Details</h2>
            <div className="mt-4 grid gap-4 sm:gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 sm:p-5 shadow-soft transition-colors hover:border-accent.blue/80"
                >
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent.blue/18 via-transparent to-accent.purple/18" />
                  <div className="relative">
                    <h3 className="text-sm font-semibold text-slate-50">{project.title}</h3>
                    <p className="mt-1 text-[11px] text-slate-400">{project.role}</p>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{project.description}</p>
                    <p className="mt-3 text-xs font-medium text-emerald-400">{project.result}</p>
                    <p className="mt-2 text-[11px] text-slate-400">
                      Tech: {project.tech.join(', ')}
                    </p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-accent.blue hover:text-accent.blue/80 underline underline-offset-2"
                      >
                        View live
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-24">
          <div className="section-max-width">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Live Example Placeholder</h2>
            <p className="mt-2 text-xs text-slate-400 max-w-xl">
              Live links to current work that will be updated as more technical projects go live.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,0.46fr)_minmax(0,1fr)] items-center">
              <div className="h-40 sm:h-48 max-w-xl w-full rounded-xl border border-slate-700/80 bg-slate-950/60 flex items-center justify-center overflow-hidden relative">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={saadScreenshots[shotIndex]}
                    src={saadScreenshots[shotIndex]}
                    alt="Saad project screenshot"
                    className="absolute inset-0 h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -40, opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <p>
                  Website link:{' '}
                  <a
                    href="https://ecomhammad.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent.blue/90 hover:text-accent.blue/80 underline underline-offset-2"
                  >
                    https://ecomhammad.netlify.app
                  </a>
                </p>
                <p>
                  Stack: <span className="text-slate-100">React + Vite + Tailwind CSS + TypeScript</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
};

export default PortfolioSaad;
