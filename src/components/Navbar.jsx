import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import TopContainer from './TopContainer.jsx';

function Navigation() {
    return (
    <Navbar id="navbar" sticky="top" expand="lg" useTransparent >
        <Container>
            <Navbar.Brand className="Nav-text" href="/">ANI</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className='nav'>
                <Nav.Link className="Nav-text" href="./#about" onClick={TopContainer.handleClick}>ABOUT ME</Nav.Link>
                <Nav.Link className="Nav-text" href="./Experience">EXPERIENCE</Nav.Link>
                <Nav.Link className="Nav-text" href="./Contact">SAY HELLO</Nav.Link>
            </Nav>
        </Container>
    </Navbar>)
}

export default Navigation;