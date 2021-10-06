import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../CourseDetails/CourseDetails.css';

const CourseDetails = (props) => {

    const { courseId, courseName, courseFee, duration, totalHours, courseImg } = props.course;
    const url = `/course/${courseId}`;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" className="course-img" src={courseImg} />
                <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>
                        Duration: {duration}
                    </Card.Text>
                    <Card.Text>
                        Total Hours: {totalHours}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Course Fee: {courseFee}</small>
                    <Link to={url}>Enroll Now</Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CourseDetails;