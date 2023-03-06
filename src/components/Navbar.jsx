import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
//import TopContainer from './TopContainer.jsx';
//import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navigation() {
    return (
    <Navbar id="navbar" sticky="top" expand="lg" useTransparent >
        <Container>
            <Navbar.Brand className="Nav-text" href="/">ANI</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className='nav'>
                <Nav.Link className="Nav-text" as={Link} to="/" onClick={
                                            () => {
                                                const element = document.getElementById("about");
                                                element.scrollIntoView({behavior: 'smooth'});
                                                }}>ABOUT ME</Nav.Link>
                <Nav.Link className="Nav-text" as={Link} to="./Experience">EXPERIENCE</Nav.Link>
                <Nav.Link className="Nav-text" as={Link} to="./Contact">SAY HELLO</Nav.Link>
            </Nav>
        </Container>
    </Navbar>)
}

export default Navigation;