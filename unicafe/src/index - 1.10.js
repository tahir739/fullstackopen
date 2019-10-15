import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
    if (props.good + props.neutral + props.bad === 0) {
        return (
            <div>
                <h2>No feed back given</h2>
            </div>
        )
    }
    return (
        <Statistics good={props.good} neutral={props.neutral} bad={props.bad} />
    )
}


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
);

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
        return (
            <div>
                <h1>Statistics</h1>
                <Statistic text="good" value={good} />
                <Statistic text="neutral" value={neutral} />
                <Statistic text="bad" value={bad} />
                <Statistic text="all" value={good + neutral + bad} />
                <Statistic text="average" value={(good - bad) / (good + neutral + bad)} />
                <Statistic text="positive" value={good / (good + neutral + bad) * 100} />
            </div>
        );
    
}


const Statistic = (props) => {
    const text = props.text
    const value = props.value
    if (text !== "positive")
        return (
            <p>{text} {value}</p>
        );
    else return (
        <p>{text} {value}%</p>
    );
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
            <History good={good} neutral={neutral} bad={bad} />


        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
