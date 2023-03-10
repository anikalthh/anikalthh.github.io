import React from 'react';
import Clouds from './Clouds.jsx';
import TopContainer from "./TopContainer.jsx";
import BottomContainer from "./BottomContainer.jsx";

function HomePage() {
    return (
        <div className="homepage">
            <Clouds />
            <body>
                <TopContainer />
                <BottomContainer id="about" />
            </body>
        </div>
    )
}

export default HomePage;