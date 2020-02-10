import React from 'react';
import logo from './logo.svg';
import './App.css';

class Course {
    constructor(college, dept, number) {
        this.college = college;
        this.dept = dept;
        this.number = number;
    }
}

function App() {
    let x = 1;
    let courses = [
        new Course('CAS', 'CS', '111'),
        new Course('CFA', 'MP', '113'),
        new Course('GRS', 'CS', '651'),
    ];
    return (
        <ol>
            {
                courses.map(course => <li>{course.college} {course.dept} {course.number}</li>)
            }
        </ol>
    );
}

export default App;
