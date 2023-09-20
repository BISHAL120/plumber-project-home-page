import React from 'react';
import './Services.css'
import img3 from '../../../Images/img3.jpg'
import img4 from '../../../Images/img4.jpg'
import img5 from '../../../Images/img5.jpg'
import img6 from '../../../Images/img6.jpg'
import img7 from '../../../Images/img7.jpg'
import img8 from '../../../Images/img8.jpg'
import img10 from '../../../Images/img10.png'


const Services = () => {
    return (
        <div>
            <section>
                <div>
                    <div>
                        <div className='Service'>
                            <h2 className='Service-p1'>Our Services</h2>
                            <p className='Service-p2'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.
                            </p>
                        </div>
                        <div className='Service-cart container container-md '>
                            <div className='card Service-card'>
                                <div style={{ height: '350px', overflow: 'hidden' }}>
                                    <img src={img3} alt="" />
                                </div>
                                <h2>Faucet & Leak repairs</h2>
                                <p className='card-p3'>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                </p>
                                <p className='view-service'>View Service</p>
                            </div>
                            <div className='card Service-card'>
                                <div style={{ height: '350px', overflow: 'hidden' }}>
                                    <img src={img4} alt="" />
                                </div>
                                <h2>Remodeling service</h2>
                                <p className='card-p3'>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                </p>
                                <p className='view-service'>View Service</p>
                            </div>
                            <div className='card Service-card'>
                                <div style={{ height: '350px', overflow: 'hidden' }}>
                                    <img src={img5} alt="" />
                                </div>
                                <h2>Drain cleaning & reair</h2>
                                <p className='card-p3'>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                </p>
                                <p className='view-service'>View Service</p>
                            </div>
                            <div className='card Service-card'>
                                <div style={{ height: '350px', overflow: 'hidden' }}>
                                    <img src={img6} alt="" />
                                </div>
                                <h2>Sewer repair & cleaning</h2>
                                <p className='card-p3'>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                </p>
                                <p className='view-service'>View Service</p>
                            </div>
                            <div className='card Service-card'>
                                <div style={{ height: '350px', overflow: 'hidden' }}>
                                    <img src={img7} alt="" />
                                </div>
                                <h2>Water line repair</h2>
                                <p className='card-p3'>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                </p>
                                <p className='view-service'>View Service</p>
                            </div>
                            <div className='card Service-card'>
                                <div style={{ height: '350px', overflow: 'hidden' }}>
                                    <img src={img8} alt="" />
                                </div>
                                <h2>Gas line service</h2>
                                <p className='card-p3'>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                </p>
                                <p className='view-service'>View Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='contact' className='section7 cta-section Service-section-2'>
                <div className='CTA container '>
                    <div className='cta-img'>
                        <img src={img10} alt="" />
                    </div>
                    <div className='cta-details'>
                        <h1 className='cta-h1'>
                            Having a problem? We’ll fixed it today!
                        </h1>
                        <p className='cta-p1'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus adipiscing
                        </p>
                        <p className='contact'>
                            <span className='cta-p2'>(234) 231 - 2123</span>
                            <span className=' fs-5 fw-bolder  text-light mx-3 mt-2'>or</span>
                            <button className='cta-btn'>
                                Get a quote
                            </button>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;