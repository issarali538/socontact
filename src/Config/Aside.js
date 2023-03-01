import profile from '../assets/images/profile.jpeg';
import { Accordion,Button } from 'react-bootstrap';
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
            <div className='aside-wrapper'>
                <div className='aside-body'>
                    <div className="profile-img">

                        <img src={profile} alt="profil" />

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
                            <li className={`list-group-item  ${(active === "setting") ? "active-li" : ""}`}>
                                <Link exact to='/setting' onClick={() => handleClick('setting')}> Setting </Link>
                            </li>
                            <li className={`list-group-item  ${(active === "lead1") ? "active-li" : ""}`}>
                                <Link exact to='/lead1' onClick={() => handleClick('lead1')}> Lead1 </Link>
                            </li>
                            <li className={`list-group-item  ${(active === "lead2") ? "active-li" : ""}`}>
                                <Link exact to='/lead2' onClick={() => handleClick('lead2')}> Lead2 </Link>
                            </li>
                            <li className={`list-group-item  ${(active === "billing") ? "active-li" : ""}`}>
                                <Link exact to='/billing' onClick={() => handleClick('billing')}> Billing </Link>
                            </li>

                            <li className={`list-group-item  ${(active === "member-list") ? "active-li" : ""}`}>
                                <Link exact to='/member-list' onClick={() => handleClick('member-list')}> Member List </Link>
                            </li>
                        
                            <Outlet />
                        </ul>
                    </div>
                </div>
               
            </div>
        </aside>

    );
}

export default Aside;