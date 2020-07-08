/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Quote from "./Homepage/Quote";
import Nav from "./Homepage/Nav";
import Article from "./Homepage/Article";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import OurStory from "./Homepage/OurStory";
import Gallery from "./Homepage/Gallery";
import Team from "./Homepage/Team";
import CurrentProjects from "./Homepage/CurrentProjects";
import ShowPanel from "./Homepage/ShowPanel";

const Ashakiran = () => {
    return (
        <Fragment>
            {/* NavBar */}
            <Nav />

            {/* ABOUT SECTION */}
            <OurStory aboutId="3" />

            {/* MILESTONE */}
            <ShowPanel id="2" title="Milestones" />

            {/* QUOTE SECTION */}
            <Quote quoteId="5" />

            {/* ARTICLES */}
            <Article articleId="4" />

            {/* TEAM */}
            {/* <Team /> */}

            {/* CurrentProjects */}
            {/* <CurrentProjects /> */}

            {/* STORY */}
            {/* <Story /> */}

            {/* CONTACT US SECTION */}
            <Contact />

            {/* FOOTER */}
            <Footer />
        </Fragment>
    );
};

export default Ashakiran;
