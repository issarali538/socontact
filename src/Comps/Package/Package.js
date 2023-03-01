import { Col,Card, Container, Row } from 'react-bootstrap';
import CarImage from '../../assets/images/card-background-img.png';
import PackagesCard from './PackagesCard';
import { useState } from 'react';

const Package = () => {
    const [click, setClick] = useState('plan');


    return (
        <>
            <div className="dash-panel component">
                <div className="component-content" id="packages">
                    <Container>
                        <Row>
                            <div className='col-md-8'>
                                <button onClick={() => setClick('invoice')} className={`btn ${(click === "invoice") ? "btn-warning" : "btn-outline-info"} m-2`}>Invoice</button>

                                <button onClick={() => setClick('information')} className={`btn m-2 ${(click === "information") ? "btn-warning" : "btn-outline-info"} me-3`}>Billing Information</button>

                                <button onClick={() => setClick('plan')} className={`btn m-2 ${(click === "plan") ? "btn-warning" : "btn-outline-info"} me-3`}>Plan</button>
                            </div>
                            <div className='col-md-4'>
                                <Card className='package-card mt-3 mt-md-0'>
                                    <Card.Body>
                                        <Row flex-row>
                                            <Col>
                                                <p>Credit</p>
                                                <p>Credit : <strong>1</strong></p>
                                                <p>Your Current Credit:  <strong>0</strong></p>
                                            </Col>
                                            <Col className="text-center">
                                                <img src={CarImage} alt="card imaage" />
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Row>
                        <Row>
                            <div className="package-card-wrapper">
                                <PackagesCard/>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Package;