import React, { useState } from 'react';
import './Blog.css'
import img24 from '../../../Images/img24.jpg'
import logo5 from '../../../Images/logo5.png'
import img15 from '../../../Images/img15.jpg'
import img16 from '../../../Images/img16.jpg'
import img17 from '../../../Images/img17.jpg'
import img25 from '../../../Images/img25.jpg'
import img26 from '../../../Images/img26.jpg'
import img27 from '../../../Images/img27.jpg'

const Blog = () => {

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    const [currentDate, setCurrentDate] = useState(getDate());

    return (
        <>
            <section className='container container-md Blog-section-1 news-article'>
                <div className='Blog-section2'>
                    <h1>News & Articles</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
                    </p>
                </div>
                <div className=' position-relative Blog-section'>
                    <div className="news-article1">
                        <div className="news-article-1">
                            <div className='aa'>Article</div>
                            <div>{currentDate}</div>
                        </div>
                        <div>
                            <h2 className='bb'>How to clean grease out of sink drains</h2>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus
                            </p>
                        </div>
                    </div>
                    <div className='news-article2'>
                        <div className='blog-img'>
                            <img src={img24} alt="How to clean grease out of sink drains" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog-section-2'>
                <div className='container container-md '>
                    <div className='newsletter'>
                        <div className='Subscribe'>
                            <div className='sub-detail1'>
                                <h2>Subscribe to our newsletter</h2>
                                <p>Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis ipsum dolor sit amet</p>
                            </div>
                            <div className='sub-detail2'>
                                <div className='blog-form'>
                                    <input type="text" placeholder='Enter your email' />
                                    <input type="submit" value="Subscribe" />
                                </div>
                            </div>
                        </div>
                        <div className='logo5'>
                            <img src={logo5} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog-section-3'>
                <div className='container container-md'>
                    <div className='blog-section3'>
                        <div className='latest-article'>
                            <h2>Latest articles</h2>
                        </div>
                        <div className='article-ancor'>
                            <a href="">ALL</a>
                            <a href="">Article</a>
                            <a href="">Resource</a>
                            <a href="">Tips</a>
                        </div>
                    </div>
                    <div className='blog-cards'>
                        <div className='blog-card'>
                            <div>
                                <img src={img15} alt="" />
                            </div>
                            <div>
                                <h2>How to clean grease out of sink drains</h2>
                                <p>{currentDate}</p>
                            </div>
                            <div>
                                <a href="">Article</a>
                            </div>
                        </div>
                        <div className='blog-card'>
                            <div>
                                <img src={img16} alt="" />
                            </div>
                            <div>
                                <h2>When you should replace plumbing pipes?</h2>
                                <p>{currentDate}</p>
                            </div>
                            <div>
                                <a href="">Resource</a>
                            </div>
                        </div>
                        <div className='blog-card'>
                            <div>
                                <img src={img17} alt="" />
                            </div>
                            <div>
                                <h2>Why you should replace your water heater</h2>
                                <p>{currentDate}</p>
                            </div>
                            <div>
                                <a href="">Tips</a>
                            </div>
                        </div>
                        <div className='blog-card'>
                            <div>
                                <img src={img25} alt="" />
                            </div>
                            <div>
                                <h2>6 Reasons your sink doesn't have enough water pressure</h2>
                                <p>{currentDate}</p>
                            </div>
                            <div>
                                <a href="">Resource</a>
                            </div>
                        </div>
                        <div className='blog-card'>
                            <div>
                                <img src={img26} alt="" />
                            </div>
                            <div>
                                <h2>How to fix a stripped faucet handdle in 10 minutes or less</h2>
                                <p>{currentDate}</p>
                            </div>
                            <div>
                                <a href="">Tips</a>
                            </div>
                        </div>
                        <div className='blog-card'>
                            <div>
                                <img src={img27} alt="" />
                            </div>
                            <div>
                                <h2>6 practical ways to unclog a toilet drain without tools</h2>
                                <p>{currentDate}</p>
                            </div>
                            <div>
                                <a href="">Article</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;