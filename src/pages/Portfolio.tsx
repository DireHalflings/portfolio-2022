import React, { useState } from 'react';
import techBadges from '../resources/data/techBadges';
import FilterButton from '../components/Buttons/FilterButton';
import PortfolioList from '../components/PortfolioList/PortfolioList';
import PageTitle from '../components/PageTitle/PageTitle';

type PortfolioProps = {
  
};

const Portfolio:React.FC<PortfolioProps> = () => {

  const [filters, setFilters] = useState<Array<string>>([]);
  
  return (
    <div className="portfolio">
      <PageTitle text="Portfolio" />
      <div className="portfolio__project-list">
        <div className="portfolio__filter-buttons">
          {
            techBadges.map(({text, logo}) => <FilterButton text={ text } logo={ logo } filters={ filters } setFilters={ setFilters } />)
          }
        </div>
        <PortfolioList filters={ filters } setFilters={ setFilters } />
      </div>
    </div>
  )
}
export default Portfolio;