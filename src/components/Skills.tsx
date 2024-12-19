import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, 
  FaGitAlt, FaGithub, FaBootstrap
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, 
  SiTailwindcss, SiDart, SiFlutter
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: any;
  level: number;
}

interface SkillsProps {
  skills: Skill[];
}

const skills: Skill[] = [
  { name: 'Python', icon: FaPython, level: 90 },
  { name: 'Dart', icon: SiDart, level: 85 },
  { name: 'HTML', icon: FaHtml5, level: 95 },
  { name: 'CSS', icon: FaCss3Alt, level: 90 },
  { name: 'JavaScript', icon: FaJs, level: 90 },
  { name: 'TypeScript', icon: SiTypescript, level: 85 },
  { name: 'React', icon: FaReact, level: 90 },
  { name: 'Next.js', icon: SiNextdotjs, level: 85 },
  { name: 'Express', icon: SiExpress, level: 80 },
  { name: 'Flutter', icon: SiFlutter, level: 85 },
  { name: 'Bootstrap', icon: FaBootstrap, level: 90 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95 },
  { name: 'MongoDB', icon: SiMongodb, level: 80 },
  { name: 'Git & GitHub', icon: FaGithub, level: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center"
            >
              {/* Circular Card */}
              <div className="relative w-16 h-16 rounded-full bg-white/80 dark:bg-primary-dark/80 
                            shadow-lg hover:shadow-xl transition-all duration-300 
                            transform hover:-translate-y-2 mb-2">
                {/* Icon Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <skill.icon className="w-8 h-8 text-accent-light dark:text-accent-dark 
                                     group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Circular Progress Bar */}
                <svg className="w-full h-full -rotate-90">
                  <circle
                    className="text-gray-200 dark:text-gray-700"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="transparent"
                    r="31"
                    cx="32"
                    cy="32"
                  />
                  <motion.circle
                    className="text-accent-light dark:text-accent-dark"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="transparent"
                    r="31"
                    cx="32"
                    cy="32"
                    initial={{ strokeDasharray: "194.779", strokeDashoffset: "194.779" }}
                    whileInView={{ 
                      strokeDashoffset: 194.779 - (194.779 * skill.level) / 100,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </svg>

                {/* Glowing Effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300"
                     style={{
                       background: `radial-gradient(circle, 
                         rgba(59, 130, 246, 0.1) 0%, 
                         rgba(37, 99, 235, 0) 70%
                       )`
                     }}
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-sm font-medium text-center text-gray-800 dark:text-gray-200 mb-1">
                {skill.name}
              </h3>

              {/* Progress Bar Outside */}
              <div className="w-20 h-0.5 relative overflow-hidden rounded-full 
                            bg-gradient-to-r from-gray-200/50 to-gray-300/50 
                            dark:from-gray-700/50 dark:to-gray-600/50">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: `${skill.level - 100}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r 
                           from-accent-light via-accent to-accent-dark"
                  style={{
                    boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
