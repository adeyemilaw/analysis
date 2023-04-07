import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto';
import jsonData from '../data.json'; // import your JSON file here

const PieChart = () => {

    const displaySize = {
        width: "50vw",

        position: "relative"
    };
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null); // keep a reference to the chart instance

    useEffect(() => {
        const chartCanvas = chartRef.current;
        const chartCtx = chartCanvas.getContext('2d');

        if (chartInstanceRef.current !== null) {
            chartInstanceRef.current.destroy(); // destroy the existing chart instance
        }

        // generate random background colors for each data point
        const backgroundColors = jsonData.data.map(() => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgba(${r}, ${g}, ${b}, 0.7)`;
        });

        chartInstanceRef.current = new Chart(chartCtx, {
            type: 'pie', // set the chart type to pie
            data: {
                labels: jsonData.labels,
                datasets: [
                    {
                        label: 'My Chart',
                        data: jsonData.data,
                        backgroundColor: backgroundColors, // use the generated colors
                        borderColor: 'rgba(255, 255, 255, 1)',
                        borderWidth: 2
                    },
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: 'Population'
                    }
                },
                interaction: {
                    mode: 'point'
                }
            }
        });

    }, []);

    return (
           
                <div class="chart-container pie-h">
                    <canvas className='dchart' ref={chartRef}/>
                </div>
           
    )
};

export default PieChart;
