import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden">
      <div className="fog-effect dark:opacity-70 opacity-30" />
      <div className="gradient-background" />
      <div className="gradient-arc" />
      <div className="animated-dots" />
      
      <div className="max-w-6xl mx-auto px-4 py-20 relative">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-8 sm:mb-20 z-10 mt-16 sm:mt-0"
          >
            <h1 
              className="metallic-text text-5xl sm:text-6xl md:text-8xl font-bold tracking-wider"
              data-text="Arav Patel"
            >
              Arav Patel
            </h1>
          </motion.div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6 md:space-y-8 w-full md:max-w-2xl text-center md:text-left"
            >
              <motion.h2 
                className="metallic-text text-3xl sm:text-4xl md:text-6xl font-bold"
                data-text="AI & ML Software Engineer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                AI & ML Software Engineer
              </motion.h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-amber-100/80">
                Specializing in artificial intelligence and machine learning applications. 
                Building intelligent solutions that transform ideas into reality.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <SocialLink href="https://github.com/aravpatel19" icon={<Github />} text="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/aravpatel-/" icon={<Linkedin />} text="LinkedIn" />
                <SocialLink href="mailto:aravpatel2319@gmail.com" icon={<Mail />} text="aravpatel2319@gmail.com" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative w-full max-w-[300px] sm:max-w-[400px] md:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 blur-3xl rounded-full"></div>
              <div className="relative z-10">
                <img 
                  src="https://i.imgur.com/4r5QIWu.jpg" 
                  alt="Profile" 
                  className="w-full aspect-square md:w-96 md:h-96 object-cover rounded-3xl image-fade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 dark:from-black/50 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <a
    href={href}
    className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full gold-gradient hover:bg-amber-500/20 transition-all backdrop-blur-sm border border-amber-500/20 text-sm sm:text-base text-gray-800 dark:text-amber-100 gradient-border-animation"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default Home;
