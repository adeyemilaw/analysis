import React from 'react'
import BarChartJS from '../ChartJS/BarChartJS'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyChart from '../HighChartJS/BarChart';

function BarChart() {
  return (
    <Container>
      <Row>
        <Col>
          <BarChartJS />
        </Col>
        <Col>
          <MyChart />
        </Col>
      </Row>
      
    </Container>
  )
}

export default BarChart