import { Container, Row, Button, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from '../../assets/images/mem1.jpeg';

const Main = () => {
    return (
        <div className="dash-panel component">
            <div className="component-content" id="add-task">
                <Container>
                    <Row>
                        <Col sm={12} className="mb-2">
                            <Button variant="warning m-2">
                                Task
                            </Button>
                            <Button variant="outline-info m-2">
                                Event Calendar
                            </Button>
                            <Button variant="outline-info m-2">
                                Notes
                            </Button>
                        </Col>
                        <Col sm={12} className="mb-2">
                            <Button variant="outline-info m-2"><i className="fa fa-filter me-1"></i>Filter By</Button>
                            <Button variant="outline-info m-2"><i className="fa fa-filter me-1"></i>Filter By</Button>
                        </Col>
                    </Row>
                    <Row className="left-rigth-wrapper">
                        <Col sm={5}>
                            <div className="left-side">
                                <h2 className="fw-bold">Tasks</h2>
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h6 className="fw-bold m-0">Name Name Name</h6>
                                                <small>This person added by  this person</small>
                                                <div className="avatar">
                                                    <img src={avatar} alt="" />
                                                    <small className="fw-bold ms-2">Name Name Name</small>
                                                </div>
                                                <div>Actions</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between flex-column">
                                                <div className="justify-self-end">
                                                    <input type="checkbox" className="form-check" />
                                                </div>
                                                <div>
                                                  <Link to="" className="m-1"><i className="fa fa-eye"></i></Link>
                                                  <Link to="" className="m-1"><i className="fa fa-pen"></i></Link>
                                                  <Link to="" className="m-1"><i className="fa fa-trash"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h6 className="fw-bold m-0">Name Name Name</h6>
                                                <small>This person added by  this person</small>
                                                <div className="avatar">
                                                    <img src={avatar} alt="" />
                                                    <small className="fw-bold ms-2">Name Name Name</small>
                                                </div>
                                                <div>Actions</div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between flex-column">
                                                <div className="justify-self-end">
                                                    <input type="checkbox" className="form-check" />
                                                </div>
                                                <div>
                                                  <Link to="" className="m-1"><i className="fa fa-eye"></i></Link>
                                                  <Link to="" className="m-1"><i className="fa fa-pen"></i></Link>
                                                  <Link to="" className="m-1"><i className="fa fa-trash"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col sm={7}>
                            <div className="right-side">

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Main;