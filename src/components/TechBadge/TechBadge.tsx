import React from 'react';

type TechBadgeProps = {
  text: string,
  logo: string,
  filters: Array<string>,
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
};

const TechBadge:React.FC<TechBadgeProps> = ({ text, logo, filters, setFilters }) => {
  
  const handleClick = () => {
    if (filters.map(f => f.toUpperCase()).includes(text.toUpperCase())) setFilters(filters.filter(f => f !== text));
    else setFilters([...filters, text]);
  }

  const handleTechBadgeClass = () => {
    if (filters.map(f => f.toUpperCase()).includes(text.toUpperCase())) return 'selected';
    else return '';
  }

  return (
    <div className={ `tech-badge-container ${ handleTechBadgeClass() }` } onClick={ handleClick }>
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