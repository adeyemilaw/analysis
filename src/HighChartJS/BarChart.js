import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import jsonData from '../data.json'; // import your JSON file here

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current.chart;

    // Here, you can modify the chart options and data as needed
    chart.update({
      chart: {
        type: 'bar', // set the chart type to bar
      },
      title: {
        text: 'My Bar Chart',
      },
      xAxis: {
        categories: jsonData.labels,
      },
      yAxis: {
        title: {
          text: 'Values',
        },
      },
      series: [
        {
          name: 'Population',
          data: jsonData.data,
        },
      ],
    });
  }, []);

  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'My Bar Chart',
    },
    xAxis: {
      categories: jsonData.labels,
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    series: [
      {
        name: 'Population',
        data: jsonData.data,
      },
    ],
  };

  return(
    <>
        <div>
            <h2> </h2>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />;
    </>
  )
};

export default MyChart;
