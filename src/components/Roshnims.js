import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import LogosPanel2 from "./Homepage/LogosPanel2";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import ShowPanel from "./Homepage/ShowPanel";

const Roshnims = () => { 
    return(
        <Fragment>
            <Nav />
            <LogosPanel2 />
            <ShowPanel id="1" title="Milestones" />
            <Contact />
            <Footer />
        </Fragment>
    );
}

export default Roshnims;