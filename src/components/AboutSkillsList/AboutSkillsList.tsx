import React from 'react';
import AboutTechBadge from '../TechBadge/AboutTechBadge';
import { Badge } from '../../types';
import badgesData from '../../resources/data/techBadges';

type AboutListProps = {
  list: Array<string>,
  title: string
};

const AboutSkillsList:React.FC<AboutListProps> = ({ list, title }) => {

  const handleTechBadges = (badges: Array<string>) => {
    const tempBadges: Array<Badge> = [];

    for (let i = 0; i < badges.length; i++) {
      const foundBadges = badgesData.find(b => b.text.toLowerCase() === badges[i].toLowerCase());
      if (foundBadges !== undefined) tempBadges.push(foundBadges);
    }
    console.log(tempBadges);
    return tempBadges;
  }
  
  return (
    <div className="about-right-skills-container">
      <div className="about-right-contact__label">{ title }</div>
      <div className="about-right-contact__skills-list">
        {
          handleTechBadges(list).map(tech => {
            return <AboutTechBadge text={ tech.text } logo={ tech.logo } />
          })
        }
      </div>
    </div>
  );
};

export default AboutSkillsList;