import React, {useEffect, useState} from 'react';
import Canvas from './Canvas';
import BackEndClientComponent from './BackEndClient';

const parameters = {
    pixelsInXAxis: 1000,
    pixelsInYAxis: 1000,
    smallestReal: -2,
    largestReal: 2,
    smallestIm:-2, 
    largestIm:2,
    iterations: 100
  }

// const handleClickFunction = BackEndClientComponent(props);

function Orchestrate() {
  const [mandelbrotSet, setMandelbrotSet] = useState(null);
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    // Function to be triggered when the component is mounted
    async function handlePageLoad() {
      console.log('Page has loaded and MyComponent is mounted.');
      console.log('Calling back end');
      setMandelbrotSet(await BackEndClientComponent(parameters));
      isLoading(false);
    }

    handlePageLoad();
  }, []); // The empty dependency array ensures this runs only once on mount

  if (loading) {
      return <div>Loading...</div>;
  }
  return (
    <header className="App-header">
    {/* to do - actually do something with the result of this */}
    <div>
      <Canvas props={mandelbrotSet} parameters={parameters} />
    </div>
  </header>
  );
}

export default Orchestrate;