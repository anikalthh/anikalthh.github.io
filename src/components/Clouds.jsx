import React from "react";
import cloud from "../images/real_cloud.png";

function Clouds() {
    return (
        <div>
            <img className="top-cloud" src={cloud} alt="Cloud-img"></img>
            <img className="bottom-cloud" src={cloud} alt="cloud-img"></img>
        </div>
    )
}

export default Clouds;