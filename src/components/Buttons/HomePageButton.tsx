import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type HomePageButtonProps = {
  text: string,
  icon: IconProp,
  handleClick: () => void
};

const HomePageButton:React.FC<HomePageButtonProps> = ({ text, icon, handleClick }) => (
    <button className="main-title__about-btn" type="button" onClick={ handleClick }>
      <div className="about-btn__icon">
        <FontAwesomeIcon icon={ icon } />
      </div>
      <div className="about-btn__text">
        { text }
      </div>
    </button>
  );

export default HomePageButton;