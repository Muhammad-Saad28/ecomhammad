import React from 'react';
import Layout from '../components/Layout.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../sections/Hero.jsx';
import Services from '../sections/Services.jsx';
import Team from '../sections/Team.jsx';
import Results from '../sections/Results.jsx';
import Tools from '../sections/Tools.jsx';
import About from '../sections/About.jsx';
import Contact from '../sections/Contact.jsx';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div className="space-y-20 sm:space-y-24 lg:space-y-28">
        <Hero />
        <Services />
        <Team />
        <Results />
        <Tools />
        <About />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
