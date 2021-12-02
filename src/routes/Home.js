import logohtml from '../assets/images/logo_html.png'
import logocss from '../assets/images/logo_css.png'
import logobrush from '../assets/images/logo_brush.png'


export default function Expenses() {
    return (
      <div>
        <section id="showcase">
            <div class="container">
                <h1>Affordable Professional Web Design</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor turpis in dolor lacinia laoreet. Proin a suscipit nibh, et tempor ligula.</p>
            </div>
        </section>
        <section id="newsletter">
            <div class="container">
                <h1>Subscribe To Our Newsletter</h1>
                <form>
                    <input type="email" placeholder="Enter Email..." />
                    <button type="submit" class="button_1">Subscribe</button>
                </form>
            </div>
        </section>
        <section id="boxes">
            <div class="container">
                <div class="box">
                    <img src={logohtml}/>
                    <h3>HTML5 Markup</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea magni ducimus laboriosam placeat! Laudantium dolorum exercitationem laboriosam fuga ad porro.</p>
                </div>
                <div class="box">
                    <img src={logocss}/>
                    <h3>CSS3 Styling</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea magni ducimus laboriosam placeat! Laudantium dolorum exercitationem laboriosam fuga ad porro.</p>
                </div>
                <div class="box">\
                    <img src={logobrush}/>
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea magni ducimus laboriosam placeat! Laudantium dolorum exercitationem laboriosam fuga ad porro.</p>
                </div>
            </div>
        </section>
      </div>
    );
  }