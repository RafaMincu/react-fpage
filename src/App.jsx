import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            msg: "Prima componenta",
            txt: "Aceasta este prima mea componenta",
            txtInput: "Aici va aparea textul introdus in input",
            task: '',
            tasks: []
        }
    }

    changeText (e) {

        this.setState({
            task: e.target.value,
            txtInput: e.target.value
        })
    }

    changeTxt () {
        this.setState({
            txt: 'Am apasat butonul Change Text'
        })
       this.addTask()
    }

    addTask () {
        let tasks = this.state.tasks
        tasks.push(this.state.task)
        this.setState({
            tasks
        })
        console.log(this.state.tasks)
    }

    listTasks() {
        let tasks = this.state.tasks
        return (
            <ul>
                {
                    tasks.map((val, index) => {
                        return (
                            <li key={index}>
                                    { val }
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render () {
        return (
            <div className="App">
                <h1>{ this.state.msg }</h1>
                <p>{ this.state.txt }</p>  {/* folosesc sintaxa this.state pentru a prelua informatii din interiorul componentei */}
                <p>{ this.props.message }</p> {/* folosesc sintaxa this.props pentru a prelua informatii din exteriorul componentei */}
                <p>{ this.state.txtInput }</p>
                <input type="text" onChange={(e) => this.changeText(e)}/>
                <button onClick={() => this.changeTxt()}> 
                    Add Task
                </button>
                { this.listTasks() }
            </div>
        )
    }
}

export default App