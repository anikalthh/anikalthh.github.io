import React from "react";
import Internships from "./Internships.jsx";
import SkillsBar from "./SkillsBar.jsx";
import { Container, Row, Col } from 'react-bootstrap';

function Experience() {
    return (
        <Container className="exp-page">
            <Row>
                <Col xl={4} lg={3} md={4} sm={6}>
                    <SkillsBar />
                </Col>

                <Col xl={8} lg={9} md={8} sm={6}>
                    <Internships />
                </Col>
            </Row>
        </Container>
    )
}

export default Experience;