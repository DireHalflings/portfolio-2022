import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import  { Routes as Switch, Route, useLocation } from 'react-router-dom';
import PageTransitions from './pages/animations/PageTransitions';
import Home from './pages/Home';
import About from './pages/About';

type routesProps = {
  
};

const Routes:FC<routesProps> = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence>

        <Switch key={ location.pathname } location={ location }>
          <Route path="/" element={ <PageTransitions animIndex={ 0 }><Home /></PageTransitions> } />
          <Route path="/about" element={ <PageTransitions animIndex={ 1 }><About /></PageTransitions> } />
        </Switch>

    </AnimatePresence>
  );
}
export default Routes;