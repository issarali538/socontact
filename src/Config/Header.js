import { useContext, useState } from 'react';
import logo from '../assets/images/logo.png';
import btnimg from '../assets/images/btn-img.png';



const Header = ({togglDarkMode}) => {
    const toggleAside = ()=>{
        document.querySelector('aside').classList.toggle('toggle-aside');
    }

    return (
        <header>
            <div className='row justify-content-between'>
                
                <div className='col-3 col-lg-4 d-flex'>
                    <div className="menu-btn-wrapper">
                        <button className='d-block d-lg-none btn btn-light me-2' onClick={()=>toggleAside()}>
                            <i className='fa fa-bars'></i>
                        </button>
                    </div>
                    <figure className='logo-wrapper mb-0'>
                        <img className='mt-1' src={logo} alt="logo" />
                    </figure>
                </div>
                <div className='col-9 col-lg-8'>
                    <nav className='text-end'>
                            <button className='btn text-muted me-2' onClick={()=>togglDarkMode(true)}>
                            <i class="fa-regular fa-moon"></i>
                            <span className='d-none d-md-inline'>dark mode</span>
                            </button>
                            <button className='btn btn-primary me-2'>
                            <i class="fa-solid fa-gift me-2"></i>
                            Earn Credit
                            </button>
                            <button className='btn btn-primary'>
                            <i class="fa-solid fa-gift me-2"></i>
                                 0 Credits
                            </button>
                    </nav>
                </div>
            </div>

        </header>
    );
}

export default Header;