import React, { Fragment } from "react";

import ShowPanel from "./Homepage/ShowPanel"
import Nav from "./Homepage/Nav"
import LogosPanel2 from "./Homepage/LogosPanel2"
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import Milestones from "./Homepage/Milestones"
import Involve from "./Homepage/Involve"

const ms = () => { 
    return(
        <Fragment>
            <Nav />
            <Milestones />
            <Involve />
            <Contact />
            <Footer />
        </Fragment>
    );
}

export default ms;