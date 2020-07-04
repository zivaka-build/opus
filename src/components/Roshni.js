/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Quote from "./Homepage/Quote";
import Nav from "./Homepage/Nav";
import Article from "./Homepage/Article";
import Story from "./Homepage/Story";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import OurStory from "./Homepage/OurStory";
import Gallery from "./Homepage/Gallery";
import Team from "./Homepage/Team";
import Milestone from "./Homepage/Milestone";

const Roshni = () => {
    return (
        <Fragment>
            {/* NavBar */}
            <Nav />

            {/* ABOUT SECTION */}
            <OurStory />

            {/* MILESTONE */}
            <Milestone />

            {/* QUOTE SECTION */}
            <Quote />

            {/* ARTICLES */}
            <Article />

            {/* TEAM */}
            <Team />

            {/* STORY */}
            <Story />

            {/* GALLERY */}
            <Gallery />

            {/* CONTACT US SECTION */}
            <Contact />

            {/* FOOTER */}
            <Footer />
        </Fragment>
    );
};

export default Roshni;
