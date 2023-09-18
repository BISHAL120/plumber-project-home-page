import React, { useState } from 'react';
import './Navbar.css';

import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import logo from '../../../Images/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [icon, setIcon] = useState(false);

    return (
        <>
            <section className='section1'>
                <nav className='nav container '>
                    <div className='navbar position-relative '>
                        <div className='logo'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='ancor' >
                            <Link to="home">Home</Link>
                            <Link to="about">About</Link>
                            <Link to="services">Services</Link>
                            <Link to="contact">Contact</Link>
                            <Link to="blog">Blog</Link>
                            {/* <a href="#home"></a> */}
                            {/* <a href="#services"></a>
                            <a href="#about"></a>
                            <a href="#contact"></a>
                            <a href="#blog"></a> */}
                        </div>
                        {
                            icon ?
                                <div className='mobile-ancor ancor' >
                                    <Link to="home">Home</Link>
                                    <Link to="about">About</Link>
                                    <Link to="services">Services</Link>
                                    <Link to="contact">Contact</Link>
                                    <Link to="blog">Blog</Link>
                                    {/* <a href="#home">Home</a>
                                    <a href="#services">Services</a>
                                    <a href="#about">About</a>
                                    <a href="#contact">Contact</a>
                                    <a href="#blog">Blog</a> */}
                                </div>
                                :
                                null
                        }
                        <div className='quote-btn'>
                            <button>Get a quote</button>
                        </div>
                        <div className='menu-icon position-absolute end-0'>
                            {
                                icon ?
                                    <HiX onClick={() => setIcon(!icon)} style={{ width: '30px' }} />
                                    :
                                    <GiHamburgerMenu onClick={() => setIcon(!icon)} style={{ width: '25px' }} />
                            }
                        </div>
                    </div>
                    <hr />
                </nav>
            </section>
            <hr style={{ opacity: '0.1' }} />
        </>
    );
};

export default Navbar;