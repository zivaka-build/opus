import React, { Fragment } from "react";

import Donate from "./Homepage/Donate"
import CurrentProjects from "./Homepage/CurrentProjects"
import Nav from "./Homepage/Nav"
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";


const cp = () => {
    return(
        <Fragment>
            <Nav />
            <CurrentProjects />
            <Contact />
            <Footer />
            
        </Fragment>
    );
}

export default cp;