import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import '../Header/Header.css'

const Header = () => {
    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>

                        <Nav className="me-auto p-3">
                            <Stack direction="horizontal" gap={3}>
                                <NavLink className="Nav_link" to="/home">Home</NavLink>
                                <NavLink className="Nav_link" to="/courses">Courses</NavLink>
                                <NavLink className="Nav_link" to="/instructors">Instructors</NavLink>
                                <NavLink className="Nav_link" to="/about">About Us</NavLink>
                            </Stack>
                        </Nav>
                        <h2 className="text-white">Online IT Academy</h2>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;