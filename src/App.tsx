import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Interests from './pages/Interests';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
        <div 
          className="cursor-fog" 
          style={{
            transform: `translate(${cursorPosition.x - 75}px, ${cursorPosition.y - 75}px)`
          }}
        />
        <div className="laser-container">
          <div className="laser"></div>
          <div className="laser"></div>
          <div className="laser"></div>
          <div className="laser"></div>
          <div className="laser"></div>
        </div>
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <>
              <Navbar />
              <main>
                <section id="home">
                  <Home />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="experience">
                  <Experience />
                </section>
                <section id="interests">
                  <Interests />
                </section>
              </main>
            </>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
