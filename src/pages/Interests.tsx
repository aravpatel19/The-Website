import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Snowflake, Music } from 'lucide-react';

const interests = [
  {
    title: 'Skiing',
    icon: <Snowflake size={40} />,
    description: <>
      <p>I love skiing and exploring new resorts whenever I get the chance.</p>
      
      <p className="mt-2">The first two photos are from the Matterhorn mountains in Zermatt, Switzerland. Skiing there felt like a dream, with steep runs and some of the best slopes I've ever shredded.</p>
      
      <p className="mt-2">The third photo is from Killington, Vermont, where the challenging terrain and fast-paced trails always keep me on my toes. Whether it's in the Alps or on the East Coast, I'm always looking for the next thrill and the hardest runs to conquer.</p>
    </>,
    images: [
      'https://i.imgur.com/m7ys3Nc.jpg',
      'https://i.imgur.com/Yo7KceG.jpg',
      'https://i.imgur.com/CG61fe1.jpg'
    ]
  },
  {
    title: 'Hiking',
    icon: <Mountain size={40} />,
    description: <>
      <p>Exploring nature trails and conquering new peaks is one of my favorite ways to experience the world.</p>
      
      <p className="mt-2">These photos are from the Pico del Veleta hike in the Sierra Nevada mountains near Granada, Spain. At an elevation of 3,395 meters (11,138 feet) and temperatures dropping to -7°C in October, this hike was both challenging and unforgettable.</p>
      
      <p className="mt-2">I tackled it with five friends I met while studying abroad, each from different corners of the globe, making the experience even more special. From the breathtaking views to the sense of accomplishment at the summit, this hike was a highlight of my time in Spain.</p>
    </>,
    images: [
      'https://i.imgur.com/GHy9YoF.jpg',
      'https://i.imgur.com/H9u1ppC.jpg',
      'https://i.imgur.com/V4IVZDm.jpg'
    ]
  },
  {
    title: 'Music',
    icon: <Music size={40} />,
    description: <>
      <p>Avid music listener and concert-goer. These three albums have been my soundtrack through the years:</p>
      
      <ul className="space-y-2 mt-2">
        <li>- Lucky Daye's <strong><em>Painted</em></strong>: Smooth, everyday vibes that keep life feeling easy and balanced.</li>
        <li>- J. Cole's <strong><em>Friday Night Lights</em></strong>: Relatable stories and motivation to keep grinding for my dreams.</li>
        <li>- Drake's <strong><em>If You're Reading This It's Too Late</em></strong>: Nothing hits harder when I'm shredding the slopes.</li>
      </ul>
      
      <p className="mt-4">Each album brings something unique, shaping the way I experience life, work, and adventure.</p>
    </>,
    images: [
      'https://i.imgur.com/onq732X.jpg',
      'https://i.imgur.com/7rx1r0V.jpg',
      'https://i.imgur.com/zi1h4dI.jpg'
    ]
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

const Interests = () => {
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
          <h2 className="text-4xl font-bold mb-12 metallic-text" data-text="Beyond Engineering">
            Beyond Engineering
          </h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {interests.map((interest, index) => (
              <InterestCard key={index} {...interest} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const InterestCard = ({ title, icon, description, images, index }: {
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
  images: string[];
  index: number;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
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
    className="bg-gray-50 dark:bg-dark/80 backdrop-blur-sm p-6 rounded-xl border border-amber-500/10 transition-all hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 gradient-border-animation"
  >
    <div className="h-48 relative">
      <div className="flex h-full">
        {images.map((image, i) => (
          <div key={i} className="flex-1 relative overflow-hidden">
            <img 
              src={image} 
              alt={`${title} ${i + 1}`} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
      {/* Overlay gradient that spans across all images */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-dark/95 via-transparent to-transparent pointer-events-none" />
    </div>
    <div className="p-6 relative">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-2 bg-amber-500/10 rounded-lg text-gray-900 dark:text-amber-100">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-amber-100">{title}</h3>
      </div>
      <div className="text-gray-700 dark:text-amber-100/70">{description}</div>
    </div>
  </motion.div>
);

export default Interests;
