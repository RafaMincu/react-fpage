import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            msg: "Prima componenta",
            txt: "Aceasta este prima mea componenta",
            txtInput: "Aici va aparea textul introdus in input"

        }
    }

    changeTitle (e) {
        this.setState({
            txtInput: e.target.value
        })
    }

    changeTxt () {
        this.setState({
            txt: 'Am apasat butonul Change Text'
        })
    }

    render () {
        return (
            <div className="App">
                <h1>{ this.state.msg }</h1>
                <p>{ this.state.txt }</p>  {/* folosesc sintaxa this.state pentru a prelua informatii din interiorul componentei */}
                <p>{ this.props.message }</p> {/* folosesc sintaxa this.props pentru a prelua informatii din exteriorul componentei */}
                <p>{ this.state.txtInput }</p>
                <input type="text" onChange={(e) => this.changeTitle(e)}/>
                <button onClick={() => this.changeTxt()}> 
                    Change Text
                </button>
            </div>
        )
    }
}

export default App