import { CImage } from "@coreui/react";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../images/digital_artwork/IMG_1092.PNG";
import img2 from "../images/digital_artwork/IMG_1220.JPG"

function Art() {
    return (
        <div>
            <h1 className="art-headings">✧ MY DIGITAL ARTWORK ✧</h1>
            <Container className="art-grid">
                <Row>
                    <Col lg={4} align="center" >
                        <CImage height={300} rounded src={img1} />
                    </Col>
                    <Col lg={8} align="center">
                        <p>testing</p>
                    </Col>                   
                </Row>

                <Row verticalAlign="middle">
                    <Col lg={4} align="center" >
                        <p>testing</p>
                    </Col>
                    <Col lg={8} align="center">
                        <CImage className="art-images" rounded src={img2} />
                    </Col>                   
                </Row>

            </Container>
            
        </div>
    )
}

export default Art;