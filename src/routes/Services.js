import React from 'react'
import MetaTags from 'react-meta-tags';
import Header from '../routes/Header'
import Footer from '../routes/Footer'

const services = () => {
    return (
        <div>
            <MetaTags>
                <title>Boost Web Design | Services</title>
            </MetaTags>
            <Header />
            <section id="main">
                <div className="container">
                    <article id="main-col">
                        <h1 className="page-title">Services</h1>
                        <ul id="services">
                            <li>
                                <h3>Website Design</h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis quam expedita repellendus veritatis, voluptates necessitatibus libero! Eveniet, laudantium dignissimos?</p>
                                <p className="">Pricing: $1,000 - $3,000</p>
                            </li>
                            <li>
                                <h3>Website Maintenance</h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis quam expedita repellendus veritatis, voluptates necessitatibus libero! Eveniet, laudantium dignissimos?</p>
                                <p className="">Pricing: $250 per month</p>
                            </li>
                            <li>
                                <h3>Website Hohsting</h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis quam expedita repellendus veritatis, voluptates necessitatibus libero! Eveniet, laudantium dignissimos?</p>
                                <p className="">Pricing: $25 per month</p>
                            </li>
                        </ul>
                    </article>

                    <aside id="sidebar">
                        <div className="dark">
                            <h3>Get a Quote</h3>
                            <form className="quote">
                                <div>
                                    <label for="">Name</label><br/>
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div>
                                    <label for="">Email</label><br/>
                                    <input type="text" placeholder="Email Address"/>
                                </div>
                                <div>
                                    <label for="">Message</label><br/>
                                    <textarea placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="button_1">Send</button>
                            </form>
                        </div>
                    </aside>
                </div>
            </section>
            <Footer />  
        </div>
    )
}

export default services
 