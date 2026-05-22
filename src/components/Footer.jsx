import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 border-t border-zinc-900 bg-zinc-950 text-center">
      <p className="text-xs text-zinc-500 mb-3">Designed & Built by Asit</p>
      <div className="flex justify-center gap-4 text-xs font-medium">
        <a href="https://github.com/asit4qh" className="hover:text-indigo-400 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/jha-asit-ankur-sarojkumar-188075237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;