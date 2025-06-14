import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Java", level: 90, color: "from-red-500 to-orange-500" },
    { name: "Python", level: 85, color: "from-blue-500 to-green-500" },
    { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-500" },
    { name: "Spring Boot", level: 80, color: "from-green-500 to-emerald-500" },
    { name: "React", level: 85, color: "from-blue-400 to-cyan-500" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-blue-500" },
    { name: "FastAPI", level: 75, color: "from-green-600 to-teal-500" },
    { name: "Node.js", level: 78, color: "from-green-600 to-green-800" },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <div className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                    {skill.level}%
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  
                  <motion.div
                    className={`absolute top-0 h-3 w-3 bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                    initial={{ left: 0 }}
                    animate={isInView ? { left: `calc(${skill.level}% - 6px)` } : { left: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {['MySQL', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'Linux', 'REST APIs', 'GraphQL', 'MongoDB', 'Redis'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:shadow-md transition-shadow duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;