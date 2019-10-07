import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {


    const course = {
        name:
            'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    const Header = (props) => {
        return (
            <h1>
                {props.courseName}
            </h1>
        );
    }

    const Parts = (props) => {
        return (
            <p>
                {props.name} {props.exercises}
            </p>
        );
    }
    const Total = (props) => {
        let totalexercises = 0
        props.partT.parts.forEach(item =>
            totalexercises= totalexercises + item.exercises
            );



        return (
            <p>
                Total exercises: {totalexercises} 
            </p>
        );
    }

    return (
        <div>
            <Header courseName={course.name} />
            <Parts name={course.parts[0].name} exercises={course.parts[0].exercises} />
            <Parts name={course.parts[1].name} exercises={course.parts[1].exercises} />
            <Parts name={course.parts[2].name} exercises={course.parts[2].exercises} />
            
       
            <Total partT={course} />
            
        </div>
        );
}
 

ReactDOM.render(<App />, document.getElementById('root'))