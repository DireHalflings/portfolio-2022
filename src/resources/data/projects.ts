import { Project } from '../../types';

import wavePoster from '../images/projectGifs/wave/wavePoster.png';
import waveAnim from '../images/projectGifs/wave/waveAnim.gif';
import portfolioPoster from '../images/projectGifs/portfolio/portfolioPoster.png';
import portfolioAnim from '../images/projectGifs/portfolio/portfolioAnim.gif';

const projectList: Array<Project> = [
  {
    name: "Wave Music Player",
    poster: wavePoster,
    animation: waveAnim,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor magni enim rerum repellat veniam iste eveniet dignissimos nesciunt repudiandae.",
    github: "github.com",
    live: "google.com",
    badges: ["reactjs", "sass", "html", "css", "javascript"]
  },
  {
    name: "Portfolio Website",
    poster: portfolioPoster,
    animation: portfolioAnim,
    description: "A portfolio website built in ReactJS using TypeScript. Page animations are done in Framer Motion. Styling is done in SASS.",
    github: "https://github.com/DireHalflings/portfolio-2022",
    live: "https://brysontaylor.net",
    badges: ["typescript", "javascript", "reactjs", "router", "html", "css", "sass", "nginx", "docker", "aws: ecs", "aws: ecr"]
  }
];

export default projectList;