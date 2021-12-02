import React from 'react'
import logo_brush from '../assets/images/logo_brush.png'
import logo_css from '../assets/images/logo_css.png'
import logo_html from '../assets/images/logo_html.png'

const home = () => {
    return (
        <div>
            <section id="showcase">
                <div className="container">
                    <h1>Affordable Professional Web Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor turpis in dolor lacinia laoreet. Proin a suscipit nibh, et tempor ligula.</p>
                </div>
            </section>
            <section id="newsletter">
                <div className="container">
                    <h1>Subscribe To Our Newsletter</h1>
                    <form>
                        <input type="email" placeholder="Enter Email..." />
                        <button type="submit" className="button_1">Subscribe</button>
                    </form>
                </div>
            </section>
            <section id="boxes">
                <div className="container">
                    <div className="box">
                        <img src={logo_brush}/>
                        <h3>HTML5 Markup</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea magni ducimus laboriosam placeat! Laudantium dolorum exercitationem laboriosam fuga ad porro.</p>
                    </div>
                    <div className="box">
                        <img src={logo_css}/>
                        <h3>CSS3 Styling</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea magni ducimus laboriosam placeat! Laudantium dolorum exercitationem laboriosam fuga ad porro.</p>
                    </div>
                    <div className="box">
                        <img src={logo_html}/>
                        <h3>Graphic Design</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea magni ducimus laboriosam placeat! Laudantium dolorum exercitationem laboriosam fuga ad porro.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default home
 