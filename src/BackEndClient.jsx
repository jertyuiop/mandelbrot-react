import React, { useState } from 'react';
import axios from 'axios';

const BackEndClientComponent = async (props) => {
    const URL = 'http://localhost:8090/v1/getMandelbrotSet';
    const { noOfPixelsInXAxis, noOfPixelsInYAxis, smallestReal, largestReal, smallestIm, largestIm } = props;
    console.log('fetching data, queryParams: ' + props)
    try{
        const queryParams = {
            noOfPixelsInXAxis: noOfPixelsInXAxis,
            noOfPixelsInYAxis: noOfPixelsInYAxis,
            smallestReal: smallestReal,
            largestReal: largestReal,
            smallestIm: smallestIm,
            largestIm: largestIm
        }
        const response = await axios.get(URL, { params: queryParams });

        console.log('Data has been retrieved');
        console.log('Data has been retrieved', response.data);
        return response.data;        
    }
    catch (error) {
        console.log('An error occurred while fetching' + error);
    }
}
export default BackEndClientComponent;