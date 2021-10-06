import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Enroll = () => {
    const { id } = useParams();

    const [courseDetails, setCourseDetails] = useState([]);

    const [singleCourseDetail, setSingleCourseDetail] = useState({});


    useEffect(() => {
        fetch('/courseDetailsDb.json')
            .then(res => res.json())
            .then(data => setCourseDetails(data))
    }, [])

    useEffect(() => {
        const foundSingleCourseDetails = courseDetails?.find(course => course.courseId === id)
        setSingleCourseDetail(foundSingleCourseDetails);
    }, [courseDetails])

    return (
        <div>
            <h2>See Course Details below </h2>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>{singleCourseDetail?.courseName}</Card.Title>
                    <Card.Text>
                        Duration: {singleCourseDetail?.duration}
                    </Card.Text>
                    <Card.Img variant="top" src={singleCourseDetail?.InstrImg} />
                    <Card.Title>{singleCourseDetail?.InstrName}</Card.Title>
                    <Card.Title>{singleCourseDetail?.InstrDetails}</Card.Title>

                    <Button variant="primary">Back to Courses</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Enroll;