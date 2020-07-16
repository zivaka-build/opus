/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import LogosPanel from "./Homepage/LogosPanel";
import Nav from "./Homepage/Nav";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import OurStory from "./Homepage/OurStory";
import Involve from "./Homepage/Involve";
import Testimonial from "./Homepage/Testimonial";
import ShowPanel from "./Homepage/ShowPanel";

const AboutUs = () => {
    return (
        <Fragment>
            {/* NavBar */}
            <Nav />

            {/* ABOUT SECTION */}
            <OurStory aboutId="4" />

            {/* BOXES */}
            <LogosPanel />

            {/* Testimonial SECTION */}
            <Testimonial />

            {/* DONATE NOW & VOLUNTEER SECTION */}
            <Involve />

            {/* MILESTONE */}
            <ShowPanel id="5" />

            {/* CurrentProjects */}
            {/* <CurrentProjects /> */}

            {/* GALLERY */}
            {/* <Gallery /> */}

            {/* CONTACT US SECTION */}
            <Contact />

            {/* FOOTER */}
            <Footer />
        </Fragment>
    );
};

export default AboutUs;
