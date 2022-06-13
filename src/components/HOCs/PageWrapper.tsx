import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowSize } from '../../hooks';
import { fadeAnim } from '../../pages/animations/animations';
import { Link } from 'react-router-dom';

import ColorName from '../ColorName/ColorName';
import MobileNav from '../MobileNav/MobileNav';

type PageWrapperProps = {
  header: string
};

const PageWrapper:React.FC<PageWrapperProps> = ({ children }) => {
  
  const windowWidth = useWindowSize().width || 0;

  const handleMenu = (widthTrigger: number) => {
    if (windowWidth > widthTrigger) return (
      <div className="page-wrapper__nav">
        <Link className="page-wrapper-nav__link" to="/">Home</Link>
        <Link className="page-wrapper-nav__link" to="/about">About Me</Link>
        <Link className="page-wrapper-nav__link" to="/Contact">Contact</Link>
        <Link className="page-wrapper-nav__link" to="/Portfolio">Portfolio</Link>
      </div>
    );

    return <MobileNav />
  }

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
        { handleMenu(520) }
      </div>
      <AnimatePresence>
        <motion.div variants={ fadeAnim } exit="exit" initial="initial" animate="animate" className="page-wrapper__body">
          { children }
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
export default PageWrapper;