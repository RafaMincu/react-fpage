import React, { Component } from 'react'

class App extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            msg: "Prima componenta",
            txt: "Aceasta este prima mea componenta"
        }
    }
    render () {
        return (
            <div>
                <h1>{ this.state.msg }</h1>
                <p>{ this.state.txt }</p>
            </div>
        )
    }
}

export default App