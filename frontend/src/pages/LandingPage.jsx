import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Product from '../components/Product';
import AccordionSection from '../components/AccordionSection';
import TestimonialSlider from '../components/Testimonials';
import Footer from '../components/Footer';

function LandingPage() {
    return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Product/>
      <AccordionSection />
      <TestimonialSlider />
      <hr />
      <Footer />  
    </div>
  );
}

export default LandingPage
