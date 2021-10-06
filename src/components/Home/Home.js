import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./coursesDb.json')
            .then(res => res?.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="container">
                <Row className="d-flex justify-content-center align-items-center my-5 hero-section">
                    <div className="col-md-5">
                        <h1>Welcome to Online IT Academy</h1>
                        <p>Find Your Best online courses</p>
                        <Button href="/courses">All Courses</Button>
                    </div>
                    <div className="col-md-7">
                        <img className="rounded shadow-lg" src="./resources/Banner.jpg" alt="" />
                    </div>

                </Row>
                <br />
                <h1>Featured Courses</h1>
                <br />
                <Row xs={1} md={3} className="g-4">

                    {
                        courses.slice(0, 4).map((course) => (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" className="course-img" src={course.courseImg} />
                                    <Card.Body>
                                        <Card.Title>{course.courseName}</Card.Title>
                                        <Card.Text>
                                            Duration: {course.duration}
                                        </Card.Text>
                                        <Card.Text>
                                            Total Hours: {course.totalHours}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Course Fee: {course.courseFee}</small>
                                        <Link to={`/course/${course.courseId}`}>Enroll Now</Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>

        </div>
    );
};

export default Home;