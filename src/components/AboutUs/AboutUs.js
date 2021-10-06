import React from 'react';
import { Row } from 'react-bootstrap';
import "./About.css"


const AboutUs = () => {
    return (
        <div className="container">
            <div className="my-5">
                <h1>About Online IT Academy</h1>
                <p>We believe in the life-changing power of learning. For the last 02 years, we’ve been driven by a vision of what’s possible when all people can improve their lives through education. It’s why our uncompromising commitment to equity and fairness is behind everything we do.</p>
            </div>
            <Row>
                <div className="col-md-4 about-card">
                    <div className="about">
                        <img src="./resources/about-1.png" alt="" />
                    </div>
                    <h3>Who We are</h3>
                    <p> Online IT Academyis an institution where empowering the community for an excellent standard of learning is what we desire. We endeavor for the continuous improvement of our leaders who will work for constructing a better future. The institute is dedicated to serving the quality training programs.</p>
                </div>
                <div className="col-md-4 about-card">
                    <div className="about">
                        <img src="./resources/about-2.png" alt="" />
                    </div>
                    <h3>What We are</h3>
                    <p> We are committed to providing our students with a platform where superiority is the mantra. We nurture the young talent by sharing knowledge, providing supports in learning techniques, co-operating them for international standard projects, making successful freelancers and driving our youth towards a world of entrepreneurship and thus reducing inequalities. </p>
                </div>
                <div className="col-md-4 about-card">
                    <div className="about">
                        <img src="./resources/about-3.jpg" alt="" />
                    </div>
                    <h3>Mission</h3>
                    <p> To empower the community by ensuring state of the art method which strengthens the belief in quality learning.</p>
                </div>
            </Row>

        </div>
    );
};

export default AboutUs;