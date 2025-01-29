import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Multilingual AI Voice Translation App',
    description: "An AI-powered application that provides natural, context-aware translations in multiple languages, featuring voice cloning and a user-friendly interface. Built with ElevenLabs and OpenAI's GPT-4o-mini for seamless and authentic multilingual communication.",
    tags: ['Python', 'OpenAI API', 'ElevenLabs'],
    image: 'https://i.imgur.com/5XKtMqO.jpg',
    code_url: 'https://github.com/aravpatel19/Multilingual-Voice-Translation-Application',
    demo_url: 'https://multilingual-voice-translator-aravpatel.azurewebsites.net/',
  },
  {
    title: 'Deep Q-Learning Tetris Agent',
    description: 'Developed a reinforcement learning agent capable of playing Tetris autonomously using PyTorch and Deep Q-Networks (DQN). Trained the model to clear over 1,000 lines, achieving professional-level gameplay.',
    tags: ['Reinforcement Learning', 'Deep Q-Network (DQN)', 'Pytorch', 'Machine Learning'],
    image: 'https://i.imgur.com/On3twIn.jpg',
    code_url: 'https://github.com/aravpatel19/Tetris-DeepQLearning',
    demo_url: 'https://youtube.com/shorts/ps5WTudK2iQ',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-32 pb-20 relative overflow-hidden">
      <div className="fog-effect dark:opacity-70 opacity-30" />
      <div className="gradient-background" />
      <div className="gradient-arc" />
      <div className="animated-dots" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 metallic-text" data-text="Personal Projects">
            Personal Projects
          </h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, tags, image, code_url, demo_url, index }: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  code_url: string;
  demo_url: string;
  index: number;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: -5 },
      show: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }
    }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
    onClick={() => window.open(code_url, '_blank')}
    className="bg-gray-50 dark:bg-dark/80 backdrop-blur-sm p-6 rounded-xl border border-amber-500/10 transition-all hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 gradient-border-animation cursor-pointer"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-amber-100">{title}</h3>
      <p className="text-gray-700 dark:text-amber-100/70 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-amber-500/10 rounded-full text-gray-800 dark:text-amber-100/80"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={code_url}
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 dark:text-amber-100/70 dark:hover:text-amber-100"
          onClick={(e) => {
            e.stopPropagation();
            window.open(code_url, '_blank');
          }}
        >
          <Github size={20} />
          <span>View Code</span>
        </a>
        <a 
          href={demo_url} 
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 dark:text-amber-100/70 dark:hover:text-amber-100"
          onClick={(e) => {
            e.stopPropagation();
            window.open(demo_url, '_blank');
          }}
        >
          <ExternalLink size={20} />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </motion.div>
);

export default Projects;
