import React, { Fragment } from "react";

import ShowPanel from "./Homepage/ShowPanel"
import Nav from "./Homepage/Nav"
import LogosPanel2 from "./Homepage/LogosPanel2"
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import LogosPanel from "./Homepage/LogosPanel";

const ms = () => { 
    return(
        <Fragment>
            <Nav />
            <LogosPanel2 />
            <Contact />
            <Footer />
        </Fragment>
    );
}

export default ms;