import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 px-6 sm:px-12 md:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-200 mb-10 flex items-center">
          <span className="text-teal-400 font-mono text-xl mr-2"></span> Some Things I've Built
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-teal-400 hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4 hover:text-teal-400 cursor-pointer transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-3 text-sm font-mono text-teal-400/80">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;