import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const projects = [
  {
    name: 'Muhammad Saad',
    title: 'LuxCove – Premium Cosmetics Shopify Store',
    tech: 'Shopify + Meta & TikTok Ads',
    images: ['/Results/l1.png', '/Results/l2.png', '/Results/l3.png', '/Results/l4.png'],
    description:
      'LuxCove cosmetics store build and paid traffic setup: clean product pages, trust signals, and campaign structure that turned a new brand into a ready-to-scale storefront.',
  },
  {
    name: 'Hammad Ahmad',
    title: 'EcomHammad – Instagram Visual System',
    tech: 'Canva + Social Design',
    images: ['/Results/SM1.png', '/Results/SM2.png'],
    description:
      'A set of Instagram posts for EcomHammad with consistent typography, spacing, and highlight blocks so case studies and offers look sharp in the feed.',
  },
  {
    name: 'Muhammad Saad',
    title: 'Nexwear – Clothing Brand Frontend',
    tech: 'React + Vite + Tailwind CSS',
    images: ['/Results/1.png', '/Results/2.png', '/Results/3.png'],
    description:
      'Frontend build for Nexwear, a clothing brand site: responsive layout, product-first sections, and clean code structure ready for a future backend.',
  }
];

const imageAnimations = [
  {
    initial: { x: 40, opacity: 0, scale: 0.96 },
    animate: { x: 0, opacity: 1, scale: 1 },
    exit: { x: -40, opacity: 0, scale: 0.96 }
  },
  {
    initial: { y: 30, opacity: 0, scale: 1.02 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: -24, opacity: 0, scale: 1.02 }
  },
  {
    initial: { scale: 1.12, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.94, opacity: 0 }
  }
];

const Results = () => {
  const { ref, isInView } = useInViewMotion();
  const [imageStep, setImageStep] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageStep((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const selectedProject = projects[selectedIndex];
  const selectedAnim = imageAnimations[selectedIndex % imageAnimations.length];
  const currentImage = selectedProject.images[imageStep % selectedProject.images.length];

  return (
    <section id="results" ref={ref} aria-label="Results and metrics" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Results</h2>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">
              Selected work from the studio
            </p>
          </div>
          <p className="hidden sm:block max-w-sm text-xs text-slate-400">
            Real projects, real brands: Shopify builds, funnels, and design systems that turned ideas into live,
            revenue‑focused experiences.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.4fr)] items-start">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-2 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-1 sm:p-6 backdrop-blur-sm shadow-[0_18px_60px_rgba(15,23,42,0.9)]"
          >
            <div className="flex items-center justify-between mb-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Results</p>
              <p className="hidden sm:block text-[11px] text-slate-500">
              </p>
            </div>

            <div className="space-y-1.5">
              {projects.map((project, index) => {
                const isActive = index === selectedIndex;

                return (
                  <button
                    key={project.title}
                    type="button"
                    onMouseEnter={() => {
                      setSelectedIndex(index);
                      setImageStep(0);
                    }}
                    onFocus={() => {
                      setSelectedIndex(index);
                      setImageStep(0);
                    }}
                    onClick={() => {
                      setSelectedIndex(index);
                      setImageStep(0);
                    }}
                    className={`w-full text-left rounded-2xl border px-4 py-3.5 flex items-center justify-between gap-3 transition-all duration-200 ${
                      isActive
                        ? 'bg-slate-900/90 border-sky-500/70 shadow-[0_16px_40px_rgba(15,23,42,0.95)]'
                        : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-600/80 hover:bg-slate-900/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-slate-500 w-6">{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <p className="text-xs sm:text-[13px] font-medium text-slate-50 line-clamp-1">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, x: 22 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/70 backdrop-blur-sm shadow-[0_18px_60px_rgba(15,23,42,0.9)]"
          >
            <div className="relative h-48 sm:h-60 md:h-64 overflow-hidden border-b border-slate-800/80 bg-slate-950/90">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={currentImage}
                  src={currentImage}
                  alt={selectedProject.title}
                  className="absolute inset-0 h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                  initial={selectedAnim.initial}
                  animate={selectedAnim.animate}
                  exit={selectedAnim.exit}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              </AnimatePresence>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute left-3 right-3 top-3 flex items-center justify-between text-[10px] text-slate-200">
                <span className="rounded-full bg-slate-950/85 px-2 py-0.5 border border-slate-700/80">
                  {selectedProject.tech}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-sky-500/15 px-2 py-0.5 text-sky-200 border border-sky-500/40">
                  <span className="h-1 w-1 rounded-full bg-sky-400" />
                  <span>Case {String(selectedIndex + 1).padStart(2, '0')}</span>
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col">
              <h3 className="text-sm sm:text-base font-semibold text-slate-50">{selectedProject.title}</h3>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">{selectedProject.tech}</p>
              <p className="mt-3 text-[12px] sm:text-xs text-slate-300 leading-relaxed flex-1">{selectedProject.description}</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Results;
