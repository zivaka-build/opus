import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import LogosPanel1 from "./Homepage/LogosPanel1";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import CurrentProjects from "./Homepage/CurrentProjects";
import BlogList from "./Homepage/BlogList";
import TeamCard from "./Homepage/TeamCard"

const Metrcp = () => { 
    return(
        <Fragment>
            <Nav />
            <LogosPanel1 />
            <CurrentProjects id="10" title="Current Initiative" />
            <BlogList />
            <TeamCard />
            <Contact />
            <Footer />
        </Fragment>
    );
}

export default Metrcp;