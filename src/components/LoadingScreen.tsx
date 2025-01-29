import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold metallic-text mb-8 text-center"
          data-text="AP"
        >
          AP
        </motion.div>
        
        <div className="relative w-48 h-1 bg-amber-500/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'linear'
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
