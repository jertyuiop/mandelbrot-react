import React, {useRef, useEffect} from 'react';

const Canvas = ({mandelbrotSet, parameters}) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        //set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        context.fillStyle = 'red';
        context.fillRect(400, 25, parameters.pixelsInXAxis, parameters.pixelsInYAxis);
        console.log("Canvas props");
        console.log(mandelbrotSet);
        console.log("Canvas parameters");
        console.log(parameters);



    }, []);

    return <canvas ref={canvasRef}/>;
};

export default Canvas;