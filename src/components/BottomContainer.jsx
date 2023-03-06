import React from "react";
import About from "./About.jsx";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


function BottomContainer() {
    function handleClick() {
        window.scrollTo({top:0, behaviour:"smooth"})
      }

    return (
        <div className="bottom-container" id="about">
            <About />
            <Button className="scroll-up-btn" onClick={handleClick} variant="light">scroll up <FontAwesomeIcon icon={solid('arrow-up')}/></Button>
            
        </div>
    )
}

export default BottomContainer;