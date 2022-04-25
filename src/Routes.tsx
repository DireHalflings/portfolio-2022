import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import  { Routes as Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PageWrapper from './components/HOCs/PageWrapper';

type routesProps = {
  animIndex: number
};

const Routes:FC<routesProps> = ({ animIndex }) => {
  const location = useLocation();
  
  return (
      <AnimatePresence>
        <Switch key={ location.pathname } location={ location }>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <PageWrapper><About /></PageWrapper> } />
          <Route path="/portfolio" element={ <PageWrapper><Portfolio /></PageWrapper> } />
          <Route path="/contact" element={ <PageWrapper><Contact /></PageWrapper> } />
        </Switch>
      </AnimatePresence>
  );
}
export default Routes;