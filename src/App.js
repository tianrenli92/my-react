import React, {Component} from 'react';
import './App.css';

class Course {
    constructor(college, department, number, section, professor) {
        this.college = college;
        this.department = department;
        this.number = number;
        this.section = section;
        this.professor = professor;
        this.key = `${college} ${department} ${number} ${section}`;
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        const columns = [
            'College',
            'Department',
            'Number',
            'Section',
            'Professor',
        ];

        const courses = [
            new Course('CAS', 'CS', '112', 'B1', 'Sullivan'),
            new Course('CAS', 'CS', '332', 'A1', 'Bun'),
            new Course('CAS', 'CS', '350', 'A1', 'Sarkar'),
        ];

        this.state = {
            columns,
            courses,
        };
        this.addNew = this.addNew.bind(this);
    }

    addNew() {
        const course = new Course('CAS', 'CS', '111', 'A1', 'Sullivan');
        const {courses} = this.state;
        courses.push(course);
        this.setState({courses});
    }

    addNew2 = () => {
        this.addNew();
    };

    delete(key) {
        let {courses} = this.state;
        courses = courses.filter((course) => course.key !== key);
        this.setState({courses});

    }

    render() {
        const {columns, courses} = this.state;
        return (
            <div className="App">
                <table>
                    <thead>
                    <tr>
                        {columns.map(column =>
                            <th key={column}>{column}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        courses.map(course =>
                            <tr key={course.key}>
                                <td>{course.college}</td>
                                <td>{course.department}</td>
                                <td>{course.number}</td>
                                <td>{course.section}</td>
                                <td>{course.professor}</td>
                                <td>
                                    <button onClick={() => this.delete(course.key)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={this.addNew2}>Add new course</button>
            </div>
        );
    }
}

export default App;
