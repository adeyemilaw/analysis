import React, {useEffect, useRef} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import jsonData from '../data.json'; // import your JSON file here

const HighChartBar = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = chartRef.current.chart;

        // Here, you can modify the chart options and data as needed
        chart.update({
            chart: {
                type: 'column', // set the chart type to bar
            },
            title: {
                text: 'Population Chart'
            },
            xAxis: {
                categories: jsonData.labels,
                title: {
                  text: 'Year',
                  fontSize: '13px'
              }
            },
            yAxis: {
                title: {
                    text: 'Population (millions)'
                }
            },
            series: [
                {
                    name: 'Population',
                    data: jsonData.data
                },
                
            ]
        });
    }, []);

    const options = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Population Chart'
        },
        xAxis: {
            categories: jsonData.labels
        },
        yAxis: {
            title: {
                text: 'Values'
            }
        },
        series: [
            {
                name: 'Population',
                data: jsonData.data
            },
        ]
    };

    return (
            <div className='m-3'>
                <div class="chart-container">
                    <HighchartsReact highcharts={Highcharts}
                        options={options}
                        ref={chartRef}/>
                </div>
            </div>
    )
};

export default HighChartBar;
