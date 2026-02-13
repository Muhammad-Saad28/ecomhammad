import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const projects = [
  {
    title: 'EcomHammad Studio Website UI',
    role: 'UI/UX Design, Visual System, Conversion-Focused Layout',
    result: 'Built a clean, trust-heavy landing page that clearly explains the team, services, and results.',
    tech: ['Figma', 'Canva', 'Design System'],
    description:
      'Designed this multi-section studio website with a strong hero, clear team and portfolio structure, and consistent card components so visitors quickly understand what we do and where to click next.'
  },
  {
    title: 'Brand & Logo System',
    role: 'Logo Design, Color System, Typography',
    result: 'Delivered a complete brand kit for use across website, ads, and packaging.',
    tech: ['Canva', 'Illustrator'],
    description:
      'Logo mark exploration, final logo, and a small style guide with primary colors, type stacks, and usage examples.'
  }
];

const webUiImages = ['/Hammad/web1.png', '/Hammad/web2.png', '/Hammad/web3.png'];
const logoImages = ['/Hammad/l1.png', '/Hammad/l2.png', '/Hammad/l3.png', '/Hammad/l4.png'];
const socialImages = ['/Hammad/SM1.png', '/Hammad/SM2.png', '/Hammad/SM3.png'];

const PortfolioHammad = () => {
  const [webIndex, setWebIndex] = useState(0);
  const [logoIndex, setLogoIndex] = useState(0);
  const [socialIndex, setSocialIndex] = useState(0);

  useEffect(() => {
    const webTimer = setInterval(() => {
      setWebIndex((prev) => (prev + 1) % webUiImages.length);
    }, 3500);

    const logoTimer = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % logoImages.length);
    }, 3500);

    const socialTimer = setInterval(() => {
      setSocialIndex((prev) => (prev + 1) % socialImages.length);
    }, 3500);

    return () => {
      clearInterval(webTimer);
      clearInterval(logoTimer);
      clearInterval(socialTimer);
    };
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="space-y-10 sm:space-y-12 lg:space-y-14">
        <section className="scroll-mt-24">
          <div className="section-max-width">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7">
              <img
                src="/Hammad.jpeg"
                alt="Hammad Ahmad"
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
                  Hammad Ahmad — UI/UX & Graphic Design
                </h1>
                <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
                  Focused on graphic design, UI/UX, and logo design for e-commerce brands. These projects highlight
                  how clear visuals and layout can lift trust and click‑through on every page.
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
                  className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 sm:p-5 shadow-soft transition-colors hover:border-accent.purple/80"
                >
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent.purple/18 via-transparent to-accent.blue/18" />
                  <div className="relative">
                    <h3 className="text-sm font-semibold text-slate-50">{project.title}</h3>
                    <p className="mt-1 text-[11px] text-slate-400">{project.role}</p>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{project.description}</p>
                    <p className="mt-3 text-xs font-medium text-emerald-400">{project.result}</p>
                    <p className="mt-2 text-[11px] text-slate-400">
                      Tech: {project.tech.join(', ')}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-24">
          <div className="section-max-width">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Design Gallery</h2>
            <p className="mt-2 text-xs text-slate-400 max-w-xl">
              A few real UI mockups, logo concepts, and social media graphics used across e-commerce projects.
            </p>
            <div className="mt-4 space-y-4">
              {/* EcomHammad site – image & description horizontal on larger screens */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="h-28 sm:h-32 sm:w-64 flex-none rounded-lg border border-slate-700/70 bg-slate-950 flex items-center justify-center overflow-hidden relative mx-auto sm:mx-0">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={webUiImages[webIndex]}
                      src={webUiImages[webIndex]}
                      alt="EcomHammad website UI design preview"
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
                <div className="sm:flex-1 rounded-lg border border-slate-700/70 bg-slate-950/80 p-2.5 sm:p-3 flex flex-col justify-between">
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                    EcomHammad&apos;s own studio site — a dark, clean layout that walks visitors from hero to team,
                    results, tools, and contact without confusion. Designed to feel like a real agency landing page,
                    not a generic template, so brands can see exactly how we think about structure.
                  </p>
                  <a
                    href="https://ecomabdullah.netlify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-accent.blue hover:text-accent.blue/80 underline underline-offset-2"
                  >
                    View live site
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              {/* LuxCove logos – same horizontal layout as first */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="h-28 sm:h-32 sm:w-64 flex-none rounded-lg border border-slate-700/70 bg-slate-950 flex items-center justify-center overflow-hidden relative mx-auto sm:mx-0">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={logoImages[logoIndex]}
                      src={logoImages[logoIndex]}
                      alt="LuxCove logo concept preview"
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
                <div className="sm:flex-1 rounded-lg border border-slate-700/70 bg-slate-950/80 p-2.5 sm:p-3 flex flex-col justify-between">
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                    Logo and brand mark exploration for LuxCove, a cosmetics brand — simple, premium shapes and color
                    choices that look good on the Shopify store, packaging, and ads, while still staying flexible
                    enough for future product lines and campaigns.
                  </p>
                  <a
                    href="https://luxcove.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-accent.blue hover:text-accent.blue/80 underline underline-offset-2"
                  >
                    Visit LuxCove
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              {/* Instagram graphics – same horizontal layout as first */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="h-28 sm:h-32 sm:w-64 flex-none rounded-lg border border-slate-700/70 bg-slate-950 flex items-center justify-center overflow-hidden relative mx-auto sm:mx-0">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={socialImages[socialIndex]}
                      src={socialImages[socialIndex]}
                      alt="EcomHammad Instagram graphic preview"
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
                <div className="sm:flex-1 rounded-lg border border-slate-700/70 bg-slate-950/80 p-2.5 sm:p-3 flex flex-col justify-between">
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                    Social media posts for the EcomHammad brand — punchy, readable layouts that highlight wins,
                    offers, and behind-the-scenes work without looking like cheap spam, tuned for fast scrolling on
                    Instagram.
                  </p>
                  <a
                    href="https://instagram.com/ecomabdullahh"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-accent.blue hover:text-accent.blue/80 underline underline-offset-2"
                  >
                    Visit @ecomabdullahh
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
};

export default PortfolioHammad;
