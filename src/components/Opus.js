/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Quote from "./Homepage/Quote";
import Nav from "./Homepage/Nav";
import Article from "./Homepage/ref";
import LogosPanel from "./Homepage/LogosPanel";
import Contact from "./Homepage/Contact";
import Involve from "./Homepage/Involve";
import Footer from "./Homepage/Footer";
import Gallery from "./Homepage/Gallery";
import Testimonial from "./Homepage/Testimonial";
import Showcase from "./Homepage/Showcase";
import ShowPanel from "./Homepage/ShowPanel";

const Opus = () => {
    return (
        <Fragment>
            {/* NavBar */}
            <Nav />

            {/* SHOWCASE */}
            <Showcase />

            {/* QUOTE SECTION */}
            <Quote />

            {/* BOXES */}
            <LogosPanel />

            {/* ARTICLES */}
            <Article />

            {/* STORY */}
            <ShowPanel title="" id="4" />

            {/* DONATE NOW & VOLUNTEER SECTION */}
            <Involve />

            {/* GALLERY */}
            <Gallery />

            {/* TESTIMONIALS SECTION */}
            <Testimonial />

            {/* CONTACT US SECTION */}
            <Contact />

            {/* FOOTER */}
            <Footer />
        </Fragment>
    );
};

export default Opus;
