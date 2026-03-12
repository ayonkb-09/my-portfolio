import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-slate-900 px-6 sm:px-12 md:px-24 pt-20">
            <div className="max-w-5xl mx-auto w-full">

                {/* ছোট গ্রিটিং মেসেজ */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-teal-400 text-lg font-mono mb-4"
                >
                    Hi, my name is
                </motion.p>

                {/* তোমার নাম */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-slate-200 mb-4"
                >
                    Ayon Biswas.
                </motion.h1>

                {/* ক্যাচলাইন বা টাইটেল */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl md:text-6xl font-bold text-slate-400 mb-6"
                >
                    I build things for the web.
                </motion.h2>

                {/* ছোট একটি বায়ো */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-2xl text-slate-400 text-lg mb-10 leading-relaxed"
                >
                    I'm a final-year CSE student. I specialize in building exceptional digital experiences, occasionally bridging the gap between web technologies and AI.
                </motion.p>

                {/* কল টু একশন বাটন */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a
                        href="#projects"
                        className="inline-block px-7 py-4 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition duration-300 font-mono"
                    >
                        Check out my work
                    </a>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;