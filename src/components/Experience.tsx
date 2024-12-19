import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: 'Front-end Developer Intern',
    company: 'Eskalate',
    period: 'Jun 2023 - Sep 2023',
    description: [
      'Developed responsive web applications using React and TypeScript',
      'Improved code reusability by 30% through modular design',
      'Collaborated with UI/UX team to implement pixel-perfect designs',
      'Optimized application performance by reducing load time by 25%'
    ]
  },
  {
    title: 'Software Engineering Student',
    company: 'A2SV',
    period: 'Jan 2023 - Present',
    description: [
      'Solved 500+ DSA problems on LeetCode and other platforms',
      'Achieved top 10% ranking in weekly coding competitions',
      'Mentored junior developers in problem-solving techniques',
      'Contributed to open-source projects and team assignments'
    ]
  },
  {
    title: 'Software Engineering Student',
    company: 'Addis Ababa Institute of Technology',
    period: 'Sep 2020 - Present',
    description: [
      'Maintaining a GPA of 3.85/4.0',
      'Specialized in Software Engineering',
      'Participated in various hackathons and coding competitions',
      'Led team projects in software development courses'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-[26px] bottom-0 w-0.5 bg-gradient-to-b from-accent-light to-accent-dark opacity-20" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-[6px] w-[22px] h-[22px]">
                <div className="w-full h-full rounded-full bg-white dark:bg-primary-dark border-2 border-accent-light dark:border-accent-dark" />
                <div className="absolute inset-[4px] rounded-full bg-accent-light dark:bg-accent-dark" />
              </div>

              {/* Content */}
              <div className="bg-white/60 dark:bg-primary-dark/60 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-accent-light dark:text-accent-dark font-medium">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-accent-light dark:text-accent-dark mb-4">
                  {exp.company}
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
