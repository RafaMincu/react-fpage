import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const someData = 'Folosesc acest mesaj din parinte pentru a prelua copilul prin sintaxa props'

ReactDOM.render (
    <App message={ someData } />,
    document.getElementById('root')
)