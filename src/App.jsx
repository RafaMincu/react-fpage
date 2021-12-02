import React, { Component } from 'react'
import './App.css'
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

class App extends Component {
    render () {
        return (
            <div className="App">
                <head>
                    <meta charset="UTF-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content="Affordable and professional web design"/>
                    <meta name="keywords" content="web design, affordable web design"/>
                    <meta name="author" content="Mincu Rafael"/>
                    <title>Boost Web Design | Welcome</title>
                </head>
                <body>
                    <Header />
                        <Home />
                    <Footer />
                </body>
            </div>
        )
    }
}

export default App