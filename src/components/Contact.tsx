import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaTelegram } from 'react-icons/fa';

const contacts = [
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'https://github.com/AregawiF',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/aregawi-fikre-ab596124b',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    link: 'mailto:aregawifikre@example.com',
    color: 'hover:text-red-500'
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    link: 'https://t.me/Areg_f',
    color: 'hover:text-blue-400'
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 bg-white/60 dark:bg-primary-dark/60">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-accent-light to-accent-dark bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together or just want to say hi!
            </p>
            <div className="flex justify-center gap-6">
              {contacts.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative p-4 rounded-lg bg-white/80 dark:bg-primary-dark/80 
                            shadow-lg hover:shadow-xl transition-all duration-300 
                            transform hover:-translate-y-1`}
                >
                  <contact.icon 
                    className={`w-6 h-6 text-gray-600 dark:text-gray-400 
                              transition-colors duration-300 ${contact.color}`}
                  />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 
                                 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-300">
                    {contact.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-primary-dark/80 rounded-xl p-8 shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white/50 dark:bg-primary-dark/50 focus:ring-2 focus:ring-accent-light 
                             dark:focus:ring-accent-dark focus:border-transparent transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white/50 dark:bg-primary-dark/50 focus:ring-2 focus:ring-accent-light 
                             dark:focus:ring-accent-dark focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white/50 dark:bg-primary-dark/50 focus:ring-2 focus:ring-accent-light 
                           dark:focus:ring-accent-dark focus:border-transparent transition-colors"
                  placeholder="Your message..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-lg 
                           hover:bg-accent-dark dark:hover:bg-accent transition-colors 
                           transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
