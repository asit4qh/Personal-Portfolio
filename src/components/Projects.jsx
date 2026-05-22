import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'VR and Sons',
      points: [
        'Collaborated with a team to develop a business website for an import-export company.',
        'Designed and implemented the frontend interface with a focus on clean UI and responsiveness.',
        'Built reusable components to maintain consistency across pages.',
        'Worked closely with team members to integrate frontend with backend functionality.'
      ],
      tech: ['React', 'Tailwind',]
    },
    {
      title: 'Dreams POS - Authentication System',
      points: [
        'Developed a basic authentication system with user registration and login functionality.',
        'Implemented validation to prevent duplicate email registrations.',
        'Created a protected admin dashboard accessible only after successful login.',
        'Used local storage to manage and persist user data on the client side.'
      ],
      tech: ['React', 'Tailwind','Recharts','Lucide-React','React-Router']
    },
    {
      title: 'Fruits Bounty (Client Project)',
      points: [
        'Developed the frontend for a client-based project during internship at RC Pro Business Pvt. Ltd.',
        'Built responsive and user-friendly UI based on client requirements.',
        'Ensured smooth navigation and clean layout for better user experience.',
        'Collaborated with team members to deliver the project within deadlines.'
      ],
      tech: ['React', 'Tailwind','Recharts','Lucide-React','React-Router']
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 border-t border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">Featured Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="group bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-2xl flex flex-col h-full hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.05)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            <h3 className="text-xl font-bold text-slate-100 mb-5 group-hover:text-cyan-400 transition-colors">
              {proj.title}
            </h3>
            
            <ul className="space-y-3 mb-8 grow">
              {proj.points.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3">
                  
                  <div className="mt-1 shrink-0 text-cyan-500/80 group-hover:text-cyan-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  <span className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-slate-800/60">
              {proj.tech.map(t => (
                <span 
                  key={t} 
                  className="text-xs font-semibold px-2.5 py-1 bg-slate-950 border border-slate-700/50 rounded-md text-cyan-300 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;