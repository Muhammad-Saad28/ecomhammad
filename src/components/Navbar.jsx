import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#results', label: 'Results' },
  { href: '#tools', label: 'Tools' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

const Navbar = () => {
  const [activeId, setActiveId] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() =>
  {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && visible.target && visible.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        root: null,
        // Make it easier for medium-height sections like Services & Results
        // to count as "active" when they are near the middle of the screen.
        rootMargin: '0px 0px -40% 0px',
        threshold: [0.1, 0.3, 0.5]
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-4 z-30 mb-10 flex justify-center"
   >
      <nav className="relative backdrop-blur-xl bg-slate-900/70 border border-slate-800/80 rounded-full px-4 sm:px-6 py-3 shadow-soft flex items-center gap-4 w-full max-w-5xl">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-slate-900/90 border border-slate-700/80 overflow-hidden flex items-center justify-center">
              <img
                src="/logo.jpeg"
                alt="Abdullah Khalid logo"
                className="h-8 w-8 object-contain"
                loading="lazy"
                decoding="async"
              />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Portfolio</span>
            <span className="text-sm font-medium text-slate-100">EcomHammad</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsMobileOpen((open) => !open)}
          className="ml-auto inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-soft transition hover:bg-slate-800/80 hover:-translate-y-0.5 md:hidden transform"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? 'Close' : 'Menu'}
        </button>

        <div className="hidden md:flex items-center gap-1 ml-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                activeId === item.href.replace('#', '')
                  ? 'bg-slate-800/90 text-slate-50'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/testimonials"
            className="px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 text-slate-300 hover:text-white hover:bg-slate-800/80"
          >
            Testimonials
          </a>
        </div>
        <div className="hidden md:block ml-auto md:ml-4">
          <a
            href="/#contact"
            className="inline-flex items-center gap-1 rounded-full bg-slate-900 hover:bg-slate-800 px-4 py-1.5 text-sm font-semibold text-slate-50 shadow-soft border border-slate-600/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition transform hover:-translate-y-0.5"
          >
            Let&apos;s talk
          </a>
        </div>

        {isMobileOpen && (
          <div className="absolute left-3 right-3 top-full mt-2 rounded-2xl border border-slate-800/80 bg-slate-950/95 px-3 py-3 shadow-soft md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={() => setIsMobileOpen(false)}
                  className={`w-full rounded-full px-3 py-1.75 text-xs font-medium text-left transition-colors transform hover:-translate-y-0.5 ${
                    activeId === item.href.replace('#', '')
                      ? 'bg-slate-800 text-slate-50'
                      : 'text-slate-200 hover:bg-slate-800/80'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/testimonials"
                onClick={() => setIsMobileOpen(false)}
                className="w-full rounded-full px-3 py-1.75 text-xs font-medium text-left transition-colors transform hover:-translate-y-0.5 text-slate-200 hover:bg-slate-800/80"
              >
                Testimonials
              </a>
              <a
                href="/#contact"
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 px-3 py-1.75 text-xs font-semibold text-slate-50 shadow-soft border border-slate-600/80 transform hover:-translate-y-0.5"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
