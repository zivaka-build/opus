/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Quote from "./Homepage/Quote";
import Nav from "./Homepage/Nav";
import Article from "./Homepage/Article";
import Story from "./Homepage/Story";
import LogosPanel from "./Homepage/LogosPanel";
import Contact from "./Homepage/Contact";
import Involve from "./Homepage/Involve";
import Footer from "./Homepage/Footer";
import Gallery from "./Homepage/Gallery";
import Testimonials from "./Homepage/Testimonials";
import OurStory from "./Homepage/OurStory";

const Metr = () => {
    return (
        <Fragment>
            {/* NavBar */}
            <Nav />

            {/* ABOUT SECTION */}
            <OurStory aboutId="2" />

            {/* QUOTE SECTION */}
            <Quote />

            {/* BOXES */}
            <LogosPanel />

            {/* ARTICLES */}
            <Article />

            {/* STORY */}
            <Story />

            {/* DONATE NOW & VOLUNTEER SECTION */}
            <Involve />

            {/* GALLERY */}
            <Gallery />

            {/* TESTIMONIALS SECTION */}
            <Testimonials />

            {/* CONTACT US SECTION */}
            <Contact />

            {/* FOOTER */}
            <Footer />
        </Fragment>
    );
};

export default Metr;
