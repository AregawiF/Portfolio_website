import React, { useState, useEffect } from 'react';
import lightPattern from './assets/tech-pattern-light.svg';
import darkPattern from './assets/tech-pattern-dark.svg';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-80px 0px 0px 0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId.replace('#', ''));
      console.log('Found element:', element);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-primary-light dark:bg-background-dark transition-colors duration-300">
      <div 
        className={`fixed inset-0 pointer-events-none backdrop-blur-[1px] ${
          darkMode ? 'opacity-40' : 'opacity-30'
        }`}
        style={{
          backgroundImage: darkMode ? `url(${darkPattern})` : `url(${lightPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px',
          filter: 'blur(0.5px)'
        }}
      />

      <Navigation 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="relative pt-20">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills/>
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;
