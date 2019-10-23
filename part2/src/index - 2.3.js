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
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
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

        const Total = () => {
            
            const totalExercises = parts.reduce((sum, part) => sum+part.exercises, 0)
            return (
                <div>
                    <strong>Total of {totalExercises} Exercises</strong>
                </div>
            );
        }

        return (
            <div>
                <Header header={header} />
                <Content />
                <Total />
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
