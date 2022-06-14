import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import techBadges from '../resources/data/techBadges';
import projects from '../resources/data/projects';
import FilterButton from '../components/Buttons/FilterButton';
import PortfolioList from '../components/PortfolioList/PortfolioList';
import PageTitle from '../components/PageTitle/PageTitle';

type PortfolioProps = {
  
};

const Portfolio:React.FC<PortfolioProps> = () => {

  const limitTechBadgesToActive = () => {
    let projectBadges: Array<string> = [];
    
    let badgeArrays = projects.map(proj => proj.badges);
    projectBadges = badgeArrays.flat();
    projectBadges = projectBadges.filter(b => b !== '');
    projectBadges = [...new Set(projectBadges)];

    
    setActiveTechBadges(techBadges.filter(badge => projectBadges.includes(badge.text.toLowerCase())));
  }

  const [activeTechBadges, setActiveTechBadges] = useState(techBadges);
  const [filters, setFilters] = useState<Array<string>>([]);

  useEffect(() => {
    limitTechBadgesToActive();
  }, []);

  return (
    <div className="portfolio">
      <PageTitle text="Portfolio" />
      <div className="portfolio__project-list">
        <div className="portfolio__filter-buttons">
          {
            activeTechBadges.sort((a, b) => a.text.localeCompare(b.text)).map(({text, logo}) => <FilterButton key={ uuid() } text={ text } logo={ logo } filters={ filters } setFilters={ setFilters } />)
          }
        </div>
        <PortfolioList filters={ filters } setFilters={ setFilters } />
      </div>
    </div>
  );
}
export default Portfolio;