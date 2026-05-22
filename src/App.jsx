import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-400 font-sans scroll-smooth selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection direction="up" delay={0.1}>
          <Hero />
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.2}>
          <About />
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.2}>
          <Skills />
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.2}>
          <Experience />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <Projects />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.3}>
          <Contact />
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
};

export default App;