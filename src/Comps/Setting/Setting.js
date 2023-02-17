import { useState } from "react";
import { Container, Row, Card, Dropdown } from "react-bootstrap";
import Cards from './Cards';
import {CardData} from './CardData';

const Setting = () => {
    const offset = { x: 10, y: 10 };
    const [active, setActive] = useState('profile');
    const handleClick = (clicked) => {
        setActive(clicked)
    }
    return (
        <div className="dash-panel component">
            <div className="component-content" id="setting">
                <Container>
                    <Row>
                        <div className="col-12">
                            <Card className="border-0 dark-mode-card-setting">
                                <Card.Body>
                                    <button onClick={() => handleClick('profile')} className={`btn me-2 ${(active === "profile") ? "btn-outline-info" : "btn-outline-info"}`}>Profile</button>

                                    <button onClick={() => handleClick('integration')} className={`btn me-2 ${(active === "integration") ? "btn-warning" : "btn-outline-info"}`}>Integration</button>

                                    <button onClick={() => handleClick('api')} className={`btn me-2 ${(active === "api") ? "btn-warning" : "btn-outline-info"}`}>API</button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-12">
                            <Card className="border-0 dark-mode-card-setting">
                                <Card.Body className="d-flex justify-content-between">
                                    <div>
                                        <Dropdown className="d-inline" offset={offset}>
                                            <Dropdown.Toggle variant="success" className="filter-btn me-2 btn-outline-info border border-info" id="dropdown-basic">
                                                <i className="fa fa-filter me-1"></i>Filter
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown className="d-inline" offset={offset}>
                                            <Dropdown.Toggle variant="success" className="filter-btn border border-info me-2 btn-outline-light" id="dropdown-basic">
                                                <i className="fa fa-user me-1"></i>Added By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div>
                                        <div className="input-group">
                                            <span className="input-group-text search-feild-icon text-muted">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </span>
                                            <input type="text" value="" id="search" className="form-control tbl-search-feild" placeholder="Search..." aria-label="search" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                        </div>
                    </Row>
                    <Container>
                        <Row>
                        {CardData.map(card=>(
                                <Cards card={card} />
                        ))}
                       </Row>
                    </Container>
                </Container>
            </div>
        </div>
    );
}

export default Setting;