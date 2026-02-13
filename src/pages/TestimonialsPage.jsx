import React from 'react';
import Layout from '../components/Layout.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Testimonials from '../sections/Testimonials.jsx';

const TestimonialsPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className="space-y-20 sm:space-y-24 lg:space-y-28">
        <Testimonials />
        <Footer />
      </div>
    </Layout>
  );
};

export default TestimonialsPage;
