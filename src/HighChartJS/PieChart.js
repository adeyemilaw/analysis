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
        type: 'pie', // set the chart type to pie
      },
      title: {
        text: 'My Pie Chart',
      },
      series: [
        {
          name: 'My Chart',
          data: jsonData.data.map((value, index) => {
            // generate a random color for each data point
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            return {
              name: labels[index],
              y: value,
              color: randomColor,
            };
          }),
        },
      ],
    });
  }, []);

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'My Chart',
    },
    xAxis: {
      categories: labels,
    },
    series: [
      {
        name: 'My Data',
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />;
};

export default MyChart;
