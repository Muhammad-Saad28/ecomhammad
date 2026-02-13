import React from 'react';
import Layout from '../components/Layout.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const projects = [
  {
    title: 'LuxCove – Premium Cosmetics Shopify Store',
    role: 'Shopify Store Build, Product Page Strategy, Meta & TikTok Ads',
    result: 'Turned a new cosmetics concept into a polished brand experience with ready-to-scale paid traffic foundations.',
    tech: ['Shopify', 'Meta Ads', 'TikTok Ads', 'Klaviyo'],
    url: 'https://www.luxcove.co/',
    description:
      'Designed a clean, high-converting cosmetics storefront with story-driven product pages, trust signals, and UGC-style creatives, then aligned campaigns and tracking from first click to repeat purchase.'
  },
  {
    title: 'Trendlio – Accessories & Streetwear Shopify Store',
    role: 'Shopify Store Build, Conversion Optimization, Paid Social',
    result: 'Lifted add-to-cart rate and bundled orders across watches, hoodies, and accessories.',
    tech: ['Shopify', 'Meta Ads', 'TikTok Ads', 'Google Analytics'],
    url: 'https://trendlio.shop/',
    description:
      'Built a bold, mobile-first layout that spotlights bestsellers and bundles, then structured paid campaigns around key product categories to drive impulse buys and returning shoppers.'
  }
];

const PortfolioAbdullah = () => {
  return (
    <Layout>
      <Navbar />
      <div className="space-y-10 sm:space-y-12 lg:space-y-14">
        <section className="scroll-mt-24">
          <div className="section-max-width">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7">
              <img
                src="/Abdullah.jpeg"
                alt="Muhammad Abdullah"
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
                  Muhammad Abdullah — E-commerce & Marketing
                </h1>
                <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
                  Focused on Meta Ads, TikTok Ads, Shopify stores, and WordPress funnels. Below are example projects
                  showing how campaigns, offers, and tracking come together to produce consistent sales.
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
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent.blue/15 via-transparent to-accent.purple/20" />
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
                        className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-accent.blue hover:text-accent.blue/80 underline underline-offset-2"
                      >
                        View live store
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
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Results Gallery</h2>
            <p className="mt-2 text-xs text-slate-400 max-w-xl">
              Real client feedback and results from chats and platforms. Replace or expand these as you add more
              testimonials.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 items-stretch">
              {['/Sales/1.png', '/Sales/2.png', '/Sales/3.png'].map((src) => (
                <div
                  key={src}
                  className="rounded-xl border border-slate-800/80 bg-slate-950/70 shadow-soft p-1 flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt="Sales result screenshot"
                    className="w-full h-auto object-contain mx-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
};

export default PortfolioAbdullah;
