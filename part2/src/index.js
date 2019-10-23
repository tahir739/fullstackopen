import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]
    const Course = (props) => {
        const header = props.course.name
        const parts = props.course.parts
        const Header = () => {
            return (
                <div>
                    <h2>{header}</h2>
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
                <Header />
                <Content />
                <Total />
            </div>
        );
    }

    const halfStackCourse = courses.filter(c => c.id === 1)
    const nodeJsCourse = courses.filter(c => c.id === 2)

    return (
        <div>
            <h1>Web development curriculum</h1>
            <Course course={halfStackCourse[0]} />
            <Course course={nodeJsCourse[0]} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
