import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const Contact = () => {
  const { ref, isInView } = useInViewMotion();

  const handleSubmitClick = (event) => {
    const whatsappNumber = '923166124490';

    const form = event?.target?.form || document.forms.contact;

    const name = form?.name?.value || '';
    const email = form?.email?.value || '';
    const budget = form?.budget?.value || '';
    const storeUrl = form?.storeUrl?.value || '';
    const projectDetails = form?.message?.value || '';

    const text = `New inquiry from EcomHammad website:\n\nName: ${name}\nEmail: ${email}\nBudget: ${budget}\nStore URL: ${storeUrl}\n\nProject details:\n${projectDetails}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="contact" ref={ref} aria-label="Contact EcomHammad" className="scroll-mt-24">
      <div className="section-max-width">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.05fr)] items-start">
          <motion.div
            initial={{ opacity: 0, x: -18, y: 6 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 shadow-[0_20px_70px_rgba(15,23,42,0.95)] backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%),_radial-gradient(circle_at_bottom_left,_rgba(129,140,248,0.22),_transparent_60%)] opacity-80" />
            <div className="relative">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Contact</h2>
              <p className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-50">
                Let&apos;s plan your next launch together
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Tell us about your brand, where you are today, and where you want to be in the next 3–6 months. We&apos;ll
                come back with a tailored plan, ballpark pricing, and timelines.
              </p>
              <p className="mt-2 text-[11px] sm:text-xs text-slate-400 max-w-xl">
                Best fit if you&apos;re serious about growing an existing store or launching one with a defined budget for
                creative, ads, and development.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] sm:text-xs text-slate-200">
                <span className="inline-flex items-center rounded-full border border-emerald-500/70 bg-emerald-500/10 px-3 py-1">
                  <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Strategy & audit call included
                </span>
                <span className="inline-flex items-center rounded-full border border-sky-500/70 bg-sky-500/10 px-3 py-1">
                  <span className="mr-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  Reply within 24 hours
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mt-5 flex flex-wrap items-center gap-3 text-xs"
              >
                <a
                  href="mailto:hm0514832@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 px-4 py-2 text-xs sm:text-sm font-medium text-slate-50 border border-slate-600/70 shadow-soft transition transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <span>✉️</span>
                  <span>Email</span>
                </a>
                <a
                  href="https://wa.me/923166124490"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs sm:text-sm font-medium text-emerald-50 shadow-soft border border-emerald-500/80 transition transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
                <span className="inline-flex items-center rounded-full border border-slate-800/80 bg-slate-950/80 px-3 py-1 text-[11px] text-slate-400">
                  ⏱️ Limited new projects per month
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.24, duration: 0.45 }}
            className="relative mt-2 lg:mt-0 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/85 p-4 sm:p-5 shadow-[0_22px_80px_rgba(15,23,42,0.95)] backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_60%),_radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.2),_transparent_60%)] opacity-80" />
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="relative space-y-4 text-xs sm:text-sm"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human:
                  <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 outline-none ring-0 transition focus:border-accent.blue/80 focus:ring-2 focus:ring-accent.blue/40"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-medium text-slate-300">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 outline-none ring-0 transition focus:border-accent.blue/80 focus:ring-2 focus:ring-accent.blue/40"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="budget" className="block text-[11px] font-medium text-slate-300">
                    Approximate budget (optional)
                  </label>
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 outline-none ring-0 transition focus:border-accent.blue/80 focus:ring-2 focus:ring-accent.blue/40"
                  />
                </div>
                <div>
                  <label htmlFor="storeUrl" className="block text-[11px] font-medium text-slate-300">
                    Store URL (optional)
                  </label>
                  <input
                    id="storeUrl"
                    name="storeUrl"
                    type="url"
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 outline-none ring-0 transition focus:border-accent.blue/80 focus:ring-2 focus:ring-accent.blue/40"
                    placeholder="https://yourstore.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-medium text-slate-300">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 outline-none ring-0 transition focus:border-accent.blue/80 focus:ring-2 focus:ring-accent.blue/40"
                  placeholder="Tell us about your store, current performance, and what success looks like."
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmitClick}
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-50 shadow-soft border border-slate-600/80 transition transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Submit inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
