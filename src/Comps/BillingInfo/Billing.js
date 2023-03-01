import { useRef, useState } from 'react';
import { Col, Card, Container, Row, Form } from 'react-bootstrap';
import BillingForm from './Forms';
import ShowBillInfo from './ShowBillInfo';

const Billing = () => {
    const [click, setClick] = useState('plan');

    return (
        <>
            <div className="component">
                <div className="component-content" id="billing">
                    <Container>
                        <Row>
                            <Col sm={12} >
                                <button onClick={() => setClick('invoice')} className={`btn ${(click === "invoice") ? "btn-warning" : "btn-outline-info"} m-2`}>Invoice</button>

                                <button onClick={() => setClick('information')} className={`btn m-2 ${(click === "information") ? "btn-warning" : "btn-outline-info"} me-3`}>Billing Information</button>

                                <button onClick={() => setClick('plan')} className={`btn m-2 ${(click === "plan") ? "btn-warning" : "btn-outline-info"} me-3`}>Plan</button>
                            </Col>
                        </Row>
                        <div className='billing-content'>
                            <Row className='gx-10'>
                                <Col sm={4}>
                                    <Card className='border-0 form-card'>
                                        <Card.Body>
                                            <h2 className='fw-bold'>Billing Information</h2>

                                            <Row>
                                                <Col sm={12}>
                                                    <BillingForm />
                                                </Col>
                                            </Row>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={8}>
                                    <Card className='border-0'>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={12}>
                                                    <ShowBillInfo />
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Billing;