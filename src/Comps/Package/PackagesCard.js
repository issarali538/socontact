import { Col, Card, Container, Row, Button } from 'react-bootstrap';
import sellerBadge from '../../assets/images/bestseller-badge.png';

const PackagesCard = () => {
    return (
        <>
            <Row>
                <Col xl={4} md={6}>
                    <div className='ps-3'>
                        <strong>Yearly: </strong>
                        <label class="switch ms-3">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                        <p></p>
                    </div>
                    <Card style={{ maxWidth: "30rem" }}>
                        <Card.Body>
                            <h2 className='text-primary fw-bold mt-3'>Free Trial</h2>
                            <p className='m-0'>lorem lorem lorem lorem</p>
                            <p>lorem lorem lorem lorem  </p>
                            <p className='text-primary fw-bold'>
                                <sup>$</sup>
                                <span className='fs-1'>0</span>
                                <sub>year</sub>
                            </p>
                            <ul className='list-unstyled p-0 m-0'>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Member</span>
                                    <span>0$</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Project</span>
                                    <span>0$</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Users</span>
                                    <span>0$</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Storage</span>
                                    <span>-</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>More</span>
                                    <span>-</span>
                                </li>
                            </ul>
                            <div className="d-grid gap-2">
                                <Button variant="outline-info" size="lg">
                                   Your Current Plan
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} md={6}>
                    <Card className='not-fist-card best-package' style={{ background: " var(--color-white-1)", maxWidth: "30rem" }}>
                        <Card.Body>
                            <img src={sellerBadge} alt="selleer badge" />
                            <h2 className='text-primary fw-bold mt-3'>Personnel</h2>
                            <p className='m-0'>lorem lorem lorem lorem</p>
                            <p>lorem lorem lorem lorem  </p>
                            <p className='text-primary fw-bold'>
                                <sup>$</sup>
                                <span className='fs-1'>230</span>
                                <sub>year</sub>
                            </p>
                            <ul className='list-unstyled p-0 m-0'>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Member</span>
                                    <span>0$</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Project</span>
                                    <span>0$</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Users</span>
                                    <span>0$</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Storage</span>
                                    <span>-</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>More</span>
                                    <span>-</span>
                                </li>
                            </ul>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg">
                                    Upgrade
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>

                    <Card className='not-fist-card' style={{ maxWidth: "30rem" }}>
                        <Card.Body>
                            <h2 className='text-primary fw-bold text-warning mt-3'>Business</h2>
                            <p className="m-0">lorem lorem lorem lorem</p>
                            <p>lorem lorem lorem lorem  </p>
                            <p className='text-primary fw-bold text-warning'>
                                <sup>$</sup>
                                <span className='fs-1'>100</span>
                                <sub>year</sub>
                            </p>
                            <ul className='list-unstyled p-0 m-0'>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Member</span>
                                    <span>0$</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Project</span>
                                    <span>0$</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Users</span>
                                    <span>0$</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>Storage</span>
                                    <span>-</span>
                                </li>
                                <li className='d-flex justify-content-between mb-4'>
                                    <span>More</span>
                                    <span>-</span>
                                </li>
                            </ul>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg">
                                    Upgrade
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default PackagesCard;