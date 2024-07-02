import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';
import BackEndClientComponent from './BackEndClient';

function App() {

  const props = { 
    noOfPixelsInXAxis: 100,
    noOfPixelsInYAxis: 100,
    smallestReal: -2,
    largestReal: 2,
    smallestIm:-2, 
    largestIm:2 
  }
  
  const handleClickFunction = BackEndClientComponent(props);

  return (
    <div className="App">
      <header className="App-header">
        <div onClick = {handleClickFunction}>
          <Canvas  />
        </div>
      </header>
    </div>
  );
}

export default App;
