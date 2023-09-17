import React from 'react';
import './About.css'
import img18 from '../../../Images/img18.jpg'
import logo1 from '../../../Images/logo1.png'
import logo2 from '../../../Images/logo2.png'
import logo3 from '../../../Images/logo3.png'
import logo4 from '../../../Images/logo4.png'

const About = () => {
    return (
        <>
            <section className='section1'>
                <div className='about-section container container-md '>
                    <div className='about  '>
                        <p className='about-p1'>ABOUT US</p>
                        <p className='about-p2'>Over 25+ Years Experience In Plumbing Service</p>
                        <p className='about-p3'>
                            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
                        </p>
                        <button className='about-btn1'>
                            Get a quote
                        </button>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className='about-hero-img'>
                    <img src={img18} alt="" />
                </div>
            </section>
            <section className='section3'>
                <div className='container container-md '>
                    <div className='value-detail'>
                        <p className='value-p1'>OUR VALUES</p>
                        <p className='value-p2'>The values that drive us</p>
                    </div>
                    <div className='values'>
                        <div className='values-card'>
                            <div><img src={logo1} alt="" /></div>
                            <h3>Trust</h3>
                            <p>In potenti lorem id luctus maecenas sed id faucibus ac.</p>
                        </div>
                        <div>
                            <div><img src={logo2} alt="" /></div>
                            <h3>Integrity</h3>
                            <p>Sagittis aliquam diam viverra sed. Nunc pulvinar elit.</p>
                        </div>
                        <div>
                            <div><img src={logo3} alt="" /></div>
                            <h3>Security</h3>
                            <p>Egestas pulvinar arcu at elementum velit eu amet.</p>
                        </div>
                        <div>
                            <div><img src={logo4} alt="" /></div>
                            <h3>Commitment</h3>
                            <p>Diam volutpat fusce sagittis molestie ante odio est gravida.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section4'>
                <section>
                    <div>
                        
                    </div>
                </section>
            </section>
        </>
    );
};

export default About;