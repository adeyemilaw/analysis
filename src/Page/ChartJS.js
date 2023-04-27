import React from 'react'
import BarChart from '../ChartJS/ChartjsBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChart from '../ChartJS/ChatjsPie';
import LineChart from '../ChartJS/ChartjsLine';
import Footer from '../Component/Footer';

function ChartJS() {
    return (
        <>
            <Container fluid className='p-5 bg-light'>
                <div className='text-center'>
                    <h2>ChartJS Charts</h2>
                </div>
                <Row className='my-5 mx-auto'>
                    <Col>
                        <div className='text-center text-danger'>
                            <h3>Bar Chart</h3>
                        </div>
                        <BarChart/>
                    </Col>
                </Row>
                <hr/>

                <Row className='bg-light my-5 w-75 mx-auto'>
                    <Col>
                        <div className='text-center text-danger'>
                            <h3>Pie Chart</h3>
                        </div>
                        <PieChart/>
                    </Col>
                </Row>
                <hr/>
                <Row className='bg-light my-5'>
                    <Col>
                        <div className='text-center text-danger'>
                            <h3>Line Chart</h3>
                        </div>
                        <LineChart/>
                    </Col>
                </Row>
            </Container>
            <div className='bg-white py-5'>
            <div className='text-center text-info'>
                    <h3>ChartJS Questionaire</h3>
                </div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeplYGavJ12rk2pzVwIoUvWuJK4yTprKoK87ROkqTK7QimBOA/viewform?embedded=true" width="100%" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <Footer/>
        </>

    )
}

export default ChartJS
