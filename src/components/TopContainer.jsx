import React from "react";
import Button from "react-bootstrap/Button";

function TopContainer() {
    function handleClick() {
        const element = document.getElementById("about");
        element.scrollIntoView({behavior: 'smooth'});
      }
    return (
        <div className="top-container" id="home-top">
            <header className="greeting">hello!</header>
            <Button className="scroll-btn" onClick={handleClick} variant="light">CLICK HERE TO GET TO KNOW ME</Button>
        </div>
    )
}

export default TopContainer;