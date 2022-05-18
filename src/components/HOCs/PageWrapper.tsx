import { AnimatePresence, motion } from 'framer-motion';
import { fadeAnim } from '../../pages/animations/animations';
import React from 'react';
import { Link } from 'react-router-dom';
import ColorName from '../ColorName/ColorName';
import MobileNav from '../MobileNav/MobileNav';

type PageWrapperProps = {
  header: string
};

const PageWrapper:React.FC<PageWrapperProps> = ({ children, header }) => {
  
  return (
    <div className="page-wrapper">
      <div className="page-wrapper__header">
        <div className="page-wrapper-header__name">
          <motion.div className="page-wrapper__upper">
            <ColorName offSet={ 1 } text='BRYSON' />
          </motion.div>
          <motion.div className="page-wrapper__lower">
            <ColorName offSet={ 4 } text='TAYLOR' />
          </motion.div>
        </div>
        <div className="page-wrapper__nav">
          <Link to ="/">Home</Link>
          <Link to ="/about">About Me</Link>
          <Link to ="/Contact">Contact</Link>
          <Link to ="/Portfolio">Portfolio</Link>
        </div>
      </div>
      <AnimatePresence>
        <motion.div variants={ fadeAnim } exit="exit" initial="initial" animate="animate" className="page-wrapper__body">
          { children }
        </motion.div>
      </AnimatePresence>
      <div className="page-wrapper__mobile-nav">
        <MobileNav />
      </div>
    </div>
  )
}
export default PageWrapper;