import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../assets/styles/navigation.css';

export default function Navigation(props) {
    return (
        <Navbar className="main-navigation" bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>travelin</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
            >
                <Nav>
                    <LinkContainer to="/trips">
                        <Nav.Item>Your trips</Nav.Item>
                    </LinkContainer>
                    <LinkContainer to="/profile">
                        <Nav.Item>Profile</Nav.Item>
                    </LinkContainer>
                    <LinkContainer to="/" onClick={() => props.logout()}>
                        <Nav.Item>Logout</Nav.Item>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
