import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingMessages = JSON.parse(localStorage.getItem('portfolioMessages')) || [];
    
    const newMessage = {
      ...formData,
      date: new Date().toLocaleString()
    };
    
    localStorage.setItem('portfolioMessages', JSON.stringify([...existingMessages, newMessage]));
    
    setStatus('Message saved locally! Thanks for reaching out.');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-800">
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-16 items-center md:items-start max-w-5xl mx-auto">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-100 mb-6 tracking-tight">
            Say <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-500">Hello.</span>
          </h2>
          <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
            I'm currently looking for new frontend development opportunities. Whether you have a project idea, a job offer, or just want to connect—my inbox is always open.
          </p>
          
          <div className="space-y-4 text-sm font-medium text-zinc-300">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              <span>asitankurjha@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </span>
              <span>Delhi NCR, India</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-zinc-900/80 border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1.5">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-sm" 
                  placeholder="Your Name" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1.5">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-sm" 
                  placeholder="you@example.com" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1.5">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none text-sm" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
              >
                Send Message
              </button>
              
              {status && (
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center font-medium animate-pulse">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;