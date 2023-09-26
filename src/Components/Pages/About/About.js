import React from 'react';
import './About.css'
import { BiSolidCheckSquare } from "react-icons/bi";
import img18 from '../../../Images/img18.jpg'
import logo1 from '../../../Images/logo1.png'
import logo2 from '../../../Images/logo2.png'
import logo3 from '../../../Images/logo3.png'
import logo4 from '../../../Images/logo4.png'
import img19 from '../../../Images/img19.jpg'
import img20 from '../../../Images/img20.jpeg'
import img21 from '../../../Images/img21.jpg'
import img22 from '../../../Images/img22.jpg'
import img23 from '../../../Images/img23.jpg'

const About = () => {
    return (
        <>
            <section className='About-section1'>
                <div className='about-section container container-md '>
                    <div className='about'>
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
            <section className=' about-section2'>
                <div className='about-hero-img'>
                    <img src={img18} alt="" />
                </div>
            </section>
            <section className='about-section3'>
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
                        <div className='values-card'>
                            <div><img src={logo2} alt="" /></div>
                            <h3>Integrity</h3>
                            <p>Sagittis aliquam diam viverra sed. Nunc pulvinar elit.</p>
                        </div>
                        <div className='values-card'>
                            <div><img src={logo3} alt="" /></div>
                            <h3>Security</h3>
                            <p>Egestas pulvinar arcu at elementum velit eu amet.</p>
                        </div>
                        <div className='values-card'>
                            <div><img src={logo4} alt="" /></div>
                            <h3>Commitment</h3>
                            <p>Diam volutpat fusce sagittis molestie ante odio est gravida.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='about-section4'>
                <section className='section4-1'>
                    <div className='Mission container container-md '>
                        <div className='mission-img'>
                            <img src={img19} alt="" />
                        </div>
                        <div className='mission-detail'>
                            <p className='mission-p1'>
                                OUR MISSION
                            </p>
                            <p className='mission-p2'>
                                Offer reliable services for most plumbing systems
                            </p>
                            <p className='mission-p3'>
                                Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus
                            </p>
                            <div className='Mission-list'>
                                <div className='mission-list'>
                                    <p><BiSolidCheckSquare className='misssion-icon' /></p>
                                    <p>Auctor elit sed vulputate mi euismod elcom</p>
                                </div>
                                <div className='mission-list'>
                                    <p><BiSolidCheckSquare className='misssion-icon' /></p>
                                    <p>Tellus orci ac auctor augue mauris augue</p>
                                </div>
                                <div className='mission-list' >
                                    <p><BiSolidCheckSquare className='misssion-icon' /></p>
                                    <p>Feugiat scelerisque varius morbi enim nuncolor</p>
                                </div>
                            </div>
                            <div className='mission-btn1'>
                                <button>
                                    Get a quote
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section4-2'>
                    <div className='Goal container container-md '>
                        <div className='goal-detail'>
                            <p className='goal-p1'>OUR GOALS</p>
                            <p className='goal-p2'>
                                Provide exceptional plumbing services that exceed our customers expectations
                            </p>
                            <p className='goal-p3'>
                                Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis:
                            </p>
                            <div className='goal-btn1'>
                                <button>
                                    Get a quote
                                </button>
                            </div>
                        </div>
                        <div className='goal-img'>
                            <img src={img20} alt="" />
                        </div>
                    </div>
                </section>
            </section>
            <section className='About-section5'>
                <section className=' container container-md  About-section5-1 Experts'>
                    <div className='experts '>
                        <p className='experts-p1'>OUR EXPERTS</p>
                        <p className='experts-p2'>
                            Who is behind the Plumbing team
                        </p>
                        <p className='experts-p3'>
                            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.
                        </p>
                    </div>
                </section>
                <section className='About-section5-2 container container-md '>
                    <div className='experts-card'>
                        <div className='about-expert-card'>
                            <div className='experts-card-img'>
                                <img src={img21} alt="" />
                            </div>
                            <div className='experts-card-detail'>
                                <h2>Sam Houston</h2>
                                <p>Chief repair</p>
                                <p>
                                    Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.
                                </p>
                            </div>
                        </div>
                        <div className='about-expert-card'>
                            <div className='experts-card-img'>
                                <img src={img22} alt="" />
                            </div>
                            <div className='experts-card-detail'>
                                <h2>Matt Cannon</h2>
                                <p>Installation and repairs</p>
                                <p>
                                    Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.
                                </p>
                            </div>
                        </div>
                        <div className='about-expert-card'>
                            <div className='experts-card-img'>
                                <img src={img23} alt="" />
                            </div>
                            <div className='experts-card-detail'>
                                <h2>John Carter</h2>
                                <p>Technical evaluator</p>
                                <p>
                                    Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <hr style={{ opacity: '0.2' }} className='mb-5' />
        </>
    );
};

export default About;