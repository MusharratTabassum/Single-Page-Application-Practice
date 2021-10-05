import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("./Courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h1 className="text-center">Our total Course:{courses.length}</h1>
            {
                courses.map(course => <Course course={course}
                    key={course.id}></Course>)
            }
        </div>
    );
};

export default Courses;