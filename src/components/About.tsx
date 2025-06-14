import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl relative"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 z-10"></div>
                <img 
                  src="/my.jpg" 
                  alt="Praveen Dilshan"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-80"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full opacity-70"
                animate={{
                  y: [0, 15, 0],
                  x: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-left"
            >
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Praveen Dilshan</span>, 
                a passionate full stack and ML developer from Sri Lanka. I love building modern web apps with 
                React, Spring Boot, and Python-based ML tools.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Currently pursuing my degree at the <span className="font-semibold text-purple-600 dark:text-purple-400">Institute of Technology, University of Moratuwa</span>, 
                I'm constantly exploring new technologies and pushing the boundaries of what's possible in software development.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Team Player', 'Quick Learner', 'Innovation Driven'].map((trait, index) => (
                  <motion.span
                    key={trait}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;