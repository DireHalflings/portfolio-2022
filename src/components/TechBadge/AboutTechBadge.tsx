import React from 'react';

type TechBadgeProps = {
  text: string,
  logo: string
};

const AboutTechBadge:React.FC<TechBadgeProps> = ({ text, logo }) => {
  
  

  const handleClick = () => {
    
  }

  return (
    <div className={ `about-tech-badge-container` } onClick={ handleClick }>
      <div className="about-tech-badge">
        <div className="about-tech-badge__logo">
          <img className="about-tech-badge__logo-img" src={ logo } alt={ `logo for ${ text }`} />
        </div>
        <div className="about-tech-badge__text">{ text }</div>
      </div>
    </div>
  );
}
export default AboutTechBadge;