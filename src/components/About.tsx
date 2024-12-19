import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-white/60 dark:bg-primary-dark/60">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent font-sans">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 font-sans">
          <p className="mb-6 text-lg sm:text-xl leading-relaxed">
            I am a passionate Software Engineer currently pursuing my B.Sc in Software Engineering at Addis Ababa Institute of Technology, maintaining a strong GPA of 3.85/4.
          </p>
          <p className="mb-6 text-lg sm:text-xl leading-relaxed">
            Through my experience at A2SV and as a Front-end Developer intern at Eskalate, I've developed a deep understanding of data structures, algorithms, and modern web development technologies.
            Enhanced code reusability by 30% through modular design and improved development efficiency by 20%.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            I'm dedicated to creating efficient, user-friendly applications and have a proven track record of enhancing code reusability and development efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
