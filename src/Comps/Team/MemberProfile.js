import mem1 from '../../assets/images/mem1.jpeg';
import { Row, Card, Dropdown } from "react-bootstrap";
import { useState } from 'react';

const MemberProfile = () => {
    const [name, setName] = useState('David Wallium');
    return (
        <>
            <div className='new-member'>
                <Card className="border-0">
                    <Card.Body>
                        <h4 className="fw-bold mb-5">Add New Member</h4>
                        <div className="avatar d-flex">
                            <span className="">
                                <img src={mem1} alt="member" />
                            </span>
                            <div className='ps-5'>
                                <div className="input-plus-icons">
                                    <p className="mb-1">Phone</p>
                                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control mb-1 fw-bold text-muted" />
                                    <i className="fa fa-pen"></i>
                                </div>
                            </div>
                        </div>
                        <div className='edit-member-info-wrapper'>
                            <Row>
                                <div className='col-12'>
                                    <p className='text-muted mb-0'>Name </p>
                                    <input className='form-control' type="text" />
                                </div>
                                <div className='col-12'>
                                    <p className='text-muted mb-0 mt-2'>Phone Number </p>
                                    <input className='form-control' type="text" />
                                </div>
                                <div className='col-12'>
                                    <p className='text-muted mb-0 mt-2'>Email </p>
                                    <input className='form-control' type="text" />
                                </div>
                                <div className='col-12'>
                                    <button className='btn mt-3 me-3 btn-outline-info'>
                                        Add a list
                                    </button>
                                    <Dropdown className='d-inline'>
                                        <Dropdown.Toggle className='mt-3' variant="info" id="dropdown-basic">
                                            Admin
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">User</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Admin</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className='col-12'>
                                    <p className='text-muted mt-3'>Social Media</p>
                                </div>
                                <div className='col-12'>
                                    <div className='d-flex align-items-center'>
                                        <span className='fs-5'><i className="fa-brands fa-square-facebook"></i></span>
                                        <input className='form-control' type="text" />
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='d-flex align-items-center'>
                                        <span className='fs-5'><i className="fa-brands fa-linkedin-in"></i></span>
                                        <input className='form-control' type="text" />
                                    </div>
                                </div>
                                <div className='col-12 text-end'>
                                    <input type="submit" className='btn btn-primary mt-3' value="Add new Member" />
                                </div>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default MemberProfile;