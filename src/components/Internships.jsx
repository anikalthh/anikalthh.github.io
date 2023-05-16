import React from 'react';
import { Container } from 'react-bootstrap';
import Intern from './Intern.jsx'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import internshipsInfo from '../internInfo.js';

function Internships() {
    return (
        <div className="internships">
            <Container>
                <Row>
                    <h2 className="exp-headings">✧  INTERNSHIPS & CLUBS  ✧</h2> 
                </Row>

                <Row>
                    <Col>
                        <Intern 
                            internRole={internshipsInfo[5].internRole}
                            name={internshipsInfo[5].company}
                            date={internshipsInfo[5].date}
                            description={internshipsInfo[5].description}
                            url={internshipsInfo[5].url}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Intern 
                            internRole={internshipsInfo[0].internRole}
                            name={internshipsInfo[0].company}
                            date={internshipsInfo[0].date}
                            description={internshipsInfo[0].description}
                            url={internshipsInfo[0].url}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Intern 
                            internRole={internshipsInfo[1].internRole}
                            name={internshipsInfo[1].company}
                            date={internshipsInfo[1].date}
                            description={internshipsInfo[1].description}
                            url={internshipsInfo[1].url}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Intern
                            internRole={internshipsInfo[2].internRole}
                            name={internshipsInfo[2].company}
                            date={internshipsInfo[2].date}
                            description={internshipsInfo[2].description}
                            url={internshipsInfo[2].url}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Intern
                            internRole={internshipsInfo[3].internRole}
                            name={internshipsInfo[3].company}
                            date={internshipsInfo[3].date}
                            description={internshipsInfo[3].description}
                            url={internshipsInfo[3].url}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Intern
                            internRole={internshipsInfo[4].internRole}
                            name={internshipsInfo[4].company}
                            date={internshipsInfo[4].date}
                            description={internshipsInfo[4].description}
                            url={internshipsInfo[4].url}
                        />
                    </Col>
                </Row>
            </Container>  
        </div>
    )
}

export default Internships;