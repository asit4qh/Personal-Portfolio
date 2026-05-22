import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 border-t border-zinc-800">
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-6">About Me</h2>
      <div className="bg-zinc-900/50 p-5 sm:p-6 rounded-2xl border border-zinc-800/50">
        <p className="text-sm sm:text-base mb-4 leading-relaxed">
          I am a passionate Frontend Developer with a strong interest in building responsive and user-friendly web applications. I enjoy turning ideas into real, functional products with clean design and smooth user experience. My focus is on writing clean, maintainable code and creating interfaces that are both visually appealing and easy to use.
        </p>
        <p className="text-sm sm:text-base mb-4 leading-relaxed">
          I have worked on multiple projects, including a business website for an import-export company, where I collaborated with a team and handled the frontend development. I have also built projects like a basic authentication system with login, registration, and an admin dashboard, along with a hotel booking landing page that allows users to explore and book hotels after login. These projects helped me strengthen my understanding of frontend development, user flow, and real-world problem solving.
        </p>
        <p className="text-sm sm:text-base mb-4 leading-relaxed">I am comfortable working with core web technologies like HTML, CSS, and JavaScript, and I continuously explore modern tools and frameworks to improve my development skills. I pay attention to details like responsiveness, performance, and cross-browser compatibility to ensure a smooth experience for users.</p>
        <p className="text-sm sm:text-base mb-4 leading-relaxed">I enjoy learning new technologies, solving challenges, and improving my skills with every project I work on. My goal is to grow as a developer by building impactful applications and contributing to meaningful projects.</p>
      </div>
    </section>
  );
};

export default About;