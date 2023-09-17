import React from 'react';
import logo from '../../../Images/logo.png';

const Footer = () => {
    return (
        <div>
            <section className='section12 Footer '>
            <hr style={{opacity: '0.2'}} className='mb-5' />
                <div className='footer container-md container'>
                    <div className='footer1 text-start '>
                        <div className='logo foter-logo'>
                            <img src={logo} alt="" />
                        </div>
                        <p className='footer-p'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
                        </p>
                    </div>
                    <div className='footer2 '>
                        <div className='text-start mb-4 MENU'>
                            Menu
                        </div>
                        <div className=' d-flex text-start column-gap-5 '>
                            <div className='menu d-flex flex-column '>
                                <a href="">Menu</a>
                                <a href="">Menu(Sales)</a>
                                <a href="">About</a>
                                <a href="">Services</a>
                                <a href="">Service single</a>
                                <a href="">Blog</a>
                                <a href="">Blog post</a>
                            </div>
                            <div className='package d-flex flex-column menu'>
                                <a href="">Package</a>
                                <a href="">Package single</a>
                                <a href="">Contact</a>
                                <a href="">Coming soon</a>
                            </div>
                        </div>
                    </div>
                    <div className='footer3 text-start'>
                        <div className='text-start mb-4 MENU'>
                            Utility pages
                        </div>
                        <div className=' d-flex flex-column menu'>
                            <a href="">Style guide</a>
                            <a href="">Start here</a>
                            <a href="">404 not found</a>
                            <a href="">Password protected</a>
                            <a href="">Licenses</a>
                            <a href="">Changelog</a>
                        </div>
                    </div>
                    <div className='footer4 text-start '>
                        <div className='MENU mb-5 '>
                            Subscribe to our newsletter
                        </div>
                        <div>
                            <input className=' shadow-lg  footer-srch' placeholder='   Enter Your Email' type="text" />
                            <button className='exp-btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section13 container-md '>
                <hr style={{ opacity: '0.2' }} className='mb-4' />
                <p className='copyright'>Copyright © Plumbing X | Designed by <span className='MENU footer-menu'>BISHAL</span> - Powered by <span className='MENU footer-menu'>MONERUL ISLAM</span></p>
            </section>
        </div>
    );
};

export default Footer;