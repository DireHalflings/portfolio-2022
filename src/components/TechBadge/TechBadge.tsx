import React from 'react';

type TechBadgeProps = {
  text: string,
  logo: string
};

const TechBadge:React.FC<TechBadgeProps> = ({ text, logo }) => {
  
  return (
    <div className="tech-badge-container">
      <div className="tech-badge">
        <div className="tech-badge__logo">
          <img className="tech-badge__logo-img" src={ logo } alt={ `logo for ${ text }`} />
        </div>
        <div className="tech-badge__text">{ text }</div>
      </div>
    </div>
  );
}
export default TechBadge;