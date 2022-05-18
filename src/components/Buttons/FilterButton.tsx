import React from 'react';

type FilterButtonProps = {
  text: string,
  logo: string,
  filters: Array<string>,
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
};

const FilterButton:React.FC<FilterButtonProps> = ({ text, logo, filters, setFilters }) => {
  
  const handleClick = () => {
    if (filters.map(f => f.toUpperCase()).includes(text.toUpperCase())) setFilters([...filters.filter(f => f !== text)]);
    else setFilters([...filters, text]);
  }

  const handleFilterButtonClass = () => {
    if (filters.map(f => f.toUpperCase()).includes(text.toUpperCase())) return 'selected';
    else return '';
  }

  return (
    <div className={ `filter-button-container ${ handleFilterButtonClass() }` } onClick={ handleClick }>
      <div className="filter-button">
        <div className="filter-button__logo">
          <img className="filter-button__logo-img" src={ logo } alt={ `logo for ${ text }`} />
        </div>
        <div className="filter-button__text">{ text }</div>
      </div>
    </div>
  );
}
export default FilterButton;