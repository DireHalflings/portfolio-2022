import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { Badge, Project } from '../../types';
import badgesData from '../../resources/data/techBadges';
import TechBadge from '../TechBadge/TechBadge';
import { motion } from 'framer-motion';

type PortfolioRowProps = {
  project: Project
};

const projectRowAnim = {
  initial: { 
    x: -150,
    opacity: 0 
  },
  animate: {
    x: 0,
    opacity: 1
  },
  tranisition: { type: 'tween', duration: .5 }
};

const PortfolioRow:React.FC<PortfolioRowProps> = ({ project }) => {

  const { animation, poster, name, description, github, live, badges } =project;

  console.log('poster', poster);
  console.log('animation', animation);

  const handleTechBadges = () => {
    const tempBadges: Array<Badge> = [];

    for (let i = 0; i < badges.length; i++) {
      const foundBadges = badgesData.find(b => b.text.toLowerCase() === badges[i]);
      if (foundBadges !== undefined) tempBadges.push(foundBadges);
    }

    return tempBadges;
  }
  
  return (
    <motion.div className="portfolio-list__row" variants={ projectRowAnim } initial="initial" whileInView={ projectRowAnim.animate } transition={ projectRowAnim.tranisition }>
      <div className="project-row__image-container">
        <div className="project-row__image-menu">
          <div className="image-menu__live">
            <div className="image-menu__live-icon">
              <FontAwesomeIcon icon={ faCode } />
            </div>
            <div className="image-menu__live-text">
              <a href={ live }>LIVE</a>
            </div>
          </div>
          <div className="image-menu__code">
            <div className="image-menu__code-icon">
              <FontAwesomeIcon icon={ faCodeBranch }/>
            </div>
            <div className="image-menu__code-text">
              <a href={ github }>SOURCE</a>
            </div>
          </div>
        </div>
        <img className="project-row__anim-image" src={ animation } alt="" />
        <img className="project-row__image" src={ poster } alt="" />
      </div>
      <div className="project-row__text">
        <div className="project-row__name">
          { name }
        </div>
        <div className="project-row__tech-badges">
          {
            handleTechBadges().map(({ text, logo }, i) => <TechBadge key={text + i} text={ text } logo={ logo } />)
          }
        </div>
        <div className="project-row__description">
          { description }
        </div>
        <div className="project-row__github">
          { github }
        </div>
        <div className="project-row__live">
          { project.live }
        </div>
      </div>
    </motion.div>
  );
}
export default PortfolioRow;