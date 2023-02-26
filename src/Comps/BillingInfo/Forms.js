import { Col, Card, Container, Row, Form } from 'react-bootstrap';
import { useState } from 'react';

const BillForm = () => {
    const [fname, setFname] = useState('Usman Khan');
    const [address, setAddress] = useState('XyZ Address');
    const [city, setCity] = useState('Reselio');   
    const {zipcode, setZipCode} = useState("24343");
    const [country, setCountry] = useState('Pakistan');
    return (
        <>
        <Card className='border-0'>
        <Card.Body>
            <Form className='mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <div className='form-input-wrapper'>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                        />

                        <i className='fa fa-pen text-muted'></i>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <div className='form-input-wrapper'>
                        <Form.Control
                            type="text"
                            placeholder="Enter Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />

                        <i className='fa fa-pen text-muted'></i>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <div className='form-input-wrapper'>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />

                        <i className='fa fa-pen text-muted'></i>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ZipCode</Form.Label>
                    <div className='form-input-wrapper'>
                        <Form.Control
                            type="text"
                            placeholder="Enter zip code"
                            value={zipcode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />

                        <i className='fa fa-pen text-muted'></i>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Country</Form.Label>
                    <div className='form-input-wrapper'>
                        <Form.Control
                            type="text"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />

                        <i className='fa fa-pen text-muted'></i>
                    </div>
                </Form.Group>
                <div className='text-end'>
                    <button className='btn btn-outline-info'>
                        Apply Information
                    </button>
                </div>
            </Form>
            </Card.Body>
            </Card>
        </>
    );
}

export default BillForm;