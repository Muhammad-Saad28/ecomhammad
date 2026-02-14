import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));
const PortfolioHammad = lazy(() => import('./pages/PortfolioHammad.jsx'));
const PortfolioSaad = lazy(() => import('./pages/PortfolioSaad.jsx'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage.jsx'));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background text-slate-300 text-sm">
          Loading EcomHammad...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/hammad" element={<PortfolioHammad />} />
        <Route path="/portfolio/saad" element={<PortfolioSaad />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
