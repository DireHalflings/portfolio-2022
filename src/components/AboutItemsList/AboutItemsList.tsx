import React from 'react';
import { AboutItem } from '../../types';

type AboutItemsListProps = {
  list: Array<AboutItem>
};

const AboutItemsList:React.FC<AboutItemsListProps> = ({ list }) => {
  
  return (
    <div className="about-items-list">
      {
        list.map(({ title, location, date, bullets }) => {
          return (
            <div className="about-items-list__item">
              <div className="about-items-list__dates">
                <div className="about-items-list__start-date">{ date.start }</div>—
                <div className="about-items-list__end-date">{ date.end }</div>
              </div>
              <div className="about-items-list__content">
                <div className="about-items-list__title">{ title }</div>
                <div className="about-items-list__location">{ location }</div>

                <div className="about-items-list__bullets">
                  <ul>
                    {
                      bullets.map(bullet => {
                        return (
                          <li>{ bullet }</li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  )
};

export default AboutItemsList;