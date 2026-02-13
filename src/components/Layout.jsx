import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(168,85,247,0.15),_transparent_55%)]" aria-hidden="true" />
      <div className="section-padding">
        <main className="section-max-width py-8 sm:py-10 lg:py-12">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
