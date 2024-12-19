import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-light/10 to-transparent dark:from-accent-dark/10" />
      <div className="text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent leading-normal sm:leading-normal py-2">
            Hi, I'm Aregawi Fikre
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I'm a{' '}
            <ReactTyped
              strings={[
                'Software Engineer',
                'Mobile Developer',
                'Figma Designer',
                'Frontend Developer',
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className="text-accent-light dark:text-accent-dark"
            />
          </h2>
        </motion.div>
        <div className="flex gap-4 justify-center relative z-20">
          <button
            onClick={() => scrollToSection('#about')}
            className="px-6 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-full hover:bg-accent-dark dark:hover:bg-accent transition-colors cursor-pointer relative z-20"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-6 py-3 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded-full hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors cursor-pointer relative z-20"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
