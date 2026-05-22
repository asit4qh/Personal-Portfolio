import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const navImageUrl = "/src/assets/profile_pic.jpeg"; 

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        
        <div className="flex items-center gap-3">
          <img 
            src={navImageUrl}
            alt="Akhil"
            className="w-9 h-9 rounded-full object-cover border border-zinc-700"
          />
          <div className="text-xl font-bold text-zinc-100 tracking-tight">
            Jha Asit<span className="text-indigo-500"> Ankur</span>
          </div>
        </div>
        

        <div className="hidden md:flex gap-6">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium hover:text-indigo-400 transition-colors">
              {link}
            </a>
          ))}
        </div>


        <button className="md:hidden text-zinc-300" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-4 pt-2 pb-4 space-y-2">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block text-sm py-2 text-zinc-300 hover:text-indigo-400">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;