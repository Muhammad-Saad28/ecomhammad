import React from 'react';
import { motion } from 'framer-motion';
import { useInViewMotion } from '../hooks/useInViewMotion.js';

const loopItems = [
  'Brand Design',
  'Email & CRM',
  'Shopify',
  'Meta Ads',
  'TikTok Ads',
  'Custom Websites',
  'Web Apps',
  'UI/UX Design'
];

const badgeItems = ['Meta', 'TikTok', 'Shopify', 'Figma', 'HubSpot'];

const Tools = () => {
  const { ref, isInView } = useInViewMotion();

  return (
    <section id="tools" ref={ref} aria-label="Our daily workspace" className="scroll-mt-24">
      <div className="section-max-width">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="agency-card"
        >
          <div className="workspace-header">
            <h2>OUR DAILY WORKSPACE</h2>
            <h1>The platforms, dashboards, and design tools we live in</h1>
            <div className="sub">
              A looping strip of the places we actually work day to day from ad managers and storefronts to design
              apps so you can see where your brand will show up.
            </div>
          </div>

          <div className="loop-container">
            <div className="loop-track">
              {[...loopItems, ...loopItems].map((item, index) => (
                <span key={index} className="loop-item">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
