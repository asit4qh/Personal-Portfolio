import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0, direction = 'up' }) => {
  // Direction ke hisaab se initial position set karna
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Ek baar animation hoga jab 20% element screen pe aayega
      transition={{ duration: 0.7, delay: delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;