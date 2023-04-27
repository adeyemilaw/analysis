import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HighChartBar from '../HighChartJS/HighChartjsBar';
import HighChartjsPie from '../HighChartJS/HighChartjsPie';
import HighChartjsLine from '../HighChartJS/HighChartjsLine';
import Footer from '../Component/Footer';

function HighChartJS() {
    return (
        <>
            <Container fluid className='p-5 bg-light'>
                <div className='text-center'>
                    <h2>HighChartJS Charts</h2>
                </div>
                <Row className='my-5 mx-auto'>
                    <Col>
                        <div className='text-center text-danger'>
                            <h3>Bar Chart</h3>
                        </div>
                        <HighChartBar/>
                    </Col>
                </Row>
                <hr/>

                <Row className='bg-light my-5 mx-auto'>
                    <Col>
                        <div className='text-center text-danger'>
                            <h3>Pie Chart</h3>
                        </div>
                        <HighChartjsPie/>
                    </Col>
                </Row>
                <hr/>
                <Row className='bg-light my-5'>
                    <Col>
                        <div className='text-center text-danger'>
                            <h3>Line Chart</h3>
                        </div>
                        <HighChartjsLine/>
                    </Col>
                </Row>
            </Container>
            <div className='bg-white py-5'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNt65M6fQkDSmHCm-Mwf2bgsnLIc8ei29xyYOoNW6Z9N9e7Q/viewform?embedded=true" width="100%" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <Footer/>
        </>
    )
}

export default HighChartJS
