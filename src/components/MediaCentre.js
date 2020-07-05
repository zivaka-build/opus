/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Quote from "./Homepage/Quote";
import Nav from "./Homepage/Nav";
import Article from "./Homepage/Article";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import Gallery from "./Homepage/Gallery";
import Team from "./Homepage/Team";
import Milestone from "./Homepage/Milestone";
import CurrentProjects from "./Homepage/CurrentProjects";
import Showcase from "./Homepage/Showcase";

const MediaCentre = () => {
    return (
        <Fragment>
            {/* NavBar */}
            <Nav />

            {/* SHOWCASE */}
            <Showcase />

            {/* QUOTE SECTION */}
            <Quote />

            {/* ARTICLES */}
            <Article />

            {/* MILESTONE */}
            <Milestone />

            {/* TEAM */}
            <Team />

            {/* CurrentProjects */}
            <CurrentProjects />

            {/* GALLERY */}
            <Gallery />

            {/* CONTACT US SECTION */}
            <Contact />

            {/* FOOTER */}
            <Footer />
        </Fragment>
    );
};

export default MediaCentre;
