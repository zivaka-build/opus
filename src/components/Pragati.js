/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Quote from "./Homepage/Quote";
import Nav from "./Homepage/Nav";
import Article from "./Homepage/Article";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import OurStory from "./Homepage/OurStory";
import ShowPanel from "./Homepage/ShowPanel";

const Pragati = () => {
    return (
        <Fragment>
            {/* NavBar */}
            <Nav />

            {/* ABOUT SECTION */}
            <OurStory aboutId="2" />

            {/* MILESTONE */}
            <ShowPanel id="3" title="Milestones" />

            {/* QUOTE SECTION */}
            <Quote quoteId="4" />

            {/* ARTICLES */}
            <Article articleId="3" />

            {/* STORY */}
            {/* <Story /> */}

            {/* TESTIMONIALS SECTION */}
            {/* <Testimonial /> */}

            {/* CONTACT US SECTION */}
            <Contact />

            {/* FOOTER */}
            <Footer />
        </Fragment>
    );
};

export default Pragati;
