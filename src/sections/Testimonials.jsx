import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const screenshotPaths = ['/Testimonals/1.jpeg', '/Testimonals/2.png', '/Testimonals/3.png'];

const Testimonials = () => {
  const { ref, isInView } = useInViewMotion();

  return (
    <section id="testimonials" ref={ref} aria-label="Client testimonials" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Testimonials</h2>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">
              What clients say
            </p>
          </div>
          <p className="hidden sm:block max-w-sm text-xs text-slate-400">
            You&apos;ll also see screenshot proof from Upwork, WhatsApp, and email once we talk—real results, not copy‑paste
            reviews.
          </p>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3 items-stretch max-w-5xl mx-auto">
          {screenshotPaths.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 + index * 0.06, duration: 0.4 }}
              className="rounded-xl border border-slate-800/80 bg-slate-950/70 shadow-soft p-1 flex items-center justify-center"
            >
              <img
                src={src}
                alt="Client testimonial screenshot"
                className="w-full h-auto object-contain mx-auto"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>

        <p className="mt-3 text-xs sm:text-[13px] text-slate-500">
          These screenshots are meant to show real feedback from clients in chats and platforms like Upwork.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
