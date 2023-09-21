import React from 'react';
import './Contact.css'
import location from '../../../Images/Icon/location-icon.png'
import message from '../../../Images/Icon/message-icon.png'
import call from '../../../Images/Icon/call-icon.png'


const Contact = () => {
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
                            <img src={location} alt="" />
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

            </section>
        </>
    );
};

export default Contact;