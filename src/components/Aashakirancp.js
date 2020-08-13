import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import LogosPanel1 from "./Homepage/LogosPanel1";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import CurrentProjects from "./Homepage/CurrentProjects";
import BlogList from "./Homepage/BlogList";

const Aashakirancp = () => { 
    return(
        <Fragment>
            <Nav />
            <LogosPanel1 />
            <CurrentProjects id="8" title="Current Initiative" />
            <BlogList />
            <Contact />
            <Footer />
        </Fragment>
    );
}

export default Aashakirancp;