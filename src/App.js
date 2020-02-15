import React, {Component} from 'react';
import './App.css';

class Course {
    constructor(college, dept, number) {
        this.college = college;
        this.dept = dept;
        this.number = number;
        this.key = `${this.college} ${this.dept} ${this.number}`;
    }
}

class App extends Component {
    render() {
        let courses = [
            new Course('CAS', 'CS', '111'),
            new Course('CFA', 'MP', '113'),
            new Course('GRS', 'CS', '651'),
        ];
        console.log(courses);
        return (
            <ol>
                {
                    courses.map(course => <li key={course.key}>{course.college} {course.dept} {course.number}</li>)
                }
            </ol>
        );
    }
}

export default App;
