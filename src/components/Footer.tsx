import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.button
            onClick={scrollToTop}
            className="mb-8 p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Praveen Dilshan
            </h3>
            <p className="text-gray-400 mb-6">
              Full Stack & ML Developer
            </p>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">
                © 2025 Praveen Dilshan. All rights reserved.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Built with React, TypeScript, and Framer Motion
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;