import React, { Fragment } from "react";
import Nav from "./Homepage/Nav";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import TeamCard from "./Homepage/TeamCard"
import Involve from "./Homepage/Involve"

const ThinkTank = () => { 
    return(
        <Fragment>
            <Nav />
            <TeamCard />
            <Involve />
            <Contact />
            
            <Footer />
        </Fragment>
    );
}

export default ThinkTank;