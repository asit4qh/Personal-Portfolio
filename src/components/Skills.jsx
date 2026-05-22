import React from 'react';
import { motion } from 'framer-motion';

const CircularProgress = ({ score }) => {
  const percentage = score * 10; 
  
  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        
        <path
          className="text-slate-800"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        
        <motion.path
          className="text-cyan-500"
          strokeDasharray="100, 100"
          strokeWidth="3"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          initial={{ strokeDashoffset: 100 }} 
          whileInView={{ strokeDashoffset: 100 - percentage }} 
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      
      <div className="absolute text-[10px] font-bold text-slate-300">
        {percentage}%
      </div>
    </div>
  );
};


const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        { name: "HTML5", score: 9 },
        { name: "CSS3", score: 8.5 },
        { name: "JavaScript (ES6+)", score: 8 }
      ]
    },
    {
      title: "Frameworks & Libs",
      skills: [
        { name: "React.js", score: 7 },
        { name: "Tailwind CSS", score: 9 },
        
      ]
    },
    {
      title: "Tools & Tech",
      skills: [
        { name: "Git & GitHub", score: 8 },
        { name: "Responsive Design", score: 9 },
        { name: "VS Code", score: 7.5 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 md:py-20 border-t border-slate-800">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-10">Skills Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors duration-300"
          >
            <h3 className="text-lg font-bold text-cyan-400 mb-6 border-b border-slate-800 pb-3">
              {category.title}
            </h3>
            
            <div className="space-y-4">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center justify-between group">
                  <span className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
                    {skill.name}
                  </span>
                  
                  <CircularProgress score={skill.score} />
                </div>
              ))}
            </div>
            
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;