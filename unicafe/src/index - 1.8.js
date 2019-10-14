import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>
            {props.name}
        </h1>
    );
}
const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    return (
        <div>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {good + neutral + bad}</p>
            <p>average {(good - bad) / (good + neutral + bad)}</p>
            <p>positive {good / (good + neutral + bad) * 100} %</p>


        </div>
    )

}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const handleGoodClicks = () => {
        setGood(good + 1)
    }

    const handleNeutralClicks = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClicks = () => {
        setBad(bad + 1)
    }


    return (
        <div>
            <Header name="Give feedback" />
            <Button onClick={handleGoodClicks} text='good' />
            <Button onClick={handleNeutralClicks} text='neutral' />
            <Button onClick={handleBadClicks} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} />


        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)