import { useState } from 'react';
import Routes from './Routes';
import './styles/App.scss';

function App() {

  const [animIndex, setAnimIndex] = useState(0);

  return (
    <div className="App">
      <Routes animIndex={ animIndex } />
    </div>
  );
};

export default App;
