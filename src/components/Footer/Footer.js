import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="row footer-container">
                <div className="col-md-4">
                    <div className="">
                        <h3 className="text-white">Quick Links</h3>
                        <ul>
                            <li className="footer-menu">Home</li>
                            <li className="footer-menu">Courses</li>
                            <li className="footer-menu">Admission</li>
                            <li className="footer-menu"> About us</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h3>Contact Us</h3>
                        <h6> H#456, New DOHS,Banani, Dhaka-1205 </h6>
                        <p>Tel: +8800001</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h3>Newsletter</h3>
                        <input
                            className="newsletter-input"
                            type="text"
                            placeholder="enter your email"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;