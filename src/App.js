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
            '',
        ];

        const searchTerms = {
            number: '',
        };

        this.state = {
            columns,
            searchTerms,
            courses: [],
            myCourses: [],
            a: 0,
            b: 0,
        };
    }

    getCourses = () => {
        const courses = [
            new Course('CAS', 'CS', '113', 'B1', 'Sullivan'),
            new Course('CAS', 'MA', '112', 'B1', 'Sullivan'),
            new Course('ENG', 'CS', '112', 'B1', 'Sullivan'),
            new Course('CAS', 'CS', '112', 'B1', 'Sullivan'),
            new Course('CAS', 'CS', '332', 'A1', 'Bun'),
            new Course('CAS', 'CS', '350', 'A1', 'Sarkar'),
        ];
        this.setState({courses});
    };


    addCourse = (course) => {
        const {myCourses} = this.state;
        myCourses.push(course);
        this.setState({myCourses});
    };

    deleteCourse = (course) => {
        let {myCourses} = this.state;
        myCourses = myCourses.filter(myCourse => myCourse.key !== course.key);
        this.setState({myCourses});
    };

    onAChanged = (event) => {
        const a = Number(event.target.value);
        if (!isNaN(a)) {
            this.setState({a});
        }
        else {
            this.setState({a: 0});
        }
    };

    onBChanged = (event) => {
        const b = Number(event.target.value);
        if (!isNaN(b)) {
            this.setState({b});
        }
        else {
            this.setState({b: 0});
        }
    };

    onNumberSearchChanged = (event) => {
        const number = event.target.value;
        const {searchTerms} = this.state;
        searchTerms.number = number;
        this.setState({searchTerms});
    };

    courseFilter = (course, searchTerms) => {
        const {number} = searchTerms;
        return (number === '' || course.number === number);
    };

    render() {
        const {columns, searchTerms, courses, myCourses, a, b} = this.state;
        return (
            <div className="App">
                <button onClick={this.getCourses}>Get courses</button>
                <div>Course List</div>
                <table>
                    <thead>
                    <tr>
                        {columns.map(column =>
                            <th key={column}>{column}</th>)}
                    </tr>
                    <tr>
                        <th><input/></th>
                        <th><input/></th>
                        <th><input onChange={this.onNumberSearchChanged}/></th>
                        <th><input/></th>
                        <th><input/></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        courses
                            .filter(course => this.courseFilter(course, searchTerms))
                            .map(course =>
                                <tr key={course.key}>
                                    <td>{course.college}</td>
                                    <td>{course.department}</td>
                                    <td>{course.number}</td>
                                    <td>{course.section}</td>
                                    <td>{course.professor}</td>
                                    <td>
                                        <button onClick={() => this.addCourse(course)}>Add to my courses</button>
                                    </td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
                <div>My Courses</div>
                <table>
                    <thead>
                    <tr>
                        {columns.map(column =>
                            <th key={column}>{column}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        myCourses.map(course =>
                            <tr key={course.key}>
                                <td>{course.college}</td>
                                <td>{course.department}</td>
                                <td>{course.number}</td>
                                <td>{course.section}</td>
                                <td>{course.professor}</td>
                                <td>
                                    <button onClick={() => this.deleteCourse(course)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <div>a: <input type="text" onChange={this.onAChanged}/></div>
                <div>b: <input type="text" onChange={this.onBChanged}/></div>
                <div>a + b = {a + b}</div>
            </div>
        );
    }
}

export default App;
