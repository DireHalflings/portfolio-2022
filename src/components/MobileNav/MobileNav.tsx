import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';

type MobileNavProps = {
  
};

const MobileNav:React.FC<MobileNavProps> = () => {
  
  const [active, setActive] = useState(false);

  const handleMobileButtonClass = () => {
    if (active) return "active";
    return "";
  }

  return (
    <div className="mobile-menu">
      <div className={ `mobile-menu-container ${ handleMobileButtonClass() }` }>
        <Link className="mobile-menu-link" to="/">Home</Link>
        <Link className="mobile-menu-link" to="/portfolio">Portfolio</Link>
        <Link className="mobile-menu-link" to="/about">About Me</Link>
        <Link className="mobile-menu-link" to="/contact">Contact Me</Link>
      </div>
      <div className="mobile-button-container">
        <div className="mobile-button-bg">
          <Hamburger size={ 32 } color="#000000" toggled={ active } toggle={ setActive } />
        </div>
      </div>
    </div>
  );
}
export default MobileNav;