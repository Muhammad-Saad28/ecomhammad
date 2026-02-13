import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-800/80 py-3 text-[11px] text-slate-400">
      <div className="section-padding">
        <div className="section-max-width flex items-center justify-between">
          <p>© {year} Ecom Hammad. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/ecomabdullahh"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent.blue transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
