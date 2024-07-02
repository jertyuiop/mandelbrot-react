import React, {useRef, useEffect} from 'react';

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        //set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        context.fillStyle = 'red';
        context.fillRect(400, 25, 1000, 1000);

    }, []);

    return <canvas ref={canvasRef}/>;
};

export default Canvas;