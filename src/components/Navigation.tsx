import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import profilePhoto from '../assets/Profile_photo.jpg';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  scrollToSection
}) => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-primary-dark/80 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src={profilePhoto} 
            alt="Aregawi Fikre" 
            className="w-12 h-12 rounded-full object-cover border-2 border-accent-light"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent">
            Aregawi Fikre
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              className={`hover:text-accent-light transition-colors relative ${
                activeSection === section ? 'text-accent-light after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent-light' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-primary-light dark:bg-primary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-primary-light dark:bg-primary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-800" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-primary-light dark:bg-primary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-accent-light dark:text-accent-dark" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-accent-light dark:text-accent-dark" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-primary-dark/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button 
                  key={section}
                  className={`px-4 py-2 text-left rounded-lg hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors relative ${
                    activeSection === section ? 'text-accent-light dark:text-accent-dark after:absolute after:left-0 after:w-1 after:h-full after:bg-accent-light dark:after:bg-accent-dark' : ''
                  }`}
                  onClick={() => scrollToSection(`#${section}`)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
