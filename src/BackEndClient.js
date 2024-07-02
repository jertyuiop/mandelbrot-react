import React, { useState } from 'react';
import axios from 'axios';


const BackEndClientComponent = (props) => {
    const URL = 'http://localhost:8090/v1/getMandelbrotSet';
    const { noOfPixelsInXAxis, noOfPixelsInYAxis, smallestReal, largestReal, smallestIm, largestIm } = props;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
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
           console.log('hellooo' + queryParams);
          setLoading(true);
          const response = await axios.get(URL, { params: queryParams });
          setData(response.data);
          setLoading(false)
          return data;
        }
        catch (error) {
            setError(error);
            setLoading(false);
            console.log('An error occurred while fetching' + error);
        }
    }
    return fetchData;
}
export default BackEndClientComponent;