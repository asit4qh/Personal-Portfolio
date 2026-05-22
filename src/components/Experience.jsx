import React from 'react';

const Experience = () => {
  const keyPoints = [
    "Developed responsive and user-friendly web interfaces using modern frontend technologies.",
    "Built reusable components to improve development speed and maintain consistency across projects.",
    "Collaborated with designers and backend developers to deliver seamless user experiences",
    "Optimized website performance by improving load time and reducing unnecessary re-renders.",
    "Debugged and resolved UI issues to enhance overall product quality.",
    "Followed clean code practices and maintained version control using Git."
  ];

  return (
    <section id="experience" className="py-12 md:py-20 border-t border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6">Experience</h2>
      
      <div className="bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-cyan-500/30 transition-colors duration-300">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
          <h3 className="text-xl font-bold text-slate-100">Frontend Developer Intern</h3>
          <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.1)]">
            3 Months
          </span>
        </div>
        
        <p className="text-sm font-medium text-slate-400 mb-6">RC Probusiness Buddies Private Limited</p>
        
        <ul className="space-y-4">
          {keyPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 group">
              
              <div className="mt-0.5 shrink-0 text-cyan-500 group-hover:text-cyan-400 transition-colors">
                <svg 
                  className="w-5 h-5 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
              
              <span className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                {point}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Experience;