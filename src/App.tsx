import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import DarkModeToggle from './components/DarkModeToggle';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;