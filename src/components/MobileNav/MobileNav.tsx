import React, { useState } from 'react';

type MobileNavProps = {
  
};

const MobileNav:React.FC<MobileNavProps> = () => {
  
  const [toggle, setToggle] = useState(false);

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__icon">
        {
          toggle? (
            <>
              
            </>
          ) : (
            <>
              <div className="mobile-menu-icon__line"></div>
              <div className="mobile-menu-icon__line"></div>
              <div className="mobile-menu-icon__line"></div>
            </>
          )
        }
      </div>
    </div>
  );
}
export default MobileNav;