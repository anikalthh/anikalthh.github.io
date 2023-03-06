import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CImage } from '@coreui/react'
import aboutmepic from "../images/about-me-pic.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function About() {
  return (
    <Container className="about-section">
      <Row>
        <Col lg={7} md={5} sm={4}>
            <h1>Nice to meet you, I&apos;m Anika — A final year data analytics student.</h1>
            <br />
            <h4>I love creating! <br /> Ranging from code to digital artwork, I am passionate about beautifying the end recipients&apos; experience.</h4>
            <br />
            <h4>✧ Connect with me! ✧</h4>
            <div className="socials">
                <a href="./Contact" title="Email me!"><FontAwesomeIcon className="icons" icon={brands('google')} /></a>
                <a href="https://www.instagram.com/anikaaalth"><FontAwesomeIcon className="icons" icon={brands('instagram')} /></a>
                <a href="https://www.linkedin.com/in/anikaleetinghui" title="Connect with me on LinkedIn!"><FontAwesomeIcon className="icons" icon={brands('linkedin')} /></a>
            </div>
  
        </Col>
        <Col lg={5} md={3} sm={2}>
          <CImage className="about-me-pic" rounded src={aboutmepic} />
        </Col>
      </Row>
    </Container>
  );
}

export default About;