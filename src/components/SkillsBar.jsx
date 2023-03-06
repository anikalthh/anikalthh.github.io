import React from "react";
import StickyBox from "react-sticky-box";

function SkillsBar () {
    return (
        <StickyBox offsetTop={75} >
            <div>
                <div className="container-skills">
                    <h1 className="title-text">SKILLS</h1>

                    <div className="skill-box">
                        <span className="title">Python</span>
                        <div className="skill-bar">
                            <span className="skill-per python">
                                <span className="tooltip">90%</span>
                            </span>
                        </div>
                    </div>

                    <div className="skill-box">
                        <span className="title">HTML & CSS</span>
                        <div className="skill-bar">
                            <span className="skill-per html-css">
                                <span className="tooltip">95%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">SQL</span>
                        <div className="skill-bar">
                            <span className="skill-per SQL">
                                <span className="tooltip">85%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">JavaScript</span>
                        <div className="skill-bar">
                            <span className="skill-per javascript">
                                <span className="tooltip">80%</span>
                            </span>
                        </div>
                    </div>
                    
                    <div className="skill-box">
                        <span className="title">ReactJS</span>
                        <div className="skill-bar">
                            <span className="skill-per reactjs">
                                <span className="tooltip">80%</span>
                            </span>
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <div className="education-section">
                    <h1 className="title-text">EDUCATION</h1>
                    <span className="title">National University of Singapore (NUS)</span>
                    <p className="title"><b>2019 - 2023</b></p>
                    <span className="title">Meridian Junior College</span>
                    <p className="title"><b>2017 - 2018</b></p>
                    <span className="title">Ngee Ann Secondary School</span>
                    <p className="title"><b>2013 - 2016</b></p>
                </div>
            </div>
        </StickyBox>
    )
 }

 export default SkillsBar;