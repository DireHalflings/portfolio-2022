import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import bryson from '../resources/images/bryson_headshot.jpg';

type AboutProps = {
  
};

const About:React.FC<AboutProps> = () => {
  
  return (
    <div>
      <PageTitle text="About" />
      <div className="about">
        <div className="about-left">
          <img src={ bryson } alt="Headshot of Bryson in red shirt" />
        </div>
        <div className="about-right">
          <p>Bryson Taylor is a self-taught full-stack web developer that currently resides in Southern California. He has spent much of his career working with the UI/UX design process, frontend technology, both vanilla and frameworks, as well as backend web APIs, such as Node with Express, Golang Gin, and Python Flask. In addition to his contract work, he has also contributed to the web development community through teaching and mentorship. </p>
        </div>
      </div>
    </div>
  );
};
export default About;