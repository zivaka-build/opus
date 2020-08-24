import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import OurStory from "./Homepage/OurStory";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import Involve from "./Homepage/Involve";

const VisionMission = () => {
    return (
        <Fragment>
            <Nav />
            <OurStory aboutId="6"/>
            <Involve />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default VisionMission;