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
    gallery: [
      '/Results/humnutrition/Screenshot%202026-02-19%20214054.webp',
      '/Results/humnutrition/Screenshot%202026-02-19%20214108.webp'
    ],
    description:
      'Mapped quiz outcomes to cart, tuned bundle recommendations, and designed checkout split-tests to reduce friction across mobile and desktop.'
  },
  {
    title: 'Hasbro Pulse — collector drops',
    role: 'Status comms, localization, conversion UI',
    result: 'Collectors stay informed on drops and preorders with clearer status and trust cues.',
    tech: ['Shopify', 'Localization', 'UI/UX'],
    proof: 'Preorder confusion down; drop-day support pings reduced with clearer statuses.',
    gallery: [
      '/Results/Hasbro%20Pulse/Screenshot%202026-02-19%20214446.webp',
      '/Results/Hasbro%20Pulse/Screenshot%202026-02-19%20214509.webp',
      '/Results/Hasbro%20Pulse/Screenshot%202026-02-19%20214522.webp'
    ],
    description:
      'Crafted preorder/waitlist messaging, localized interface details, and UI treatments that keep limited drops organized and calm for fans.'
  },
  {
    title: 'Polaroid — photo hardware localization',
    role: 'Compatibility UX, localized layout',
    result: 'Lower PDP bounce and better accessory attach for cameras and film.',
    tech: ['Shopify', 'Localization', 'PDP UX'],
    proof: 'PDP bounce rate down; accessory attach improved with compatibility finder.',
    gallery: [
      '/Results/Polaroid%20(EN_PK)/Screenshot%202026-02-19%20214625.webp',
      '/Results/Polaroid%20(EN_PK)/Screenshot%202026-02-19%20225244.webp'
    ],
    description:
      'Designed a compatibility finder, localized EN_PK layout, and accessory attach cues so shoppers pair the right film with each camera.'
  },
  {
    title: 'Chronicle Books — gifting-first catalog UX',
    role: 'Navigation, gift bundles, search facets',
    result: 'Shoppers locate giftable sets faster across a large catalog.',
    tech: ['Shopify', 'Navigation', 'Search UX'],
    proof: 'Gift bundle uptake up; search exits down after facet and nav tuning.',
    gallery: [
      '/Results/Chronicle%20Books/Screenshot%202026-02-19%20214823.webp',
      '/Results/Chronicle%20Books/Screenshot%202026-02-19%20214833.webp'
    ],
    description:
      'Reworked nav structure, added giftable bundles, and tuned search facets to make browsing feel curated instead of overwhelming.'
  }
];

const accentStyles = [
  {
    border: 'hover:border-fuchsia-400/70',
    dot: 'bg-fuchsia-400',
    glow: 'bg-[radial-gradient(circle_at_15%_25%,rgba(236,72,153,0.08),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.08),transparent_32%)]'
  },
  {
    border: 'hover:border-amber-400/70',
    dot: 'bg-amber-400',
    glow: 'bg-[radial-gradient(circle_at_15%_25%,rgba(251,191,36,0.08),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.08),transparent_32%)]'
  },
  {
    border: 'hover:border-emerald-400/70',
    dot: 'bg-emerald-400',
    glow: 'bg-[radial-gradient(circle_at_15%_25%,rgba(16,185,129,0.08),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.08),transparent_32%)]'
  },
  {
    border: 'hover:border-sky-400/70',
    dot: 'bg-sky-400',
    glow: 'bg-[radial-gradient(circle_at_15%_25%,rgba(56,189,248,0.08),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(129,140,248,0.08),transparent_32%)]'
  }
];

const ProjectCard = ({ project, index, accent }) => {
  const [frame, setFrame] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;
  const image = hasGallery ? project.gallery[frame % project.gallery.length] : null;

  useEffect(() => {
    if (!hasGallery || project.gallery.length < 2 || paused) return undefined;
    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % project.gallery.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [hasGallery, paused, project.gallery?.length]);

  const handlePrev = () => {
    if (!hasGallery || project.gallery.length === 0) return;
    setFrame((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const handleNext = () => {
    if (!hasGallery || project.gallery.length === 0) return;
    setFrame((prev) => (prev + 1) % project.gallery.length);
  };

  return (
    <motion.article
      key={project.title}
      className={`group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/70 p-5 shadow-[0_18px_50px_rgba(10,17,35,0.55)] transition duration-200 hover:-translate-y-1 ${accent.border}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`pointer-events-none absolute inset-0 opacity-80 ${accent.glow}`} aria-hidden="true" />
      <div className="relative flex flex-col gap-3">
        {image ? (
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80 h-44">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={image}
                src={image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              />
            </AnimatePresence>
            {project.gallery?.length > 1 ? (
              <div className="pointer-events-auto absolute right-2 bottom-2 flex gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="h-8 w-8 rounded-full border border-slate-700/80 bg-slate-950/80 text-slate-100 text-xs font-semibold shadow-soft hover:border-slate-500/80"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="h-8 w-8 rounded-full border border-slate-700/80 bg-slate-950/80 text-slate-100 text-xs font-semibold shadow-soft hover:border-slate-500/80"
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0 space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200">
              <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
              Shopify customizer & graphic designer
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
      </div>
    </motion.article>
  );
};

const webUiImages = ['/Hammad/web1.webp', '/Hammad/web2.webp', '/Hammad/web3.webp'];
const logoImages = ['/Hammad/l1.webp', '/Hammad/l2.webp', '/Hammad/l3.webp', '/Hammad/l4.webp'];
const socialImages = ['/Hammad/SM1.webp', '/Hammad/SM2.webp', '/Hammad/SM3.webp'];

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
                  Hammad Ahmad — Shopify customizer & graphic designer
                </h1>
                <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
                  Shopify customizations paired with brand-led visuals: quiz and bundle flows tuned for conversion, localized layouts, and graphic design that keeps the store cohesive.
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
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  accent={accentStyles[index % accentStyles.length]}
                />
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
