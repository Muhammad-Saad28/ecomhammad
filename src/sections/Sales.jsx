import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const salesShots = ['/Sales/1.webp', '/Sales/2.webp', '/Sales/3.webp'];

const Sales = () => {
  const { ref, isInView } = useInViewMotion();

  return (
    <section id="sales" ref={ref} aria-label="Sales proof" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Sales</h2>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">
              Real sales from real stores
            </p>
          </div>
          <p className="hidden sm:block max-w-sm text-xs text-slate-400">
            These are actual snapshots from Shopify dashboards and ad accounts, showing the kind of results I help
            clients achieve.
          </p>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3 max-w-5xl mx-auto">
          {salesShots.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * index, duration: 0.45 }}
              className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 shadow-soft"
            >
              <img
                src={src}
                alt="Sales dashboard screenshot"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-4 max-w-3xl mx-auto text-center">
          <h3 className="text-xs sm:text-sm font-semibold text-slate-200">
            What these screenshots actually show
          </h3>
          <p className="mt-2 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
            These are real snapshots from Shopify dashboards and chats for cosmetics and accessories brands we&apos;ve worked on
            — not mockups. They show steady daily orders and repeat buyers from paid traffic, not just one lucky spike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sales;
