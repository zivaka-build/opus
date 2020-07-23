/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import Navigation from "./Homepage/Navigation";
import Footer from "./Homepage/Footer";

import Quote from "./Homepage/Quote";
import Article from "./Homepage/Article";
import Contact from "./Homepage/Contact";
import OurStory from "./Homepage/OurStory";
import ShowPanel from "./Homepage/ShowPanel";
import CurrentProjects from "./Homepage/CurrentProjects";

const Metr = () => {
  return (
    <Fragment>
      {/* NavBar */}
      <Nav />

      <Navigation />

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

      <CurrentProjects id="10" title="Current Initiative" />

      {/* CONTACT US SECTION */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </Fragment>
  );
};

export default Metr;
