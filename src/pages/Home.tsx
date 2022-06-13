import React, { useRef, useState, useEffect } from 'react';
import { useMediaQuery, useWindowSize } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faUser, faComment, faFolder } from '@fortawesome/free-solid-svg-icons';
import CanvasLines from '../components/CanvasLines/CanvasLines';
import ColorName from '../components/ColorName/ColorName';
import HomePageButton from '../components/Buttons/HomePageButton';
import { fadeAnim } from './animations/animations';

type HomeProps = {
  
};

const Home:React.FC<HomeProps> = () => {

  const windowSize = useWindowSize();

  const name = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (name.current !== null) {
      const offsetTop = name.current['offsetTop'];
      setOffset(offsetTop);
    }
  }, [name, windowSize]);

  const isSmall = useMediaQuery('(max-width: 520px)');

  const firstNameAnim = isSmall ? {
    exit: {
      x: 16
    }
  } : {
    exit: {
      x: -200,
      transition: {
        stiffness: 150
      }
    }
  };

  const lastNameAnim = isSmall ? {
    exit: {
      x: -16
    }
  } : {
    exit: {
      x: 184,
      y: -64,
      transition: {
        stiffness: 150
      }
    }
  }

  const nameAnimation = isSmall ? {
    exit: {
      y: (-offset + 32),
      transition: { duration: 1 }
    }
  } : {
    exit: {
      y: (-offset + 32),
      transition: { duration: 1 }
    }
  };

  const navigate = useNavigate();

  const handleLeftButton = () => {
    navigate('/about');
  }

  const handleCenterButton = () => {
    navigate('/contact');
  }

  const handleRightButton = () => {
    navigate('/portfolio');
  }

  return (
    <div className="home">
      <motion.div className="main-title__name" ref={ name } variants={ nameAnimation } exit="exit">
          <motion.div className="home__upper" variants={ firstNameAnim } exit="exit">
            <ColorName offSet={ 1 } text='BRYSON' />
          </motion.div>
          <motion.div className="home__lower" variants={ lastNameAnim } exit="exit">
            <ColorName offSet={ 4 } text='TAYLOR' />
          </motion.div>
        </motion.div>
      <motion.div className="home__main-title" variants={ fadeAnim } exit="exit">
        <div className="home__tag-line">
          SOFTWARE DEVELOPER
        </div>
        <div className="main-title__buttons">
          <HomePageButton text="About Me" icon={ faUser } handleClick={ handleLeftButton } />
          <HomePageButton text="Contact" icon={ faComment } handleClick={ handleCenterButton } />
          <HomePageButton text="Portfolio" icon={ faFolder } handleClick={ handleRightButton } />
        </div>
      </motion.div>
      <motion.div className="canvas-bg" variants={ fadeAnim } exit="exit">
        <CanvasLines />
      </motion.div>
    </div>
  );
}
export default Home;