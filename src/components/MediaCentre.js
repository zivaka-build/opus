/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

import Quote from "./Homepage/Quote";
import Nav from "./Homepage/Nav";
import Contact from "./Homepage/Contact";
import Footer from "./Homepage/Footer";
import BlogList from "./Homepage/BlogList";
import Showcase from "./Homepage/Showcase";
import Milestone from "./Homepage/Milestone";
import Article from "./Homepage/Article";

import RecentPost from "./Homepage/RecentPost"
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
      <Article articleId="5" />

      {/* MILESTONE 
      <ShowPanel id="11" title="Milestones" />*/}

      {/* BLOGlIST SECTION */}
      <BlogList />
      <RecentPost />

      {/* TEAM */}
      {/* <Team /> */}

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

export default MediaCentre;
