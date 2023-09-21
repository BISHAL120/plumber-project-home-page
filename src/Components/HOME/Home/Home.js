import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../../Images/download.png';
import img2 from '../../../Images/img2.jpg';
import img3 from '../../../Images/img3.jpg';
import img4 from '../../../Images/img4.jpg';
import img5 from '../../../Images/img5.jpg';
import img6 from '../../../Images/img6.jpg';
import img7 from '../../../Images/img7.jpg';
import img8 from '../../../Images/img8.jpg';
import img9 from '../../../Images/img9.png';
import img10 from '../../../Images/img10.png';
import img11 from '../../../Images/img11.png';
import img12 from '../../../Images/img12.png';
import img13 from '../../../Images/img13.png';
import img14 from '../../../Images/img14.png';
import img15 from '../../../Images/img15.jpg';
import img16 from '../../../Images/img16.jpg';
import img17 from '../../../Images/img17.jpg';
import locationicon from '../../../Images/Icon/location-icon.png';
import messageicon from '../../../Images/Icon/message-icon.png';
import callicon from '../../../Images/Icon/call-icon.png';
import playicon from '../../../Images/Icon/play-icon.png';

const Home = () => {

    
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const settings2 = {
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <section id='home' className='section2 container '>
                <div className='hero container '>
                    <div className='details'>
                        <p className='p1'>PLUMBERS</p>
                        <p className='p2'>
                            Best plumbing &  repair solutions with quality work
                        </p>
                        <p className='p3'>
                            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
                        </p>
                        <div className='buttons'>
                            <button className='btn1'>Get a quote</button>
                            <button className='btn2'>Browse our services</button>
                        </div>
                    </div>
                    <div className='img1'>
                        <img src={img1} alt="" />
                    </div>
                </div>
            </section>
            <section className='section3 mt-5 mb-5'>
                <div className='address-div shadow-lg container '>
                    <div className='address'>
                        <div className='add-email-call'>
                            <img src={locationicon} alt="" />
                            <p className=''>
                                <span className='tittle'>Visit our office </span><br />
                                <span className='info'>149W 70th St, 9000</span>
                                <span className='info'>Los Angeles, CA</span>
                            </p>
                        </div>
                        <div className='add-email-call'>
                            <img src={messageicon} alt="" />
                            <p className=''>
                                <span className='tittle'>Email: </span><br />
                                <span className='info'>info@plumbing.com</span>
                            </p>
                        </div>
                        <div className='add-email-call'>
                            <img src={callicon} alt="" />
                            <p className=''>
                                <span className='tittle'>Phone </span><br />
                                <span className='info'>(234) 231 - 2123</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section4 exprence'>
                <div className=' container d-flex exp-container'>
                    <div className='exp-img container-md '>
                        <img src={img2} alt="" />
                    </div>
                    <div className='exp-detail'>
                        <p className='exp-p1'>OUR EXPERIENCE</p>
                        <h2 className='exp-p2'>
                            We focus on customer satisfaction and quality
                        </h2>
                        <p className='exp-p3'>
                            Lorem ipsum dolor sit amet consecte tur adipiscing elit semperole dalaracc lacus vel facilisis volutpat est velitolm.
                        </p>
                        <div className='exprences-number '>
                            <div>
                                <p style={{ margin: '0px' }}>
                                    <span className='number'>25</span>
                                    <span className='number-icon'>+</span>
                                </p>
                                <p className='exp-tittle'>
                                    Year Experience
                                </p>
                            </div>
                            <div>
                                <p style={{ margin: '0px' }}>
                                    <span className='number'>500</span>
                                    <span style={{ color: '#3083ff' }} className='number-icon'>+</span>
                                </p>
                                <p className='exp-tittle'>
                                    Happy clients
                                </p>
                            </div>
                            <div>
                                <p style={{ margin: '0px' }}>
                                    <span className='number'>20</span>
                                    <span className='number-icon'>+</span>
                                </p>
                                <p className='exp-tittle'>
                                    Qualified experts
                                </p>
                            </div>
                        </div>
                        <div className='exp-btn-div container '>
                            <button className='exp-btn'>Get a quote</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id='services' className='section5 '>
                <div className='service-slider container '>
                    <div className=' d-flex justify-content-center'>
                        <div className='service'>
                            <p className='service-p1 '>OUR SERVICES</p>
                            <p className='service-p2'>A wide range of services</p>
                            <p className='service-p3'>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.</p>
                        </div>
                    </div>
                    <div className='w-100'>
                        <div className='slider'>
                            <Slider {...settings}>
                                <div className='card'>
                                    <div style={{ height: '350px', overflow: 'hidden' }}>
                                        <img src={img3} alt="" />
                                    </div>
                                    <h2>Faucet & Leak repairs</h2>
                                    <p className='card-p3'>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                    </p>
                                    <p className='view-service'>View Service</p>
                                </div>
                                <div className='card'>
                                    <div style={{ height: '350px', overflow: 'hidden' }}>
                                        <img src={img4} alt="" />
                                    </div>
                                    <h2>Remodeling service</h2>
                                    <p className='card-p3'>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                    </p>
                                    <p className='view-service'>View Service</p>
                                </div>
                                <div className='card'>
                                    <div style={{ height: '350px', overflow: 'hidden' }}>
                                        <img src={img5} alt="" />
                                    </div>
                                    <h2>Drain cleaning & reair</h2>
                                    <p className='card-p3'>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                    </p>
                                    <p className='view-service'>View Service</p>
                                </div>
                                <div className='card'>
                                    <div style={{ height: '350px', overflow: 'hidden' }}>
                                        <img src={img6} alt="" />
                                    </div>
                                    <h2>Sewer repair & cleaning</h2>
                                    <p className='card-p3'>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                    </p>
                                    <p className='view-service'>View Service</p>
                                </div>
                                <div className='card'>
                                    <div style={{ height: '350px', overflow: 'hidden' }}>
                                        <img src={img7} alt="" />
                                    </div>
                                    <h2>Water line repair</h2>
                                    <p className='card-p3'>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                    </p>
                                    <p className='view-service'>View Service</p>
                                </div>
                                <div className='card'>
                                    <div style={{ height: '350px', overflow: 'hidden' }}>
                                        <img src={img8} alt="" />
                                    </div>
                                    <h2>Gas line service</h2>
                                    <p className='card-p3'>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellen
                                    </p>
                                    <p className='view-service'>View Service</p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='service-btn mb-5 '>
                        <button>
                            Browse our service
                        </button>
                    </div>
                </div>
            </section>
            <section id='about' className='section6 ourwork'>
                <div className='OURWORK container '>
                    <div className='ourwork-detail container-md'>
                        <p className='work-p1'>OUR WORK</p>
                        <h2 className='work-p2'>Check how we can help you at home</h2>
                        <p className='work-p3'>
                            Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus.
                        </p>
                        <button className='exp-btn'>
                            Get a quote
                        </button>
                    </div>
                    <div className='images container-md  '>
                        <div className='work-img position-relative '>
                            <img src={img9} alt="" />
                            <div className='play-icon'>
                                <img className=' position-absolute start-50 top-50 translate-middle  ' src={playicon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='contact' className='section7 cta-section'>
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
            <section className='section8 container-md '>
                <div className='clints-details d-flex justify-content-center'>
                    <div className='About'>
                        <p className='clints-p1'>
                            TESTIMONIALS
                        </p>
                        <p className='clints-p2'>
                            What our clients say
                        </p>
                        <p className='clints-p3'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.
                        </p>
                    </div>
                </div>
            </section>
            <section className='section9'>
                <div className='our-clints container'>
                    <Slider {...settings2}>
                        <div className='clints'>
                            <h3>“A true team of expert plumbers”</h3>
                            <p className=' w-75 '>
                                Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu sem integer vitae.
                            </p>
                            <div className='clint'>
                                <div>
                                    <img src={img11} alt="" />
                                </div>
                                <div>
                                    <p className='mb-0 mt-2 '>Andy Smith</p>
                                    <p>Los Angeles, CA</p>
                                </div>
                            </div>
                        </div>
                        <div className='clints'>
                            <h3>“Great work quality, and delivered on time”</h3>
                            <p className=' w-75 '>
                                Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit.
                            </p>
                            <div className='clint'>
                                <div>
                                    <img src={img12} alt="" />
                                </div>
                                <div>
                                    <p className='mb-0 mt-2 '>John Carter</p>
                                    <p>San Francico, CA</p>
                                </div>
                            </div>
                        </div>
                        <div className='clints'>
                            <h3>“They’re amazing plumbers”</h3>
                            <p className=' w-75 '>
                                Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu sem integer vitae.
                            </p>
                            <div className='clint'>
                                <div>
                                    <img src={img13} alt="" />
                                </div>
                                <div>
                                    <p className='mb-0 mt-2 '>Sophie Moore</p>
                                    <p>San Diego, CA</p>
                                </div>
                            </div>
                        </div>
                        <div className='clints'>
                            <h3>“The best plumbers I've ever met”</h3>
                            <p className=' w-75 '>
                                Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit.
                            </p>
                            <div className='clint'>
                                <div>
                                    <img src={img14} alt="" />
                                </div>
                                <div>
                                    <p className='mb-0 mt-2 '>Mike Warren</p>
                                    <p>Oakland, CA</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className='service-btn'>
                        <button>
                            Browse our services
                        </button>
                    </div>
                </div>
            </section>
            <section id='blog' className='section10'>
                <hr className='hr' style={{ opacity: '0' }} />
                <div className=' mt-md-1  mt-5 container'>
                    <div className='blogs'>
                        <div className='blog'>
                            <p className='service-p1'>
                                BLOG
                            </p>
                            <p className='service-p2'>
                                Check our lastest articles
                            </p>
                            <p className='service-p3'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat <br /> imperdiet quis at pellentesque nunc commodo nunc purus.
                            </p>
                        </div>
                        <div className='mobile-btn2'>
                            <button className='btn2'>Browser all articles</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section11 articles'>
                <div className='container container-md  article-card mb-5'>
                    <div className='article shadow '>
                        <div className='overflow-hidden'>
                            <img src={img15} alt="" />
                        </div>
                        <p className='article-p1'>
                            How to clean grease out of sink drains
                        </p>
                        <p className='article-p2'>
                            Dec 13, 2022
                        </p>
                    </div>
                    <div className='article shadow'>
                        <div className='overflow-hidden'>
                            <img src={img16} alt="" />
                        </div>
                        <p className='article-p1'>
                            When you should replace plumbing pipes?
                        </p>
                        <p className='article-p2'>
                            Dec 13, 2022
                        </p>
                    </div>
                    <div className='article shadow'>
                        <div className='overflow-hidden'>
                            <img src={img17} alt="" />
                        </div>
                        <p className='article-p1'>
                            Why you should replace your water heater
                        </p>
                        <p className='article-p2'>
                            Dec 13, 2022
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;