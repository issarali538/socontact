import { useState } from "react";
import { Container, Row, Card,Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import profile from '../../assets/images/profile.jpeg';
import {languages} from './Lang';

const Profile = () => {

    const [active, setActive] = useState('profile');

    const [name, setName] = useState('Sahibzada Issar Ali');
    const [phone, setPhone] = useState('859408540983');
    const [address, setAddress] = useState('Serai Naurang Lakki Marwat');
    const [email, setEmail] = useState('issaralisia@gmail.com');
    const [companyName, setCompanyName] = useState('ABC Company Name');
    const [flags, setFlags] = useState(languages);

    const handleClick = (clicked)=>{
        setActive(clicked)
    }
   
    let langHandle = (langid)=>{
       
        let selLang = document.querySelector(`.lang-${langid}`);
        document.querySelectorAll('[class^="lang-"]').forEach(element => {
            element.classList.remove('active');
        });
        document.getElementById('dropdown-flag').innerHTML = selLang.innerHTML;   
        selLang.classList.add('active');
           
    }

    return (
        <div className="dash-panel component">
            <div className="component-content" id="profile">
                <Container>

                    <Row>
                        <div className="col-12">
                            <button onClick={() => handleClick('profile')} className={`btn me-2 ${(active === "profile") ? "btn-warning" : "btn-outline-info"}`}>Profile</button>

                            <button onClick={() => handleClick('integration')} className={`btn me-2 ${(active === "integration") ? "btn-warning" : "btn-outline-info"}`}>Integration</button>

                            <button onClick={() => handleClick('api')} className={`btn me-2 ${(active === "api") ? "btn-warning" : "btn-outline-info"}`}>API</button>
                        </div>
                    </Row>

                    <Row>
                        <div className="col-md-7 profile-info-sec">
                            <Row>
                                <div className="col-sm-4">
                                    <div className="profile-img">
                                        
                                            <img src={profile} alt="profile img" />
                                        
                                        <div>
                                            <p className="text-info mt-2 text-center"><i className="fa fa-pen me-2"></i>Edit Your Profile Pic</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <Row>
                                        <div className="col-12">
                                            <div className="input-plus-icons name-feild-wrapper">
                                                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control mb-1 fw-bold" />
                                                <i className="fa fa-pen"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-plus-icons">
                                                <p className="mb-1">Phone</p>
                                                <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} className="form-control mb-1 fw-bold" />
                                                <i className="fa fa-pen"></i>
                                            </div>
                                            <div className="input-plus-icons">
                                                <p className="mb-1">Address</p>
                                                <input type="text" onChange={(e)=>setAddress(e.target.value)} value={address} className="form-control mb-1 fw-bold" />
                                                <i className="fa fa-pen"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-plus-icons">
                                                <p className="mb-1">Email</p>
                                                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mb-1 fw-bold" />
                                                <i className="fa fa-pen"></i>
                                            </div>
                                            <div className="input-plus-icons">
                                                <p className="mb-1">Company Name</p>
                                                <input type="text" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} className="form-control mb-1 fw-bold" />
                                                <i className="fa fa-pen"></i>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </Row>
                        </div>
                        <div className="col-md-5">
                            <div className="profile-card-wrapper">
                                <Card>
                                    <div className="card-body bg-light">
                                        <p className="fw-bold mb-4">Free Plan</p>
                                        <Link to="">
                                             <h3 className="fw-bold">Free</h3>
                                        </Link>
                                        <div className="free-card-footer">
                                            2 days ago <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <div className="col-12 mt-5">
                            <div  className="profile-download-card">
                                <Card>
                                    <div className="card-body">
                                        <h5 className="fw-bold">
                                            Download extension Chrome
                                        </h5>
                                        <span className="text-primary"><i className="fa-solid fa-square-check"></i></span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="col-12">
                            <div  className="profile-download-card">
                                <Card>
                                    <div className="card-body">
                                        <h5 className="fw-bold">
                                            Download extension Chrome
                                        </h5>
                                        <span className="text-primary"><i className="fa-solid fa-square-check"></i></span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="col-12">
                            <div  className="profile-download-card">
                                <Card className="not-gradient">
                                    <div className="card-body">
                                        <h5 className="fw-bold">
                                            Download extension Chrome
                                        </h5>
                                        <span style={{color:"lightblue"}}><i className="fa-solid fa-square-check"></i></span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <div className="col-12">
                            <h1 className="fw-bold mt-3 mb-3 mb-lg-4">Notifications</h1>
                        </div>
                        <div className="col-12">
                            <div className="radio-card mb-2">
                                <Card>
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="notification" />
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="radio-card mb-2">
                                <Card>
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="notification" checked={true} />
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="radio-card mb-2">
                                <Card>
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="notification"/> 
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <div className="col-12">
                            <h1 className="fw-bold mt-3 mb-3 mb-lg-4">Notifications</h1>
                        </div>
                        <div className="col-12">
                            <div className="radio-card mb-2">
                                <Card className="bg-light">
                                    <div className="card-body d-flex justify-content-between align-items-center">
                                        <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                        <div className="flags-btn-dropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="info" id="dropdown-flag">
                                                <i className="fa fa-flag me-2"></i>Change Language
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                              
                                                    <div style={{width:"12rem"}}>

                                                            {flags.map(f=>(
                                                        <Dropdown.Item className={`lang-${f.id}`} key={f.id} href="#/action-1" onClick={()=>langHandle(f.id)}>
                                                            <div className="flag-lang">
                                                                <img className="me-3" src={f.img} alt="flags" />
                                                                <span>{f.country}</span>
                                                            </div>
                                                        </Dropdown.Item>
                                                            ))}

                                                    </div>
                                               
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Profile;
