import React from 'react';
import PieChartJS from '../ChartJS/ChatjsPie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HighChartjsPie from '../HighChartJS/HighChartjsPie';

function PieChart() {
  return (
    <Container>
    <Row className='bg-light my-5 w-75 m-auto'>
        <Col>
        <h2 className='text-center'>ChartJS Chart for the Data</h2>
        <PieChartJS />
        </Col>
    </Row>
    <hr />
    
    <Row className=' my-5'>
        <Col>
        <h2 className='text-center'>HighchartJS Chart for the Data</h2>
           <HighChartjsPie />
        </Col>
    </Row>


</Container>
  )
}

export default PieChart