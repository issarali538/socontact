import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardImag from '../../assets/images/dboard-img.jpg';
import cardImag1 from '../../assets/images/card-background-img.png';
import { Link } from "react-router-dom";
import Chart from "../Chart";

const Dashboard = () => {
    const backgroundImage_ = {
        backgroundImage: `url(${CardImag})`,
    }
    return (
        <div className="dash-panel component">
            <h1>Overview</h1>
            <div className="component-content" id="dashboard">
                <Container>
                    <Row>
                        <div className="col-lg-8">
                            <Row>
                                <div className="col-md-6">
                                    <div className="card dashboard-card" style={backgroundImage_}>
                                        <p className="mt-2 mb-3 fw-bold fs-5">Learn Morea About LinkLead</p>
                                        <Link to="#"><h2>Download our Guide</h2></Link>
                                        <div className="card-verlay"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card dashboard-card" style={{ backgroundColor: '#e7e7fd', color: "#7E84A3" }}>
                                        <p className="mt-2 mb-3 fw-bold fs-5">Your Plan</p>
                                        <Link to="#" className="text-primary fw-bold"><h2>Free Plan</h2></Link>
                                        <p className="mb-3 fw-bold fs-5">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed</p>
                                        <Link to="" className="float-end upgrade-now-btn text-primary fw-bold" style={{ color: "#7E84A3" }}>Upgrade Now <i className="fa fa-angle-right"></i> </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card dashboard-card dashboard-yellow">
                                        <div className="inner-sec-left">
                                            <p className="mt-2 fw-bold fs-6">Your Plan</p>
                                            <p className="mt-auto">Lorem </p>
                                        </div>
                                        <div className="inner-sec-right">
                                            <div className="inner-card">
                                                <div className="inner-img-sec">
                                                    <span className="fs-2">
                                                        <i className="fa-solid fa-sim-card"></i>
                                                    </span>
                                                    <span className="fs-2 float-end">
                                                        <i className="fa-regular fa-circle"></i>
                                                        <i className="fa-regular fa-circle" style={{ marginLeft: '-0.9rem' }}></i>
                                                    </span>
                                                </div>
                                                <p className="text-center fs-3 mb-0">**** **** **** **** <span>||||</span></p>
                                                <div className="inner-card-footer">
                                                    <span>John Doe</span>
                                                    <span className="float-end">000000</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card dashboard-card dashboard-blue">
                                        <p className="mb-3">Credit</p>
                                        <p className="mb-0">Your Credti : <span className="fs-4 fw-bold">1</span></p>
                                        <p className="mb-0">Your Team Credits : <span className="fs-4 fw-bold">1</span></p>
                                        <img src={cardImag1} alt="Card Image" />
                                        <p className="position-absolute bottom-0" style={{ left: '0.6rem' }}>Get More Credits</p>
                                    </div>
                                </div>

                            </Row>
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="chart-container">
                                {/* <Chart /> */}
                            </div>
                        </div>
                    </Row>
                    <div className="">
                        <h2 className="mt-3">Accounts</h2>
                    </div>
                    <Row>
                        <div className="col-lg-8 ps-3 account-sec">
                            <Row>
                                <div className="col-12">
                                    <div className="d-flex account-card">
                                        <div className="icon-wrapper">
                                        <i className="fa-solid fa-calendar"></i>
                                        </div>
                                        <div className="ps-3" style={{flex:1}}>
                                            <p className="mb-2">Task</p>
                                            
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing eli
                                            <Link to='#' className="fw-bold fw-bold ms-3 float-lg-end d-block d-lg-inline text-end">
                                                Create an overflow <i className="fa fa-angle-right fs-6"></i>
                                            </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex account-card">
                                        <div className="icon-wrapper">
                                        <i className="fa-solid fa-users"></i>
                                        </div>
                                        <div className="ps-3" style={{flex:1}}>
                                            <p className="mb-2">Task</p>
                                            
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing eli
                                                <Link to='#' className="fw-bold fw-bold ms-3 float-lg-end d-block d-lg-inline text-end">
                                                Create an overflow <i className="fa fa-angle-right fs-6"></i>
                                            </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                               
                            </Row>
                        </div>
                        <div className="col-lg-4">
                            <div className="account-card-right">
                                <div className="card-right-text">
                                    <h5 className="mb-3">Sponser</h5>
                                    <div className="icon-wrapper-right">
                                        <i className="fa-regular float-end fa-handshake"></i>
                                    </div>
                                    <p>LoremLoremLoremLorem<br/>LoremLoremLorem</p>
                                </div>                                
                                <p className="text-end">
                                    <Link to="/" className="fw-bold">Ajouter des membres <i className="fa fa-angle-right me-2"></i></Link>
                                </p>
                            </div>
                        </div>
                    </Row>
                    <div className="">
                        <h2 className="mt-3">Integration</h2>
                    </div>
                    <Row>
                        <div className="col-12">
                            <div className="integration d-flex mb-3">
                                <div className="integration-icon-wrapper me-3">
                                <i className="fa-solid fa-earth-europe"></i>
                                </div>
                                <div className="integration-text">
                                    <h5>Integration SaleForce</h5>
                                    <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                </div>
                                   <Link className="float-end mt-4" to=""> <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="integration integration-2 d-flex mb-3">
                                <div className="integration-icon-wrapper me-3">
                                <i className="fa-solid fa-earth-europe"></i>
                                </div>
                                <div className="integration-text">
                                    <h5>Integration Hubspots</h5>
                                    <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                </div>
                                <Link className="float-end mt-4" to=""> <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Dashboard;