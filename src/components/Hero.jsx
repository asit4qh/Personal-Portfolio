import React from 'react';
import heroImg from '../assets/profile_pc.jpeg';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 min-[980px]:pt-48 min-[980px]:pb-32 flex flex-col md:flex-row items-center justify-between gap-6 min-[980px]:gap-12">
      
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-3xl sm:text-4xl md:text-3xl min-[980px]:text-6xl font-extrabold text-slate-100 mb-4 min-[980px]:mb-6 tracking-tight leading-tight">
          Frontend Developer crafting <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-500">
            digital experiences.
          </span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-sm min-[980px]:text-lg max-w-2xl mb-6 min-[980px]:mb-10 px-2 md:px-0 text-slate-400">
          Hi, I'm Akhil. I build clean, fast, and responsive user interfaces. Based in Delhi NCR, turning ideas into functional code.
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-3 w-full px-2 md:px-0">
          <a href="#projects" className="px-5 py-2.5 min-[980px]:px-8 min-[980px]:py-4 text-sm md:text-xs min-[980px]:text-base bg-cyan-600 hover:bg-cyan-500 text-slate-950 rounded-lg font-bold transition-colors w-full sm:w-auto text-center shadow-lg shadow-cyan-500/20">
            View Projects
          </a>
          <a href="#contact" className="px-5 py-2.5 min-[980px]:px-8 min-[980px]:py-4 text-sm md:text-xs min-[980px]:text-base bg-slate-900 border border-slate-700 hover:border-cyan-500 text-slate-200 rounded-lg font-medium transition-colors w-full sm:w-auto text-center">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 justify-center md:justify-end">
        <div className="relative">
          <div className="absolute -inset-4 bg-linear-to-r from-cyan-600/20 to-teal-600/20 rounded-full blur-3xl opacity-70"></div>
          
          <img 
            src={heroImg} 
            alt="Asit - Frontend Developer"
            className="relative w-56 h-56 min-[980px]:w-87.5 min-[980px]:h-87.5 object-cover rounded-3xl border-2 border-slate-800 shadow-2xl shadow-cyan-500/10"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;