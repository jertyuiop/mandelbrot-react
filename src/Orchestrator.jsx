import React, { useEffect } from 'react';
import Canvas from './Canvas';
import BackEndClientComponent from './BackEndClient';

const props = { 
    noOfPixelsInXAxis: 1000,
    noOfPixelsInYAxis: 1000,
    smallestReal: -2,
    largestReal: 2,
    smallestIm:-2, 
    largestIm:2 
  }

// const handleClickFunction = BackEndClientComponent(props);

function Orchestrate() {
  useEffect(() => {
    // Function to be triggered when the component is mounted
    function handlePageLoad() {      
      console.log('Page has loaded and MyComponent is mounted.');
      console.log('Calling back end');
      BackEndClientComponent(props)
    }

    handlePageLoad();
  }, []); // The empty dependency array ensures this runs only once on mount


  return (
    <header className="App-header">
    {/* to do - actually do something with the result of this */}
    <div>
      <Canvas />
    </div>
  </header>
  );
}

export default Orchestrate;