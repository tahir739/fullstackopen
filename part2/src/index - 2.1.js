import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }
    const Course = (props) => {
        const header = props.course.name
        const parts = props.course.parts
        const Header = (props) => {
            return (
                <div>
                    <h1>{props.header}</h1>
                </div>
            );
        }
        const Content = () => {
            const rows = () => parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>);
            
            return (
                <div>
                    {rows()}
                </div>
            );
        }

        return (
            <div>
                <Header header={header} />
                <Content />
            </div>
        );
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
