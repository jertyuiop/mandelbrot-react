import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';
import BackEndClientComponent from './BackEndClient';
import Orchestrate from './Orchestrator';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   BackEndClientComponent(props);
  // }, []);


  return (
    <div className="App">
      <Orchestrate />
    </div>
  );
}

export default App;
