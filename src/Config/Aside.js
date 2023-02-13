import profile from '../assets/images/profile.jpeg';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Aside = () => {

    const [active, setActive] = useState("dashboard");
    const [toggleAccordion, setToggleAccordion] = useState(false);

    const handleClick = (thisBtn) => {
        setActive(thisBtn);
    }
    return (
        <aside>
            <div className="profile-img">
                <figure>
                    <img src={profile} alt="profil" />
                </figure>
            </div>{/*/.profile-img*/}

            <ul className='list-unstyled aside-menu1'>
                <li>
                    <Link className="aside-menu1-link" to=''>
                        <i class="fa-sharp fa-solid fa-bell"></i>
                    </Link>
                </li>
                <li>
                    <Link className="aside-menu1-link" to=''>
                    <i class="fa-solid fa-eye"></i>
                    </Link>
                </li>
                <li>
                    <Link className="aside-menu1-link" to=''>
                    <i class="fa-solid fa-pen"></i>
                    </Link>
                </li>
            </ul>{/*aside-menu1*/}

            <div className='app-link-wrapper'>
                <ul class="list-group rounded-0">
                    <li className={`list-group-item  ${(active === "dashboard") ? "active-li" : ""}`}>
                        <Link exact to='/' onClick={() => handleClick('dashboard')} > Dashboard </Link>
                    </li>
                    <li className={`list-group-item  ${(active === "services") ? "active-li" : ""}`}>
                        <Link exact to='/services' onClick={() => handleClick('services')}> Services </Link>
                    </li>
                    <li className={`list-group-item  ${(active === "package") ? "active-li" : ""}`}>
                        <Link exact to='/package' onClick={() => handleClick('package')}> Package </Link>
                    </li>
                    <li className={`list-group-item  ${(active === "leads") ? "active-li" : ""}`}>
                        <Link exact to='/leads' onClick={() => handleClick('leads')}> Leads </Link>
                    </li>
                    <li className={`list-group-item  ${(active === "profile") ? "active-li" : ""}`}>
                        <Link exact to='/profile' onClick={() => handleClick('profile')}> Profile </Link>
                    </li>
                    <li className={`list-group-item  ${(active === "team") ? "active-li" : ""}`}>
                        <Link exact to='/team' onClick={() => handleClick('team')}> Team </Link>
                    </li>
                    <li className="list-group-item">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header onClick={() => setToggleAccordion(true)}>Dropdown</Accordion.Header>
                                <Accordion.Body className='px-0 pt-2'
                                    style={{ display: (toggleAccordion) ? 'block' : 'none' }}
                                >
                                    <ul class="list-group rounded-0">
                                        <li className={`list-group-item  ${(active === "dashboard") ? "active-li" : ""}`}>
                                            <Link exact to='/' onClick={() => handleClick('dashboard')} > Link-1 </Link>
                                        </li>
                                        <li className={`list-group-item  ${(active === "services") ? "active-li" : ""}`}>
                                            <Link exact to='/services' onClick={() => handleClick('services')}> Link-2 </Link>
                                        </li>
                                        <li className={`list-group-item  ${(active === "package") ? "active-li" : ""}`}>
                                            <Link exact to='/package' onClick={() => handleClick('package')}> Link-3 </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </li>
                    <Outlet />
                </ul>
            </div>{/*/.app-link-wrapper */}
        </aside>

    );
}

export default Aside;