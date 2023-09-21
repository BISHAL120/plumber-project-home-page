import React, { useState } from 'react';
import './Contact.css'
import location from '../../../Images/Icon/location-icon.png'
import message from '../../../Images/Icon/message-icon.png'
import call from '../../../Images/Icon/call-icon.png'
import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai"


const Contact = () => {

    const [showp1, Setshowp1] = useState(false);
    const [showp2, Setshowp2] = useState(false);
    const [showp3, Setshowp3] = useState(false);
    const [showp4, Setshowp4] = useState(false);
    const [showp5, Setshowp5] = useState(false);
    const [showp6, Setshowp6] = useState(false);

    return (
        <>
            <section className='Contact-section-1'>
                <div className='contact-main container container-md '>
                    <div className='contact-main-1 shadow '>
                        <div className='Details'>
                            <h2>Contact details</h2>
                            <p className='contact-detail-p'>Lorem ipsum dolor sit amet consectetur adipisc elit tortor eu egestas morbi sem vulputate.</p>
                        </div>
                        <div className='contact-img-detail'>
                            <img src={location} alt="" />
                            <div className='contact-details text-start pt-2 '>
                                <p>Visit our office</p>
                                <p>149W 70th St, 9000 Los Angeles, CA</p>
                            </div>
                        </div>
                        <div className='contact-img-detail'>
                            <img src={message} alt="" />
                            <div className='contact-details text-start pt-3 '>
                                <p>Mail:</p>
                                <p>info@plumbing.com</p>
                            </div>
                        </div>
                        <div className='contact-img-detail'>
                            <img src={call} alt="" />
                            <div className='contact-details  text-start pt-3'>
                                <p>Phone:</p>
                                <p>(234) 231 - 2123</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact-form'>
                        <div className='contact-form-1'>
                            <p>CONTACT US</p>
                            <h2>Get in touch today</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.</p>
                        </div>
                        <div>
                            <form>
                                <div className='form'>
                                    <div className='child'>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name='name' placeholder='John Carter' />
                                    </div>
                                    <div className='child'>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name='email' placeholder='example@email.com' />
                                    </div>
                                    <div className='child'>
                                        <label htmlFor="tel">Phone</label>
                                        <input type="tel" id="phone" name="phone" placeholder="(123)-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                    </div>
                                    <div className='child'>
                                        <label htmlFor="subject">Subject</label>
                                        <input type="subject" name='subject' placeholder='ex. Service' />
                                    </div>
                                    <div className='child'>
                                        <label htmlFor="message">Leave us a message</label>
                                        <textarea name="" id="" cols="30" rows="10" maxLength="5000" placeholder='Please type your message here...'></textarea>
                                    </div>
                                    <div className='child'>
                                        <input type="submit" value="Send Message" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='contact-half-bg'></div>
            </section>
            <section className='faq-section'>
                <div className=' container container-md '>
                    <div className='faq-section-1'>
                        <p>FAQ</p>
                        <h2>Frequently Asked Questions</h2>
                        <p>Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.</p>
                    </div>
                    <div className='faq-cards'>
                        <div>
                            <div style={{ height: !showp1 ? '140px' : 'auto' }} className='faq-card'>
                                <div className=' d-flex align-items-start justify-content-between '>
                                    <h2 style={{color: showp1 ? 'rgb(48, 131, 255)' : '#182944'}}>How many years of experience does plumbing has?</h2>
                                    {showp1 ?
                                        <AiOutlineArrowDown onClick={() => Setshowp1(!showp1)} style={{ width: '30px', height: '30px' }} />
                                        :
                                        <AiOutlineArrowRight onClick={() => Setshowp1(!showp1)} style={{ width: '30px', height: '30px' }} />
                                    }
                                </div>
                                {showp1 ?
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                    </p>
                                    :
                                    null
                                }
                            </div>
                            <div style={{ height: !showp2 ? '140px' : 'auto' }} className='faq-card'>
                                <div className=' d-flex align-items-start justify-content-between '>
                                    <h2 style={{color: showp2 ? 'rgb(48, 131, 255)' : '#182944'}}>How big is your team of plumbers?</h2>
                                    {showp2 ?
                                        <AiOutlineArrowDown onClick={() => Setshowp2(!showp2)} style={{ width: '30px', height: '30px' }} />
                                        :
                                        <AiOutlineArrowRight onClick={() => Setshowp2(!showp2)} style={{ width: '30px', height: '30px' }} />
                                    }
                                </div>
                                {showp2 ?
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                    </p>
                                    :
                                    null
                                }
                            </div>
                            <div style={{paddingTop: '35px', height: !showp3 ? '140px' : 'auto' }} className='faq-card'>
                                <div className=' d-flex align-items-start justify-content-between '>
                                    <h2 style={{color: showp3 ? 'rgb(48, 131, 255)' : '#182944'}}>Do you have case studies of past successful projects?</h2>
                                    {showp3 ?
                                        <AiOutlineArrowDown onClick={() => Setshowp3(!showp3)} style={{ width: '30px', height: '30px' }} />
                                        :
                                        <AiOutlineArrowRight onClick={() => Setshowp3(!showp3)} style={{ width: '30px', height: '30px' }} />
                                    }
                                </div>
                                {showp3 ?
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                    </p>
                                    :
                                    null
                                }
                            </div>
                        </div>
                        <div>
                            <div style={{ height: !showp4 ? '140px' : 'auto' }} className='faq-card'>
                                <div className=' d-flex align-items-start justify-content-between '>
                                    <h2 style={{color: showp4 ? 'rgb(48, 131, 255)' : '#182944'}}>Does Plumbing has a project minimum?</h2>
                                    {showp4 ?
                                        <AiOutlineArrowDown onClick={() => Setshowp4(!showp4)} style={{ width: '30px', height: '30px' }} />
                                        :
                                        <AiOutlineArrowRight onClick={() => Setshowp4(!showp4)} style={{ width: '30px', height: '30px' }} />
                                    }
                                </div>
                                {showp4 ?
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                    </p>
                                    :
                                    null
                                }
                            </div>
                            <div style={{paddingTop: '35px', height: !showp5 ? '140px' : 'auto' }} className='faq-card'>
                                <div className=' d-flex align-items-start justify-content-between '>
                                    <h2 style={{color: showp5 ? 'rgb(48, 131, 255)' : '#182944'}}>How can I get a consultation and quote for my project?</h2>
                                    {showp5 ?
                                        <AiOutlineArrowDown onClick={() => Setshowp5(!showp5)} style={{ width: '30px', height: '30px' }} />
                                        :
                                        <AiOutlineArrowRight onClick={() => Setshowp5(!showp5)} style={{ width: '30px', height: '30px' }} />
                                    }
                                </div>
                                {showp5 ?
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                    </p>
                                    :
                                    null
                                }
                            </div>
                            <div style={{ height: !showp6 ? '140px' : 'auto' }} className='faq-card'>
                                <div className=' d-flex align-items-start justify-content-between '>
                                    <h2 style={{color: showp6 ? 'rgb(48, 131, 255)' : '#182944'}}>Does Plumbing has a project minimum?</h2>
                                    {showp6 ?
                                        <AiOutlineArrowDown onClick={() => Setshowp6(!showp6)} style={{ width: '30px', height: '30px' }} />
                                        :
                                        <AiOutlineArrowRight onClick={() => Setshowp6(!showp6)} style={{ width: '30px', height: '30px' }} />
                                    }
                                </div>
                                {showp6 ?
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                    </p>
                                    :
                                    null
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;