import React from 'react';
import PortfolioRow from './PortfolioRow';
import projectList from '../../resources/data/projects';

type PortfolioListProps = {
  filters: Array<string>
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
};

const PortfolioList:React.FC<PortfolioListProps> = ({ filters, setFilters }) => {

  const checkArrayUnion = (arrOne: Array<string>, arrTwo: Array<string>) => {
    return arrOne.some((elem: string) => arrTwo.includes(elem));
  }

  const handleFilterProjectList = () => {
    if (filters.length === 0) return projectList;
    return projectList.filter(p => {
      return checkArrayUnion(p.badges, filters.map(f => f.toLowerCase()));
    })
  };  
  
  return <div className="portfolio-list">
    {
      handleFilterProjectList()?.map((project, i) => <PortfolioRow key={ project.name + i } project={ project } filters={ filters } setFilters={ setFilters } />)
    }
  </div>
}
export default PortfolioList;