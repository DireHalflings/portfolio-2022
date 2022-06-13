import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import AboutList from '../components/AboutSkillsList/AboutSkillsList';
import resume from '../resources/Bryson_Taylor_Resume.pdf';
import { about, workHistory, education, languages, reactTechnology, technologies, databases, software } from '../resources/data/resume';
import AboutItemsList from '../components/AboutItemsList/AboutItemsList';
import { useMediaQuery } from '../hooks';

type AboutProps = {
  
};

const About:React.FC<AboutProps> = () => {

  const isSmall = useMediaQuery('(max-width: 1300px)');

  return (
    <div className="about">
      <PageTitle text="About" />
      <div className="about-cta-container">
        <div className="about__cv-cta">
          <a href={ resume } target="_blank" rel="noreferrer">DOWNLOAD PDF CV</a>
        </div>
      </div>
      {
        isSmall ? (
          <div className="about__main-content">
            <div className="about__right">
              <div className="about-right__header">
                <div className="about-right-header__text">Bryson Taylor</div>
                <div className="about-right-header__tagline">Web Developer</div>
              </div>
            </div>
            <div className="about__left">
              <div className="about__header">
                <p>{ about }</p>
              </div>
              <div className="about-left__sub-title">
                Work History
              </div>
              <AboutItemsList list={ workHistory } />
              <div className="about-left__sub-title">
                Education
              </div>
              <AboutItemsList list={ education } />
            </div>
            <div className="about__right">
              <div className="about__skills">
                <div className="about-right-contact__title">Skills</div>
                <AboutList title="Languages" list={ languages } />
                <AboutList title="Technologies" list={ technologies } />
                <AboutList title="ReactJS Modules" list={ reactTechnology } />
                <AboutList title="Databases" list={ databases } />
                <AboutList title="Software" list={ software } />
              </div>
              <div className="about-right__contact">
                <div className="about-right-contact__title">Contact</div>
                <div className="about-right-contact__content">
                  <div className="about-right-contact__item">
                    <div className="about-right-contact__label">Address</div>
                    <div className="about-right-contact__text">Riverside, CA, 92509</div>
                  </div>
                  <div className="about-right-contact__item">
                    <div className="about-right-contact__label">Phone</div>
                    <div className="about-right-contact__text">
                      <a href="tel:562-286-1576">
                        (562) 286-1576
                      </a>
                    </div>
                  </div>
                  <div className="about-right-contact__item">
                    <div className="about-right-contact__label">E-mail</div>
                    <a href="mailto:brysonttaylor@gmail.com">
                      <div className="about-right-contact__text">brysonttaylor@gmail.com</div>
                    </a>
                  </div>
                  <div className="about-right-contact__item">
                    <div className="about-right-contact__label">linkedin</div>
                    <div className="about-right-contact__text">
                      <a href="https://www.linkedin.com/in/bryson-taylor/" target="_blank" rel="noreferrer">
                        https://www.linkedin.com/in/bryson-taylor/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="about__main-content">
            <div className="about__left">
              <div className="about__header">
                <p>{ about }</p>
              </div>
              <div className="about-left__sub-title">
                Work History
              </div>
              <AboutItemsList list={ workHistory } />
              <div className="about-left__sub-title">
                Education
              </div>
              <AboutItemsList list={ education } />
            </div>
            <div className="about__right">
              <div className="about-right__header">
                <div className="about-right-header__text">Bryson Taylor</div>
                <div className="about-right-header__tagline">Web Developer</div>
              </div>
              <div className="about-right__contact">
                <div className="about-right-contact__title">Contact</div>
                <div className="about-right-contact__content">
                  <div className="about-right-contact__item">
                    <div className="about-right-contact__label">Address</div>
                    <div className="about-right-contact__text">Riverside, CA, 92509</div>
                  </div>
                  <div className="about-right-contact__item">
                    <div className="about-right-contact__label">Phone</div>
                    <div className="about-right-contact__text">
                      <a href="tel:562-286-1576">
                        (562) 286-1576
                      </a>
                    </div>
                  </div>
                  <div className="about-right-contact__item">
                    <div className="about-right-contact__label">E-mail</div>
                    <a href="mailto:brysonttaylor@gmail.com">
                      <div className="about-right-contact__text">brysonttaylor@gmail.com</div>
                    </a>
                  </div>
                  <div className="about-right-contact__item">
                    <div className="about-right-contact__label">linkedin</div>
                    <div className="about-right-contact__text">
                      <a href="https://www.linkedin.com/in/bryson-taylor/" target="_blank" rel="noreferrer">
                        https://www.linkedin.com/in/bryson-taylor/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__skills">
                <div className="about-right-contact__title">Skills</div>
                <AboutList title="Languages" list={ languages } />
                <AboutList title="Technologies" list={ technologies } />
                <AboutList title="ReactJS Modules" list={ reactTechnology } />
                <AboutList title="Databases" list={ databases } />
                <AboutList title="Software" list={ software } />
              </div>
            </div>
          </div>
        )
      }
      
    </div>
  );
};
export default About;