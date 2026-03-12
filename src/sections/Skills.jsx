import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants'; // আমাদের ডাটা ফাইল থেকে স্কিলগুলো আনছি

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 px-6 sm:px-12 md:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-200 mb-10 flex items-center">
          <span className="text-teal-400 font-mono text-xl mr-2"></span> My Skills
        </h2>
        
        <div className="flex flex-wrap gap-4">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="px-5 py-2 bg-slate-800 text-teal-300 rounded border border-slate-700 hover:border-teal-400 hover:-translate-y-1 transition duration-300 cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;