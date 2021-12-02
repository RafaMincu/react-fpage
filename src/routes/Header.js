import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header>
                <div className="container">
                    <div id="branding">
                        <h1><span className="highlight">Boost</span> Web Design</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/" >Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/services" >Services</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}


 