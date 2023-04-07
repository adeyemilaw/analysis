import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import jsonData from '../data.json'; // import your JSON file here

const BarChartJS = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // keep a reference to the chart instance

  useEffect(() => {
    const chartCanvas = chartRef.current;
    const chartCtx = chartCanvas.getContext('2d');

    if (chartInstanceRef.current !== null) {
      chartInstanceRef.current.destroy(); // destroy the existing chart instance
    }

    chartInstanceRef.current = new Chart(chartCtx, {
      type: 'bar',
      data: {
        labels: jsonData.labels,
        datasets: [
          {
            label: 'Population',
            data: jsonData.data,
            backgroundColor: 'dodgerblue',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
        <div className='my-3  p-3'>
          <div className='text-center'>
            <h2>ChartJS Chart for the Data</h2>
          </div>
          <div class="chart-container">
            <canvas ref={chartRef}/>
        </div>
        </div>
        
   
)
};

export default BarChartJS;
