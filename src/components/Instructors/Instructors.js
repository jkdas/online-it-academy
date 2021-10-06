import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import "./Instructor.css"

const Instructors = () => {
    // store instructor detail 
    const [instrDetails, setInstrDetails] = useState([]);
    // Insrtructor data load from coursedetails json file 
    useEffect(() => {
        fetch('/courseDetailsDb.json')
            .then(res => res.json())
            .then(data => setInstrDetails(data))
    }, [])

    return (
        <div>
            <h2>Our Dedicated Instructors</h2>

            <Row xs={1} md={2} className="g-5">
                {
                    instrDetails.map(instructor => (
                        <Col>
                            <Row className="instr-container mt-4">
                                <Col md-3>
                                    <div>
                                        <img className="instr-img" src={instructor.InstrImg} alt=""></img>
                                    </div>
                                </Col>
                                <Col md-9>
                                    <div className="instr-details">
                                        <h4>Name: {instructor.InstrName}</h4>
                                        <p>Epertise: {instructor.InstrDetails}</p>
                                        <p>Course Offer: {instructor.courseName}</p>
                                        <p>Duration: {instructor.duration}</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default Instructors;