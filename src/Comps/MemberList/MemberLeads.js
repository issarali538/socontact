import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from '../../assets/images/mem1.jpeg';


const MemberLeads = () => {
    return (
        <>
            <div className="left-side">
                <Card>
                    <Card.Body className="d-flex align-items-center">
                        <div>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="ps-3">
                            <h5 className="m-0 fw-bold">John Deo</h5>
                            <p className="m-0">Customer ID: 854098</p>
                        </div>
                    </Card.Body>
                </Card>
                <div className="lead-information pt-3 ps-3">

                    <div className="mb-2">
                        <Button variant="info me-4">
                            <select className="bg-info border-0">
                                <option selected>List</option>
                                <option selected>List1</option>
                                <option selected>List2</option>
                            </select>
                        </Button>

                        <Button variant="outline-primary">Add <i className="ms-1 fa fa-plus"></i></Button>
                    </div>
                    <div className="mb-4">
                    <Button variant="info me-4">
                            <select className="bg-info border-0">
                                <option selected>List</option>
                                <option selected>List1</option>
                                <option selected>List2</option>
                            </select>
                        </Button>
                        <Button variant="outline-primary">Add <i className="ms-1 fa fa-plus"></i></Button>
                    </div>
                    <div className="mb-2">
                        <p>
                            <span>Phone Number</span> <br/>
                            <strong>58490584930545980</strong>
                        </p>
                    </div>
                    <div className="mb-4 d-flex align-items-center">
                        <p className="m-0">
                            <span>Email</span><br/>
                            <strong>abc@gmail.com</strong>
                        </p>
                        <div className="ps-3">
                            <Button variant="outline-primary">Add <i className="me-1 fa fa-plus"></i></Button>
                        </div>
                    </div>
                    <div className="mb-4 company-information">
                        <p className="">
                            Company Name
                        </p>
                        <Card>
                            <Card.Body className="d-flex">
                                <div>
                                    <div className="company-dot"></div>
                                </div>
                                <div className="ps-3">
                                    <h5 className="fw-bold">Company Name</h5>
                                    <Link to="">Goto Website</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="company-category mb-4">
                        <Button variant="outline-info" className="m-2">Category-1</Button>
                        <Button variant="outline-info" className="m-2">Category-1</Button>
                        <Button variant="outline-info" className="m-2">Category-1</Button>
                        <Button variant="outline-info" className="m-2">Category-1</Button>
                        <Button variant="outline-info" className="m-2">Category-1</Button>
                        <Button variant="outline-info" className="m-2">Category-1</Button>
                        <Button variant="outline-info" className="m-2">Category-1</Button>
                        <Button variant="outline-primary" className="m-2">Add <i className="ms-1 fa fa-plus"></i></Button>
                    </div>
                    <div className="company-desc">
                        <p>Company Description</p>
                        <p><strong>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</strong> </p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MemberLeads;