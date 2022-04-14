import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import CanvasLines from '../components/CanvasLines/CanvasLines';
import ColorName from '../components/ColorName/ColorName';

type HomeProps = {
  
};

const Home:React.FC<HomeProps> = () => {
  
  return (
    <div>
      <div className="App__main-title">
        <Link className="main-title__about-btn" to={'/about'}>
          <div className="about-btn__icon">
            <FontAwesomeIcon icon={ faAngleDoubleLeft } />
          </div>
          <div className="about-btn__text">
            ABOUT ME
          </div>
        </Link>
        <div className="main-title__name">
          <div className="App__upper">
            <ColorName offSet={ 0 } text='BRYSON' />
          </div>
          <div className="App__lower">
            <ColorName offSet={ 3 } text='TAYLOR' />
          </div>
        </div>
        <div className="main-title__work-btn">
          <div className="about-btn__text">
            PORTFOLIO
          </div>
          <div className="about-btn__icon">
            <FontAwesomeIcon icon={ faAngleDoubleRight } />
          </div>
        </div>
      </div>
        <div className="App__tag-line">
          SOFTWARE DEVELOPER
        </div>
      <div className="canvas-bg">
        <CanvasLines />
      </div>
    </div>
  );
}
export default Home;