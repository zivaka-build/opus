import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import LogosPanel from "./Homepage/LogosPanel"
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";



const Initiative = () => {
    return(
        <Fragment>
            <Nav />
            <LogosPanel />
            <Contact />
            <Footer />
        </Fragment>
    );
}

export default Initiative;