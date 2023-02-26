import { Col, Card, Container, Row, Form } from 'react-bootstrap';


const ShowBillInfo = () => {
    return (
        <>

            <Card className='card-information'>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <h3 className='fw-bold'>Billing Information</h3>
                            <p>
                                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                            </p>
                        </Col>
                        <Col md={6} className='d-flex justify-content-end'>
                            <Card className='billing-card-pic' style={{maxWidth:"18rem"}}>
                                <Card.Body className='text-muted'>
                                    <div className='clearfix mb-3'>
                                        <i className="fa-solid fa-sim-card"></i>
                                        <div className='float-end' style={{ paddingLeft: '15px' }}>
                                            <i className="fa-regular fa-circle"></i>
                                            <i className="fa-regular fa-circle" style={{ marginLeft: "-15px" }}></i>
                                        </div>
                                    </div>
                                    <div className='clearfix'>
                                        <span className='fs-3'>****  ****  **** ****</span>
                                        <i class="fa-solid fa-signal float-end"></i>
                                    </div>
                                    <div className='clearfix text-white'>
                                        <span className=''>Join Now</span>
                                        <span className="float-end">0/22</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12}>
                            <div className='mt-3'>
                                <p className='mb-2'>
                                    <strong className='fs-5'>Card Number</strong> <br/>
                                    <span className='fs-4'>**** **** **** **** 456</span>
                                </p>
                                <p className='mb-2'>
                                    <strong className='mb-2 d-inline-block fs-4'>CashOrder Name</strong> <br/>
                                    <span className='fs-3 fw-bold'>Johan Dev</span>
                                </p>
                                <p className='mb-2'>
                                    
                                    <strong className='fs-4'>Expiry Date</strong> <br/>
                                    <span className='fs-5 fw-bold'>12/13/2012</span>
                                </p>
                                
                                <p className='mb-2'>
                                    
                                    <strong className='fs-4'>Cvv</strong> <br/>
                                    <span className='fs-5 fw-bold'>****</span>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default ShowBillInfo;