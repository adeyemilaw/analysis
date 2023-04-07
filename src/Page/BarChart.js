import React from 'react'
import BarChartJS from '../ChartJS/ChartjsBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyChart from '../HighChartJS/HighChartjsBar';

function BarChart() {
    return (
        <Container>
            <Row className='bg-light my-5'>
                <Col>
                    <BarChartJS/>
                </Col>
            </Row>
            <hr />
            
            <Row className='bg-secondary my-5'>
                <Col>
                    <MyChart/>
                </Col>
            </Row>


        </Container>
    )
}

export default BarChart
