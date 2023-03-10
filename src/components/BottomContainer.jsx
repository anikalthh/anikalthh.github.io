import React from "react";
import About from "./About.jsx";
import sparkle from "../images/sparkle.png";
import resumeCloud from "../images/resume-cloud.png";
import resumeWords from "../images/resume-words.png";
import aboutCloud2 from "../images/about-cloud-2.png";
import gradients from "../images/gradients.png";
import { CImage } from '@coreui/react'
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


function BottomContainer() {
    function handleClick() {
        window.scrollTo({top:0, behaviour:"smooth"})
      }

    return (
        <div className="bottom-container" id="about">
            <CImage className="gradients" src={gradients} />
            <CImage className="sparkle-1" src={sparkle} />
            <CImage className="sparkle-2" src={sparkle} />
            <CImage className="sparkle-3" src={sparkle} />
            <CImage className="sparkle-4" src={sparkle} />
            <CImage className="sparkle-5" src={sparkle} />

            <CImage className="resume-cloud" src={resumeCloud} />
            <a href="https://drive.google.com/file/d/1dOj0XoRDBK237nbkRMFs8s7fnjp9JmX9/view?usp=sharing" target="blank">
                <CImage className="resume-words" src={resumeWords} />
            </a>

            <CImage className="about-cloud-2" src={aboutCloud2} />

            <CImage className="sparkle-6" src={sparkle} />
            <CImage className="sparkle-7" src={sparkle} />

            <About />
            <Button className="scroll-up-btn" onClick={handleClick} variant="light">scroll up <FontAwesomeIcon icon={solid('arrow-up')}/></Button>
            
            

        </div>
    )
}

export default BottomContainer;