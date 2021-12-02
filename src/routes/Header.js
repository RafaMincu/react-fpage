import React from 'react'
import { NavLink } from 'react-router-dom';

const header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div id="branding">
                        <h1><span className="highlight">Boost</span> Web Design</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                            <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                            
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default header
 