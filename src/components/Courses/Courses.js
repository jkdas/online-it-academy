import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./coursesDb.json')
            .then(res => res?.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="container">
                <br />
                <h1>Our Courses</h1>
                <br />
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <CourseDetails
                            key={course?.courseId}
                            course={course}
                        ></CourseDetails>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Courses;