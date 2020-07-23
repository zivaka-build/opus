/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Quote from "./Homepage/Quote";
import Nav from "./Homepage/Nav";
import Article from "./Homepage/Article";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import OurStory from "./Homepage/OurStory";
import ShowPanel from "./Homepage/ShowPanel";
import Navigation from "./Homepage/Navigation";

const Roshni = () => {
    return (
        <Fragment>
            {/* NavBar */}
            <Nav />

            <Navigation />

            {/* ABOUT SECTION */}
            <OurStory aboutId="1" />

            {/* MILESTONE */}
            <ShowPanel id="1" title="Milestones" />

            {/* QUOTE SECTION */}
            <Quote quoteId="3" />

            {/* ARTICLES */}
            <Article articleId="2" />

            {/* TEAM */}
            {/* <Team /> */}

            {/* CurrentProjects */}
            {/* <CurrentProjects /> */}

            {/* STORY */}
            {/* <Story /> */}

            <ShowPanel id="9" title="Current Initiative" />

            {/* CONTACT US SECTION */}
            <Contact />

            {/* FOOTER */}
            <Footer />
        </Fragment>
    );
};

export default Roshni;
