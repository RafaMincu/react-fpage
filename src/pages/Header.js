import React from 'react'

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
                            <li className="current"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="services.html">Services</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default header
 