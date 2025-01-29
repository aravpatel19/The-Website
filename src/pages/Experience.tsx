import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Building2, Briefcase } from 'lucide-react';

const timelineEvents = [
  {
    date: 'Spring 2024',
    position: 'R&D AI Engineer Contractor',
    company: 'Mindgrasp AI',
    description: 'Designed an internal Q&A AI tool, managed a vector database with over 2 million entries, and deployed advanced AI models to enhance educational tools.',
    icon: <Briefcase className="text-amber-500" size={24} />,
    companyLogo: 'https://i.imgur.com/A5MHDxe.jpg',
    website: 'https://www.mindgrasp.ai/'
  },
  {
    date: 'Summer 2023',
    position: 'Full Stack Software Engineer Intern',
    company: 'Fidelity Investments',
    description: 'Implemented machine learning-driven solutions for error detection, reduced operational costs by 60%, and developed data visualizations to improve user experience.',
    icon: <Building2 className="text-amber-500" size={24} />,
    location: 'Jersey City, New Jersey',
    companyLogo: 'https://i.imgur.com/z6MgykG.jpg',
    website: 'https://www.fidelity.com/'
  },
  {
    date: 'Summer 2022',
    position: 'Full Stack Software Engineer Intern',
    company: 'Fidelity Investments',
    description: 'Optimized financial processes and contributed to developing Power BI visualizations for real-time data insights.',
    icon: <Building2 className="text-amber-500" size={24} />,
    location: 'Durham, North Carolina',
    companyLogo: 'https://i.imgur.com/z6MgykG.jpg',
    website: 'https://www.fidelity.com/'
  },
  {
    date: 'Spring 2022',
    position: 'Student Consultant',
    company: 'QUEST Honors Program',
    description: 'Accepted into the QUEST Honors Program, a selective interdisciplinary program focused on business, engineering, and technology consulting.',
    icon: <GraduationCap className="text-amber-500" size={24} />,
    companyLogo: 'https://i.imgur.com/0xAtj5U.jpg',
    website: 'https://innovate.umd.edu/resources/quest'
  },
  {
    date: 'Fall 2021',
    position: 'Computer Science Student',
    company: 'University of Maryland',
    description: 'Began undergraduate studies at the University of Maryland, pursuing a degree in Computer Science.',
    icon: <GraduationCap className="text-amber-500" size={24} />,
    companyLogo: 'https://i.imgur.com/aZ2gxhZ.jpg',
    website: 'https://umd.edu/'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Experience = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-32 pb-20 relative overflow-hidden">
      <div className="fog-effect dark:opacity-70 opacity-30" />
      <div className="gradient-background" />
      <div className="gradient-arc" />
      <div className="animated-dots" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 metallic-text" data-text="Career Timeline">
            Career Timeline
          </h2>
          <motion.div
            ref={timelineRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative space-y-8"
          >
            <motion.div 
              className="absolute left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-amber-500/50 via-amber-500/30 to-transparent origin-top"
              style={{ scaleY: pathLength }}
            />
            {timelineEvents.map((event, index) => (
              <TimelineEvent key={index} {...event} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const TimelineEvent = ({ date, position, company, description, icon, companyLogo, location, website, index }: {
  date: string;
  position: string;
  company: string;
  description: string;
  icon: React.ReactNode;
  companyLogo: string;
  location?: string;
  website: string;
  index: number;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: -50 },
      show: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }
    }}
    onClick={() => window.open(website, '_blank')}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
    className="relative pl-16 md:pl-20 cursor-pointer"
  >
    <div className="absolute left-6 top-3 w-4 h-4 rounded-full bg-amber-500 border-4 border-white dark:border-black" />
    
    <motion.div 
      className="bg-gray-50 dark:bg-dark/80 backdrop-blur-sm p-6 rounded-xl border border-amber-500/10 transition-all hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 gradient-border-animation"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500/30 flex items-center justify-center bg-white">
            <img 
              src={companyLogo} 
              alt={company} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-amber-100">{position}</h3>
            <p className="text-gray-700 dark:text-amber-100/80">{company}</p>
            {location && (
              <p className="text-sm text-gray-600 dark:text-amber-100/60">{location}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 dark:text-amber-100/60">
          {icon}
          <span>{date}</span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-amber-100/70">{description}</p>
    </motion.div>
  </motion.div>
);

export default Experience;
