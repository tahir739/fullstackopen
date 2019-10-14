import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
    const { counter } = props
    return (
        <div>{counter}</div>
    )
}

let counter = 1

const refresh = () => {
    ReactDOM.render(<App counter={counter} />,
        document.getElementById('root'))
}

refresh()
counter += 1
refresh()
counter += 1
refresh()
