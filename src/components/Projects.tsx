import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import recipeAppThumb from '../assets/Fir_projectThumb.png';
import portfolioThumb from '../assets/port.png';
import demozAppThumb from '../assets/Demoz_app.jpg';
import jobListingAppThumb from '../assets/jobList_app.png';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: 'Recipe App',
    description: 'A web application for finding and sharing recipes',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Nest js', 'MongoDB'],
    image: recipeAppThumb,
    github: 'https://github.com/AregawiF/Firfir_tera',
    live: 'https://firfir-tera.vercel.app/',
  },
  {
    title: 'Job Listing App',
    description: 'A job listing app with filtering and bookmarking features',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    image: jobListingAppThumb,
    github: 'https://github.com/AregawiF/JobListingApp_Bookmark',
    live: '#'
  },
  {
    title: 'Demoz Mobile Payroll App',
    description: 'Cross-platform employee tracking and management app with adding employees and statistics.',
    technologies: ['Flutter', 'Dart'],
    image: demozAppThumb,
    github: 'https://github.com/AregawiF/Demoz-Payroll',
    live: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects and skills',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: portfolioThumb,
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://your-portfolio-site.vercel.app'
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-white/60 dark:bg-primary-dark/60">
      <div className="container mx-auto px-2 md:px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="pb-12"
          itemClass="px-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-primary-dark rounded-xl shadow-lg overflow-hidden h-[500px] flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
