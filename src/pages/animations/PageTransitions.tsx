import React from 'react';
import { motion } from 'framer-motion';

type PageTransitionsProps = {
  animIndex: number;
};

const animations = [
  {
    initial: { x:0 },
    animate: { x:0 },
    exit: { 
      opacity: 0, x: "100vw",
      transition: { duration: 1 }
    }
  },
  {
    initial: {
      opacity: 0,
      x: "-100vw",
      transition: { duration: 1 }
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 }
    },
    exit: { 
      opacity: 0, x: "-100vw",
      transition: { duration: 1 }
    }
  }

]

const PageTransitions:React.FC<PageTransitionsProps> = ({ children, animIndex }) => {
  
  return (
    <motion.div 
      variants={ animations[animIndex] } 
      initial="initial"
      animate="animate"
      exit="exit"
    >
      { children }
    </motion.div>
  );
};

export default PageTransitions;