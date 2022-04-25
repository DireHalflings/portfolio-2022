import React from 'react';
import PortfolioList from '../components/PortfolioList/PortfolioList';

type PortfolioProps = {
  
};

const Portfolio:React.FC<PortfolioProps> = () => {
  
  return (
    <div className="portfolio">
      <div className="portfolio__project-list">
        <h1>PORTFOLIO</h1>
        <div className="portfolio__filter-buttons">
          REACTJS HTML CSS GOLANG NODEJS PostgreSQL MySQL AWS REDUX TYPESCRIPT
        </div>
        <PortfolioList />
      </div>
    </div>
  )
}
export default Portfolio;