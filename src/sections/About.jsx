import React from 'react';
import { motion } from 'framer-motion';

// ১. এখানে ছবিটিকে import করতে হবে (তোমার ছবির নাম ও লোকেশন অনুযায়ী)
import myImage from '../assets/IMG_20251222_083543.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 px-6 sm:px-12 md:px-24">
      <div className="max-w-4xl mx-auto">
        
        {/* সেকশন টাইটেল */}
        <h2 className="text-3xl font-bold text-slate-200 mb-10 flex items-center">
          <span className="text-teal-400 font-mono text-xl mr-2"></span> About Me
          <div className="ml-4 h-[1px] w-full max-w-xs bg-slate-700"></div>
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          
          {/* টেক্সট অংশ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3 text-slate-400 text-lg leading-relaxed space-y-4"
          >
            <p>
              Hello! I am a final-year Computer Science and Engineering student deeply passionate about creating interactive and responsive web applications. My journey in web development started with a curiosity about how things work on the internet, which quickly turned into a dedicated career path.
            </p>
            <p>
              As part of my academic curriculum, I completed an internship at Ontek Horizon, where I gained valuable hands-on experience in real-world IT solutions. While my primary focus is building robust web applications using the MERN stack, I am also fascinated by the intersection of web technologies and Artificial Intelligence.
            </p>
            <p>
              When I'm not writing code or working on my final-year thesis, you can often find me reading non-fiction books to improve my English and broaden my perspective.
            </p>
          </motion.div>

          {/* ছবির অংশ */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 flex justify-center mt-8 md:mt-0"
          >
            <div className="relative group w-64 h-64">
              {/* ছবির পেছনের বর্ডার ইফেক্ট */}
              <div className="absolute inset-0 border-2 border-teal-400 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-300"></div>
              
              {/* মূল ছবি */}
              <div className="absolute inset-0 bg-slate-700 rounded overflow-hidden z-10 hover:mix-blend-normal mix-blend-multiply opacity-80 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                 
                 {/* ২. এখানে import করা ভেরিয়েবলটি (myImage) ব্যবহার করেছি এবং ফিট করার জন্য ক্লাস দিয়েছি */}
                 <img 
                    src={myImage} 
                    alt="Ayon Biswas" 
                    className="w-full h-full object-cover" 
                 />

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;