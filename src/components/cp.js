import React, { Fragment } from "react";

import Donate from "./Homepage/Donate"
import CurrentProjects from "./Homepage/CurrentProjects"
import Nav from "./Homepage/Nav"
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import LogosPanel1 from "./Homepage/LogosPanel1"

const cp = () => {
    return(
        <Fragment>
            <Nav />
            <LogosPanel1 />
            <Contact />
            <Footer />
            
        </Fragment>
    );
}

export default cp;