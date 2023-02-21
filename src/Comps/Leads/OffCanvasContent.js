import {Card, Row } from "react-bootstrap";
import {Link} from 'react-router-dom';

const OffCanvasContent = () => {
    return (
        <div className="offanvas-content">
            <Card className="border-0 mb-2 sec-1">
                <Card.Body className="d-flex alig-items-center justify-content-between mb-2">
                    <div className="avatar d-flex align-items-center">
                        <span className="">
                            <img src="/../../assets/images/mem1.jpeg" alt="socontac member" />
                        </span>
                        <div className="mem-desc ps-3">
                            <p className="fw-bold mb-0">
                                ABC Member
                            </p>
                            <p className="text-muted">
                                Manager
                            </p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <div className="member-dtl-leads">
                <Card className="sec-2">
                    <Card.Body>
                        <div className="member-actions">
                            <button className="btn btn-lg btn-outline-info me-2">
                                <i className="fa-regular fa-envelope"></i>
                            </button>
                            <button className="btn btn-lg btn-outline-info me-2">
                                <i className="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button className="btn btn-lg btn-outline-info me-2">
                                <i className="fa-regular fa-calendar"></i>
                            </button>
                            <button className="btn btn-lg btn-outline-info me-2">
                                <i className="fa-solid fa-download"></i>
                            </button>
                            <button className="btn btn-lg btn-outline-info me-2">
                                <i className="fa-solid fa-phone"></i>
                            </button>
                            <button className="offcanvas-active-btn btn btn-lg btn-outline-info me-2">
                            <i className="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="sec-3">
                    <Card.Body>
                        <Row>
                            <div className="col-12 mb-2">
                                <button className="btn btn-outline-info me-2">
                                    <select className="form-select form-select-sm border-0">
                                        <option selected={true}>List</option>
                                        <option>List</option>
                                    </select>
                                </button>
                                <button className="btn btn-outline-primary">
                                   Add <i className="fa fa-plus ms-1"></i>
                                </button>
                            </div>
                            <div className="col-12 mb-2">
                                <button className="btn btn-outline-info me-2">
                                    <select className="form-select form-select-sm border-0">
                                        <option selected={true}>List</option>
                                        <option>List</option>
                                    </select>
                                </button>
                                <button className="btn btn-outline-primary">
                                    Add <i className="fa fa-plus ms-1"></i>
                                </button>
                            </div>
                            <div className="col-12">
                                <p></p>
                                <p className="text-info">Phone Number</p>
                                <p><strong>358439058340954380</strong></p>
                            </div>
                            <div className="col-12 mb-1">
                                <p></p>
                                <p className="text-info">Email</p>
                                <span className="me-2"><strong>issaralisia@gmail.com</strong></span>
                                <button className="btn btn-outline-primary">
                                    Add <i className="fa fa-plus ms-1"></i>
                                </button>
                            </div>
                            <div className="col-12 mb-2">
                                <p></p>
                                <p className="text-info">Company Name</p>
                                <Row>
                                    <div className="offcanvas-card col-2">
                                        <span></span>
                                    </div>
                                    <div className="col-10">
                                        <p className="m-0"><strong>Company Name</strong></p>
                                        <p classNama="m-0"><Link to="">Go to website</Link></p>
                                    </div>
                                </Row>
                            </div>
                            <div className="col-12 mb-2">
                                <p className="text-primary">Company Category</p>
                                <div>
                                    <button className="btn btn-outline-info me-2 mb-2">Company 1</button>
                                    <button className="btn btn-outline-info me-2 mb-2">Company 1</button>
                                    <button className="btn btn-outline-info me-2 mb-2">Company 1</button>
                                    <button className="btn btn-outline-info me-2 mb-2">Company 1</button>
                                    <button className="btn btn-outline-info me-2 mb-2">Company 1</button>
                                    <button className="btn btn-outline-info me-2 mb-2">Company 1</button>
                                    <button className="btn btn-primary me-2 mb-2">Add <i className="ms-1 fa fa-plus"></i></button>
                                </div>
                            </div>
                            <div className="col-12">
                                <p className="text-primary">Company Description</p>
                                <p><strong>lorem lore m lorem lore m lorem lore m lorem lore m lorem lore m</strong></p>    
                            </div>

                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default OffCanvasContent;