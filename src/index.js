import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const someData = 'Acesta este un mesaj parsat din parintre carte copil prin props.'

ReactDOM.render (
    <App message={ someData } />,
    document.getElementById('root')
)