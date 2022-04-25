import React from 'react';
import PortfolioRow from './PortfolioRow';
import projectList from '../../resources/data/projects';

type PortfolioListProps = {
  
};

const PortfolioList:React.FC<PortfolioListProps> = () => {
  
  return <div className="portfolio-list">
    {
      projectList.map((project, i) => <PortfolioRow key={ project.name + i } project={ project } />)
    }
  </div>
}
export default PortfolioList;