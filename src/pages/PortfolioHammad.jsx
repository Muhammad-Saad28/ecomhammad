import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const projects = [
  {
    title: 'HUM Nutrition — quiz-led wellness DTC',
    role: 'Quiz UX, bundles, checkout tests',
    result: 'Higher quiz-to-cart completion and bundle AOV for wellness shoppers.',
    tech: ['Shopify', 'Quiz UX', 'Conversion design'],
    proof: 'Quiz → cart completion up; bundle AOV uplift after rec tuning.',
    description:
      'Mapped quiz outcomes to cart, tuned bundle recommendations, and designed checkout split-tests to reduce friction across mobile and desktop.'
  },
  {
    title: 'Hasbro Pulse — collector drops',
    role: 'Status comms, localization, conversion UI',
    result: 'Collectors stay informed on drops and preorders with clearer status and trust cues.',
    tech: ['Shopify', 'Localization', 'UI/UX'],
    proof: 'Preorder confusion down; drop-day support pings reduced with clearer statuses.',
    description:
      'Crafted preorder/waitlist messaging, localized interface details, and UI treatments that keep limited drops organized and calm for fans.'
  },
  {
    title: 'Polaroid — photo hardware localization',
    role: 'Compatibility UX, localized layout',
    result: 'Lower PDP bounce and better accessory attach for cameras and film.',
    tech: ['Shopify', 'Localization', 'PDP UX'],
    proof: 'PDP bounce rate down; accessory attach improved with compatibility finder.',
    description:
      'Designed a compatibility finder, localized EN_PK layout, and accessory attach cues so shoppers pair the right film with each camera.'
  },
  {
    title: 'Chronicle Books — gifting-first catalog UX',
    role: 'Navigation, gift bundles, search facets',
    result: 'Shoppers locate giftable sets faster across a large catalog.',
    tech: ['Shopify', 'Navigation', 'Search UX'],
    proof: 'Gift bundle uptake up; search exits down after facet and nav tuning.',
    description:
      'Reworked nav structure, added giftable bundles, and tuned search facets to make browsing feel curated instead of overwhelming.'
  }
];

const webUiImages = ['/Hammad/web1.png', '/Hammad/web2.png', '/Hammad/web3.png'];
const logoImages = ['/Hammad/l1.png', '/Hammad/l2.png', '/Hammad/l3.png', '/Hammad/l4.png'];
const socialImages = ['/Hammad/SM1.png', '/Hammad/SM2.png', '/Hammad/SM3.png'];

const PortfolioHammad = () => {
  const [webIndex, setWebIndex] = useState(0);
  const [logoIndex, setLogoIndex] = useState(0);
  const [socialIndex, setSocialIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlay = true;

  useEffect(() => {
    if (!autoPlay || isPaused) return undefined;

    const webTimer = setInterval(() => {
      setWebIndex((prev) => (prev + 1) % webUiImages.length);
    }, 4200);

    const logoTimer = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % logoImages.length);
    }, 4200);

    const socialTimer = setInterval(() => {
      setSocialIndex((prev) => (prev + 1) % socialImages.length);
    }, 4200);

    return () => {
      clearInterval(webTimer);
      clearInterval(logoTimer);
      clearInterval(socialTimer);
    };
  }, [autoPlay, isPaused]);

  const onPause = () => setIsPaused(true);
  const onResume = () => setIsPaused(false);

  const handlePrev = (type) => {
    if (type === 'web') setWebIndex((prev) => (prev - 1 + webUiImages.length) % webUiImages.length);
    if (type === 'logo') setLogoIndex((prev) => (prev - 1 + logoImages.length) % logoImages.length);
    if (type === 'social') setSocialIndex((prev) => (prev - 1 + socialImages.length) % socialImages.length);
  };

  const handleNext = (type) => {
    if (type === 'web') setWebIndex((prev) => (prev + 1) % webUiImages.length);
    if (type === 'logo') setLogoIndex((prev) => (prev + 1) % logoImages.length);
    if (type === 'social') setSocialIndex((prev) => (prev + 1) % socialImages.length);
  };

  return (
    <Layout>
      <Navbar />
      <div className="space-y-10 sm:space-y-12 lg:space-y-14">
        <section className="scroll-mt-24">
          <div className="section-max-width">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7">
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="h-24 w-24 sm:h-28 sm:w-28 rounded-full border border-slate-700/80 overflow-hidden shadow-soft">
                <img
                  src="/Hammad.jpeg"
                  alt="Hammad Ahmad"
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
                  Hammad Ahmad — UX, localization, conversion design
                </h1>
                <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
                  Designs quiz flows, localized experiences, and conversion-forward layouts that keep shoppers confident from browse to checkout.
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
                  className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/70 p-5 shadow-[0_18px_50px_rgba(10,17,35,0.55)] transition duration-200 hover:-translate-y-1 hover:border-fuchsia-400/70"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_15%_25%,rgba(236,72,153,0.08),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.08),transparent_32%)]" aria-hidden="true" />
                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
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

export default PortfolioHammad;
